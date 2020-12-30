//format phone number to prevent input of incorrect characters
let formatPhoneNumber = (P) => {
    //filter out non-numeric characters
    let cleaned = ("" + P).replace(/\D/g, "");

    //verify correct input length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return " ";
};

const validateEmail = function(E) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(E)) {
        console.log("valid email address");
        return E;
    }
    else {
        alert("Invalid email address");
        return;
    }
};

const validatePhone = function(P) {
    let cleaned = ("" + P).replace(/\D/g, "");
    
    if (/^\d{10}$/.test(cleaned)) {
        console.log("valid phone number");
        return cleaned;
    }
    else if (P == "") {
        return;
    }
    else {
        alert("Invalid phone number");
        return;
    }
};

//eliminate issues with DRY-test to see if the || can drop theState between each one
const validateState = function(S) {
    let theState = S.toUpperCase();
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

$("#nfp-save-btn").on("click", function() {
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
        state: nfpState,
        zip: nfpZip,
        phone_number: nfpPhone,
        email: nfpEmail,
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