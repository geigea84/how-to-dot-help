/* POST save new nfp info */

//prevent input of incorrect characters in phone number
let checkPhoneNumber = (nfpPhone) => {
    console.log("number called");
    //filter out non-numeric characters
    let cleaned = ("" + nfpPhone).replace(/\D/g, "");

    //verify correct input length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return " ";
};

//replace with arrow functions?
const validateEmail = function(nfpEmail) {
    console.log("email called");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(nfpEmail)) {
        console.log("valid email address");
        return nfpEmail;
    }
    else {
        alert("Invalid email address");
        return;
    }
};

const validatePhone = function(nfpPhone) {
    console.log("phone called");
    let cleaned = ("" + nfpPhone).replace(/\D/g, "");
    
    if (/^\d{10}$/.test(cleaned)) {
        console.log("valid phone number");
        return cleaned;
    }
    else if (nfpPhone == "") {
        return;
    }
    else {
        alert("Invalid phone number");
        return;
    }
};

//eliminate issues with DRY-test to see if the || can drop theState between each one
const validateState = function(nfpState) {
    console.log("state called");
    let theState = nfpState.toUpperCase();
    if (theState == "AL" || 
        theState == "AK" || 
        theState == "AZ" || 
        theState == "AR" || 
        theState == "CA" || 
        theState == "CO" || 
        theState == "CT" || 
        theState == "DE" || 
        theState == "FL" || 
        theState == "GA" || 
        theState == "HI" || 
        theState == "ID" || 
        theState == "IL" || 
        theState == "IN" || 
        theState == "IA" || 
        theState == "KS" || 
        theState == "KY" || 
        theState == "LA" || 
        theState == "ME" || 
        theState == "MD" || 
        theState == "MA" || 
        theState == "MI" || 
        theState == "MN" || 
        theState == "MS" || 
        theState == "MO" || 
        theState == "MT" || 
        theState == "NE" || 
        theState == "NV" || 
        theState == "NH" || 
        theState == "NJ" || 
        theState == "NM" || 
        theState == "NY" || 
        theState == "NC" || 
        theState == "ND" || 
        theState == "OH" || 
        theState == "OK" || 
        theState == "OR" || 
        theState == "PA" || 
        theState == "RI" || 
        theState == "SC" || 
        theState == "SD" || 
        theState == "TN" || 
        theState == "TX" || 
        theState == "UT" || 
        theState == "VT" || 
        theState == "VA" || 
        theState == "WA" || 
        theState == "WV" || 
        theState == "WI" || 
        theState == "WY" || 
        theState == "AS" || 
        theState == "DC" || 
        theState == "FM" || 
        theState == "GU" || 
        theState == "MH" || 
        theState == "MP" || 
        theState == "PW" || 
        theState == "PR" || 
        theState == "VI") {
        return theState;
    }
    else {
        alert("Invalid state - Please use state abbreviation");
        return;
    }
}

$("#nfp-save-btn").on("click", () => {
    console.log("nfp save btn clicked")
    
    nfpName    = $("#nfp-name").val();
    nfpWebsite = $("#nfp-website").val();
    nfpCause   = $("#nfp-cause").val();
    nfpTags    = $("#nfp-tags").val();
    nfpMS      = $("#nfp-mission-statement").val();
    nfpSize    = $("#nfp-size").val();
    nfpFY      = $("#nfp-founding-year").val();
    nfpRNA     = $("#nfp-rna").val();
    nfpCity    = $("#nfp-city").val();
    nfpState   = $("#nfp-state").val();
    nfpZip     = $("#nfp-zip").val();
    nfpEmail   = $("#nfp-email").val();
    nfpPhone   = $("#nfp-phone").val();
    nfpImage   = $("#nfp-image").val();

    let validEmail = validateEmail(nfpEmail);
    let validPhone = validatePhone(nfpPhone);
    let validState = validateState(nfpState);

    let nfpInfo = {
        nfp_name: nfpName,
        url: nfpWebsite,
        cause: nfpCause,
        tags: nfpTags,
        description: nfpMS,
        size: nfpSize,
        founding_year: nfpFY,
        reported_net_assets: nfpRNA,
        city: nfpCity,
        state: validState,
        zip: nfpZip,
        phone_number: validPhone,
        email: validEmail,
        image_url: nfpImage
    }

    $.ajax({
        method: "POST",
        url: "/admin",
        data: {nfpInfo},
        success: function(response) {
            console.log(response);
            alert("NFP added!");
        }
    });
});


/* GET search volunteers by name */
/*
$(".typeahead").typeahead(
    {
        minLength: 3,
        highlight: true
    },
    {
        name: "typeahead",
        remote: "http://localhost:3001/users"
    }
)
*/
$("#vol-search-btn").on("click", function(req, res, next) {
    console.log("vol search btn clicked")

    let searchTerm = req.query.searchNameAndNfp;

    let query = "SELECT * FROM User WHERE first_name LIKE " + searchTerm% 
})