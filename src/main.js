import 'bootstrap-icons/font/bootstrap-icons.css';
import '../scss/main.scss';
import * as bootstrap from 'bootstrap';

// Swiper Awards

document.addEventListener('DOMContentLoaded', () => {

  var swiper = new Swiper(".myAwardSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    

    breakpoints: {

      768: {             
        slidesPerView: 2,
        spaceBetween: 30,
      },

      992: {             
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

});

// Scroll Nav Bar

const SCROLL_THRESHOLD = 100;
const mainNav = document.getElementById('mainNav');

if (mainNav) {
    const updateNavOnScroll = () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            mainNav.classList.add('nav-scroll-shadow');
        } else {
            mainNav.classList.remove('nav-scroll-shadow');
        }
    };
    updateNavOnScroll();
    window.addEventListener('scroll', updateNavOnScroll);
}

