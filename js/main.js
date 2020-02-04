new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.project-pagination',
        bulletClass: 'project-bullet',
        bulletActiveClass: 'project-bullet-active',
        clickable: true
    },
});

$(function() {
 $("#phone").mask("(999) 999-9999");
});