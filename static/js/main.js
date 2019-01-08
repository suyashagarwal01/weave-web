$.fn.isInViewport = function(containerSelector, partial) {
  var $element = this;

  if($element.length) {
    var el = $element[0];
    var rect = el.getBoundingClientRect();

    if(containerSelector && $(containerSelector).length) {
      var parentRect = $(containerSelector)[0].getBoundingClientRect();
    } else {
      var parentRect = {top: 0, left: 0, bottom: $(window).height(), right: $(window).width()};
    }

    if(partial) {
      return (
          rect.left >= parentRect.left &&
          rect.right <= parentRect.right &&
          (
              (rect.top >= parentRect.top && rect.top <= parentRect.bottom) ||
              (rect.bottom >= parentRect.top && rect.bottom <= parentRect.bottom)
          )
      );
    } else {
      return (
          rect.top >= parentRect.top &&
          rect.left >= parentRect.left &&
          rect.bottom <= parentRect.bottom &&
          rect.right <= parentRect.right
      );
    }
  }
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  var changehash="#x";
  if($(window).scrollTop() > 500) {
    $('#menu').addClass('scrolling');
    $('.logo').attr('src', '../static/WeaveLogo_sm.png');
    $(".social_media li a").css({"color":"black"});

  }

  $(".navbar a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 500, function() {
        window.location.hash = hash;
      });
    } // End if
  });


  $(".navbar-toggler").on('click',function(event){
    if($('#navbarNav').hasClass('show') && $('#menu').hasClass('scrolling')!=true){
      $('.navbar').css({'background-color':'transparent'});
    }
    else if($('#menu').hasClass('scrolling')!=true){
      $('.navbar').css({'background-color':'rgba(0, 0, 0, 0.5)'});
    }
    else {
      $('.navbar').css({'background-color':'transparent'});
    }

  });

  $(".scrollDown a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 500, function() {
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    // console.log($('.about').isInViewport());

    if($(window).scrollTop() > 500) {

      if($('#menu').hasClass('scrolling')==false){

        $('#menu').addClass('scrolling');
        $(".social_media li a").css({"color":"black"});
        $('.logo').attr('src', '../static/WeaveLogo_sm.png');
      }
    }
    else {
      if($('#menu').hasClass('scrolling')){

        $('#menu').removeClass('scrolling');
        $(".social_media li a").css({"color":"white"});
        $('.logo').attr('src', '../static/logo.png');
      }
    }


    // $('section').each(function () {
    //   var top = window.pageYOffset;
    //   var distance = top - $(this).offset().top;
    //   var hash = $(this).attr('id');
    //   console.log(top);
    //   console.log(distance);
    //   console.log(hash);
    //   console.log("_________________");
    //   if (distance < 10 && distance > -10 && changehash !== hash) {
    //     window.location.hash = (hash);
    //   }
    // });
  });
});

//   $(document).on('scroll',function()
// {
//     $('.scrollx').each(function()
//     {
//       var data = this.hash;
//       console.log(data);
//         if ( $(this).offset().top < window.pageYOffset + 10 &&   $(this).offset().top + $(this).height() > window.pageYOffset + 10)
//         {
//           window.location.hash = data;
//         }
// });

// });
