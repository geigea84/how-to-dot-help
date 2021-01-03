/* POST save new nfp info */

//prevent input of incorrect characters in phone number
let checkPhoneNumber = (nfpPhone) => {
    //filter out non-numeric characters
    let cleaned = ("" + nfpPhone).replace(/\D/g, "");

    //verify correct input length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    else {
        return;
    }
};

//replace with arrow functions?
const validateEmail = function (nfpEmail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(nfpEmail)) {
        return nfpEmail;
    }
    else {
        alert("Invalid email address");
        return;
    }
};

const validatePhone = function (nfpPhone) {
    let cleaned = ("" + nfpPhone).replace(/\D/g, "");

    if (/^\d{10}$/.test(cleaned)) {
        return cleaned;
    }
    else {
        alert("Invalid phone number");
        return;
    }
};

//eliminate issues with DRY-test to see if the || can drop theState between each one
const validateState = function (nfpState) {
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

//add new NFP
async function addNFP(event) {
    event.preventDefault();

    let nfpName = document.querySelector("#nfp-name").value.trim();
    let nfpWebsite = document.querySelector("#nfp-website").value.trim();
    let nfpCause = document.querySelector("#nfp-cause").value.trim();
    let nfpTags = document.querySelector("#nfp-tags").value.trim();
    let nfpMS = document.querySelector("#nfp-mission-statement").value.trim();
    let nfpSize = document.querySelector("#nfp-size").value.trim();
    let nfpFY = document.querySelector("#nfp-founding-year").value.trim();
    let nfpRNA = document.querySelector("#nfp-rna").value.trim();
    let nfpCity = document.querySelector("#nfp-city").value.trim();
    let nfpState = document.querySelector("#nfp-state").value.trim();
    let nfpZip = document.querySelector("#nfp-zip").value.trim();
    let nfpEmail = document.querySelector("#nfp-email").value.trim();
    let nfpPhone = document.querySelector("#nfp-phone").value.trim();
    let nfpImage = document.querySelector("#nfp-image").value.trim();

    let validEmail = validateEmail(nfpEmail);
    let validPhone = validatePhone(nfpPhone);
    let validState = validateState(nfpState);

    if (
        nfpName &&
        nfpWebsite &&
        nfpCause &&
        nfpTags &&
        nfpMS &&
        nfpSize &&
        nfpFY &&
        nfpRNA &&
        nfpCity &&
        validState &&
        nfpZip &&
        validPhone &&
        validEmail &&
        nfpImage
    ) {
        const response = await fetch('/api/nfp', {
            method: 'post',
            body: JSON.stringify({
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
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //add switch statement for different empty issues?
        if (response.ok) {
            console.log(`${nfpName} added as new NFP`);
            alert(`${nfpName} added as new NFP`);
            document.querySelector("#nfp-form").reset();
        }
        else {
            console.log(response.statusText);
        }
    }
    else {
        alert("ERROR: nfp did not save");
    }
}
document.getElementById("nfp-save-btn").addEventListener("click", addNFP);

//search for volunteer
async function searchUsers(event) {
    event.preventDefault();

    console.log("volunteer search btn clicked");

    let searchUser = document.querySelector("#search-User").value.trim();

    console.log(searchUser);

    $.ajax({
        method: "GET",
        url: "/adminvolunteers",
        data: { searchUser },
        success: function (data) {
            console.log("Triggered volunteer search request");
        }
    })
}

document.getElementById("search-users-btn").addEventListener("click", searchUsers);

//search for nfp
async function searchNFPs(event) {
    event.preventDefault();

    console.log("nfp search btn clicked");

    let searchNFP = document.querySelector("#search-NFP").value.trim();

    console.log(searchNFP);

    $.ajax({
        method: "GET",
        url: "/adminnfps",
        data: { searchNFP },
        success: function (data) {
            console.log("Triggered NFP search request");
        }
    })
}

document.getElementById("search-nfps-btn").addEventListener("click", searchNFPs);