/* ─────────────────────────────────────────
   MEU PC — extensoes.js
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

    const searchInput  = document.getElementById('extensionSearch');
    const pills        = document.querySelectorAll('.pill');
    const allCards     = document.querySelectorAll('.ext-card');
    const noResults    = document.getElementById('no-results');
    const searchTerm   = document.getElementById('search-term');
    let activeCategory = 'all';


    // ── 1. FILTRO POR CATEGORIA ───────────────────────────────────────
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.dataset.filter;
            applyFilters();
        });
    });


    // ── 2. BUSCA ─────────────────────────────────────────────────────
    searchInput.addEventListener('input', () => applyFilters());


    // ── 3. LÓGICA CENTRAL ────────────────────────────────────────────
    const applyFilters = () => {
        const query = searchInput.value.toLowerCase().trim();
        let visible = 0;

        allCards.forEach(card => {
            const category = card.dataset.category;
            const name     = card.dataset.name || card.textContent;

            const categoryMatch = activeCategory === 'all' || category === activeCategory;
            const searchMatch   = !query || name.toLowerCase().includes(query);

            if (categoryMatch && searchMatch) {
                card.style.display = '';
                visible++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noResults) {
            noResults.style.display = visible === 0 ? 'block' : 'none';
            if (searchTerm && query) searchTerm.textContent = query;
        }
    };

});