// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css'

let swiper = new Swiper('.slide-swp', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullests: true,
        clickable: true
    },
    autoplay: {
        delay: 2500,
    },
    loop: true
    });


swiper = new Swiper('.sale-sec', {

        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        loop: true,
        breakpoints:{
            1600: {
                slidesPerView: 5, 
            },
            1200:{
            slidesPerView: 4,
            spaceBetween: 30,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
        });


swiper = new Swiper('.product_swip', {

        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        loop: true,
        breakpoints:{
            1500: {
                slidesPerView: 4, 
            },
            1200:{
            slidesPerView: 3,
            spaceBetween: 30,
            },
            900:{
                slidesPerView: 2
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
        
        });

        
