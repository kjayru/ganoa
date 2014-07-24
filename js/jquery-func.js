(function($){
  
  'use strict';
  //=================================== Twitter Follow Plugin  ===================================//
   !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  
  //=================================== Facebook Like Plugin  ===================================//
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=621961831253193";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  //=================================== Sticky nav ===================================//
  $("#menu").sticky({topSpacing:0});

  //=================================== Nav Responsive =====================================//
  $('#menu, #menu_no_fixed').tinyNav({
    active: 'selected'
  });    

  //=================================== Nav Scroll One Page===========================//

  $('nav ul li a').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);  
        scrollToDiv(elWrapped,40);
        return false;    
    });

    function scrollToDiv(element,navheight){
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;
      $('body,html').animate({
            scrollTop: totalScroll
      }, 500);
    }

  //=================================== Totop  ===================================//
  $().UItoTop({
    scrollSpeed:500,
    easingType:'linear'
  });
  
  //=================================== Education Certificates Carousel  ===================================//   
  $(".education_certificates").owlCarousel({
    autoPlay: 2500, 
    items : 3,
    navigation: true,
    navigationText: true, 
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,1],
    itemsMobile : [560,1],
    stopOnHover : true
  });

  //=================================== Testimonials Carousel  ===================================// 
  $(".text_testimonials").owlCarousel({
      autoPlay: 2000, 
      items : 1,
      navigation: true,
      navigationText: true, 
      singleItem: true,
      stopOnHover : true
  });

  //=================================== Blog Carousel  ===================================// 
  $(".blog").owlCarousel({
      autoPlay: 2000, 
      items : 4,
      navigation: true,
      navigationText: true, 
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,1],
      itemsMobile : [560,1],
      stopOnHover : true
  });

  //=================================== Testimonials Blog Aside Carousel  ===================================// 
  $(".text_testimonials_blog").owlCarousel({
      autoPlay: 2000, 
      items : 1,
      navigation: true,
      navigationText: true, 
      singleItem: true,
      stopOnHover : true
  });

  //=================================== Subtmit Form Newslleter ===========================//
  $('#newsletterForm').submit(function(event) {  
    event.preventDefault();  
    var url = $(this).attr('action');  
    var datos = $(this).serialize();  
    $.get(url, datos, function(resultado) {  
      $('#result-newsletter').html(resultado);  
    });  
  });  
  
  //=================================== Google Map  ==============================//  
  /*
    Map Settings
    Find the Latitude and Longitude of your address:  
    - http://universimmedia.pagesperso-orange.fr/geo/loc.htm  
    - http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/
  */
  function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-12.203727, -77.011301),
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
  
  //=================================== Lightbox  ===========================================// 
  $('.fancybox').fancybox({
    'overlayOpacity'  : 0.7,
    'overlayColor'    : '#000000',
    'transitionIn'    : 'elastic',
    'transitionOut'   : 'elastic',
    'easingIn'        : 'easeOutBack',
    'easingOut'       : 'easeInBack',
    'speedIn'       : '700',
    'centerOnScroll'  : true,
    'titlePosition'     : 'over'
  });

  //=================================== Subtmit Form  ====================================//
  $('.form-contact').submit(function(event) {  
    event.preventDefault();  
    var url = $(this).attr('action');  
    var datos = $(this).serialize();  
    $.get(url, datos, function(resultado) {  
      $('.result').html(resultado);  
    });  
  });  
  
  //=============================  Nice scroll bar Body =================================//
  $("html").niceScroll({
    background:"transparent",
    cursorcolor:"#555",
    cursorwidth:8, 
    boxzoom:true, 
    autohidemode:false,
    zindex:99999,
    cursorborder:"0",
  });

  //=================================== Hover Functions ========================================//
  $('.botton,.moving').hover(function() {
    $(this).toggleClass('animated bounce');
  });

  //=================================== Scroll Functions ========================================//
  $(window).scroll(function() {

      $('.highlight_info .divisor').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("animated bounceInLeft").css("opacity", "1");
          }
        });

      $('.highlight_info .divisor.right').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("animated bounceInRight").css("opacity", "1");
          }
        });

      $('.header_section .vertical').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("animated bounceInDown").css("opacity", "1");
          }
        });
    });  

  //=================================== Portfolio Filters  ==============================//

  $(window).load(function(){
      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
   
      $('.portfolioFilter a').click(function(){
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');
   
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
           });
           return false;
      }); 
  });

})(jQuery);

  //=================================== Background Moving ====================================//
   // speed in milliseconds
   var scrollSpeed = 50;
   // set the default position
   var current = 0;
   // set the direction
   var direction = 'h';
   function bgscroll(){
   // 1 pixel row at a time
   current -= 1;
   // move the background with backgrond-position css properties
   $('div.testimonials').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");
    }
    //Calls the scrolling function repeatedly
    setInterval("bgscroll()", scrollSpeed);
