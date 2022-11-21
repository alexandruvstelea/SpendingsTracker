function setYearNr() {
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    document.getElementById("timeframe").innerText = year
}

function increaseYearNr() {
    currentNr = document.getElementById("timeframe").innerText
    currentNr = parseInt(currentNr) + 1
    document.getElementById("timeframe").innerText = currentNr
    generateDays()
    totalSpending()
}

function decreaseYearNr() {
    currentNr = document.getElementById("timeframe").innerText
    currentNr = parseInt(currentNr) - 1
    document.getElementById("timeframe").innerText = currentNr
    generateDays()
    totalSpending()
}