// Navegação entre páginas
function showPage(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar página selecionada
    document.getElementById(pageId).classList.add('active');
    
    // Rolar para o topo
    window.scrollTo(0, 0);
    
    // Fechar menu mobile se estiver aberto
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}

// // Envio do formulário de contato
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const formData = new FormData(this);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
// });
    
// // Preparar dados para envio por email
// const subject = `Contato do site - ${data.assunto}`;
// const body = `
// Nome: ${data.nome}
// Email: ${data.email}
// Telefone: ${data.telefone}
// Assunto: ${data.assunto}
// Mensagem:${data.mensagem}
// `;
            
// // Abrir cliente de email
// const emailUrl = `mailto:ferreira.renato.s@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
// window.location.href = emailUrl;

// // Mostrar mensagem de sucesso
// alert('Formulário preparado! Seu cliente de email será aberto para envio da mensagem.');

// // Limpar formulário
// this.reset();
// });

// // Efeito de scroll suave para navbar
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.style.backgroundColor = 'rgba(18, 29, 51, 0.98)';
//     } else {
//         navbar.style.backgroundColor = 'rgba(18, 29, 51, 0.95)';
//     }
// });

// // Animação de entrada dos cards
// function animateCards() {
//     const cards = document.querySelectorAll('.skill-card, .experience-card, .project-card');
//     cards.forEach((card, index) => {
//         card.style.opacity = '0';
//         card.style.transform = 'translateY(30px)';
//         card.style.transition = 'all 0.6s ease';
        
//         setTimeout(() => {
//             card.style.opacity = '1';
//             card.style.transform = 'translateY(0)';
//         }, index * 100);
//     });
// }

// Executar animação quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    animateCards();
});

// Reexecutar animação quando trocar de página
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    setTimeout(animateCards, 100);
};