$(function () {
    $('.slide-active').slick({
        arrows: false,
        dots: true

    });

    $('.slick-dots li:nth-child(1) button').html('<i class="fa fa-home" aria-hidden="true"></i>');

    $('.multiple-items').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });


    $('.text-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-active'
    });
    $('.img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.text-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: 0,
        autoplay: true
    });



    $('.watch-btn').venobox();

//  preloader
    
    $(window).load(function(){
        $('.preloader').delay(3000).fadeOut();
    });
    
//    sticky menu
     $(window).scroll(function(){
        var scrollAmount = $(window).scrollTop();
         if (scrollAmount > 400){
             $('.navbar').addClass('.sticky')
             
         }
         else{
             $('.navbar').removeClass('.sticky')
         }
    });

});
