function checkSession() {
    const url = 'http://127.0.0.1:5000/verifysession'
    fetch(url, { credentials: 'include' })
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            if (complete_response.response == 'notok')
                goToSignIn()
        })
        .catch((err) => {
            console.log(err)
        })
}