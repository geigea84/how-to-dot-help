/* POST save new nfp info */

//prevent input of incorrect characters in phone number
let checkPhoneNumber = (nfpPhone) => {
    //console.log("number called");
    //filter out non-numeric characters
    let cleaned = ("" + nfpPhone).replace(/\D/g, "");

    //verify correct input length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    else{
        return;
    }
};

//replace with arrow functions?
const validateEmail = function(nfpEmail) {
    //console.log("email called");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(nfpEmail)) {
        //console.log("valid email address");
        return nfpEmail;
    }
    else {
        alert("Invalid email address");
        return;
    }
};

const validatePhone = function(nfpPhone) {
    //console.log("phone called");
    let cleaned = ("" + nfpPhone).replace(/\D/g, "");
    
    if (/^\d{10}$/.test(cleaned)) {
        //console.log("valid phone number");
        return cleaned;
    }
    else {
        alert("Invalid phone number");
        return;
    }
};

//eliminate issues with DRY-test to see if the || can drop theState between each one
const validateState = function(nfpState) {
    //console.log("state called");
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

    let nfpName    = document.querySelector("#nfp-name").value.trim();
    let nfpWebsite = document.querySelector("#nfp-website").value.trim();
    let nfpCause   = document.querySelector("#nfp-cause").value.trim();
    let nfpTags    = document.querySelector("#nfp-tags").value.trim();
    let nfpMS      = document.querySelector("#nfp-mission-statement").value.trim();
    let nfpSize    = document.querySelector("#nfp-size").value.trim();
    let nfpFY      = document.querySelector("#nfp-founding-year").value.trim();
    let nfpRNA     = document.querySelector("#nfp-rna").value.trim();
    let nfpCity    = document.querySelector("#nfp-city").value.trim();
    let nfpState   = document.querySelector("#nfp-state").value.trim();
    let nfpZip     = document.querySelector("#nfp-zip").value.trim();
    let nfpEmail   = document.querySelector("#nfp-email").value.trim();
    let nfpPhone   = document.querySelector("#nfp-phone").value.trim();
    let nfpImage   = document.querySelector("#nfp-image").value.trim();

    let validEmail = validateEmail(nfpEmail);
    let validPhone = validatePhone(nfpPhone);
    let validState = validateState(nfpState);
    
    if(
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
            headers: {'Content-Type': 'application/json'}
        });
        //add switch statement for different empty issues?
        if (response.ok) {
            console.log(`${nfpName} added as new NFP`);
            alert(`${nfpName} added as new NFP`);
            document.querySelector("#nfp-form").reset();
        }
        /*
        else if (response.ok == false) {
            console.log(response.statusText);

        }
        */
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
$("#search-btn").on("click", () => {
    console.log("search btn clicked");
    //include php file
    
    //get value of input
    let query = document.getElementById("search-User").value;
    let resultsContainer = document.getElementById("results-container");
    
    console.log(query);

    //create XMLHttp object
    const xmlhttp = new XMLHttpRequest();

    console.log(xmlhttp);

    //function called on button click
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            //fetch response text
            let response = xmlhttp.responseText;
            let outputPosts;

            //parse response if valid JSON
            try {
                outputPosts = JSON.parse(response);
            }
            catch(err) {
                alert("No matches");
                return;
            }

            //iterate over results
            for (let i = 0; i < outputPosts.length; i++) {
                resultsContainer.innerHTML += "<div id=result-" + i + ">" 
                + outputPosts[i].first_name + "\n" 
                + outputPosts[i].last_name + "\n"
                + outputPosts[i].city + "\n"
                + outputPosts[i].state + "\n"
                + outputPosts[i].bio + "\n"
                + outputPosts[i].phone_number + "\n"
                + outputPosts[i].email +
                "</div>"
                
                //generate edit and delete buttons
                let editButton = document.createElement("button");
                editButton.textContent = "Edit";
                //editButton.className = 
                editButton.setAttribute("id", outputPosts[i]);
                resultsContainer.appendChild(editButton);

                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                //deleteButton.className =
                deleteButton.setAttribute("id", outputPosts[i]);
                resultsContainer.appendChild(deleteButton);
            };
        };
    };

    //send request to fetch searchDB.php (is file at right level?)
    xmlhttp.open("GET", "searchDB.php?search=" + query, true);
    xmlhttp.send();
});