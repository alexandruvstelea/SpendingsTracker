let selectedCurrency = "EUR"

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function changeCurrency(newCurrency){
    selectedCurrency = newCurrency
    document.getElementById("dropbtn").innerText = selectedCurrency
    localStorage.setItem("currency", selectedCurrency)
}

function getCurrentCurrency(){
  selectedCurrency = localStorage.getItem("currency");
  document.getElementById("dropbtn").innerText = selectedCurrency
}