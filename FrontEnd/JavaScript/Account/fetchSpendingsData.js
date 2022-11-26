function totalSpendingAccount() {
    const url = 'http://127.0.0.1:5000/total?' + new URLSearchParams({
        user: "andrei",
        start: "01/01/2000",
        end: "31/12/2040",
        currency: selectedCurrency,
    })
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            document.getElementById("all_spendings").innerText = complete_response.total + " " + selectedCurrency
        })
        .catch((err) => {
            console.log(err)
        })
}