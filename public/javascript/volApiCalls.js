//AJAX - REQUEST- as far back as front end goes
//---------------------------------//
//-------------LOAD----------------//
//---------------------------------//
//------------------------------------------------reformat phone
let formatPhoneNumber = (P) => {
    //Filter only numbers from the input
    let cleaned = ('' + P).replace(/\D/g, '');
    
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }; 
    return " "
  };

//---------------------------------------//
//-------------SAVE/PUT UPDATE-----------//
//--------------------------------------//
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
        else if (P == ""){
                return "";
            }
        else {
              alert("not a valid phone number");
              return "";
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

  //------------------------------------------------PUT
  $("#save-rev-btn").on("click", function() {
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
        PW = $("#divId").val()
    
        let validE = ValidateEmail(E)
        let validP = ValidatePhone(P)
        let validS = ValidateState(S)
    //console.log(PW)

    var userinfo = {
        first_name: FN,
        last_name: LN,
        city: Ci,
        state: validS,
        bio: I,
        phone_number: validP,
        email: validE,
        id: PW
    }

    $.ajax({
        method: "PUT",
        url: "/volunteer/:id",
        data: {userinfo},
        success: function(data){
            console.log("Updat Ok")
        }
    })
})



//   //------------------------------------------------PUT 2
//   $("#save-new").on("click", function() {
//     console.log("click happend")
//         //collect text
//         FN = $("#first-name").val()
//         LN = $("#last-name").val()
//         E = $("#email").val()
//         P = $("#phone").val()
//         I = $("#info").val()
//         //C = $("#contact").val()
//         Ci = $("#city").val()
//         S = $("#state").val()
//         Ps = $("#password")
//         let validE = ValidateEmail(E)


//     var userinfo = {
//         first_name: FN,
//         last_name: LN,
//         email: validE,
//         password: Ps
//     }





//     $.put("/api/users/:id", {userinfo}.then(function(data) {
//             console.log("Data Saved")
//     }))
// })



//---------------------------------------------//
//-------------POST/ CREATE NEW USER-----------//
//---------------------------------------------//

//   //------------------------------------------------PUT
//   $("#save").on("click", function() {
//     console.log("click happend")
//         //collect text
//         FN = $("#first-name").val()
//         LN = $("#last-name").val()
//         E = $("#email").val()
//         Ps = $("#password").val()
    
//         let validE = ValidateEmail(E)

//     var userinfo = {
//         first_name: FN,
//         last_name: LN,
//         email: validE,
//         password: Ps
//     }

//     $.post("/api/users", {userinfo}.then(function(data) {
//         //load/userpage html route
//     }))
// })
