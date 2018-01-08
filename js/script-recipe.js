$(document).ready(() => {
   console.log("tamo ready")

   $(".js-show-recipe").click(() => {
       $("#page").removeClass("make")
   })

   $(".js-show-make").click(() => {
       $("#page").addClass("make")
   })
})