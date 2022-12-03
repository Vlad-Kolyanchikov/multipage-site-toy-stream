$(function () {

    $('.company-page__command-section-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="command-slider-arrow-prev"><img src="images/arrow-prev-slider.svg" alt="prev" class="command-slider-arrow-prev-img"></button>',
        nextArrow: '<button type="button" class="command-slider-arrow-next"><img src="images/arrow-next-slider.svg" alt="next" class="command-slider-arrow-next-img"></button>',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

    $('.company-page__about-company').slick({
        arrows: false,
        dots: true,
        fade: true,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 100,
    });

    $('#slick-slide-control10').click(function () {
        $('.company-page-company-section-color-bg').addClass('company-page-active-bg');
        $('.company-page-command-section-color-bg').removeClass('company-page-active-bg');
    })
    $('#slick-slide-control11').click(function () {
        $('.company-page-command-section-color-bg').addClass('company-page-active-bg');
        $('.company-page-company-section-color-bg').removeClass('company-page-active-bg');
    })

    $('.last-project__slider-inner').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        nextArrow: $('.last-project__slider-arrow-next'),
        prevArrow: $('.last-project__slider-arrow-prev'),
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    $('.game-page__content-link').click(function () {
        $('.game-page__content-section, .game-page__color-bg').removeClass('active-section');
        $('.more-game__inner').addClass('active-section');
    })

    $('.career-page__content-link').click(function () {
        $('.career-page__section, .career-page__color-bg').removeClass('active-section');
        $('.bottom-content').addClass('active-section');
    })

    $('.burger').click(function () {
        $('.burger').toggleClass('active-burger');
    })
    $('.burger').click(function () {
        $('.header__menu').toggleClass('active-menu');
    })

});
