// Scroll suave
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Modal para detalhes dos projetos
function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('project-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => video.pause());
});

// Fechar modal clicando fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
// Função para detectar os cards 
function revealProjects() {
    const cards = document.querySelectorAll('.project-card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {  // 100px antes de aparecer
            card.classList.add('show');
        }
    });
}

// Chamar a função no scroll e ao carregar a página
window.addEventListener('scroll', revealProjects);
window.addEventListener('load', revealProjects);


const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Obrigada por entrar em contato.');
    form.reset();
});


