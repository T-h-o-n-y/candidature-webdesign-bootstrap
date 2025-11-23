import 'bootstrap-icons/font/bootstrap-icons.css';
import '../scss/main.scss';
import * as bootstrap from 'bootstrap'; //Import JS from bootstrap

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

// Ariane Animation

const separatorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            separatorObserver.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.1 
});


document.querySelectorAll('.ariane-separator, .ariane-separator-reverse')
    .forEach(separator => {
        separatorObserver.observe(separator);
    });
