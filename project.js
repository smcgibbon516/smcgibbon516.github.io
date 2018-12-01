//DOCUMENT ON READY FUNCTION
$(document).ready(function() {

  // Removes "focus state" from the hamburger menu button.
  $("#menu-button").click(function(event) {
    $(this).blur();
  });

  // Click listeners for "scrollToAnchor" function OPEN
  // Get element tags, call "scrollToAnchor" to smoothly scroll to tagged elements
  $("#intro-link").click(function() {
     scrollToAnchor('intro');
  });

  $("#research-link").click(function() {
     scrollToAnchor('research');
  });

  $("#define-link").click(function() {
     scrollToAnchor('define');
  });

  $("#ideation-link").click(function() {
     scrollToAnchor('ideation');
  });

  $("#prototype-link").click(function() {
     scrollToAnchor('prototype');
  });

  // Click listeners for "scrollToAnchor" function CLOSE

  // "scrollToAnchor" Function courtesy of: http://jsfiddle.net/BjpWB/4/
  function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  // Activates Name Highlight Effect on Page Load
  $('#name').addClass("name-active-initial");

  // Document Scroll Listener
  $(document).scroll(function() {
    console.log($(this).scrollTop());

    // activates sidenav when user scrolls full past cover section
    // Checks for appropriate scroll position and minimum window width for sidenav
    if ($(this).scrollTop() > 630 && window.innerWidth > 1200) {
      $('#sidenav').addClass("sidenav-active");
    }
    else {
      $('#sidenav').removeClass("sidenav-active");
    }
  });




  $(document).scroll(function() {

    if ($(this).scrollTop() > 630) {
      //$('#section-header-projects').css({color: "black"});
      $('#intro-link').addClass("link-active");
    }
    else {
      $('#intro-link').removeClass("link-active");
    }

    if ($(this).scrollTop() > 630 && $(this).scrollTop() < 1350) {
      //$('#section-header-projects').css({color: "black"});
      $('#intro-link').addClass("link-active");
    }
    else {
      $('#intro-link').removeClass("link-active");
    }

    if ($(this).scrollTop() > 1350 && $(this).scrollTop() < 6500) {
      //$('#section-header-projects').css({color: "black"});
      $('#research-link').addClass("link-active");
    }
    else {
      $('#research-link').removeClass("link-active");
    }

    if ($(this).scrollTop() > 6500 && $(this).scrollTop() < 9100) {
      //$('#section-header-projects').css({color: "black"});
      $('#define-link').addClass("link-active");
    }
    else {
      $('#define-link').removeClass("link-active");
    }

    if ($(this).scrollTop() > 9100 && $(this).scrollTop() < 10100) {
      //$('#section-header-projects').css({color: "black"});
      $('#ideation-link').addClass("link-active");
    }
    else {
      $('#ideation-link').removeClass("link-active");
    }

    if ($(this).scrollTop() > 10100) {
      //$('#section-header-projects').css({color: "black"});
      $('#prototype-link').addClass("link-active");
    }
    else {
      $('#prototype-link').removeClass("link-active");
    }

      //console.log(($('#section-header-projects')).style);
      console.log($(this).scrollTop());
      // console.log(item).style();
      //console.log(item);

  });


  // Hamburger Menu Button Click Listener
  $("#menu-button").click(function() {
    // if drop-down nav is inactive, open dropdown
    if ($(".dropnav").hasClass("dropnav-active") == false) {
      $(".dropnav").addClass("dropnav-active");
    }
    // if dropdown nav is active, close dropdown
    else {
      $(".dropnav").removeClass("dropnav-active");
    }

  });

  // Window Width Listener (upon page load)
  // If window width is sufficiently wide, display full main nav
  if (window.innerWidth > 820) {
    $('.navbar-menu-item').removeClass("collapse");
    console.log(window.innerWidth);
    console.log("skinny");
  }
  // If window width is not sufficiently wide, collapse main nav
  else {
    $('.navbar-menu-item').addClass("collapse");
    console.log(window.innerWidth);
    console.log("thicc");
  }


  // Window Width Listener (upon window resize)
  window.onresize = function(){

    // If window width IS NOT sufficiently wide...
    if (window.innerWidth < 820) {
      // ...collapse main nav
      $('.navbar-menu-item').addClass("collapse");
      // ...display hamburger menu button
      $('#menu-button').addClass("menu-button");
      //$('.sidenav').removeClass("sidenav-active");
      console.log(window.innerWidth);
      console.log("skinny");
      // ... if sidenav is open, disable sidenav
    }
    // If window width IS sufficiently wide...
    else {
      // ...display full main nav
      $('.navbar-menu-item').removeClass("collapse");

      // if dropdown is open when window is resized to full nav...
      if ($(".dropnav").hasClass("dropnav-active")) {
        // ...close dropdown
        $(".dropnav").removeClass("dropnav-active");
      }
      console.log(window.innerWidth);
      console.log("thicc");
    }

    if (window.innerWidth < 1200) {
      if ($(".sidenav").hasClass("sidenav-active")) {
        $(".sidenav").removeClass("sidenav-active");
      }
    else {
      // ... if sidenav isn't already open and scroll position is appropriate (e.g. below cover)...
      if ($(".sidenav").hasClass("sidenav-active") == false && ($(document).scrollTop() > 630)) {
        // open sidenav
        $(".sidenav").addClass("sidenav-active");
      }
    }

    }
  };
});
