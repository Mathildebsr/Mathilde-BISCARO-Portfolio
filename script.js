document.querySelector('.contact-form').addEventListener('submit', function (event) {
    alert("Merci pour votre message, je vous répondrai dès que possible !");
    this.reset(); // Réinitialise le formulaire
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Extrait l'id sans le '#'
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Calcule la position
        const offsetTop = targetElement.offsetTop;
        const elementHeight = targetElement.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollPosition = offsetTop - (windowHeight / 2) + (elementHeight / 2);

        // Anime le défilement
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});

// Sélectionne les images dans le slider
const images = document.querySelectorAll('.about-slider img');

let index = 0; // Index actuel de l'image affichée

// Fonction pour changer d'image
function changeImage() {
    // Retire la classe 'active' de l'image actuelle
    images[index].classList.remove('active');
    
    // Passe à l'image suivante (avec boucle infinie)
    index = (index + 1) % images.length;

    // Ajoute la classe 'active' à la nouvelle image
    images[index].classList.add('active');
}

// Lance le changement d'image toutes les 3 secondes
setInterval(changeImage, 3000);
