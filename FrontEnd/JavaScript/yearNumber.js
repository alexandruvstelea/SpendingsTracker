function setYearNr() {
  var currentTime = new Date()
  var year = currentTime.getFullYear()
  document.getElementById("timeframe-container").innerHTML=
  `
  <button onclick="decreaseYearNr()" type="button" class="btn"><i class="fa-sharp fa-solid fa-arrow-left fa-3x"></i></button>
  <button onclick="myFunction()"  id="timeframe" class="dropbtn">${year}</button>
  <button onclick="increaseYearNr()" type="button" class="btn"><i class="fa-sharp fa-solid fa-arrow-right fa-3x" ></i></button>
  ` 
  generateYearCards()
}

function increaseYearNr(){
  currentNr=document.getElementById("timeframe").innerText
  currentNr=parseInt(currentNr)+1
  document.getElementById("timeframe").innerText=currentNr
}

function decreaseYearNr(){
  currentNr=document.getElementById("timeframe").innerText
  currentNr=parseInt(currentNr)-1
  document.getElementById("timeframe").innerText=currentNr
}

