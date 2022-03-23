"use strict"

$(document).ready(function () {
    $('#js-carousel-1').owlCarousel();
    $('#js-carousel-2').owlCarousel();
    $('#js-carousel-3').owlCarousel();

    $('.button_subscribe').click(function (){
    let valId = $(this).attr('id');
    console.log(valId)
    $('#communication option[value='+ valId +']').prop('selected', true);
    });

    $('a[href^="#"]').click(function (){
        let valhref = $(this).attr("href");
        $("html, body").animate({scrollTop: $(valhref).offset().top - 90 + "px"});
    })

    $('.button_subscribe').click(function (){
        $("html, body").animate({scrollTop: $(communication).offset().top - 90 + "px"});
    })



    $('form').submit(function (event){
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function (){
            $(this).find("input").val("")
            alert("Успешно отправлено!");
            $('form').trigger("reset");
        });
        return false;
    });
});

$('#js-carousel-1, #js-carousel-2, #js-carousel-3 ').owlCarousel({
    items: 1,
    dots: true,
});

$('#Phone').mask("+7(999) 999-9999");


$('#button_carousel-1').click(function (){
        $('.carousel-1').css("display", 'block');
        $('.carousel-2, .carousel-3').css("display", 'none');
});

$('#button_carousel-2').click(function (){
    $('.carousel-2').css("display", 'block');
    $('.carousel-1, .carousel-3').css("display", 'none');
});

$('#button_carousel-3').click(function (){
    $('.carousel-3').css("display", 'block');
    $('.carousel-1, .carousel-2').css("display", 'none');
});