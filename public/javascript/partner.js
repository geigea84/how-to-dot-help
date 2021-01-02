// var source = document.innerHTML; 
var template = Handlebars.compile(source);
document.body.innerHTML = template();
// var partnerNFP = document.getElementsByClassName("joinNFPnow");

console.log(partnerNFP)
 const reachOutResponse = function() {
    console.log("clicked btn")
    $(this).fadeOut(3000);
  }

const reachOutBtnClicked = document.getElementsByClassName("reach-out")
reachOutBtnClicked.addEventListener("click",console.log("btn clicked"))



// // // Create a new task
// // partnerNFP.addEventListener("click", reachOutResponse);
// document.getElementById("joinNFPnow").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("joinNFPnow").innerHTML = "YOU CLICKED ME!";
// }