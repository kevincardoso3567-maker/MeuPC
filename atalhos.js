document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // 1. Lógica do Acordeão (Aberto/Fechado)
    // =======================================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    const toggleAccordion = (header) => {
        const accordionItem = header.parentElement;
        const content = header.nextElementSibling;
        const isCurrentlyOpen = accordionItem.classList.contains('active');

        // Fecha todos os outros itens antes de abrir o novo (comportamento de acordeão)
        document.querySelectorAll('.accordion-item.active').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = 0;
            }
        });

        if (!isCurrentlyOpen) {
            // Abre o item clicado
            accordionItem.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            // Fecha o item clicado
            accordionItem.classList.remove('active');
            content.style.maxHeight = 0;
        }
    };
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
             // Chamamos a função de toggle para o clique normal
             toggleAccordion(header); 
        });
    });

    // =======================================================
    // 2. Lógica de Pesquisa/Filtro (Corrigida)
    // =======================================================
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        // Se a pesquisa estiver vazia, resetamos tudo (escondemos os itens)
        if (searchTerm === '') {
            accordionItems.forEach(item => {
                // Fechamos todos os acordeões e garantimos que todas as linhas estão visíveis
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = 0;
                item.querySelectorAll('.shortcut-row').forEach(row => {
                    row.style.display = 'flex';
                });
            });
            return; 
        }

        accordionItems.forEach(item => {
            let matchesInThisItem = false;
            const content = item.querySelector('.accordion-content');
            
            // 1. Itera sobre todas as linhas de atalho dentro deste Acordeão
            item.querySelectorAll('.shortcut-row').forEach(row => {
                const rowText = row.textContent.toLowerCase();
                
                if (rowText.includes(searchTerm)) {
                    row.style.display = 'flex'; // Exibe a linha
                    matchesInThisItem = true; // Marcamos que encontramos um resultado neste item
                } else {
                    row.style.display = 'none'; // Oculta a linha
                }
            });

            // 2. Controla o estado do Acordeão com base nos resultados
            if (matchesInThisItem) {
                // Se houver correspondências, abre o Acordeão
                item.classList.add('active');
                
                // Usamos content.scrollHeight para garantir que a altura seja a correta para o conteúdo visível filtrado.
                // Isso pode não ser totalmente preciso em alguns navegadores, mas funciona para abrir.
                content.style.maxHeight = content.scrollHeight + "px";
                
                // Garantimos que a altura seja atualizada após a exibição das linhas
                // Se o seu CSS não tem transição para 'display', isso é suficiente.
                setTimeout(() => {
                    content.style.maxHeight = content.scrollHeight + "px";
                }, 10);

            } else {
                // Se não houver correspondências, garante que o Acordeão esteja fechado
                item.classList.remove('active');
                content.style.maxHeight = 0;
            }
        });
    });
});