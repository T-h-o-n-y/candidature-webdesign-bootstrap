import 'bootstrap-icons/font/bootstrap-icons.css';
import '../scss/main.scss';
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {

  // Initialisation de Swiper
  var swiper = new Swiper(".myAwardSwiper", {
    slidesPerView: 1,      // Mobile : 1 carte visible
    spaceBetween: 20,      // Espace entre les cartes
    grabCursor: true,      // Curseur en forme de main
    
    // Configuration de la pagination (les points)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    // Points de rupture (Breakpoints) pour le responsive
    breakpoints: {
      // Quand l'écran est >= 768px (Tablette)
      768: {             
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // Quand l'écran est >= 992px (Desktop / LG)
      992: {             
        slidesPerView: 4, // On affiche 5 cartes comme sur ta grille d'origine
        spaceBetween: 30,
      },
    },
  });

});


