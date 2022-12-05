function addSpending() {
    const url = 'http://127.0.0.1:5000/insertspending?' + new URLSearchParams({
        name: document.getElementById("nameAddSpending").value,
        category: document.getElementById("categoryAddSpending").value,
        value: document.getElementById("valueAddSpending").value,
        user: "andrei",
        date: document.getElementById("datePopup").value,
        currency: selectedCurrency,
    })
    fetch(url, { method: 'POST' })
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {

            // console.log(complete_response)
            fetchSpendings(currentSelectedDay)
            totalSpendingMonth()
        })
        .catch((err) => {
            console.log(err)
        })
}

function loadEventListeners() {
    document.querySelector('.popupForm').addEventListener('submit', inputValidate);
}

function inputValidate(event) {
    errorInput=true
    if(document.getElementById("nameAddSpending").value === '') 
        errorMessage("Name Empty")
    else if(document.getElementById("nameAddSpending").value.length >=25)
        errorMessage("Too many characters")
    else
        errorInput=false

    if(document.getElementById("valueAddSpending").value === '' || document.getElementById("valueAddSpending").value <=-1 || document.getElementById("valueAddSpending").value >=999999999)
        errorMessage("Wrong Value") 
    else if (errorInput==false){
        addSpending()
        closePopupAddSpending()
        clearInput()
        document.getElementById("errorMessage").setAttribute("style","display:none")
    }

    event.preventDefault()
}

function errorMessage(message){
    document.getElementById("errorMessage").setAttribute("style","display:block")
    document.getElementById("insertError").innerText =message
}
