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

The contact form can submit to an existing Google Apps Script endpoint via the `VITE_GOOGLE_SHEETS_URL` environment variable. If no endpoint is configured, the form prepares an email draft to ARGHYA instead; the visitor must send it from their email app.

Create a `.env` file in the project root:

```bash
VITE_GOOGLE_SHEETS_URL=your_google_apps_script_url
```

The public contact details are configured in `src/App.jsx`.

## Workbook purchase

The Home We Create workbook page provides an enquiry CTA. This project has no payment processor or digital delivery integration, so it does not claim checkout or instant PDF access. The supplied SharePoint PDF link is access-restricted; no workbook PDF cover is included in the repository.

## Project structure

- `src/App.jsx`: routes, page content, and form logic
- `src/styles.css`: visual system and responsive styling
- `vite.config.js`: Vite + GitHub Pages base configuration
- `.github/workflows/deploy.yml`: automatic deploy pipeline
