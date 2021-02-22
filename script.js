// Chart 1: own barChart

var s = 75;

document.getElementById('fuel').innerHTML = s;
document.getElementById('balk').style.width = s+'%';

document.getElementById('tank').onclick = function(){
    s += 3;

    if(s > 100){
        s = 100;
    }
    document.getElementById('fuel').innerHTML = s;
    document.getElementById('balk').style.width = s+'%';
};



// Chart 2: js lineChart

var chart1 = document.getElementById("lineChart");

Chart.defaults.global.defaultFontColor = '#666';
Chart.defaults.global.defaultFontFamily = 'D-DIN';

var lineChart = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ["March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [
            {
                label: "Current speed",
                fill: false,
                lineTension: 0.3,
                borderColor: "rgba(63, 215, 215, 1)",
//                borderCapStyle: 'butt',
//                borderDash: [],
//                borderDashOffset: 0.0,
//                borderJoinStyle: 'miter',
//                pointBorderColor: "rgb(255, 255, 255)",
//                pointBackgroundColor: "#fff",
//                pointBorderWidth: 1,
//                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(75, 192, 192)",
                pointHoverBorderColor: "rgb(0, 0, 0)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1500, 2000, 2500, 2000, 3000, 3500, 3800, 3500],
            }, 
            {
                label: "Speed from previous flight",
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 1)",
//                borderCapStyle: 'butt',
//                borderDash: [],
//                borderDashOffset: 0.0,
//                borderJoinStyle: 'miter',
//                pointBorderColor: "rgba(75, 192, 192, 1)",
//                pointBackgroundColor: "#fff",
//                pointBorderWidth: 1,
//                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(255, 255, 255)",
                pointHoverBorderColor: "rgb(0, 0, 0)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1500, 1500, 1800, 2500, 2500, 3000, 2500, 3500],
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});



// Chart 3: js circleChart