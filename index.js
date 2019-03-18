var portraithexagons = ["crypto-text", "fourD-text", "dnd-text", "offworld-text", "tavrn-text"];
var resumeCounters = [0,0,0,0];
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
   $("#crypto-text-closer").click(function(){
      $("#crypto-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#fourD-text-closer").click(function(){
      $("#fourD-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#dnd-text-closer").click(function(){
      $("#dnd-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#offworld-text-closer").click(function(){
      $("#offworld-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });
   $("#tavrn-text-closer").click(function(){
      $("#tavrn-text").removeClass("show-text");
      $("#portrait-wrapper").removeClass("shrunkGrid");
   });

   $("#Peer-Educator").click(function(){
      resumeCounters[0] = (resumeCounters[0]+1)%2;
      if(resumeCounters[0]==1){
         closeDescriptions(0);
         $("#Peer-Educator-Description").addClass("resume-show-text");
         $("#Peer-Educator").addClass("downwards-arrow");
         $("#Peer-Educator").removeClass("right-arrow");
      }else {
         $("#Peer-Educator-Description").removeClass("resume-show-text");
         $("#Peer-Educator").removeClass("downwards-arrow");
         $("#Peer-Educator").addClass("right-arrow");
      }
   });
   $("#VRONCOS").click(function(){
      resumeCounters[1] = (resumeCounters[1]+1)%2;
      if(resumeCounters[1]==1){
         closeDescriptions(1);
         $("#VRONCOS-Description").addClass("resume-show-text");
         $("#VRONCOS").addClass("downwards-arrow");
         $("#VRONCOS").removeClass("right-arrow");
      }else {
         $("#VRONCOS-Description").removeClass("resume-show-text");
         $("#VRONCOS").removeClass("downwards-arrow");
         $("#VRONCOS").addClass("right-arrow");
      }
   });
   $("#VRLab").click(function(){
      resumeCounters[2] = (resumeCounters[2]+1)%2;
      if(resumeCounters[2]==1){
         closeDescriptions(2);
         $("#VRLab-Description").addClass("resume-show-text");
         $("#VRLab").addClass("downwards-arrow");
         $("#VRLab").removeClass("right-arrow");
      }else {
         $("#VRLab-Description").removeClass("resume-show-text");
         $("#VRLab").removeClass("downwards-arrow");
         $("#VRLab").addClass("right-arrow");
      }
   });
   $("#TA").click(function(){
      resumeCounters[3] = (resumeCounters[3]+1)%2;
      if(resumeCounters[3]==1){
         closeDescriptions(3);
         $("#TA-Description").addClass("resume-show-text");
         $("#TA").addClass("downwards-arrow");
         $("#TA").removeClass("right-arrow");
      }else {
         $("#TA-Description").removeClass("resume-show-text");
         $("#TA").removeClass("downwards-arrow");
         $("#TA").addClass("right-arrow");
      }
   });
});
function removeTextClasses(idnames, class2remove){
   for(var i = 0; i<idnames.length; i++){
      $("#"+idnames[i]).removeClass(class2remove);
   }
}

function closeDescriptions(i){
   if(i!=0){
      $("#Peer-Educator-Description").removeClass("resume-show-text");
      $("#Peer-Educator").removeClass("downwards-arrow");
      $("#Peer-Educator").removeClass("downwards-arrow");
      $("#Peer-Educator").addClass("right-arrow");
      resumeCounters[0] = 0;
   }
   if(i!=1){
      $("#VRONCOS-Description").removeClass("resume-show-text");
      $("#VRONCOS").removeClass("downwards-arrow");
      $("#VRONCOS").removeClass("downwards-arrow");
      $("#VRONCOS").addClass("right-arrow");
      resumeCounters[1] = 0;
   }
   if(i!=2){
      $("#VRLab-Description").removeClass("resume-show-text");
      $("#VRLab").removeClass("downwards-arrow");
      $("#VRLab").removeClass("downwards-arrow");
      $("#VRLab").addClass("right-arrow");
      resumeCounters[2] = 0;
   }
   if(i!=3){
      $("#TA-Description").removeClass("resume-show-text");
      $("#TA").removeClass("downwards-arrow");
      $("#TA").removeClass("downwards-arrow");
      $("#TA").addClass("right-arrow");
      resumeCounters[3] = 0;
   }
}
