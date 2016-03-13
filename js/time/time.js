function updatetime() {
    "use strict";
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm=null;
    var str;

    if(hours >= 12){
        ampm="PM";
    } else {
        ampm="AM";
    }

    hours = d.getHours() % 12 || 12;

    if(hours === 0){
        hours=12;
    }

    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(hours < 10){
        hours = "0"+hours;
    }
    
    str=hours+":"+minutes+ampm;
    
    setTimeout("updatetime()",1000);
    document.getElementById('time').innerHTML=str;
}

updatetime();