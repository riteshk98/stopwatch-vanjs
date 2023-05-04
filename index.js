let count =0;
let min =0;
let hrs=0;
function countdown(){
    count++;
    document.getElementById("seconds").innerText = ('0' + count).slice(-2);
    if(count ==60){
        count=0;
        min++;
        document.getElementById("seconds").innerText = ('0' + count).slice(-2);
        document.getElementById("minutes").innerText = ('0' + min).slice(-2);
        if(min ==60){
            min=0;
            hrs++;
            document.getElementById("minutes").innerText = ('0' + min).slice(-2);
            document.getElementById("hrs").innerText = ('0' + hrs).slice(-2);
        }
        // clearInterval(interval1);
        return;
    }
}
function pause(){
    clearInterval(interval1);
    document.getElementById("play").style.visibility = "visible";
    document.getElementById("pause").style.visibility = "hidden";
}

function reset(){
    clearInterval(interval1);
    document.getElementById("play").style.visibility = "visible";
    document.getElementById("pause").style.visibility = "hidden";
    count=0;
    min=0;
    hrs=0;
    document.getElementById("minutes").innerText = ('0' + min).slice(-2);
    document.getElementById("seconds").innerText = ('0' + count).slice(-2);
    document.getElementById("hrs").innerText = ('0' + hrs).slice(-2);
}

function play(){
    interval1 =setInterval(countdown,1000);
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("pause").style.visibility = "visible";
}
document.getElementById("pause").style.visibility = "hidden";


// let interval1 =setInterval(countdown,1000);