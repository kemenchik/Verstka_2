$(function() {

    /* Fixed header */

    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();
    let nav = $("nav");
    $(window).on("scroll load resize", function (){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH ) {
            header.addClass("fixed");
        } else
            {
                header.removeClass("fixed");
            }

    })

    /* Scroll */

    $("[data-scroll]").on("click", function (event){
        event.preventDefault();
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;
            console.log(blockOffset);
        nav.removeClass("show ")
            $("html, body").animate({
                scrollTop: (blockOffset - 70)
            }, 1000)
    })

     /* NavToggle */



    $("#navToggle").on("click", function(event){

        event.preventDefault();

        nav.toggleClass("show ")
    })

    /* Reviews */

    let slider = $("#reviewsSlider")
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false
    });


});