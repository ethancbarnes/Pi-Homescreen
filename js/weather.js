function getWeather() {
    $(document).ready(function() { 
        $.simpleWeather({
            woeid: '2356940', //2357536 2356940
            location: '',
            unit: 'f',
            success: function(weather) {
                
                $("#currenttemp").html('<li>'+weather.temp+'&deg;'+weather.units.temp+'</li>');
                
                $("#day1temp").html('<li>'+weather.forecast[1].day+': '+weather.forecast[1].high+'|'+weather.forecast[1].low+'</li>');
                $("#day2temp").html('<li>'+weather.forecast[2].day+': '+weather.forecast[2].high+'|'+weather.forecast[2].low+'</li>');
                $("#day3temp").html('<li>'+weather.forecast[3].day+': '+weather.forecast[3].high+'|'+weather.forecast[3].low+'</li>');
                $("#day4temp").html('<li>'+weather.forecast[4].day+': '+weather.forecast[4].high+'|'+weather.forecast[4].low+'</li>');
                
                setImg(0);
                setImg(1);
                setImg(2);
                setImg(3);
                setImg(4);
                setTimeout("getWeather()", 3600000);
                
                //Really horrible optimization. I'll fix it later
                function setImg(day) {
                    var html;
                    if(day==0) {
                        if(weather.forecast[day].code==26 || weather.forecast[day].code==27 || weather.forecast[day].code==28 || weather.forecast[day].code==29 || weather.forecast[day].code==30 || weather.forecast[day].code==44) {
                            $("#currentimg").html('<img src="resources/cloudy.png" alt="currentimg">')
                        }
                        if(weather.forecast[day].code==5 || weather.forecast[day].code==6 || weather.forecast[day].code==10 || weather.forecast[day].code==35 || weather.forecast[day].code==8 || weather.forecast[day].code==9 || weather.forecast[day].code==11 || weather.forecast[day].code==12 || weather.forecast[day].code==40 || weather.forecast[day].code==18) {
                            $("#currentimg").html('<img src="resources/rain.png" alt="currentimg">')
                        }
                        if(weather.forecast[day].code==3 || weather.forecast[day].code==4 || weather.forecast[day].code==37 || weather.forecast[day].code==38 || weather.forecast[day].code==39 || weather.forecast[day].code==45 || weather.forecast[day].code==47 || weather.forecast[day].code==0 || weather.forecast[day].code==1 || weather.forecast[day].code==2) {
                            $("#currentimg").html('<img src="resources/lightning.png" alt="currentimg">')
                        }
                        if(weather.forecast[day].code==7 || weather.forecast[day].code==13 || weather.forecast[day].code==14 || weather.forecast[day].code==15 || weather.forecast[day].code==16 || weather.forecast[day].code==41 || weather.forecast[day].code==42 || weather.forecast[day].code==43 || weather.forecast[day].code==46 || weather.forecast[day].code==17 || weather.forecast[day].code==19) {
                            $("#currentimg").html('<img src="resources/snow.png" alt="currentimg">')
                        } else if(weather.forecast[day].code==20 || weather.forecast[day].code==21 || weather.forecast[day].code==22 || weather.forecast[day].code==23 || weather.forecast[day].code==24 || weather.forecast[day].code==31 || weather.forecast[day].code==32 || weather.forecast[day].code==33 || weather.forecast[day].code==44 || weather.forecast[day].code==36) {
                            $("#currentimg").html('<img src="resources/sunny.png" alt="currentimg">')
                        }
                    } else if(day==1){
                        if(weather.forecast[day].code==26 || weather.forecast[day].code==27 || weather.forecast[day].code==28 || weather.forecast[day].code==29 || weather.forecast[day].code==30 || weather.forecast[day].code==44) {
                            $("#day1img").html('<img src="resources/cloudy.png" alt="day1img">');
                        }
                        if(weather.forecast[day].code==5 || weather.forecast[day].code==6 || weather.forecast[day].code==10 || weather.forecast[day].code==35 || weather.forecast[day].code==8 || weather.forecast[day].code==9 || weather.forecast[day].code==11 || weather.forecast[day].code==12 || weather.forecast[day].code==40 || weather.forecast[day].code==18) {
                            $("#day1img").html('<img src="resources/rain.png" alt="day1img">');
                        }
                        if(weather.forecast[day].code==3 || weather.forecast[day].code==4 || weather.forecast[day].code==37 || weather.forecast[day].code==38 || weather.forecast[day].code==39 || weather.forecast[day].code==45 || weather.forecast[day].code==47 || weather.forecast[day].code==0 || weather.forecast[day].code==1 || weather.forecast[day].code==2) {
                            $("#day1img").html('<img src="resources/lightning.png" alt="day1img">');
                        }
                        if(weather.forecast[day].code==7 || weather.forecast[day].code==13 || weather.forecast[day].code==14 || weather.forecast[day].code==15 || weather.forecast[day].code==16 || weather.forecast[day].code==41 || weather.forecast[day].code==42 || weather.forecast[day].code==43 || weather.forecast[day].code==46 || weather.forecast[day].code==17 || weather.forecast[day].code==19) {
                            $("#day1img").html('<img src="resources/snow.png" alt="day1img">');
                        } else if(weather.forecast[day].code==20 || weather.forecast[day].code==21 || weather.forecast[day].code==22 || weather.forecast[day].code==23 || weather.forecast[day].code==24 || weather.forecast[day].code==31 || weather.forecast[day].code==32 || weather.forecast[day].code==33 || weather.forecast[day].code==44 || weather.forecast[day].code==36) {
                            $("#day1img").html('<img src="resources/sunny.png" alt="day1img">');
                        } else {
                            $("#day1img").html('<img src="resources/sunny.png" alt="day1img">');
                        }
                    } else if(day==2) {
                        if(weather.forecast[day].code==26 || weather.forecast[day].code==27 || weather.forecast[day].code==28 || weather.forecast[day].code==29 || weather.forecast[day].code==30 || weather.forecast[day].code==44) {
                            $("#day2img").html('<img src="resources/cloudy.png" alt="day2img">')
                        }
                        if(weather.forecast[day].code==5 || weather.forecast[day].code==6 || weather.forecast[day].code==10 || weather.forecast[day].code==35 || weather.forecast[day].code==8 || weather.forecast[day].code==9 || weather.forecast[day].code==11 || weather.forecast[day].code==12 || weather.forecast[day].code==40 || weather.forecast[day].code==18) {
                            $("#day2img").html('<img src="resources/rain.png" alt="day2img">')
                        }
                        if(weather.forecast[day].code==3 || weather.forecast[day].code==4 || weather.forecast[day].code==37 || weather.forecast[day].code==38 || weather.forecast[day].code==39 || weather.forecast[day].code==45 || weather.forecast[day].code==47 || weather.forecast[day].code==0 || weather.forecast[day].code==1 || weather.forecast[day].code==2) {
                            $("#day2img").html('<img src="resources/lightning.png" alt="day2img">')
                        }
                        if(weather.forecast[day].code==7 || weather.forecast[day].code==13 || weather.forecast[day].code==14 || weather.forecast[day].code==15 || weather.forecast[day].code==16 || weather.forecast[day].code==41 || weather.forecast[day].code==42 || weather.forecast[day].code==43 || weather.forecast[day].code==46 || weather.forecast[day].code==17 || weather.forecast[day].code==19) {
                            $("#day2img").html('<img src="resources/snow.png" alt="day2img">')
                        } else if(weather.forecast[day].code==20 || weather.forecast[day].code==21 || weather.forecast[day].code==22 || weather.forecast[day].code==23 || weather.forecast[day].code==24 || weather.forecast[day].code==31 || weather.forecast[day].code==32 || weather.forecast[day].code==33 || weather.forecast[day].code==44 || weather.forecast[day].code==36) {
                            $("#day2img").html('<img src="resources/sunny.png" alt="day2img">')
                        }
                    } else if(day==3) {
                        if(weather.forecast[day].code==26 || weather.forecast[day].code==27 || weather.forecast[day].code==28 || weather.forecast[day].code==29 || weather.forecast[day].code==30 || weather.forecast[day].code==44) {
                            $("#day3img").html('<img src="resources/cloudy.png" alt="day3img">')
                        }
                        if(weather.forecast[day].code==5 || weather.forecast[day].code==6 || weather.forecast[day].code==10 || weather.forecast[day].code==35 || weather.forecast[day].code==8 || weather.forecast[day].code==9 || weather.forecast[day].code==11 || weather.forecast[day].code==12 || weather.forecast[day].code==40 || weather.forecast[day].code==18) {
                            $("#day3img").html('<img src="resources/rain.png" alt="day3img">')
                        }
                        if(weather.forecast[day].code==3 || weather.forecast[day].code==4 || weather.forecast[day].code==37 || weather.forecast[day].code==38 || weather.forecast[day].code==39 || weather.forecast[day].code==45 || weather.forecast[day].code==47 || weather.forecast[day].code==0 || weather.forecast[day].code==1 || weather.forecast[day].code==2) {
                            $("#day3img").html('<img src="resources/lightning.png" alt="day3img">')
                        }
                        if(weather.forecast[day].code==7 || weather.forecast[day].code==13 || weather.forecast[day].code==14 || weather.forecast[day].code==15 || weather.forecast[day].code==16 || weather.forecast[day].code==41 || weather.forecast[day].code==42 || weather.forecast[day].code==43 || weather.forecast[day].code==46 || weather.forecast[day].code==17 || weather.forecast[day].code==19) {
                            $("#day3img").html('<img src="resources/snow.png" alt="day3img">')
                        } else if(weather.forecast[day].code==20 || weather.forecast[day].code==21 || weather.forecast[day].code==22 || weather.forecast[day].code==23 || weather.forecast[day].code==24 || weather.forecast[day].code==31 || weather.forecast[day].code==32 || weather.forecast[day].code==33 || weather.forecast[day].code==44 || weather.forecast[day].code==36) {
                            $("#day3img").html('<img src="resources/sunny.png" alt="day3img">')
                        }
                    } else if(day==4) {
                        if(weather.forecast[day].code==26 || weather.forecast[day].code==27 || weather.forecast[day].code==28 || weather.forecast[day].code==29 || weather.forecast[day].code==30 || weather.forecast[day].code==44) {
                            $("#day4img").html('<img src="resources/cloudy.png" alt="day4img">')
                        }
                        if(weather.forecast[day].code==5 || weather.forecast[day].code==6 || weather.forecast[day].code==10 || weather.forecast[day].code==35 || weather.forecast[day].code==8 || weather.forecast[day].code==9 || weather.forecast[day].code==11 || weather.forecast[day].code==12 || weather.forecast[day].code==40 || weather.forecast[day].code==18) {
                            $("#day4img").html('<img src="resources/rain.png" alt="day4img">')
                        }
                        if(weather.forecast[day].code==3 || weather.forecast[day].code==4 || weather.forecast[day].code==37 || weather.forecast[day].code==38 || weather.forecast[day].code==39 || weather.forecast[day].code==45 || weather.forecast[day].code==47 || weather.forecast[day].code==0 || weather.forecast[day].code==1 || weather.forecast[day].code==2) {
                            $("#day4img").html('<img src="resources/lightning.png" alt="day4img">')
                        }
                        if(weather.forecast[day].code==7 || weather.forecast[day].code==13 || weather.forecast[day].code==14 || weather.forecast[day].code==15 || weather.forecast[day].code==16 || weather.forecast[day].code==41 || weather.forecast[day].code==42 || weather.forecast[day].code==43 || weather.forecast[day].code==46 || weather.forecast[day].code==17 || weather.forecast[day].code==19) {
                            $("#day4img").html('<img src="resources/snow.png" alt="day4img">')
                        } else if(weather.forecast[day].code==20 || weather.forecast[day].code==21 || weather.forecast[day].code==22 || weather.forecast[day].code==23 || weather.forecast[day].code==24 || weather.forecast[day].code==31 || weather.forecast[day].code==32 || weather.forecast[day].code==33 || weather.forecast[day].code==44 || weather.forecast[day].code==36) {
                            $("#day4img").html('<img src="resources/sunny.png" alt="day4img">')
                        }
                    }
                }      
            },
            error: function(error) {
                $("#weather").html('<p>'+error+'</p>');
            }
        });
    });
}
getWeather();