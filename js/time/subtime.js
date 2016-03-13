function subtime() {
    var date = new Date();
    var day = date.getDay();
    
    setTimeout("subtime()",1000);

    if(day===1||day===3||day===5){
        document.getElementById('subtime').innerHTML="The bus will leave at 10:40.";
    } else if(day===2||day===4){
        document.getElementById('subtime').innerHTML="The bus will leave at 10:30.";
    } else {
        document.getElementById('subtime').innerHTML="Enjoy your weekend.";
    }
}

subtime();