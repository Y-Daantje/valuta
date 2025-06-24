// https://www.vatcomply.com/documentation

const backgroundColours = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
];

// Elements for the charts
const mainChart = document.querySelector(".mainChart");
const USDChart = document.querySelector(".USDchart");
const historyChart = document.querySelector('.history-chart'); // Corrected selector for historical chart

// Fetch data for the EUR-based chart from the API
fetch('https://api.vatcomply.com/rates')
    .then(response => response.json())
    .then(jsonData => showChartEUR(jsonData))
    .catch(error => console.error('Error fetching rates data:', error));

// Fetch data for the historical chart from the API (specified date)
fetch('https://api.vatcomply.com/rates?date=2021-01-01')
    .then(response => response.json())
    .then(jsonData => showChart(jsonData, historyChart, "Historical Exchange Rates", "line")) // Fixed the variable name to historyChart
    .catch(error => console.error('Error fetching historical rates data:', error));

// Fetch data for the USD-based chart from the API
fetch('https://api.vatcomply.com/rates?base=USD')
    .then(response => response.json())
    .then(jsonData1 => showChartUSD(jsonData1))
    .catch(error => console.error('Error fetching rates data:', error));

// EUR chart
function showChartEUR(valuta) {
    const labels = [];
    const data = [];
    const rates = valuta.rates; // Accessing the rates object

    // Specify the currencies you want to include in the chart
    const currencies = ["USD", "GBP", "AUD", "CAD", "CHF", "ILS", "RON", "BGN"];

    currencies.forEach(currency => {
        if (rates[currency] !== undefined) {
            labels.push(currency);
            data.push(rates[currency]);
        }
    });

    console.log(labels);
    console.log(data);
    createChartEUR(mainChart, labels, data, "Exchange Rates against EUR", "line");
}

function createChartEUR(canvasElement, labels, data, title, chartType) {
    new Chart(canvasElement, {
        type: chartType,
        data: {
            labels: labels, // Currency labels
            datasets: [{
                label: title,
                data: data,
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// USD chart
function showChartUSD(valuta1) {
    const labels = [];
    const data = [];
    const rates = valuta1.rates; // Accessing the rates object

    // Specify the currencies you want to include in the chart
    const currencies = ["EUR", "GBP", "AUD", "CAD", "CHF", "ILS", "RON", "BGN"];

    currencies.forEach(currency1 => {
        if (rates[currency1] !== undefined) {
            labels.push(currency1);
            data.push(rates[currency1]);
        }
    });

    console.log(labels);
    console.log(data);
    createChartUSD(USDChart, labels, data, "Exchange Rates against USD", "bar");
}

function createChartUSD(canvasElement, labels, data, title, chartType) {
    new Chart(canvasElement, {
        type: 'bar', // Here the type of chart is specified using the parameter
        data: {
            labels: labels, // Currency labels
            datasets: [{
                label: title,
                data: data,
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// History Chart (Updated function names and variables)
function showChart(valuta, canvasElement, title, chartType) {
    const labels = [];
    const data = [];
    const rates = valuta.rates; // Accessing the rates object

    // Specify the currencies you want to include in the chart
    const currencies = ["PHP", "SGB", "ZAR", "THB", "CNY", "NOK", "TRY", "SEK"];

    currencies.forEach(currency => {
        if (rates[currency] !== undefined) {
            labels.push(currency);
            data.push(rates[currency]);
        }
    });

    console.log(labels);
    console.log(data);
    createChart(historyChart, labels, data, title, chartType);
}

function createChart(canvasElement, labels, data, title, chartType) {
    new Chart(canvasElement, {
        type: chartType,
        data: {
            labels: labels, // Currency labels
            datasets: [{
                label: title,
                data: data,
                borderColor: backgroundColours,
                backgroundColor: backgroundColours.map(color => color + "33"), // Adding transparency
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



    // Elements
    const currencyElement = document.querySelector('.currency-info');

    // Fetch user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const { latitude, longitude } = position.coords;

            // Fetch currency using API
            fetch(`https://api.vatcomply.com/geolocate?lat=${latitude}&lng=${longitude}`)
                .then(response => response.json())
                .then(data => {
                    const currency = data.currency;
                    // Update currency display
                    currencyElement.innerHTML = `Local Currency: ${currency}`;
                })
                .catch(error => {
                    console.error('Error fetching currency:', error);
                });
        }, function(error) {
            console.error('Error getting geolocation:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
