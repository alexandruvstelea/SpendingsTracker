var spendings_list = [];
var totals;
var user_details;

function collectDate(day) {
  year = document.getElementById("timeframe").innerText;
  month = document.querySelector('input[name="month"]:checked').id;
  return day + "/" + month + "/" + year;
}

async function fetchSpendings(day) {
  date_day = collectDate(day);
  user_details = await getUserDetails();
  const url =
    "http://127.0.0.1:5000/retrievespendings?" +
    new URLSearchParams({
      email: user_details.email,
      start: date_day,
      end: date_day,
      currency: selectedCurrency,
    });
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (complete_response) {
      spendings_list = [];
      complete_response.spendings.forEach((spending) => {
        spendings_list.push(spending);
      });
      generateSpendingCards(spendings_list);
    })
    .catch((err) => {
      console.log(err);
    });
}

function startEndMonth() {
  year = document.getElementById("timeframe").innerText;
  month = document.querySelector('input[name="month"]:checked').id;
  lastDay = Object.values(months)[month - 1];
  startDate = "01/" + month + "/" + year;
  endDate = lastDay + "/" + month + "/" + year;
  return [startDate, endDate];
}

async function totalSpendingMonth() {
  user_details = await getUserDetails();
  date_interval = startEndMonth();
  if (document.querySelector('input[name="month"]:checked') != null) {
    date = startEndMonth();
    const url =
      "http://127.0.0.1:5000/total?" +
      new URLSearchParams({
        email: user_details.email,
        start: date_interval[0],
        end: date_interval[1],
      });
    showLoadingTotalMonth();
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (complete_response) {
        totals = complete_response;
        setTotalMonth();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function setTotalMonth() {
  switch (selectedCurrency) {
    case "EUR":
      if (totals.total_eur == 0)
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " " +
          totals.total_eur.toLocaleString("en-US") +
          " " +
          selectedCurrency;
      else
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " -" +
          totals.total_eur.toLocaleString("en-US") +
          " " +
          selectedCurrency;
      break;
    case "USD":
      if (totals.total_eur == 0)
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " " +
          totals.total_usd.toLocaleString("en-US") +
          " " +
          selectedCurrency;
      else
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " -" +
          totals.total_usd.toLocaleString("en-US") +
          " " +
          selectedCurrency;
      break;
    case "GBP":
      if (totals.total_eur == 0)
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " " +
          totals.total_gbp.toLocaleString("en-US") +
          " " +
          selectedCurrency;
      else
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " -" +
          totals.total_gbp.toLocaleString("en-US") +
          " " +
          selectedCurrency;
      break;
    case "RON":
      if (totals.total_eur == 0)
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " " +
          totals.total_ron.toLocaleString("en-US") +
          " " +
          selectedCurrency;
      else
        document.getElementById("totalMonth").innerHTML =
          Object.keys(months)[
            document.querySelector('input[name="month"]:checked').id - 1
          ] +
          " -" +
          totals.total_ron.toLocaleString("en-US") +
          " " +
          selectedCurrency;

      break;
  }
}
