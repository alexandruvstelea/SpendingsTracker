const months = {"January":31,"February":28,"March":31,"April":30,"May":31,"June":30,"July":31,"August":31,"September":30,"October":31,"November":30,"December":31};
function generateMonths(){
  data = ``
  contor=0
  for (const [key, value] of Object.entries(months)) {
    contor++
      data += `
      <div class="card-month">
        <label   class="labelMonthContainer for="${contor}"><span class="monthKey">${key}</span>
          <input  type="radio" name="month" id="${contor}" value="${value}" onchange="generateDays(),totalSpending()">
        </label>
      </div> 
  `
  }
  document.getElementById('cards-month').innerHTML = data
}
