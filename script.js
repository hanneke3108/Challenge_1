// Chart 1: own barChart

//BALKSCHAAL VERANDEREN!!!!!!!!!!!!!!
var speed = 3800;

document.getElementById('speed').innerHTML = speed;
document.getElementById('balk').style.width = speed+'%';

document.getElementById('gas').onclick = function(){
    speed += 10;

    if(speed > 4000){
        speed = 4000;
    }
    document.getElementById('speed').innerHTML = speed;
    document.getElementById('balk').style.width = speed+'%';
};



// Chart 2: js lineChart

var chart1 = document.getElementById("lineChart");

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'D-DIN';

var lineChart = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ["March", "April", "May", "June", "July", "Aug", "Sept", "Oct"],
        datasets: [
            {
                label: "During this flight",
                fill: false,
                lineTension: 0.3,
                borderColor: "rgba(63, 215, 215, 1)",
                pointHoverBackgroundColor: "rgb(75, 192, 192)",
                pointHoverBorderColor: "rgb(0, 0, 0)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1500, 2000, 2500, 2000, 3000, 3500, 3800],
            }, 
            {
                label: "Previous flight",
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 1)",
                pointHoverBackgroundColor: "rgb(255, 255, 255)",
                pointHoverBorderColor: "rgb(0, 0, 0)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1500, 1500, 1800, 2500, 2500, 3000, 3500],
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



//var chart2 = document.getElementById("circleChart");
//
//var circleChart = new Chart(chart2, {
//    type: 'doughnut',
//    data: {
//        labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
//        datasets: [
//            {
//                label: 'Points',
//                backgroundColor: ['#111111', '#222222', '#333333', '#444444'
//                data: [10, 20, 55, 30, 10]
//            }
//        ]
//    }
//    options: options
//});