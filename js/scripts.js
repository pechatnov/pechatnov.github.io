$(document).ready(function(){

    //header_scroll
    $(window).scroll(function(){
        if ($(document).scrollTop() > 20) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });

    $('.logo a').on('click', function(e){

        e.preventDefault();

        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 700);
        $('header .menu').removeClass('active');

    });

    //menu
    $('#btn_gamb').on('click', function(){
        $(this).parent().addClass('active');
    });
    $('#btn_close, #close_area').on('click', function(){
        $('header .menu').removeClass('active');
    });

    $('header .menu .block a').on('click', function() {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 700);
        $('header .menu').removeClass('active');
    });

    //slick
    $(".reviews .slider .block").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".certificates .slider .block").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1860,
                settings: {
                    //slidesToShow: 5
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    //slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });


    function slick_320(){
        var sliders = $(".welcome .clouds, .learn .clouds, .vs_smartphone .clouds");
        if(!sliders.hasClass('slick-slider')){
            $(sliders).slick({
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                autoplay: false
            });
        }
    }
    function delite_slick(){
        $(".welcome .slick-slider, .learn .slick-slider, .vs_smartphone .slick-slider").slick('unslick');
    }
    if($(window).width() < 768){
        slick_320();
    }else{
        delite_slick();
    }
    $(window).resize(function(){
        if($(window).width() < 768){
            slick_320();
        }else{
            delite_slick();
        }
    });


    //tab
    $('.vs_smartphone .links a').on('click', function(e){
        e.preventDefault();
        $('.vs_smartphone .links a').removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');
        $('.vs_smartphone .imgs .item').removeClass('active');
        $('#'+href).addClass('active');
        $('.vs_smartphone .clouds .item .txt').removeClass('active');
        $('[val='+href+']').addClass('active');
    });

    //gallery
    $('.gallery a').on('click', function(e){
        e.preventDefault();
        $('.gallery a').removeClass('active');
        var href = $(this).attr('href');
        $('.gallery .big_img img').attr('src', href);
    });

    //fansy
    $('.fancy').fancybox();


    //number
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


});