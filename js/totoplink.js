/*   // showing and hiding button according to scroll amount (in pixels)
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.to-top').fadeIn(200);
    } else {
      $('.to-top').fadeOut(200);

    }
  });

  // activate smooth scroll to top when clicking on the button

  $('a.back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  }); */
  
  $(document).ready(function(){


    // hide #back-top first
    $("#back-top").hide();


    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
      
            }
        });


        // scroll body to 0px on click
        $('a#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
	
});