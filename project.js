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

    // activates sidenav when user scrolls full past cover section
    // Checks for appropriate scroll position and minimum window width for sidenav
    if ($(this).scrollTop() > 630 && window.innerWidth > 1200) {
      $('#sidenav').addClass("sidenav-active");
    }
    else {
      $('#sidenav').removeClass("sidenav-active");
    }
  });



/*
  $(document).scroll(function() {

    if ($(this).scrollTop() < 130) {
      //$('#section-header-projects').css({color: "black"});
      $('#name').addClass("name-active");
    }
    else {
      $('#name').removeClass("name-active");
      $('#name').removeClass("name-active-initial");
    }

    if ($(this).scrollTop() > 130 && $(this).scrollTop() < 1000) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-projects').addClass("header-active");
      $("#projects-link").addClass("link-active");
    }
    else {
      $('#section-header-projects').removeClass("header-active");
      $("#projects-link").removeClass("link-active");
    }

    if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1600) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-writing').addClass("header-active");
      $("#writing-link").addClass("link-active");
    }
    else {
      $('#section-header-writing').removeClass("header-active");
      $("#writing-link").removeClass("link-active");
    }

    if ($(this).scrollTop() > 1600 && $(this).scrollTop() < 2100) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-aboutme').addClass("header-active");
      $("#aboutme-link").addClass("link-active");
    }
    else {
      $('#section-header-aboutme').removeClass("header-active");
      $("#aboutme-link").removeClass("link-active");
    }

    if ($(this).scrollTop() > 2100) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-contact').addClass("header-active");
      $("#contact-link").addClass("link-active");
    }
    else {
      $('#section-header-contact').removeClass("header-active");
      $("#contact-link").removeClass("link-active");
    }

      //console.log(($('#section-header-projects')).style);
      console.log($(this).scrollTop());
      var item = $("#section-header-projects");
      // console.log(item).style();
      //console.log(item);

  });
*/

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
