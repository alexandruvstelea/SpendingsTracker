var pieChart = document.getElementById("pieChart");
var barChart = document.getElementById("barChart");
var lineChart = document.getElementById("lineChart");

function functionPieChart() {
    pieChart.style.display = "block";
    barChart.style.display = "none";
    lineChart.style.display = "none";
}

function functionBarChart() {
    pieChart.style.display = "none";
    barChart.style.display = "block";
    lineChart.style.display = "none";
}

function functionLineChart() {
    pieChart.style.display = "none";
    barChart.style.display = "none";
    lineChart.style.display = "block";
}