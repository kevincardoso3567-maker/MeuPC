/* ─────────────────────────────────────────
   MEU PC — dicas.js
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

    // ── Elementos ────────────────────────────────────────────────────
    const searchInput = document.getElementById('commandSearch');
    const pills       = document.querySelectorAll('.pill');
    const allBoxes    = document.querySelectorAll('.dica-box');
    const noResults   = document.getElementById('no-results');
    const searchTerm  = document.getElementById('search-term');
    const toast       = document.getElementById('copy-toast');
    let toastTimer    = null;
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


    // ── 3. LÓGICA CENTRAL DE FILTROS ─────────────────────────────────
    const applyFilters = () => {
        const query = searchInput.value.toLowerCase().trim();
        let totalVisible = 0;

        allBoxes.forEach(box => {
            const category = box.dataset.category;
            const categoryMatch = activeCategory === 'all' || category === activeCategory;

            if (!categoryMatch) {
                box.style.display = 'none';
                return;
            }

            // Filtra linhas individuais
            const rows = box.querySelectorAll('.cmd-row');
            let visibleRows = 0;

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                const match = !query || text.includes(query);
                row.style.display = match ? '' : 'none';
                if (match) visibleRows++;
            });

            if (visibleRows === 0) {
                box.style.display = 'none';
            } else {
                box.style.display = '';
                totalVisible += visibleRows;
            }
        });

        // Mensagem sem resultados
        if (noResults) {
            if (totalVisible === 0 && query) {
                noResults.style.display = 'block';
                if (searchTerm) searchTerm.textContent = query;
            } else {
                noResults.style.display = 'none';
            }
        }
    };


    // ── 4. COPIAR COMANDO ─────────────────────────────────────────────
    const showToast = () => {
        toast.classList.add('visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('visible'), 1800);
    };

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.closest('.cmd-unit').querySelector('.cmd');
            if (!code) return;

            const text = code.innerText.trim();

            navigator.clipboard.writeText(text)
                .then(() => {
                    const icon = btn.querySelector('i');
                    icon.classList.replace('fa-copy', 'fa-check');
                    btn.classList.add('success');
                    showToast();

                    setTimeout(() => {
                        icon.classList.replace('fa-check', 'fa-copy');
                        btn.classList.remove('success');
                    }, 2000);
                })
                .catch(() => {
                    // Fallback
                    const el = document.createElement('textarea');
                    el.value = text;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    showToast();
                });
        });
    });

});