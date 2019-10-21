var projectsCounter = 0;

$(document).ready(function() {
   $("#home-button").click(function() {
      $(".show-tab").addClass("hide-tab");
      $(".show-tab").removeClass("show-tab");
      $("#home-wrapper").addClass("show-tab");
      $("#home-wrapper").removeClass("hide-tab");
      $(".selected-menu-button").removeClass("selected-menu-button");
      $("#home-button").addClass("selected-menu-button");
   });
   $("#skills-button").click(function() {
      $(".show-tab").addClass("hide-tab");
      $(".show-tab").removeClass("show-tab");
      $("#skills-wrapper").addClass("show-tab");
      $("#skills-wrapper").removeClass("hide-tab");
      $(".selected-menu-button").removeClass("selected-menu-button");
      $("#skills-button").addClass("selected-menu-button");
   });
   $("#projects-button").click(function() {
      $(".show-tab").addClass("hide-tab");
      $(".show-tab").removeClass("show-tab");
      $("#projects-wrapper").addClass("show-tab");
      $("#projects-wrapper").removeClass("hide-tab");
      $(".selected-menu-button").removeClass("selected-menu-button");
      $("#projects-button").addClass("selected-menu-button");
   });
   $("#work-button").click(function() {
      $(".show-tab").addClass("hide-tab");
      $(".show-tab").removeClass("show-tab");
      $("#work-wrapper").addClass("show-tab");
      $("#work-wrapper").removeClass("hide-tab");
      $(".selected-menu-button").removeClass("selected-menu-button");
      $("#work-button").addClass("selected-menu-button");
   });
   $("#aboutme-button").click(function() {
      $(".show-tab").addClass("hide-tab");
      $(".show-tab").removeClass("show-tab");
      $("#aboutme-wrapper").addClass("show-tab");
      $("#aboutme-wrapper").removeClass("hide-tab");
      $(".selected-menu-button").removeClass("selected-menu-button");
      $("#aboutme-button").addClass("selected-menu-button");
   });
//    $("#download-logo").click(function(e) {
//     e.preventDefault();  //stop the browser from following
//     window.location.href = 'resources/images/cv.pdf';
// });

   $("#tavrn-image").click(()=>{
      projectsCounter = 0;
      highlightNthProject();
   });
   $("#crypto-image").click(()=>{
      projectsCounter = 1;
      highlightNthProject();
   });
   $("#4d-image").click(()=>{
      projectsCounter = 2;
      highlightNthProject();
   });
   $("#offworld-image").click(()=>{
      projectsCounter = 3;
      $(".selected-project").removeClass("selected-project");
      highlightNthProject();
   });
   $("#dnd-image").click(()=>{
      projectsCounter = 4;
      $(".selected-project").removeClass("selected-project");
      highlightNthProject();
   });
   $("#zwatches-image").click(()=>{
      projectsCounter = 5;
      $(".selected-project").removeClass("selected-project");
      highlightNthProject();
   });
   $("#projects-right-arrow").click(()=>{
      projectsCounter = (projectsCounter+1)%6;
      $(".selected-project").removeClass("selected-project");
      highlightNthProject();
   });
   $("#projects-left-arrow").click(()=>{
      projectsCounter = (projectsCounter+5)%6;
      highlightNthProject();
   });
});

function highlightNthProject(){
   $(".selected-project").removeClass("selected-project");
   $(".show-in-main").removeClass("show-in-main");
   if(projectsCounter==0){
      $("#tavrn-image").addClass("selected-project");
      $("#tavrn-main").addClass("show-in-main");
   }else if(projectsCounter==1){
      $("#crypto-image").addClass("selected-project");
      $("#crypto-main").addClass("show-in-main");
   }else if(projectsCounter==2){
      $("#4d-image").addClass("selected-project");
      $("#4d-main").addClass("show-in-main");
   }else if(projectsCounter==3){
      $("#offworld-image").addClass("selected-project");
      $("#offworld-main").addClass("show-in-main");
   }else if(projectsCounter==4){
      $("#dnd-image").addClass("selected-project");
      $("#dnd-main").addClass("show-in-main");
   }else if(projectsCounter==5){
      $("#zwatches-image").addClass("selected-project");
      $("#zwatches-main").addClass("show-in-main");
   }
}
