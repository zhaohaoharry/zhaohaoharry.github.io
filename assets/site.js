(function initializeSite() {
  const yearTarget = document.getElementById('current-year');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  renderLiveExperimentLink();
})();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderLiveExperimentLink() {
  const container = document.getElementById('live-experiment-link');
  if (!container) {
    return;
  }

  const config = window.HAO_ZHAO_SITE_CONFIG || {};
  const liveUrl = typeof config.liveExperimentUrl === 'string' ? config.liveExperimentUrl.trim() : '';
  const label = typeof config.liveExperimentLabel === 'string' && config.liveExperimentLabel.trim()
    ? config.liveExperimentLabel.trim()
    : 'Open Student Login';
  const note = typeof config.liveExperimentNote === 'string' && config.liveExperimentNote.trim()
    ? config.liveExperimentNote.trim()
    : 'The live classroom login link will appear here when a session is open.';

  if (!liveUrl) {
    container.innerHTML = `
      <div class="live-status">
        <span class="paper-badge">No live session posted</span>
        <p>${escapeHtml(note)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="live-status">
      <span class="paper-badge">Live now</span>
      <p>${escapeHtml(note)}</p>
      <div class="paper-actions">
        <a class="button" href="${escapeHtml(liveUrl)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>
      </div>
    </div>
  `;
}
