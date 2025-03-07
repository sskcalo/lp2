$(function () {
    $(".slider").slick({
        autoplay: false,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"><span class="prev-arrow-width"></span></div>',
        nextArrow: '<div class="slide-arrow next-arrow"><span class="next-arrow-width"></span></div>',
        dots: true,
        dotsClass: "slider-dots",
        fade: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});