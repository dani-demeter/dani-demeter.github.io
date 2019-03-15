$(document).ready(function() {
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
