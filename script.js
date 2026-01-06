// ===============================
// Smooth Scroll pour les liens
// ===============================
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Si c'est un ancre (#)
        if (targetId.startsWith("#")) {
            e.preventDefault(); // bloque le jump instantané
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // prend en compte navbar
                    behavior: "smooth"
                });
            }
        }
    });
});

// ===============================
// Animation au scroll pour les cards
// ===============================
const cards = document.querySelectorAll('.skill-card, .project-card .card');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

cards.forEach(card => {
    observer.observe(card);
});

// ===============================
// Ajouter une classe .animate pour l'effet
// ===============================

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // réduit le seuil à 100px
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
