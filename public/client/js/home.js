
// start new js
$('.typeBook__col').click(function () {
    $('.typeBook__item').removeClass('active');
    $(this).find('.typeBook__item').addClass('active');
});
$("#btnOneWay").click(function () {
    $('button.searchBox__toggle').removeClass('active');
    $(this).addClass('active');

    $('.t-check-out').addClass('d-none');

    $('.noMulti').removeClass('d-none');
    $('.multi').addClass('d-none');
});
$("#btnRoundTrip").click(function () {
    $('button.searchBox__toggle').removeClass('active');
    $(this).addClass('active');

    $('.t-check-out').removeClass('d-none');

    $('.noMulti').removeClass('d-none');
    $('.multi').addClass('d-none');
});
$("#btnMulti").click(function () {
    $('button.searchBox__toggle').removeClass('active');
    $(this).addClass('active');

    $('.noMulti').addClass('d-none');
    $('.multi').removeClass('d-none');
});


if (screen.width > 768) {
    $('.header__toggle').click(function () {
        $(this).toggleClass('active');
        $('.navbarBox').toggleClass('open');
        $('body').toggleClass('no_scroll_body');
    });
    $('.header__title').click(function () {
        var cont_index = $(this).attr('id');
        $('.navbarBox__list').addClass('hidden');
        $('.navbarBox__list.' + cont_index).removeClass('hidden');
        if ($('navbarBox').hasClass('open') == false) {
            $('.navbarBox').addClass('open');
            $('button.header__toggle').addClass('active');
        }
    });
}
if (screen.width < 768) {
    $('.header__toggle').click(function () {

        $('.navbarBox').addClass('open');
    });
}

if (screen.width < 768) {
    $('.navbarBox__list ul').slideUp(300);
    $(".navbarBox__title").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.navbarBox__list ul').slideUp(300);
        } else {
            $('.navbarBox__title').remove('active');
            $('.navbarBox__list ul').slideUp(300);
            $(this).addClass('active');
            $(this).next('.navbarBox__list ul').slideDown(300);
        }

    });

    $('.footer__list ul li').slideUp(300);
    $(".liTitle").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().find('li').slideUp(300);
        } else {
            $('.liTitle').remove('active');
            $('.footer__list ul li').slideUp(300);
            $(this).addClass('active');
            $(this).parent().find('li').slideDown(300);
        }

    });

};
$(".navbarBox__close, .navbarBox__backdrop").click(function () {
    $('.navbarBox').removeClass('open');
});
$('.searchBooking').click(function () {
    $('.searchBox__main').addClass('open');
    $('.searchFlight__group').removeClass('hidden');
    $('.homeBook__form').removeClass('open');
    $('.searchBox__close span').text('Book trip');
});
$('.searchBox__close').click(function () {
    $('.searchBox__main').removeClass('open');
});
$('.typeBook__col').click(function () {
    $('.homeBook__form').removeClass('open');
    var index = $(this).data('index');
    if (index == 0) {
        $('.searchFlight__group').removeClass('hidden');
    } else {
        $('.searchFlight__group').addClass('hidden');
        $('#formBook-' + index).addClass('open');
    }
});
$('.searchFlight').click(function () {
    $('.homeBook__form').removeClass('open');
    var index = $(this).data('index');
    var type = $(this).find('span').text();
    $('.searchFlight__group').addClass('hidden');
    $('.searchBox__main').addClass('open');
    $('#formBook-' + index).addClass('open');
    $('.searchBox__close span').text(type);

});


$('.t-datepicker').tDatePicker({
    autoClose: true,
    titleCheckIn: 'Depart',
    titleCheckOut: 'Return',
    titleDateRange: 'day',
    titleDateRanges: 'days',
    iconDate: '',
    iconArrowTop: false
});

if (screen.width < 768) {
    $('.homeBanner').css('background-image', "url(client/images/homeBanner-xs.jpg)");
};


$(".inputPlace").click(function () {
    $(this).next('.suggestion').addClass('open');
});
$(document).mouseup(function (e) {
    var suggestion = $('.suggestion');
    if (!suggestion.is(e.target) && suggestion.has(e.target).length === 0) {
        $('.suggestion').removeClass('open');
    }
    ;
});

$(".homeBook__plus button").click(function () {
    var dataTab = $(this).attr('data-tab');
    $('.homeBook__form').removeClass('open');
    $("#" + dataTab).addClass('open');

    $('.homeBook__plus button').removeClass('active');
    $(this).addClass('active');

});
$("#tab1").click(function () {
    $('.route').removeClass('hidden');
    $('.flightNumber').addClass('hidden');

    $(this).addClass('active');
    $('#tab2').removeClass('active');
});
$("#tab2").click(function () {
    $('.route').addClass('hidden');
    $('.flightNumber').removeClass('hidden');

    $(this).addClass('active');
    $('#tab1').removeClass('active');
});

$(".homeHighlight__slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }
    ]
});

if (screen.width < 768) {
    $('.homeReason').css('background-image', 'url(images/homeReason-xs.jpg)');
};

$(".homeIntern__slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});

if (screen.width < 768) {
    $('.appBox').css('background-image', 'url(images/appBox-bg_xs.jpg)');
};