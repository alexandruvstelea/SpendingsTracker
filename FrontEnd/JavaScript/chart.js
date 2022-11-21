var chartColors = ["red", "green","blue","orange","brown","magenta","lightgreen","lightgrey","red"];

let pie_chart = new Chart("pieChart", {
  type: "pie",
  data: {
    labels: "categories",
    datasets: [{
      backgroundColor: chartColors,
      data: "Values"
    }]
  },
});

let bar_chart = new Chart("barChart", {
  type: "bar",
  data: {
    labels: "categories",
    datasets: [{
      backgroundColor: chartColors,
      data: "Values"
    }]
  },
  options: {
    legend: {display: false},
  }
});


let line_chart = new Chart("lineChart", {
  type: "line",
  labels: 'Data',
  data: {
    labels: "",
    datasets: [{
      label:"Total Spendings",
      data: "Values",
      borderColor: "black",
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      fill: false
    },]
  },
  spanGaps: true,
    options: {
        scales: {
            xAxes: {
                ticks: [{
                    display: true,
                    autoskip: true,
                    maxTicksLimit: 6,
                    maxRotation: 0
                }]
            },
            yAxes: [{
              ticks:{
                beginAtZero: true
              }
            }]
        },
        responsive: true,
        spanGaps: true,
      
    }
})

