var portraithexagons = ["crypto-text", "fourD-text", "dnd-text", "offworld-text", "tavrn-text"];
$(document).ready(function() {
   //TOOLBAR NAV BUTTON CLICKS ASSIGNMENTS
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

   //PORTRAIT HEXAGON CLICKS ASSIGNMENTS
   $("#crypto-hex").click(function() {
      $("#portrait-wrapper").addClass("shrunkGrid");
      removeTextClasses(portraithexagons, "show-text");
      $("#crypto-text").addClass("show-text");
   });
   $("#fourD-hex").click(function() {
      $("#portrait-wrapper").addClass("shrunkGrid");
      removeTextClasses(portraithexagons, "show-text");
      $("#fourD-text").addClass("show-text");
   });
   $("#dnd-hex").click(function() {
         $("#portrait-wrapper").addClass("shrunkGrid");
         removeTextClasses(portraithexagons, "show-text");
         $("#dnd-text").addClass("show-text");
   });
   $("#offworld-hex").click(function() {
      $("#portrait-wrapper").addClass("shrunkGrid");
      removeTextClasses(portraithexagons, "show-text");
      $("#offworld-text").addClass("show-text");
   });
   $("#tavrn-hex").click(function() {
      $("#portrait-wrapper").addClass("shrunkGrid");
      removeTextClasses(portraithexagons, "show-text");
      $("#tavrn-text").addClass("show-text");
   });

    //PORTRAIT PROJECT DESCRIPTION CLICKS ASSIGNMENTS
   $("#crypto-text").click(function(){
      $("#crypto-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#fourD-text").click(function(){
      $("#fourD-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#dnd-text").click(function(){
      $("#dnd-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#offworld-text").click(function(){
      $("#offworld-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#tavrn-text").click(function(){
      $("#tavrn-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
});

function removeTextClasses(idnames, class2remove){
   for(var i = 0; i<idnames.length; i++){
      $("#"+idnames[i]).removeClass(class2remove);
   }
}
