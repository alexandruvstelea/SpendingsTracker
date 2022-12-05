function openPopupAddSpending(keyWord){
    document.getElementById("modalOne").style.display="block" 
    setPopupCurency()
    if(keyWord == "add"){
        document.getElementById("popupTitle").innerText = "Add Spending" 
        document.getElementById("btnPopup").value = "Add" 
    }
    else{
        document.getElementById("popupTitle").innerText = "Edit Spending" 
        document.getElementById("btnPopup").value = "Edit" 
        document.getElementById("nameAddSpending").value = "dsadasd"
        document.getElementById("valueAddSpending").value = "2312312"
    }
}

function closePopupAddSpending(){
    document.getElementById("modalOne").style.display="none"
    clearInput()
    document.getElementById("errorMessage").setAttribute("style","display:none")
 }

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none"
        clearInput()
        document.getElementById("errorMessage").setAttribute("style","display:none")
    }
}

function clearInput(){
    document.getElementById("nameAddSpending").value = ''
    document.getElementById("valueAddSpending").value = ''
}

function setPopupCurency(){
    document.getElementById("popupCurency").innerText = selectedCurrency
}