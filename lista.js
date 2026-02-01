
    // Espera a página carregar completamente
    document.addEventListener('DOMContentLoaded', function() {
        const botao = document.getElementById('js-menu-mobile');
        const lista = document.getElementById('js-nav-list');

        if (botao && lista) {
            botao.addEventListener('click', function() {
                // Adiciona ou remove a classe que o seu CSS usa para mostrar o menu
                lista.classList.toggle('is-active');
                
                // Opcional: animação visual do botão
                botao.classList.toggle('is-open');
                
                console.log("Menu alternado!"); // Verifique se isso aparece no F12
            });
        } else {
            console.error("IDs não encontrados. Verifique se o HTML tem id='js-menu-mobile' e id='js-nav-list'");
        }
    });