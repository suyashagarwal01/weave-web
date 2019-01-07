$(document).ready(function(){
  // Add smooth scrolling to all links
  var changehash="#x";
  if($(window).scrollTop() > 200) {
    $('#menu').addClass('scrolling');
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
    if($(window).scrollTop() > 200) {
      $('#menu').addClass('scrolling');
      $(".social_media li a").css({"color":"black"});
    }
    else {
      $('#menu').removeClass('scrolling');
      $(".social_media li a").css({"color":"white"});
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