$(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".slider")
            .slick({
                autoplay: false,
                arrows: true,
                prevArrow: '<div class="slide-arrow prev-arrow"><i class="fas fa-arrow-left"></i></div>',
                nextArrow: '<div class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></div>',
                dots: true,
                dotsClass: "slider-dots",
                fade: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,

            })
    }

    else if (window.matchMedia('(min-width:768px)').matches) {
        $(".slider")
            .slick({
                autoplay: false,
                arrows: true,
                prevArrow: '<div class="slide-arrow prev-arrow"><i class="fas fa-arrow-left"></i></div>',
                nextArrow: '<div class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></div>',
                dots: true,
                dotsClass: "slider-dots",
                fade: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            })
    }
})

