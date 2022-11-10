function generateDays(){
  year=parseInt(document.getElementById("timeframe").innerText)
  days=parseInt(document.querySelector('input[name="month"]:checked').value)
  if (year%4==0 && days==28)
    days+=1
  data = ``
    for(i=1;i<=days;i++){
         data += `
        <div class="card-day">
            <button onclick="fetchSpendings(${parseInt(i)})" class="btn-day">${i}</button>
        </div>
        `

    }
    document.getElementById('days-month').innerHTML = data
}
