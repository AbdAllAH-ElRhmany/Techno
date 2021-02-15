
// Preloader 
$(".preloader").ready(
    function () {
    $('.preloader-counter').countUp({
        delay: 5,
        time: 2000
    });
    setTimeout(function () {
        $(".preloader").fadeOut();
    }, 3500);
});



$(document).ready(function(){

// to make the small devices navbar work
    $(".sm-dropdown").click(function(){
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
    $(".nav-icon").click(function(){
        $(".nav-icon span").toggleClass("d-none");
        $(".nav-icon .nav-icon-close").toggleClass("d-block");
    });
    
    $(window).scroll(function(){
        let height = $(this).scrollTop();

        // to make the desktop navbar appear at 200px scroll
        
        if (height> 200) {
            $(".header-content").addClass("scroll");
            $(".header-content .logo a img").attr("src","images/tr-logo.png");
            $(".header-content .nav-list li a").removeClass("blue-hover");
            $(".header-content .nav-list li a").removeClass("active");
            $('.scroll_nav').slideDown();
        }else{
            $(".header-content").removeClass("scroll");
            $(".header-content .logo a img").attr("src","images/main-logo.png");
            $(".header-content .nav-list li a").addClass("blue-hover");
            $('.scroll_nav').slideUp();
        }

        // to make back to top icon appear at 400px scroll
        if (height >= 400) {
            $(".toTop").fadeIn();
        } else{
            $(".toTop").fadeOut();
        }
        
    });

    // countUp at section numbers

    $('.numbers-item-number').countUp({
        delay: 10,
        time: 1000
    });


    // Owl carousel at blog section

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    // To Back to the top of the page
    
    $(".toTop").on('click' , function (){
        $("html, body").animate({
            scrollTop:0
        }, 2000);
    });

}); // End of JQuery
