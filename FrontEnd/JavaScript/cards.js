function generateDayCards(){
    timeframe = document.getElementById('timeframe').innerText
    console.log(timeframe)
    if (timeframe=='WEEK'){
        days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        data = ``
        days.forEach(day => {
            data += `
                    <div class="card">
                        <h1>${day}</h1>
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
        });
    }
    document.getElementById('cards').innerHTML = data
}


function printSpendings(){
fetch('http://127.0.0.1:5000/assets')
.then(function (response) {
    return response.json()
})
.then(function (complete_response) {
    let data = ''
    complete_response.map((values) => {
        console.log(values)
    })
})
}