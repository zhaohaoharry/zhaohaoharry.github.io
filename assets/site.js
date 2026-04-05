(function renderExperimentLinks() {
  const container = document.getElementById('experiment-links');
  if (!container) {
    return;
  }

  const config = window.HAO_ZHAO_SITE_CONFIG || {};
  const links = Array.isArray(config.experimentLinks) ? config.experimentLinks : [];

  if (!links.length) {
    container.innerHTML = '<p class="muted-note">No experiment links are configured yet.</p>';
    return;
  }

  container.innerHTML = links
    .map(
      (link) => `
        <article class="link-card">
          <h3>${link.title}</h3>
          <p>${link.description || ''}</p>
          <a class="button" href="${link.href}">Open Session</a>
        </article>
      `
    )
    .join('');
})();
