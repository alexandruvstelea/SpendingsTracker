function setWeekNr() {
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /(24 * 60 * 60 * 1000));  
    var weekNumber = Math.ceil(days / 7);
    document.getElementById("timeframe-container").innerHTML=
    `
    <button onclick="decreaseWeekNr()" type="button" class="btn"><i class="fa-sharp fa-solid fa-arrow-left fa-3x"></i></button>
    <button onclick="myFunction()"  id="timeframe" class="dropbtn">${'WEEK ' + weekNumber}</button>
    <button onclick="increaseWeekNr()" type="button" class="btn"><i class="fa-sharp fa-solid fa-arrow-right fa-3x" ></i></button>
    ` 

    generateDayCards()
  }

  function increaseWeekNr(){
    currentNr=document.getElementById("timeframe").innerText.split(" ")[1]
    if(currentNr<53){
     document.getElementById("timeframe").innerText="WEEK "+( parseInt(currentNr) +1)
    }
  }

  function decreaseWeekNr(){
    currentNr=document.getElementById("timeframe").innerText.split(" ")[1]
    if(currentNr>1){
     document.getElementById("timeframe").innerText="WEEK "+( parseInt(currentNr) -1)
  }
}

