

$(document).ready(function(){
  $(window).on('load', function(){
    $('.preloader').addClass('complete')

  });
  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if (scroll>=50){
      $(".sticky").addClass("stickyadd");

    }else{
      $(".sticky").removeClass("stickyadd");

    }
  })
  
  
  var typed = new Typed(".element", {
    strings: ["John Miiri", "a  software developer", "a data analyst", "a statistician", "a designer"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    startDelay:1000
    
  });

  //progress bars
  var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function(direction) {
      var p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style", "width:95%;transition:la all");
      p[1].setAttribute("style", "width:85%;transition:1.5s all");
      p[2].setAttribute("style", "width:60%;transition:1.7s all");
      p[3].setAttribute("style", "width:90%;transition:2s all");
      p[4].setAttribute("style", "width:80%;transition:2.3s all");
      p[5].setAttribute("style", "width:70%;transition:2.5s all");

      
    },
    offset:'90%'
  });

  var filterizd = $('.filter-container').filterizr({
    AnimationDuration: .5,
  })


  //owl carouser
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplay: true,
    items: 1

  })

  
  
  
})