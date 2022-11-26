function generateDays() {
    year = parseInt(document.getElementById("timeframe").innerText)
    days = parseInt(document.querySelector('input[name="month"]:checked').value)
    if (year % 4 == 0 && days == 28)
        days += 1
    data = ``
    for (i = 1; i <= days; i++) {
        data += `
      <div class="card-day">
        <button 
        style="background:${checkOddOrEven()}" 
        onpointerenter="this.setAttribute('style', 'color: black; border:${checkOddOrEven()} 2px solid; background:var(--background-color)')" 
        onpointerleave="this.setAttribute('style', 'color: black; border:black 2px solid; background: ${checkOddOrEven()}')"
        onclick="fetchSpendings(${parseInt(i)}),setSelectedDay(${parseInt(i)})"
        class="btn-day">${i}</button>
      </div>  
        `
    }
    document.getElementById('days-month').innerHTML = data
}

function checkOddOrEven() {
    backgroundOdd = "var(--secondary-color)"
    backgroundEven = "var(--primary-color)"
    if (i % 2 == 0)
        background = backgroundEven
    else
        background = backgroundOdd

    return background
}