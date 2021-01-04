
//---------------------------------//
//-------Fade and Show Effects-----//
//--------------------------------//
$(document).ready(function () {
  $(".navbody").slideDown(3000);
});

$(document).ready(function () {
  $("#main-line").fadeIn(2000);
});

$(document).ready(function () {
  $(".ghost-in").fadeIn(3000);
});

//HIDE V FORM----------------------------------------------------------
function hideVForm() {
  $("#form-v").slideToggle(1000);

  var Button = document.getElementById("hide-vinfo");
  var ButtonText = Button.innerHTML
  console.log(ButtonText)
  if (ButtonText == "Open My Info") {
    Button.innerHTML = "Close Info"
  }
  else {
    Button.innerHTML = "Open My Info"
  }
}
//carried over code fro merge
const hideVolunteerForm = document.getElementById("hide-vinfo")
hideVolunteerForm.addEventListener("click", hideVForm);
//end caryover

