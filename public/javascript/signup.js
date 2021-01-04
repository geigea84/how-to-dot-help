var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];   // Get the <span> element that closes the modal

async function signupFormHandler(event) {
  event.preventDefault();

  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password && firstName && lastName) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      modal.style.display = "block";
    }
  }
}

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);