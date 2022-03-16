"use strict"

$(document).ready(function () {

    let options = {threshold: [0.5]};
    let observerAnim = new IntersectionObserver(OnEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observerAnim.observe(el);
    });

    $(window).scroll(() => {

        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {

            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        })
    });

    $('#js-carousel-2').owlCarousel();
});

$('a[href^="#"]').click(function (){
    let valhref = $(this).attr("href");
    $("html, body").animate({scrollTop: $(valhref).offset().top - 90 + "px"});
})

$('#js-carousel-2').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 1500
});