 // Navigation fluide
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Fermer le menu mobile après clic
                    document.getElementById('navMenu').classList.remove('active');
                }
            });
        });

        // Menu mobile
        function toggleMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }

        // Navbar au scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                nav.style.padding = '15px 0';
            } else {
                nav.style.padding = '20px 0';
            }
            
            lastScroll = currentScroll;
        });