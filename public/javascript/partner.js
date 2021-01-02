

console.log("IM CONNECTED!!!")
 const reachOutResponse = function() {
    console.log("clicked btn")
    $(this).fadeOut(3000);
  }

$(document).on("click", ".reach-out", reachOutResponse)
