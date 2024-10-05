document.addEventListener('DOMContentLoaded',()=>{
    const menuIcon = document.querySelector('.icon-menu')
    const menuBody = document.querySelector('.header__menu')
    menuIcon.addEventListener("click", function(e) {
        menuIcon.classList.toggle('active')
        menuBody.classList.toggle('active')
        document.querySelector('body').classList.toggle('no-scrolling')
    });

    const areaSwiper = new Swiper('.area__body', {
        slidesPerView: 'auto',
        spaceBetween: 45,
        breakpoints: {
            320:{
                spaceBetween: 10
            },
            576:{
                spaceBetween: 20
            },
            1024: {
                spaceBetween: 30
            },
            1240:{
                spaceBetween: 45
            }
        }
    })
})