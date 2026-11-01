const LEADS_SHEET_PROPERTY = 'ARGHYA_LEADS_SPREADSHEET_ID';
const LEADS_TAB_NAME = 'Leads';
const LEADS_HEADERS = [
  'Submitted at (UTC)',
  'Name',
  'Email',
  'Phone',
  'Service',
  'Message',
  'Consent to store and respond',
  'Source',
];

function setupLeadsSheet() {
  const properties = PropertiesService.getScriptProperties();
  let spreadsheetId = properties.getProperty(LEADS_SHEET_PROPERTY);
  let spreadsheet;

  if (spreadsheetId) {
    spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  } else {
    spreadsheet = SpreadsheetApp.create('ARGHYA Website Leads');
    spreadsheetId = spreadsheet.getId();
    properties.setProperty(LEADS_SHEET_PROPERTY, spreadsheetId);
  }

  let sheet = spreadsheet.getSheetByName(LEADS_TAB_NAME);
  if (!sheet) {
    const sheets = spreadsheet.getSheets();
    sheet = sheets.length ? sheets[0] : spreadsheet.insertSheet();
    sheet.setName(LEADS_TAB_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(LEADS_HEADERS);
    sheet.setFrozenRows(1);
  }

  Logger.log('Leads spreadsheet created: ' + spreadsheet.getUrl());
  return spreadsheet.getUrl();
}

function doPost(event) {
  const fields = event && event.parameter ? event.parameter : {};

  if (String(fields.website || '').trim()) {
    return jsonResponse({ ok: true });
  }

  const lead = {
    name: cleanField(fields.name, 120),
    email: cleanField(fields.email, 254).toLowerCase(),
    phone: cleanField(fields.phone, 40),
    service: cleanField(fields.service, 120),
    message: cleanField(fields.message, 3000),
    consent: String(fields.consent || ''),
  };

  if (!lead.name || !lead.email || !lead.phone || !lead.message) {
    return jsonResponse({ ok: false, error: 'Please complete all required fields.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return jsonResponse({ ok: false, error: 'Please provide a valid email address.' });
  }

  if (lead.phone.replace(/\D/g, '').length < 8) {
    return jsonResponse({ ok: false, error: 'Please provide a valid phone number.' });
  }

  if (lead.consent !== 'yes') {
    return jsonResponse({ ok: false, error: 'Consent is required to submit this enquiry.' });
  }

  const spreadsheetId = PropertiesService.getScriptProperties().getProperty(LEADS_SHEET_PROPERTY);
  if (!spreadsheetId) {
    return jsonResponse({ ok: false, error: 'The leads sheet has not been initialized.' });
  }

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return jsonResponse({ ok: false, error: 'Please try again in a moment.' });
  }

  try {
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(LEADS_TAB_NAME);
    if (!sheet) {
      throw new Error('The configured leads tab was not found.');
    }

    sheet.appendRow([
      new Date(),
      safeCell(lead.name),
      safeCell(lead.email),
      safeCell(lead.phone),
      safeCell(lead.service),
      safeCell(lead.message),
      'Yes',
      'ARGHYA website',
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: 'The enquiry could not be saved.' });
  } finally {
    lock.releaseLock();
  }
}

function cleanField(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function safeCell(value) {
  return /^[\s]*[=+\-@]/.test(value) ? "'" + value : value;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
