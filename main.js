//DOCUMENT ON READY FUNCTION
$(document).ready(function() {

  // Removes "focus state" from the hamburger menu button.
  $("#menu-button").click(function(event) {
    $(this).blur();
  });

  // Click listeners for "scrollToAnchor" function OPEN
  // Get element tags, call "scrollToAnchor" to smoothly scroll to tagged elements
  $("#projects-link").click(function() {
     scrollToAnchor('projects');
  });

  $("#writing-link").click(function() {
     scrollToAnchor('writing');
  });

  $("#aboutme-link").click(function() {
     scrollToAnchor('about-me');
  });

  $("#contact-link").click(function() {
     scrollToAnchor('contact');
  });

  $("#contact-link2").click(function() {
     scrollToAnchor('contact');
  });

  $("#logo").click(function() {
     scrollToAnchor('cover');
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

    // activates Highlight Effect on Name when Cover Section is in view
    if ($(this).scrollTop() < 130) {
      $('#name').addClass("name-active");
    }
    else {
      $('#name').removeClass("name-active");
      $('#name').removeClass("name-active-initial");
    }

    // activates Highlight Effect on "Projects" Section Header when Projects Section is in view
    if ($(this).scrollTop() > 130 && $(this).scrollTop() < 1000) {
      $('#section-header-projects').addClass("header-active");
      $("#projects-link").addClass("link-active");
    }
    else {
      $('#section-header-projects').removeClass("header-active");
      $("#projects-link").removeClass("link-active");
    }

    // activates Highlight Effect on "Writing" Section Header when Writing Section is in view
    if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1600) {
      $('#section-header-writing').addClass("header-active");
      $("#writing-link").addClass("link-active");
    }
    else {
      $('#section-header-writing').removeClass("header-active");
      $("#writing-link").removeClass("link-active");
    }

    // activates Highlight Effect on "About Me" Section Header when About Me Section is in view
    if ($(this).scrollTop() > 1600 && $(this).scrollTop() < 2100) {
      $('#section-header-aboutme').addClass("header-active");
      $("#aboutme-link").addClass("link-active");
    }
    else {
      $('#section-header-aboutme').removeClass("header-active");
      $("#aboutme-link").removeClass("link-active");
    }

    // activates Highlight Effect on "Contact" Section Header when Contact Section is in view
    if ($(this).scrollTop() > 2100) {
      $('#section-header-contact').addClass("header-active");
      $("#contact-link").addClass("link-active");
    }
    else {
      $('#section-header-contact').removeClass("header-active");
      $("#contact-link").removeClass("link-active");
    }

    // Scroll Position Listener used for debugging
    console.log($(this).scrollTop());

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
    var w = window.innerWidth;
    var h = window.innerHeight;

    // If window width is not sufficiently wide, collapse main nav
    if (window.innerWidth < 820) {
      $('.navbar-menu-item').addClass("collapse");
      $('#menu-button').addClass("menu-button");
      console.log(window.innerWidth);
      console.log("skinny");
    }

    // If window width is sufficiently wide, display full main nav
    else {
      $('.navbar-menu-item').removeClass("collapse");
      console.log(window.innerWidth);
      console.log("thicc");
    }

  };
});
