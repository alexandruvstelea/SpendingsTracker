function addSpending() {
    const url = 'http://127.0.0.1:5000/insertspending?' + new URLSearchParams({
        name: document.getElementById("nameAddSpending").value,
        category: document.getElementById("categoryAddSpending").value,
        value: document.getElementById("valueAddSpending").value,
        user: "andrei",
        date: document.getElementById("datePopup").value,
        currency: selectedCurrency,
    })
    fetch(url, {method: 'POST'})
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