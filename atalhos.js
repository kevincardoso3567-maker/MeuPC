/* ─────────────────────────────────────────
   MEU PC — atalhos.js
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

    // ── Elementos ────────────────────────────────────────────────────
    const headers    = document.querySelectorAll('.accordion-header');
    const searchInput = document.getElementById('searchInput');
    const pills       = document.querySelectorAll('.pill');
    const noResults   = document.getElementById('no-results');
    const searchTerm  = document.getElementById('search-term');
    const toast       = document.getElementById('copy-toast');
    const allItems    = document.querySelectorAll('.accordion-item');

    let toastTimer = null;


    // ── 1. ACORDEÃO ──────────────────────────────────────────────────
    const openItem = (item) => {
        const content = item.querySelector('.accordion-content');
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    };

    const closeItem = (item) => {
        const content = item.querySelector('.accordion-content');
        item.classList.remove('active');
        content.style.maxHeight = '0';
    };

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.accordion-item');
            const isOpen = item.classList.contains('active');

            // Fecha todos
            allItems.forEach(i => closeItem(i));

            // Abre o clicado (se não estava aberto)
            if (!isOpen) openItem(item);
        });
    });


    // ── 2. FILTRO POR CATEGORIA (pills) ──────────────────────────────
    let activeCategory = 'all';

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.dataset.filter;

            applyFilters();
        });
    });

    // Ativa "Todos" por padrão
    document.querySelector('.pill[data-filter="all"]').classList.add('active');


    // ── 3. BUSCA ─────────────────────────────────────────────────────
    searchInput.addEventListener('input', () => {
        applyFilters();
    });


    // ── 4. LÓGICA CENTRAL DE FILTROS ─────────────────────────────────
    const applyFilters = () => {
        const query = searchInput.value.toLowerCase().trim();
        let totalVisible = 0;

        allItems.forEach(item => {
            const category = item.dataset.category;
            const categoryMatch = activeCategory === 'all' || category === activeCategory;

            if (!categoryMatch) {
                item.style.display = 'none';
                closeItem(item);
                return;
            }

            item.style.display = '';

            const rows = item.querySelectorAll('.shortcut-row');
            let rowsVisible = 0;

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                const match = !query || text.includes(query);
                row.style.display = match ? '' : 'none';
                if (match) rowsVisible++;
            });

            if (rowsVisible === 0) {
                item.style.display = 'none';
                closeItem(item);
            } else {
                totalVisible += rowsVisible;

                if (query) {
                    // Auto-abre quando filtrando por texto
                    openItem(item);
                    // Recalcula altura após mostrar/esconder rows
                    setTimeout(() => {
                        const content = item.querySelector('.accordion-content');
                        if (item.classList.contains('active')) {
                            content.style.maxHeight = content.scrollHeight + 'px';
                        }
                    }, 10);
                } else {
                    // Sem busca de texto: reseta rows mas não força abertura
                    closeItem(item);
                }
            }
        });

        // Mensagem de "sem resultados"
        if (noResults) {
            if (totalVisible === 0 && query) {
                noResults.style.display = 'block';
                if (searchTerm) searchTerm.textContent = query;
            } else {
                noResults.style.display = 'none';
            }
        }
    };


    // ── 5. COPIAR ATALHO AO CLICAR NA LINHA ──────────────────────────
    const showToast = () => {
        toast.classList.add('visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('visible'), 1800);
    };

    document.querySelectorAll('.shortcut-row').forEach(row => {
        row.addEventListener('click', () => {
            // Copia apenas a combinação de teclas (texto dos kbd)
            const keys = Array.from(row.querySelectorAll('kbd'))
                .map(k => k.textContent.trim())
                .join(' + ');

            if (!keys) return;

            navigator.clipboard.writeText(keys)
                .then(() => showToast())
                .catch(() => {
                    // Fallback para navegadores sem clipboard API
                    const el = document.createElement('textarea');
                    el.value = keys;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    showToast();
                });
        });
    });

});