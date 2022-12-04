function collectDate(day) {
    year = document.getElementById("timeframe").innerText
    month = document.querySelector('input[name="month"]:checked').id
    return day + "/" + month + "/" + year
}

function fetchSpendings(day) {
    date = collectDate(day)
    const url = 'http://127.0.0.1:5000/retrievespendings?' + new URLSearchParams({
        user: "andrei",
        start: date,
        end: date,
        currency: selectedCurrency,
    })
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            generateSpendingCards(complete_response.spendings)
        })
        .catch((err) => {
            console.log(err)
        })
}

function startEndMonth() {
    year = document.getElementById("timeframe").innerText
    month = document.querySelector('input[name="month"]:checked').id
    lastDay = Object.values(months)[month - 1]
    startDate = "01/" + month + "/" + year
    endDate = lastDay + "/" + month + "/" + year
    return [startDate, endDate]
}

function totalSpendingMonth() {
    if (document.querySelector('input[name="month"]:checked') != null) {
        date = startEndMonth()
        const url = 'http://127.0.0.1:5000/total?' + new URLSearchParams({
            user: "andrei",
            start: date[0],
            end: date[1],
            currency: selectedCurrency,
        })
        showLoadingTotalMonth()
        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(complete_response) {
                document.getElementById("totalMonth").innerHTML = Object.keys(months)[document.querySelector('input[name="month"]:checked').id - 1] + " " + complete_response.total + " " + selectedCurrency
            })
            .catch((err) => {
                console.log(err)
            })
    }
}