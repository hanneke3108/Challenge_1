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

//var myLineChart = new Chart(ctx, {
//    type: 'line',
//    data: data,
//    options: options
//});

var chart1 = document.getElementById("lineChart");

var lineChart = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ["1000", "2000", "3000", "4000", "5000"],
        datasets: [
            {
                label: "Current speed",
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            }, 
            {
                label: "Speed from previous flight",
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    }
//    options: {
//        scales: {
//            yAxes: [{
//                stacked: true
//            }]
//        }
//    }
});