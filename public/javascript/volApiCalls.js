//AJAX - REQUEST- as far back as front end goes

//---------------------------------------//
//-------------SAVE/PUT UPDATE-----------//
//---------------------------------------//
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
                return '1000000000';
            }
        else {
              alert("not a valid phone number");
              return '1000000000';
              }
    }

//below function from https://gist.github.com/jacobstein2015/582d214b3f3c34b59368
const ValidateState = function(S) {
   let theState = S.toUpperCase();
    if   (  theState == "AL" || theState == " AK" || theState == " AZ" || theState == "AR" || theState == "CA" || theState == "CO" || theState == "CT" || theState == "DE" || theState ==  "FL" || theState == "GA" || theState == "HI" || theState == "ID" || theState == "IL" || theState == "IN" || theState == "IA" || theState == "KS" || theState == "KY" || theState == "LA" || theState ==  "ME" || theState == "MD" || theState == "MA" || theState == "MI" || theState == "MN" || theState == "MS" || theState == "MO" || theState == "MT" || theState == "NE" || theState == "NV" || theState == "NH" || theState == "NJ" || theState == "NM" || theState == "NY" || theState == "NC" || theState == "ND" || theState == "OH" || theState == "OK" || theState == "OR" || theState == "PA" || theState == "RI" || theState == "SC" || theState == "SD" || theState == "TN" || theState == "TX" || theState == "UT" || theState == "VT" || theState == "VA" || theState == "WA" || theState == "WV" || theState == "WI" || theState == "WY" || theState == "AS" || theState == "DC" || theState == "FM" || theState == "GU" || theState == "MH" || theState == "MP" || theState == "PW" || theState == "PR" || theState == "VI" ){
        return theState;
    }
    else {
        alert("Please Enter Your State in XX form");
        return "";
    }
}

  //------------------------------------------------PUT
  $(document).on("click","#save-rev-btn",function() {
    console.log("click happened")
        //collect text
        FN = $("#first-name").val()
        LN = $("#last-name").val()
        E = $("#email").val()
        P = $("#phone").val()
        I = $("#info").val()
        //C = $("#contact").val()
        Ci = $("#city").val()
        S = $("#state").val()
        userId = $("#divId").val()
    
        let validE = ValidateEmail(E)
        let validP = ValidatePhone(P)
        let validS = ValidateState(S)

    var userinfo = {
        first_name: FN,
        last_name: LN,
        city: Ci,
        state: validS,
        bio: I,
        phone_number: validP,
        email: validE,
        id: userId
    }

    $.ajax({
        method: "PUT",
        url: "/user/:id",
        data: {userinfo},
        success: function(data){
            console.log("Update Ok")
        }
    })
})






// //------------------------------------------------------------------//
// //nfp call on click
// //------------------------------------------------------------------//
// async function reachOut(i) {
//     event.preventDefault();
//     nfp_id = i;
//     console.log(nfp_id);

//     if (i) {
//         const response = await fetch('/api/volnfp/interest', {
//             method: 'post',
//             body: JSON.stringify({
//             nfp_id
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         });
    
//         if (response.ok) {
//             console.log("reach out sucessful")
//         } else {
//             alert(response.statusText);
//         }
//      }
//   }


//  const reachOutResponse = function() {
//     console.log("clicked btn")
//     var nfp_id = $(this).attr("id");
//     $(this).fadeOut(3000);
//       reachOut(nfp_id)
//   }

// $(document).on("click", ".reach-out", reachOutResponse)