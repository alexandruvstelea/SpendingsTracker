
function weeksDays(){
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay()+1; // First day is the day of the month - the day of the week
    let weeksDays=[];
    let day;
    for(i=0;i<=6;i++){
      day = new Date(curr.setDate(first+i)).toISOString().split("T")[0]
      weeksDays.push(day);   
  }
    return weeksDays;
  }


  function generateYearCards(){
    data = ``
    for(i=0;i<=11;i++){
         data += `
        <div class="card">
            <h1>${month[i]}</h1>
            <h2></h2>
            <ul class="title">
                <li>Name</li>
                <li>Price</li>
            </ul>   
        <ul class="add">
            <li>Benzina</li>
            <li>150</li>
        </ul>
        </div>
        `
    }
    document.getElementById('cards').innerHTML = data
}

function generateMonthCards(){
    days=getDaysInCurrentMonth()
    data = ``
    for(i=1;i<=days;i++){
         data += `
        <div class="card">
            <h1>${i}</h1>
            <h2></h2>
            <ul class="title">
                <li>Name</li>
                <li>Price</li>
            </ul>   
        <ul class="add">
            <li>Benzina</li>
            <li>150</li>
        </ul>
        </div>
        `
    }
    document.getElementById('cards').innerHTML = data
}

function generateDayCards(){
    console.log("generate week days")
    let contor=0
    days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    dates=weeksDays()
    data = ``
    days.forEach(day => {
        data += `
    <div class="card">
        <h1>${day}</h1>
        <h2>${dates[contor]}</h2>
        <ul class="title">
            <li>Name</li>
            <li>Price</li>
        </ul>   
    <ul class="add">
        <li>Benzina</li>
        <li>150</li>
    </ul>
    <ul class="add">
        <li>Chirie</li>
        <li>250</li>
    </ul>
    <ul class="add">
        <li>Mancare</li>
        <li>500</li>
    </ul>
    </div>
    `
    contor++
    });
    document.getElementById('cards').innerHTML = data  
    }
     

function getDaysInCurrentMonth() {
    const date = new Date();
  
    return new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  }

