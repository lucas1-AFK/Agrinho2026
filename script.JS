/* Script para adicionar interatividade ao site do Agrinho 2026 */

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links do menu de navegação
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(evento) {
            // Impede o salto brusco padrão do navegador
            evento.preventDefault(); 
            
            // Pega o ID da seção que o usuário clicou (ex: #desafio)
            const idDaSecao = this.getAttribute('href');
            const secaoDestino = document.querySelector(idDaSecao);
            
            // Faz a tela deslizar suavemente até a seção
            // O '- 60' é para compensar a altura do menu verde fixo no topo
            window.scrollTo({
                top: secaoDestino.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Uma mensagem surpresa escondida no código para os avaliadores que entendem de tecnologia!
    console.log("🌱 Bem-vindo ao projeto Agrinho 2026! Educação e tecnologia para um futuro sustentável.");
});