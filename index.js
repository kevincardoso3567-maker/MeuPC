document.addEventListener('DOMContentLoaded', () => {
    
    const rootStyles = getComputedStyle(document.documentElement);
    const colorPrimary = rootStyles.getPropertyValue('--color-primary').trim();
    
    // 1. Efeito de Fade-In Inicial
    const cards = document.querySelectorAll('.card, .section-title, .tip-card');

    cards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // 2. Comportamento da Barra de Pesquisa (Foco + Filtro Real)
    const searchInput = document.getElementById('searchInput');
    const searchBarContainer = document.querySelector('.search-bar');
    const allCards = document.querySelectorAll('.card');

    // Efeito Visual de Foco
    searchInput.addEventListener('focus', () => {
        searchBarContainer.style.border = `1px solid ${colorPrimary}`;
        searchBarContainer.style.boxShadow = `0 0 15px ${colorPrimary}50`;
    });

    searchInput.addEventListener('blur', () => {
        searchBarContainer.style.border = '1px solid transparent'; 
        searchBarContainer.style.boxShadow = 'none';
    });

    // Lógica de Busca (Filtra os cards por título)
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        allCards.forEach(card => {
            const title = card.querySelector('h2').innerText.toLowerCase();
            if (title.includes(term)) {
                card.style.display = 'flex';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    });
});
