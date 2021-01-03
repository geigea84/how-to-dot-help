async function reachOut(i) {
    event.preventDefault();
    nfp_id = i;
    console.log(nfp_id);

    if (i) {
        const response = await fetch('/api/volnfp/interest', {
            method: 'post',
            body: JSON.stringify({
                nfp_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log("reach out sucessful")
        } else {
            alert(response.statusText);
        }
    }
}


const reachOutResponse = function () {
    console.log("clicked btn")
    var nfp_id = $(this).attr("id");
    $(this).fadeOut(3000);
    reachOut(nfp_id)
}

$(document).on("click", ".reach-out", reachOutResponse);


