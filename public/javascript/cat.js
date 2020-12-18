//text for times
var firstName = localStorage.getItem("firstName")
var lastName = localStorage.getItem("lastName")
var email = localStorage.getItem("email")
var phone = localStorage.getItem("phone")
var info = localStorage.getItem("info")
// var contact = localStorage.getItem("contact")
var city = localStorage.getItem("city")
var state = localStorage.getItem("state")


//---------------------------------//
//-------------LOAD----------------//
//--------------------------------//
//------------------------------------------------reformat phone
let formatPhoneNumber = (P) => {
    //Filter only numbers from the input
    let cleaned = ('' + P).replace(/\D/g, '');
    
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }; 
    return "unlisted"
  };

//------------------------------------------------load all form
$(document).ready(function () {

    let formatedPhone = formatPhoneNumber(phone)

      $("#first-name").html( firstName );
      $("#last-name").html( lastName );
      $("#email").html( email );
      $("#phone").html( formatedPhone );
      $("#info").html( info );
      //$("#contact").html( contact );
      $("#city").html( city );
      $("#state").html( state );

})

//---------------------------------//
//-------------SAVE----------------//
//--------------------------------//
//------------------------------------------------validate/reformat
const ValidateEmail = function(E) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(E))
    {
    console.log("Valid email address!");
    return E;
    }
    else
    {
    alert("invalid email provided");
    return email;
    }
    }

const ValidatePhone = function(P) {
    let cleaned = ('' + P).replace(/\D/g, '');

        if(/^\d{10}$/.test(cleaned))
              {
            console.log("valid phone")      
            return cleaned;
              }
        else if (P == "unlisted"){
                return "unlisted";
            }
        else {
              alert("not a valid phone number");
              return "unlisted";
              }
}

//below function from https://gist.github.com/jacobstein2015/582d214b3f3c34b59368
const ValidateState = function(S) {
   let theState = S.toUpperCase();
    if   (  theState == "AL" || theState == " AK" || theState == " AZ" || theState == "AR" || theState == "CA" || theState == "CO" || theState == "CT" || theState == "DE" || theState ==  "FL" || theState == "GA" || theState == "HI" || theState == "ID" || theState == "IL" || theState == "IN" || theState == "IA" || theState == "KS" || theState == "KY" || theState == "LA" || theState ==  "ME" || theState == "MD" || theState == "MA" || theState == "MI" || theState == "MN" || theState == "MS" || theState == "MO" || theState == "MT" || theState == "NE" || theState == "NV" || theState == "NH" || theState == "NJ" || theState == "NM" || theState == "NY" || theState == "NC" || theState == "ND" || theState == "OH" || theState == "OK" || theState == "OR" || theState == "PA" || theState == "RI" || theState == "SC" || theState == "SD" || theState == "TN" || theState == "TX" || theState == "UT" || theState == "VT" || theState == "VA" || theState == "WA" || theState == "WV" || theState == "WI" || theState == "WY" || theState == "AS" || theState == "DC" || theState == "FM" || theState == "GU" || theState == "MH" || theState == "MP" || theState == "PW" || theState == "PR" || theState == "VI" ){
        return theState;
    }
    else {
        alert("Invalid State - Please use initials");
        return state;
    }
}
//------------------------------------------------save

$("#save").on("click", function() {
    console.log("click happend")
    //collect text
    FN = $("#first-name").val()
    LN = $("#last-name").val()
    E = $("#email").val()
    P = $("#phone").val()
    I = $("#info").val()
    //C = $("#contact").val()
    Ci = $("#city").val()
    S = $("#state").val()

    let validE = ValidateEmail(E)
    let validP = ValidatePhone(P)
    let validS = ValidateState(S)

        //save text
  var saveTask = function () {
    localStorage.setItem("firstName", FN)
    localStorage.setItem("lastName", LN) 
    localStorage.setItem("email", validE) 
    localStorage.setItem("phone", validP) 
    localStorage.setItem("info", I) 
    //localStorage.setItem("contact", C)   
    localStorage.setItem("city", Ci)  
    localStorage.setItem("state", validS)   
  }
    saveTask()
  });
//---------------------------------//
//-------Fade and Show Effects-----//
//--------------------------------//
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
  