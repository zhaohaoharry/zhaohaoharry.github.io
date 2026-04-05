(function renderExperiments() {
    const container = document.getElementById('experiment-list');
    if (!container) {
        return;
    }

    const config = window.HAO_ZHAO_SITE_CONFIG || {};
    const experiments = Array.isArray(config.experiments) ? config.experiments : [];

    if (!experiments.length) {
        container.innerHTML = '<p class="empty-note">No experiment is currently posted.</p>';
        return;
    }

    container.innerHTML = experiments.map((experiment) => `
        <div class="experiment-item">
            <div class="experiment-id">${escapeHtml(experiment.id || '')}</div>
            <div class="experiment-title">${escapeHtml(experiment.title || '')}</div>
            ${renderExperimentLink(experiment)}
        </div>
    `).join('');
})();

function renderExperimentLink(experiment) {
    const url = typeof experiment.url === 'string' ? experiment.url.trim() : '';
    if (!url) {
        return '<span class="experiment-link disabled">Not posted</span>';
    }

    return `<a class="experiment-link" href="${escapeAttribute(url)}" target="_blank" rel="noreferrer">Open</a>`;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
    return escapeHtml(value);
}
