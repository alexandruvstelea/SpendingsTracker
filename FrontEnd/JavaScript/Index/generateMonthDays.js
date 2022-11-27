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
        onclick="fetchSpendings(${parseInt(i)}), setSelectedDay(${parseInt(i)}), generateDays()"
        style="background:${getBackgroundDays()}" 
        onpointerenter="this.setAttribute('style', 'color: black; border:${getBackgroundDays()} 2px solid; background:var(--background-color)')" 
        onpointerleave="this.setAttribute('style', 'color: black; border:black 2px solid; background: ${getBackgroundDays()}')"
        class="btn-day">${i}</button>
      </div>  
        `
    }
    document.getElementById('days-month').innerHTML = data
}

function getBackgroundDays() {
    console.log(currentSelectedDay)
    if (i == currentSelectedDay)
        return "purple"
    if (i % 2 == 0)
        return "var(--primary-color)"
    else
        return "var(--secondary-color)"
}