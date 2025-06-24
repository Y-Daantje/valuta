console.log('Main loaded');

const cardContainer = document.querySelector('.card-container');
const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');
const chart3 = document.querySelector('.chart-3');
const chart4 = document.querySelector('.chart-4 ');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

// searchButton.addEventListener('click', function(){

//     const searchValue = searchInput.value;

//     fetch(`https://api.coincap.io/v2/assets/${searchValue}/history?interval=d1`)
//         .then(data => data.json())
//         .then(jsonData => showDataByTime(jsonData));
// });

fetch('https://api.coincap.io/v2/assets')
    .then(data => data.json())
    .then(jsonData => showAll(jsonData));

function showAll(crypto){
    showData(crypto, ['bitcoin', 'xrp', 'BNB', 'Dogecoin'], chart1, 'Crypto', 'line');
    showData(crypto, ['ethereum',  'ripple', 'litecoin'], chart2, 'Crypto', 'bar');
    showData(crypto, ['binance-coin', 'solana'], chart3, 'Crypto', 'bar');
    showData(crypto, ['solana'], chart4, 'Crypto', 'bar');
}

function showData(cryptos, selectedCoins, canvas, label, chartType){
    const labels = [];
    const data = [];
    cryptos.data.forEach(crypto => {
        if(selectedCoins.includes(crypto.id)){
            labels.push(crypto.id);
            data.push(crypto.priceUsd);
        }
    });
    createChart(canvas, labels, data, label, chartType);
}

function createChart(canvas, labels, data, label, chartType){
    new Chart(canvas, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


function showDataByTime(cryptoDateTimeData){
    const labels = [];
    const data = [];
    for (let i = 0; i < cryptoDateTimeData.data.length; i++) {
        const crypto = cryptoDateTimeData.data[i];
        labels.push(crypto.date);
        data.push(crypto.priceUsd);
    }
    console.log(labels);
    console.log(data);
    createChart(chart2, labels, data, 'Crypto by date', 'line');
}

// // chart 2
// function showData2(cryptos){
//     console.log(cryptos);
//     const labels = [];
//     const data = [];
//     for (let i = 0; i < cryptos.data.length; i++) {
//         const crypto = cryptos.data[i];
//         if(crypto.id === 'ethereum' || 'bitcoin' ){
//             labels.push(crypto.id);
//             data.push(crypto.priceUsd);
//         }
//     }
//     console.log(labels);
//     console.log(data);
//     createChart2(chart2, labels, data, 'Crypto');
    
// }


// function createChart2(canvas, labels, data, label, ){
//     new Chart(canvas, {
//         type: "doughnut",
//         data: {
//         //de labels komen op de x as
//         labels: labels,
//         datasets: [{
//             label: label,
//             // de data komt op de y as
//             data: data,
//             borderWidth: 1
//         }]
//         },
//         options: {
//         scales: {
//             y: {
//             beginAtZero: true
//             }
//         }
//         }
//     });
// }

// // chart2


// // chart3

// function showDataByTime(cryptoDateTimeData){
//     const labels = [];
//     const data = [];
//     for (let i = 0; i < cryptoDateTimeData.data.length; i++) {
//         const crypto = cryptoDateTimeData.data[i];
//         labels.push(crypto.date);
//         data.push(crypto.priceUsd);
//     }
//     console.log(labels);
//     console.log(data);
//     createChart(chart3, labels, data, 'Crypto by date', 'line');
// }


// function showData3(cryptos){
//     console.log(cryptos);
//     const labels = [];
//     const data = [];
//     for (let i = 0; i < cryptos.data.length; i++) {
//         const crypto = cryptos.data[i];
//         if(crypto.id === 'binance-coin'){
//             labels.push(crypto.id);
//             data.push(crypto.priceUsd);
//         }
//     }
//     console.log(labels);
//     console.log(data);
//     createChart3(chart3, labels, data, 'Crypto', 'bar');
    
// }


// function createChart3(canvas, labels, data, label, ){
//     new Chart(canvas, {
//         type: "line",
//         data: {
//         //de labels komen op de x as
//         labels: labels,
//         datasets: [{
//             label: label,
//             // de data komt op de y as
//             data: data,
//             borderWidth: 1
//         }]
//         },
//         options: {
//         scales: {
//             y: {
//             beginAtZero: true
//             }
//         }
//         }
//     });
// }

// function showDataByTime(cryptoDateTimeData){
//     const labels = [];
//     const data = [];
//     for (let i = 0; i < cryptoDateTimeData.data.length; i++) {
//         const crypto = cryptoDateTimeData.data[i];
//         labels.push(crypto.date);
//         data.push(crypto.priceUsd);
//     }
//     console.log(labels);
//     console.log(data);
//     createChart(chart4, labels, data, 'Crypto by date', 'line');
// }


// function showData4(cryptos){
//     console.log(cryptos);
//     const labels = [];
//     const data = [];
//     for (let i = 0; i < cryptos.data.length; i++) {
//         const crypto = cryptos.data[i];
//         if(crypto.id === 'solana'){
//             labels.push(crypto.id);
//             data.push(crypto.priceUsd);
//         }
//     }
//     console.log(labels);
//     console.log(data);
//     createChart4(chart4, labels, data, 'Crypto', 'bar');
    
// }


// function createChart4(canvas, labels, data, label, ){
//     new Chart(canvas, {
//         type: "bar",
//         data: {
//         //de labels komen op de x as
//         labels: labels,
//         datasets: [{
//             label: label,
//             // de data komt op de y as
//             data: data,
//             borderWidth: 1
//         }]
//         },
//         options: {
//         scales: {
//             y: {
//             beginAtZero: true
//             }
//         }
//         }
//     });
// }



/*function showData(jsonData){
    showCards(jsonData);
    showCharts(jsonData);
}*/
