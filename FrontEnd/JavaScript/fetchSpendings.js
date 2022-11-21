selectedChart = 'pie'

function updateSelectedChart(newChart){
  selectedChart = newChart
  if (newChart == 'pie')
    getPieBarChartData('pie')
  if (newChart == 'bar')
    getPieBarChartData('bar')
  if (newChart == 'line')
    getLineChartData()
}

function fetchSpendings(day) {
  date=collectDate(day)
  const url = 'http://127.0.0.1:5000/retrievespendings?' + new URLSearchParams({
    user: "andrei",
    start: date,
    end: date,
    currency: selectedCurrency,
})
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (complete_response) {
        console.log(complete_response.spendings)
    })
    .catch((err) => {
      console.log(err)
  })
  }


function totalSpending() {
  date=startEndMonth()
  const url = 'http://127.0.0.1:5000/total?' + new URLSearchParams({
    user: "andrei",
    start: date[0],
    end: date[1],
    currency: selectedCurrency,
})
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (complete_response) {
        document.getElementById("totalMonth").innerText= Object.keys(months)[document.querySelector('input[name="month"]:checked').id-1]+" "+complete_response.total+" "+selectedCurrency
    })
    .catch((err) => {
      console.log(err)
  })
  }






  
function collectDate(day){
  year=document.getElementById("timeframe").innerText
  month=document.querySelector('input[name="month"]:checked').id
 return day+"/"+month+"/"+year
}

function startEndMonth(){
  year=document.getElementById("timeframe").innerText
  month=document.querySelector('input[name="month"]:checked').id
  lastDay=Object.values(months)[month-1]
  startDate="01/"+month+"/"+year
  endDate=lastDay+"/"+month+"/"+year
  return [startDate,endDate]
}

async function updateLineChart(new_data) {
  let dates = []
  let values = []
  for (i = 0; i < new_data.length; i++) {
      dates.push(new_data[i][0])
      values.push(new_data[i][1])
  }
  line_chart.data.datasets[0].data = values
  line_chart.data.labels = dates
  line_chart.update()
}

function getLineChartData(){
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
    .then(function (response) {
        return response.json()
    })
    .then(function (complete_response) {
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

function updatePieChart(new_data){
  let categories = []
  let values = []
  for (i = 0; i < new_data.length; i++) {
      values.push(new_data[i][0])
      categories.push(new_data[i][1])
  }
  console.log(values)
  console.log(categories)
  pie_chart.data.datasets[0].data = values
  pie_chart.data.labels = categories
  pie_chart.update()
}

function updateBarChart(new_data){
  let categories = []
  let values = []
  for (i = 0; i < new_data.length; i++) {
      values.push(new_data[i][0])
      categories.push(new_data[i][1])
  }
  bar_chart.data.datasets[0].data = values
  bar_chart.data.labels = categories
  bar_chart.update()
}

function getPieBarChartData(chart){
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
    .then(function (response) {
        return response.json()
    })
    .then(function (complete_response) {
      let data_chart = []
      for (i in complete_response.data) {
        let value_category = []
        value_category.push(complete_response.data[i].total)
        value_category.push(complete_response.data[i].category)
        data_line_chart.push(value_category)
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