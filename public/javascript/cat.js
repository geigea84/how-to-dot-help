
//---------------------------------//
//-------Fade and Show Effects-----//
//--------------------------------//
$(document).ready(function () {
    $(".navbody").slideDown(3000, slideDownFn);
});

const slideDownFn =function () {
  $(".slide").fadeIn(3000);
};

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
    if (ButtonText=="Open My Info") {
      Button.innerHTML = "Close Info"
    }
    else {Button.innerHTML = "Open My Info"
  }
  }
  var hideVolunteerForm = document.getElementById("hide-vinfo")
  hideVolunteerForm.addEventListener("click", hideVForm);
  

  $('.reach-out').click(function(){
    console.log("clicked btn")
    $(this).fadeOut(3000);
  })

  //HIDE NUTRAL----------------------------------------------------------
// function hideInfoToggle() {
//   $(".hide-toggle").slideToggle(1000);

//   var Button = document.getElementById("hide-vinfo");
//   var ButtonText = Button.innerHTML
//   console.log(ButtonText)
//   if (ButtonText=="See More") {
//     Button.innerHTML = "Close Info"
//   }
//   else {Button.innerHTML = "See More"
// }
// }


//   var hideInfoToggle = document.getElementById("hide-vinfo")
//   hideVolunteerForm.addEventListener("click", hideVForm);