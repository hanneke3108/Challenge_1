var s = 75;

document.getElementById('speed').innerHTML = s;
document.getElementById('balk').style.width = s+'%';

document.getElementById('gas').onclick = function(){
    s += 3;

    if(s > 100){
        s = 100;
    }
    document.getElementById('speed').innerHTML = s;
    document.getElementById('balk').style.width = s+'%';
};