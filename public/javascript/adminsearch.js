function adminSearchUser() {
    let searchParam = $(this).attr("id")
    let user_id = "adminsearch/" + searchParam
    console.log(user_id)
    $(this).fadeOut(3000);
    location.href = user_id
}

$(document).on("click", ".admin-search", adminSearchUser)
// document.querySelector(".admin-search").addEventListener("click", adminSearchUser);