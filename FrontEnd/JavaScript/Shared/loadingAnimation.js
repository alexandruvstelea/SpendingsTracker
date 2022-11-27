function showLoadingAccount(){
    document.getElementById("all_spendings").innerText = "Loading..."
    document.getElementById("biggest_spendings").innerText = "Loading..."
}

function showLoadingTotalMonth(){
    document.getElementById("totalMonth").innerHTML =  '</h1><progress id="loadingBar" class="hideloading"></progress>'
    document.getElementById("loadingBar").setAttribute("style","display:inline")
}

function hideLoadingTotalMonth(){
    document.getElementById("loadingBar").setAttribute("style","display:none")
}