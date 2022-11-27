const months = { "January": 31, "February": 28, "March": 31, "April": 30, "May": 31, "June": 30, "July": 31, "August": 31, "September": 30, "October": 31, "November": 30, "December": 31 };

function generateMonths() {
    data = ``
    contor = 0
    for (const [key, value] of Object.entries(months)) {
        contor++
        data += `
      <div id="${key}" class="card-month">
        <label class="labelMonthContainer" for="${contor}"><span class="monthKey">${key}</span>
          <input type="radio" name="month" id="${contor}" value="${value}" onchange="generateDays(),totalSpendingMonth(),highlight()">
        </label>
      </div> 
  `}
    document.getElementById('cards-month').innerHTML = data
}


function highlight(){
  var radios = document.getElementsByName('month');
  for (b in radios){
    console.log(b)
    if(b.checked)
      
      document.getElementById(b.label).setAttribute("style", " background:rgb(7, 206, 139);");
      }

    }





// var radios = document.getElementsByName('month');

//   for (var i = 0; i < radios.length; i++) {
//      radios[i].onchange = function () {
//       if(nr>=1){
//         if(nr%2==1 )
//           document.getElementById(t).setAttribute("style", " background: var(--secondary-color);");
//         else
//           document.getElementById(t).setAttribute("style", " background:var(--primary-color);");
//       } 
//       t="cardMonthId"+this.id
//       nr=this.id

//       if(this.id%2==1)
//         document.getElementById(t).setAttribute("style", " background:rgb(7, 206, 139);");
//       else
//         document.getElementById(t).setAttribute("style", " background: #006c9b;");
//      }
//  }