"use strict"

$(document).ready(function () {
    $('#js-carousel-1').owlCarousel();

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

$('#js-carousel-1').owlCarousel({
    items: 1,
    dots: true,
});

$('#Phone').mask("+7(999) 999-9999");
