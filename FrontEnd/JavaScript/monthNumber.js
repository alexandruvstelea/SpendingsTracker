const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let displayedMonth;

function getMonthNr(){
  const d = new Date();
  return d.getMonth()
}

function setMonth() {
  displayedMonth = getMonthNr()
  document.getElementById("timeframe").innerText= month[getMonthNr()]
  document.getElementById("timeframe-container").innerHTML=
  `
  <button onclick="decreaseMonth()" type="button" class="btn"><i class="fa-sharp fa-solid fa-arrow-left fa-3x"></i></button>
  <button onclick="myFunction()" id="timeframe" class="dropbtn">${month[getMonthNr()]}</button>
  <button onclick="increaseMonth()" type="button" class="btn"><i class="fa-sharp fa-solid fa-arrow-right fa-3x" ></i></button>
  ` 
  generateMonthCards()
}

function increaseMonth(){
  if ( displayedMonth + 1 <12)
    displayedMonth +=1
  document.getElementById("timeframe").innerText= month[displayedMonth]
  generateMonthCards()
}

function decreaseMonth(){
  if ( displayedMonth - 1 > -1)
    displayedMonth -=1
  document.getElementById("timeframe").innerText= month[displayedMonth]
  generateMonthCards()
}

