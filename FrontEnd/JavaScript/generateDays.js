function generateDays(){
  days=31
  data = ``
    for(i=1;i<=days;i++){
         data += `
        <div class="card">
            <h1>${i}</h1>
            </div>
        `
    }
    document.getElementById('days-month').innerHTML = data
}
