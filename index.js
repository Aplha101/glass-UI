$(function(){
  $(".btn").click(() =>{
    $(".glasscont").toggle(() => {
      $(this).css("visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 5s linear;")
    },function(){
      $(".glasscont").css("visibility: visible;opacity: 1;transition: opacity 5s linear;")
    })
  })
})
