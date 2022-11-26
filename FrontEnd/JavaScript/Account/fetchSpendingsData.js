function totalSpendingAccount() {
    const url = 'http://127.0.0.1:5000/accountdata?' + new URLSearchParams({
        user: "andrei",
        start: "01/01/2000",
        end: "31/12/2040",
        currency: selectedCurrency,
    })
    showLoadingAccount()
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            document.getElementById("all_spendings").innerText = complete_response.total + " " + selectedCurrency
            document.getElementById("biggest_spendings").innerText = complete_response.biggest + " " + selectedCurrency
        })
        .catch((err) => {
            console.log(err)
        })
}