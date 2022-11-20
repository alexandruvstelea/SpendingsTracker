var xPie = [ "Eating Out", "Entertainment", "Fuel", "Gifts","Shopping","Sports","Travel","Invoices"];
var yPie = [55, 49, 44, 24, 15,40,100,25];
var barColorsPie = ["red", "green","blue","orange","brown","magenta","lightgreen","lightgrey"];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xPie,
    datasets: [{
      backgroundColor: barColorsPie,
      data: yPie
    }]
  },

});

var xBar =[ "Eating Out", "Entertainment", "Fuel", "Gifts","Shopping","Sports","Travel","Invoices"];
var yBar = [55, 49, 44, 24, 15,40,100,25];
var barColorsBar = ["red", "green","blue","orange","brown","magenta","lightgreen","lightgrey"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: xBar,
    datasets: [{
      backgroundColor: barColorsBar,
      data: yBar
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

