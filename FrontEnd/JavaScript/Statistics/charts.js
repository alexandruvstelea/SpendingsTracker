var chartColors = ["red", "green", "blue", "orange", "brown", "magenta", "lightgreen", "lightgrey"];

let pie_chart = new Chart("pieChart", {
    type: "pie",
    labels: 'Data',
    data: {
        labels: "",
        datasets: [{
            backgroundColor: chartColors,
            data: "yPie",
            label: ""
        }]
    },

});

let bar_chart = new Chart("barChart", {
    type: "bar",
    labels: 'Data',
    data: {
        labels: "",
        datasets: [{
            backgroundColor: chartColors,
            data: "yBar",
            label: ""
        }]
    },
    options: {
        legend: { display: false },
    }
});


let line_chart = new Chart("lineChart", {
    type: "line",
    labels: 'Data',
    data: {
        labels: "",
        datasets: [{
            label: "Total Spendings",
            data: "Values",
            borderColor: "black",
            pointBackgroundColor: "red",
            pointBorderColor: "red",
            fill: false,
            pointRadius: 10,
            pointHoverRadius: 15,
            borderDash: [5, 25],
        }, ]
    },
    spanGaps: true,
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 22
                    }
                }
            }
        },
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
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        spanGaps: true,

    }
})
Chart.defaults.font.size = 22