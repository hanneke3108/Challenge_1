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