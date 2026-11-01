# ARGHYA Website

A holistic healthcare and wellness website for ARGHYA, built in React + Vite with a responsive multi-page layout and GitHub Pages deployment configuration.

## Local development

```bash
npm install
npm run dev
```

Open the local preview URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In GitHub, open the repository settings.
3. Set the Pages source to GitHub Actions.
4. Make sure the default branch is `main`.
5. The deployment workflow in `.github/workflows/deploy.yml` will build and publish the site automatically on push.

## Contact enquiry form

The contact form records consented enquiries in a private Google Sheet through the Apps Script endpoint in `google-apps-script/Code.gs`. The form stores the submitted name, email, phone, selected service, message, consent, and submission time. It does not request sensitive medical information. WhatsApp messages are not copied to the sheet.

### Set up the private leads sheet

1. Sign in to the Google account that should own the leads.
2. Open [script.google.com](https://script.google.com/) and create a new Apps Script project.
3. Replace the starter code with `google-apps-script/Code.gs`.
4. Select `setupLeadsSheet` in the function menu and click **Run**. Approve access. The script creates an `ARGHYA Website Leads` spreadsheet in your Drive with a `Leads` tab and header row. Keep this spreadsheet private.
5. In Apps Script, choose **Deploy → New deployment → Web app**. Set **Execute as** to your account and **Who has access** to **Anyone**, then deploy and authorize.
6. Set the deployed URL in `.env.production` as `VITE_GOOGLE_SHEETS_URL`. The current deployment URL has already been added there; Vite includes it automatically in GitHub Pages production builds.

The endpoint URL is public because the static website must call it; it is not a secret. The script validates required fields and consent, ignores bot submissions through a honeypot, limits field lengths, and prevents spreadsheet formula injection. The browser cannot read Google Apps Script's cross-origin response, so the page cannot verify that a row was saved; test a real submission and confirm it appears in the private sheet after deployment. A simple GET request to the endpoint may say `Script function not found: doGet`; this app is intended to receive POST requests from the form.

If no endpoint is configured, the form opens a prefilled email draft to ARGHYA instead; the visitor must send it from their email app.

## Workbook payment

The Home We Create page directs payment enquiries to WhatsApp. Payment is handled manually with Aarohi; this website does not process UPI payments or automatically deliver the PDF. WhatsApp conversations and payments are not automatically written to the leads spreadsheet.

## Project structure

- `src/App.jsx`: routes, page content, and form logic
- `src/styles.css`: visual system and responsive styling
- `vite.config.js`: Vite + GitHub Pages base configuration
- `.github/workflows/deploy.yml`: automatic deploy pipeline
