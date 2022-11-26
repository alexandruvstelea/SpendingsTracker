function getPieBarChartData(chart) {
    let start_date = document.getElementById('date_start').value
    let end_date = document.getElementById('date_end').value
    data_line_chart = []
    const url = 'http://127.0.0.1:5000/piebarchart?' + new URLSearchParams({
        user: "andrei",
        start: start_date,
        end: end_date,
        currency: selectedCurrency,
    })
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            let data_chart = []
            for (i in complete_response.data) {
                let value_category = []
                value_category.push(complete_response.data[i].total)
                value_category.push(complete_response.data[i].category)
                data_chart.push(value_category)
            }
            if (chart == 'pie')
                updatePieChart(data_chart)
            else if (chart == 'bar')
                updateBarChart(data_chart)
        })
        .catch((err) => {
            console.log(err)
        })
}

function getLineChartData() {
    let start_date = document.getElementById('date_start').value
    let end_date = document.getElementById('date_end').value
    data_line_chart = []
    const url = 'http://127.0.0.1:5000/linechart?' + new URLSearchParams({
        user: "andrei",
        start: start_date,
        end: end_date,
        currency: selectedCurrency,
    })
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            let data_line_chart = []
            for (i in complete_response.data) {
                let value_date = []
                value_date.push(complete_response.data[i].date.substring(5, 16))
                value_date.push(complete_response.data[i].value)
                data_line_chart.push(value_date)
            }
            updateLineChart(data_line_chart)
        })
        .catch((err) => {
            console.log(err)
        })
}