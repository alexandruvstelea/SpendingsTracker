var currentSelectedDay = 0

function setSelectedDay(day) {
    currentSelectedDay = day
}

function generateSpendingCards(spendings) {
    let total = 0
    data = ``
    spendings.forEach(spending => {
        total += spending.value
        console.log(spending)
        data += `<div class="dayCards">
        <ul>
            <li>${spending.name}</li>
            <li>${spending.date.substring(5, 16)}</li>
            <li>${spending.category}</li>
        </ul>
        <div id="spendText">
            <h1>-${spending.value} ${selectedCurrency}</h1>
        </div>
        <div class="deleteEditButton">
            <button><i class="fas fa-edit fa-3x edit" ></i></button>
            <button><i class="fa-solid fa-trash fa-3x delete"></i></button>
        </div>
    </div>`
    });
    document.getElementById("cards").innerHTML = data
    document.getElementById("dayTotal").innerHTML = "<h1>Total " + parseFloat(total).toFixed(2) + " " + selectedCurrency + "</h1>"
}