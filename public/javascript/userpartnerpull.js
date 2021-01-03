async function placeNFPsss() {
    const response = await fetch('/api/nfp/', {
        method: 'get',
        body: JSON.stringify({
            nfp_name
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log("get sucessful")
    } else {
        alert(response.statusText);
    }
}

function findMyNFPs() {
    console.log("signup clicked btn")
    placeNFPsss()
}

$(document).on("click", ".get-nfp-now", findMyNFPs)
