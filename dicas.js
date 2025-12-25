document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO ACORDEÃO ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    const closeAllExcept = (currentItem) => {
        document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
            if (activeItem !== currentItem) {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-content').style.maxHeight = '0';
            }
        });
    };

    const toggleAccordion = (header) => {
        const item = header.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const is_active = item.classList.contains('active');
        const safetyMargin = 45; 

        closeAllExcept(item);

        if (is_active) {
            item.classList.remove('active');
            content.style.maxHeight = '0';
        } else {
            item.classList.add('active');
            content.style.maxHeight = (content.scrollHeight + safetyMargin) + 'px';
        }
    };

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => toggleAccordion(header));
    });

    // Ajuste de altura ao redimensionar a janela
    window.addEventListener('resize', () => {
        const safetyMargin = 45; 
        document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
            const content = activeItem.querySelector('.accordion-content');
            content.style.transition = 'none';
            content.style.maxHeight = (content.scrollHeight + safetyMargin) + 'px';
            setTimeout(() => { content.style.transition = ''; }, 10);
        });
    });

    // --- LÓGICA DA BARRA DE PESQUISA ---
    const searchInput = document.getElementById('commandSearch');
    
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('.dica-box li');
        const safetyMargin = 45;

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const item = row.closest('.accordion-item');
            
            if (text.includes(filter)) {
                row.style.display = 'flex';
                // Se estiver pesquisando algo específico, abre o acordeão automaticamente
                if (filter.length > 0 && item) {
                    item.classList.add('active');
                    const content = item.querySelector('.accordion-content');
                    content.style.maxHeight = (content.scrollHeight + safetyMargin) + 'px';
                }
            } else {
                row.style.display = 'none';
            }
        });

        // Se a busca for limpa, você pode decidir se fecha tudo ou mantém aberto
        if (filter.length === 0) {
            // Opcional: fechar todos ao limpar busca
            // document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = '0');
        }
    });
});

// --- FUNÇÃO COPIAR (Fora do DOMContentLoaded para alcance global) ---
function copyCommand(button) {
    const codeElement = button.parentElement.querySelector('code');
    const textToCopy = codeElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const icon = button.querySelector('i');
        icon.classList.replace('fa-copy', 'fa-check');
        button.classList.add('success');

        setTimeout(() => {
            icon.classList.replace('fa-check', 'fa-copy');
            button.classList.remove('success');
        }, 2000);
    });
}