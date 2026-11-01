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
2. Before changing DNS, open **manjha28/aarohiWeb → Settings → Pages**, set the source to **GitHub Actions**, and enter `arghya.life` under **Custom domain**. Save the setting. The `public/CNAME` file is also included in the Pages build.
3. In Hostinger, open the domain's DNS zone. The current public DNS check finds `arghya.life A → 2.57.91.91` (Hostinger) and `www.arghya.life CNAME → arghya.life`; those records explain the GitHub Pages DNS failure. Delete the `@` A record pointing to `2.57.91.91` and any other conflicting apex A records. Set these four GitHub Pages **A** records:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

   The four A records are required. If you also want IPv6, add these **AAAA** records:

   | Type | Name | Value |
   | --- | --- | --- |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |

   Replace the current `www` alias with a **CNAME** record: `www` → `manjha28.github.io`. GitHub Pages will redirect `www.arghya.life` to the primary `arghya.life`. Remove any conflicting `www` A/AAAA records. Keep unrelated MX/TXT records used by email or domain verification.
4. Ensure the default branch is `main`. The workflow in `.github/workflows/deploy.yml` publishes the site on push.
5. Wait for DNS to propagate (it can take up to 24 hours). In **Settings → Pages**, wait for the domain check and certificate provisioning to finish, then enable **Enforce HTTPS**.

The Vite build uses root-relative paths for the custom domain. The custom domain is already entered in the repository Pages settings, but it is not live on GitHub Pages until Hostinger DNS points to GitHub and DNS propagates. After updating records, use **Settings → Pages → Check again**. GitHub CLI access is not available in this workspace, so DNS changes must be made by a domain administrator in Hostinger.

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
