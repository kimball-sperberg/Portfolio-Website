//Landing section --------------------------------------------------------------

//Slideout menu js (hidden menu is on mobile only)
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1) { //385 for name
                $('#scrollMenu').fadeIn(800);
            } else {
                $('#scrollMenu').fadeOut(500);
            }
        });
    });
})(jQuery);


//Smooth scroll on all links
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//Makes it so when you click/ tap on the reaper, page scrolls to About Me blurb and opens/closes the About Me window
function ReaperClickScroll () {
    setTimeout( function() {myFunction(); }, 1000 );
    setTimeout( function() {toggleSqX(); }, 1000 );
    setTimeout( function() {$('.collapse').collapse('toggle'); }, 800 );
}


//Toggle BG color themes menu on hover
var $showSidemenu = $('#sidemenu');
var $showButton = $('#showButton');

$(document).ready(function(){
	$("#sidemenu").hover(function(){
		$(this).toggleClass("show");
	});
});

$(document).ready(function(){
	$("#showButton").hover(function(){
		$('#sidemenu').toggleClass("show");
	});
});


//Change BG color on click
function chBackcolor(color) {
 document.body.style.background = color;
 document.getElementById('Landing').style.backgroundColor = color;
 document.getElementById('showButton').style.backgroundColor = color;
 document.getElementById('blocker').style.backgroundColor = color;
 document.getElementById('menuIcon').style.backgroundColor = color;
 document.getElementById('mobileMidNavBar').style.backgroundColor = color;
 document.getElementById('innerNavBar').style.backgroundColor = color;
 document.getElementById('mobileThemes').style.backgroundColor = color;
}


//Lock scrolling while mobile menu is open
function lockScroll() {
      if ($('body').hasClass('lock-scroll')) {
          $('body').removeClass('lock-scroll');
      }
      else {
          $('body').addClass('lock-scroll');
      }
}


//Toggle [open] and [minimize] images
function toggleSqX() {
    var img1 = "https://i.imgur.com/nMXAJOr.png", //https://i.imgur.com/Mdyr4HT.png //Images/SquareButton2.png
       img2 = "Images/XButton2.png"; //X button: https://i.imgur.com/G2taMV5.png"; //https://i.imgur.com/QCSctxI.png //Images/XButton2.png
       // button: https://i.imgur.com/rXSjXBc.png
    var imgElement = document.getElementById('SqX');

    imgElement.src = (imgElement.src === img1)? img2 : img1;
}


//remove dialogue box when you tap or click on it
$(function removeBubble(){
  var $img       = $("#dialogueBubble")
    , $container = $("#dialogueContainer");
  $img.on("click", function removeBubble() {
    $img.remove();
    $container.removeClass().removeAttr("id");
  });
});


//Toggle between half and full width column sizes for posters (only on tablets and smaller)
function colToggle() {
    if ($(window).width() < 992) {
        var element = document.getElementById("swap");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap2");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap2");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap3");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap3");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap4");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap4");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap5");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap5");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap6");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap6");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap7");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap7");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap8");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap8");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap9");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap9");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap10");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap10");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap11");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap11");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap12");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap12");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap13");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap13");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap14");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap14");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap15");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap15");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap16");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap16");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap17");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap17");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap18");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap18");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap19");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap19");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap20");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap20");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap21");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap21");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap22");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap22");
        element.classList.toggle("negative-right-col");

        var element = document.getElementById("swap23");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap23");
        element.classList.toggle("negative-left-col");

        var element = document.getElementById("swap24");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap24");
        element.classList.toggle("negative-right-col");



        var element = document.getElementById("swap26");
        element.classList.toggle("col-12");
        var element = document.getElementById("innerSwap26");
        element.classList.toggle("negative-right-col");

}
}

function colToggle2() {
    if ($(window).width() < 992) {

      var element = document.getElementById("swap25");
      element.classList.toggle("col-12");
      var element = document.getElementById("innerSwap25");
      element.classList.toggle("negative-left-col");

      var element = document.getElementById("swap28");
      element.classList.toggle("col-12");
      var element = document.getElementById("innerSwap28");
      element.classList.toggle("negative-right-col");

  }
}
