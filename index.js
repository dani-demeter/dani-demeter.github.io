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

    $("#CV").click(function() {
      $(".toolbar-button").removeClass("active");
      $("#CV").addClass("active");
      $(".content-tab-wrapper").removeClass("active-content");
      $("#CV-tab").addClass("active-content");
    });
});
