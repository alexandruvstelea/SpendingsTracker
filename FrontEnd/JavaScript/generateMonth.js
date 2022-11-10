function generateMonths(){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  data = ``
  months.forEach(month => {
      data += `
  <div class="card-month">
      <h4>${month}</h4>
      </div>
  `
  })
  document.getElementById('cards-month').innerHTML = data
}


