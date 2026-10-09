# Aarohi Wellness Website

A premium holistic wellness website for Aarohi, built in React + Vite with a responsive multi-page layout, lead capture form, and GitHub Pages deployment configuration.

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

## Google Sheets lead form setup

The contact form is configured to submit to a Google Apps Script endpoint via the `VITE_GOOGLE_SHEETS_URL` environment variable.

Create a `.env` file in the project root:

```bash
VITE_GOOGLE_SHEETS_URL=your_google_apps_script_url
```

If the variable is not set, the form falls back to a demo endpoint in development. Replace it with your real Apps Script URL before production use.

## Project structure

- `src/App.jsx`: routes, page content, and form logic
- `src/styles.css`: visual system and responsive styling
- `vite.config.js`: Vite + GitHub Pages base configuration
- `.github/workflows/deploy.yml`: automatic deploy pipeline
