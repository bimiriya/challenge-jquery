$(document).ready(() => {
   console.log("tamo ready")

   $(".js-show-recipe").click(() => {
       $("#page").removeClass("make");
       $(".js-show-recipe").addClass("active")
       $(".js-show-make").removeClass("active")
   })

   $(".js-show-make").click(() => {
       $("#page").addClass("make");
       $(".js-show-make").addClass("active")
       $(".js-show-recipe").removeClass("active")
   })

   $(".js-back").click(() => {
    $(location).attr("href","index.html");
   })
})