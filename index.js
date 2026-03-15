/* ─────────────────────────────────────────
   MEU PC — index.js
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. FADE-IN com stagger ao carregar a página ──────────────────
    const fadeEls = document.querySelectorAll('.fade-up');

    fadeEls.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 80 + i * 90);
    });


    // ── 2. BUSCA — filtra cards pelo data-title ───────────────────────
    const searchInput = document.getElementById('searchInput');
    const cards       = document.querySelectorAll('#mainGrid .card');
    const noResults   = document.getElementById('no-results');

    searchInput.addEventListener('input', () => {
        const query   = searchInput.value.toLowerCase().trim();
        let   visible = 0;

        cards.forEach(card => {
            const text  = (card.dataset.title || card.innerText).toLowerCase();
            const match = !query || text.includes(query);

            card.style.display = match ? '' : 'none';
            if (match) visible++;
        });

        noResults.style.display = visible === 0 ? 'block' : 'none';
    });

});