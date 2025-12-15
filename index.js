document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de Fade-In para Cards e Conteúdo
    // Seleciona todos os elementos que queremos animar (cards, itens, etc.)
    const elementsToAnimate = document.querySelectorAll(
        '.card, .content-item, .tip-card, header'
    );

    // Inicializa os elementos para o efeito de fade-in
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        // A transição será tratada pelo CSS, mas garantimos que ela exista
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Função para mostrar os elementos com um pequeno atraso
    function fadeInElements() {
        let delay = 0;
        elementsToAnimate.forEach(el => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay);
            delay += 100; // Atraso de 100ms entre cada elemento
        });
    }

    // Chama a função após um pequeno tempo para garantir que o CSS carregou
    setTimeout(fadeInElements, 50);

    // 2. Comportamento da Barra de Pesquisa (Efeito Premium no Foco)
    const searchInput = document.querySelector('.search-bar input');
    const searchBarContainer = document.querySelector('.search-bar'); // Seleciona o elemento pai que contém o background

    searchInput.addEventListener('focus', () => {
        // Adiciona um estilo visual premium quando o input está focado
        searchBarContainer.style.border = '1px solid var(--color-primary)';
        searchBarContainer.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)'; // Efeito de brilho ciano
        searchBarContainer.style.transition = 'border 0.3s, box-shadow 0.3s';
        
        console.log('Foco na pesquisa. Ativando visual premium.');
    });

    searchInput.addEventListener('blur', () => {
        // Remove os estilos quando o foco é perdido, voltando ao estado normal
        searchBarContainer.style.border = 'none';
        searchBarContainer.style.boxShadow = 'none';
    });
});