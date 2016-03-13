function getDate() {
    "use strict";
    var d = new Date();
    var numday = d.getDate();
    var year = d.getYear();
    var day;
    var month;
    var str;
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    day=days[d.getDay()];
    month=months[d.getMonth()];
    
    str=day+", "+month+" "+numday;
    
    setTimeout("getDate()",1000);
    document.getElementById('date').innerHTML=str;
}

getDate();