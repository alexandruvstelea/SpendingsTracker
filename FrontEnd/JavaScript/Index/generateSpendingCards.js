function filterSpendings(spendings) {
    let filtered_spendings = []
    if (current_category_filter == "All")
        return spendings
    spendings.forEach(spending => {
        if (spending.category == current_category_filter)
            filtered_spendings.push(spending)
    })
    return filtered_spendings
}

function generateSpendingCards(spendings) {
    let total = 0
    data = ``
    let filtered_spendings = filterSpendings(spendings)
    filtered_spendings.forEach(spending => {
        total += spending.value
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
            <button onclick="openPopupAddSpending('edit')"><i class="fas fa-edit fa-3x edit" ></i></button>
            <button onclick="deleteSpending(${spending.id})"><i class="fa-solid fa-trash fa-3x delete"></i></button>
        </div>
    </div>`
    });
    document.getElementById("cards").innerHTML = data
    document.getElementById("dayTotal").innerHTML = "<h1>Total " + parseFloat(total).toFixed(2) + " " + selectedCurrency
}