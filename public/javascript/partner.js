async function reachOut(i) {
    event.preventDefault();
    console.log(i)
  
    if (i) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          nfp_id,
          user_id
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/user/:id');
      } else {
        alert(response.statusText);
      }
    }
  }




 const reachOutResponse = function() {
    console.log("clicked btn")
    var nfp_id = $(this).attr("id");
    $(this).fadeOut(3000);
      reachOut(nfp_id)
  }

$(document).on("click", ".reach-out", reachOutResponse)
