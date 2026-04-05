# GitHub Pages Site

This folder is a GitHub Pages-ready static replacement for the current Google Site.

## Pages

- `index.html`
- `research.html`
- `experiment.html`

## Publish on GitHub Pages

1. Create a GitHub repository for the personal website.
2. Upload the contents of this `personal-site/` folder to the repository root.
3. In GitHub repo settings, enable GitHub Pages from the default branch root.
4. Your public site will be available at the GitHub Pages URL for that repository.

## Experiment Link Workflow

The experiment page is static, so it cannot discover your laptop's local IP automatically.

Before a classroom session:

1. Start the experiment server on your laptop.
2. Open the admin console and copy the session-specific student link.
3. Update `assets/config.js` with that link if you want the public page to point to the current classroom session.

For local-network sessions, students must be on the same network as the laptop server.
