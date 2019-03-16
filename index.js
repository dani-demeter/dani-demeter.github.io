$(document).ready(function() {
   if($(window).width() <= 825){
      setTimeout(function() {window.scrollTo(0, 1)}, 100);
   }
    $("#AboutMe").click(function() {
      $(".toolbar-button").removeClass("active");
      $("#AboutMe").addClass("active");
      $(".content-tab-wrapper").removeClass("active-content");
      $("#AboutMe-tab").addClass("active-content");
    });

    $("#Portfolio").click(function() {
      $(".toolbar-button").removeClass("active");
      $("#Portfolio").addClass("active");
      $(".content-tab-wrapper").removeClass("active-content");
      $("#Portfolio-tab").addClass("active-content");
    });

    $("#Resume").click(function() {
      $(".toolbar-button").removeClass("active");
      $("#Resume").addClass("active");
      $(".content-tab-wrapper").removeClass("active-content");
      $("#Resume-tab").addClass("active-content");
    });
});
