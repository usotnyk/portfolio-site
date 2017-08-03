  $(document).ready(function(){

  //Year in footer
    (function insertCurrentYear() {
      var yearSpan = document.getElementById("year");
      yearSpan.innerHTML = (new Date().getFullYear());
    })();

  //Smooth scrolling

    $(".smooth-scroll").on('click', function(event) {

      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1400, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  


  //Slider - Flickity

    $('.main-carousel').flickity({
      // options
      cellAlign: 'center',
      //contain: true,
      freeScroll: true,
      //wrapAround: true,
      imagesLoaded: true
    });

  });