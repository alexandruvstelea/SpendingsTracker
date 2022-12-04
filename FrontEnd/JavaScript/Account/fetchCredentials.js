function accountCredentials(){
    const url = 'http://127.0.0.1:5000/register?' + new URLSearchParams({
        full_name: document.getElementById("name").value,
        email: document.getElementById("remail").value,
        password: document.getElementById("rpassword").value,
        confirm_password: document.getElementById("cpassword").value,
    })
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            console.log(complete_response)
        })
        .catch((err) => {
            console.log(err)
        })
}

function loginCredentials(){
    const url = 'http://127.0.0.1:5000/login?' + new URLSearchParams({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    })
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            console.log(complete_response)
        })
        .catch((err) => {
            console.log(err)
        })
}