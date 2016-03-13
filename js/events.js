// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com

var CLIENT_ID = '476135981645-saemggldq22gk9ov8prim5bstplg4hlt.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

/**
* Check if current user has authorized this application.
*/
function checkAuth() {
    gapi.auth.authorize(
        {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
        }, handleAuthResult);
}

/**
* Handle response from authorization server.
*
* @param {Object} authResult Authorization result.
*/
function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        loadCalendarApi();
    } else {
        document.getElementById('events').innerHTML="error: handleAuthResult()";
    }
}

/**
* Initiate auth flow in response to user clicking authorize button.
*
* @param {Event} event Button click event.
*/
function handleAuthClick() {
    gapi.auth.authorize(
        {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
        handleAuthResult);
    return false;
}

/**
* Load Google Calendar client library. List upcoming events
* once client library is loaded.
*/
function loadCalendarApi() {
    //document.getElementById('events').innerHTML="boobs";
    gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

function convertTime(time) {
    var hours = time.substring(0,2)
    var minutes = time.substring(3,5)
    var ampm=null;
    var str;

    if(hours >= 12){
        ampm="PM";
    } else {
        ampm="AM";
    }

    hours = hours % 12 || 12;

    if(hours === 0){
        hours=12;
    }

    if(hours < 10){
        hours = "0"+hours;
    }
    
    str=hours+":"+minutes+ampm;
    
    return str;
}

function dateIsToday(date) {
    var today = new Date();
    var todayDay = today.getDate();
    var todayMonth = today.getMonth()+1;
    var todayYear = today.getYear()-100;
    
    var tempDay = date.substring(8,10);
    var tempMonth = date.substring(5,7);
    var tempYear = date.substring(2,4);
    
    if(todayMonth < 10){
        todayMonth = "0"+todayMonth;
    }
    
    if(todayDay < 10){
        todayDay = "0"+todayDay;
    }
    
    if(todayDay==tempDay && todayMonth==tempMonth && todayYear==tempYear){
        return true;
    }
    
    return false;
}


/**
* Print the summary and start datetime/date of the next ten events in
* the authorized user's calendar. If no events are found an
* appropriate message is printed.
*/
function listUpcomingEvents() {
    var request = gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    });

    request.execute(function(resp) {
        var events = resp.items;

        if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
                var event = events[i];
                var start = event.start.dateTime.toString("HH:mm");
                start = start.substring(11,16);
                var end = event.end.dateTime.toString("HH:mm");
                end = end.substring(11,16);
                var des = event.description;
                start = convertTime(start);
                end = convertTime(end);
                if(dateIsToday(event.start.dateTime.toString())){
                    if(des == null){
                        appendPre(event.summary + ' (' + start + '-' + end + ')');
                    } else {
                        appendPre(event.summary + ' (' + start + '-' + end + ') - ' + des);
                    }
                }
            }
        } else {
            appendPre('No upcoming events found.');
        }
        
    });
    setTimeout("handleAuthClick()", 3600000);
}

/**
* Append a pre element to the body containing the given message
* as its text node.
*
* @param {string} message Text to be placed in pre element.
*/
function appendPre(message) {
    var pre = document.getElementById('events');
    var textContent = document.createTextNode(message);
    var linebreak = document.createElement("br");
    pre.appendChild(textContent);
    pre.appendChild(linebreak);
    //document.getElementById('events').innerHTML=(message + '\n');
}

handleAuthClick();