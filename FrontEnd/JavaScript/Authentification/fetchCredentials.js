function registerUser() {
    const url = 'http://127.0.0.1:5000/register?' + new URLSearchParams({
        full_name: document.getElementById("registerName").value,
        email: document.getElementById("registerEmail").value,
        password: document.getElementById("registerPassword").value,
        confirm_password: document.getElementById("cpassword").value,
    })
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            if (complete_response.response == 'registered')
                goToSignIn()
            else
                console.log(complete_response)
        })
        .catch((err) => {
            console.log(err)
        })
}

function loginCredentials() {
    const url = 'http://127.0.0.1:5000/login?' + new URLSearchParams({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    })
    fetch(url, { method: 'POST', credentials: 'include' })
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            if (complete_response.response == 'ok')
                goToIndex()

            else
                console.log(complete_response)
        })
        .catch((err) => {
            console.log(err)
        })
}

function logout() {
    const url = 'http://127.0.0.1:5000/logout'
    fetch(url, { credentials: 'include' })
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