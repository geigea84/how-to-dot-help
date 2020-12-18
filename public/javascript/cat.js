//text for times
var firstName = localStorage.getItem("firstName")
var lastName = localStorage.getItem("lastName")
var email = localStorage.getItem("email")
var phone = localStorage.getItem("phone")
var info = localStorage.getItem("info")
var contact = localStorage.getItem("contact")

//on load: 
$(document).ready(function () {
//cound have writen the following section as :
//$( "#9am #text").html(localStorage.getItem("9am"));
      $("#first-name").html( firstName );
      $("#last-name").html( lastName );
      $("#email").html( email );
      $("#phone").html( phone );
      $("#info").html( info );
      $("#contact").html( contact );
})


//save it! 
$("#save").on("click", function() {
    console.log("click happend")
    //collect text
    FN = $("#first-name").val()
    LN = $("#last-name").val()
    E = $("#email").val()
    P = $("#phone").val()
    I = $("#info").val()
    C = $("#contact").val()
        //save text
  var saveTask = function () {
    localStorage.setItem("firstName", FN)
    localStorage.setItem("lastName", LN) 
    localStorage.setItem("email", E) 
    localStorage.setItem("phone", P) 
    localStorage.setItem("info", I) 
    localStorage.setItem("contact", C)    
  }
    saveTask()
  });

//Fade and Show Effects------------------------------------------------
  $(document).ready(function () {
    $("#nav").show(2000);
});

$(document).ready(function () {
    $("#main-line").fadeIn(3000);
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
  