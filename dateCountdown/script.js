var objective = "25 Dec 2022";
var UTC = new Date();
UTC = - (UTC.getTimezoneOffset() / 60);
const remDays = document.getElementById("days");
const remHours = document.getElementById("hours");
const remMins = document.getElementById("mins");
const remSecs = document.getElementById("secs");
getRemaining();
setInterval(getRemaining, 500);

function updateDate(){
    objective = document.getElementById("dateInput").value;
    objective = new Date(objective);
    objective.setHours(objective.getHours() - UTC);
    getRemaining();
}


function updateCountdown(days, hours, mins, secs){
    remDays.innerHTML = days;
    remHours.innerHTML = hours;
    remMins.innerHTML = mins;
    remSecs.innerHTML = secs;
}

function getRemaining () {
    const date = new Date(objective);
    const today = new Date();
    const milisecs = date - today;
    var secs = Math.floor(milisecs / 1000) % 60;
    secs = (secs < 10) ? '0' + secs : secs;
    var mins = Math.floor(milisecs / 1000 / 60) % 60;
    mins = (mins < 10) ? '0' + mins : mins;
    var hours = Math.floor((milisecs / 1000 / 60 / 60)) % 24;
    hours = (hours < 10) ? '0'+hours : hours;
    var days = Math.floor(milisecs / 1000 / 60 / 60 / 24);
    days = (days < 10) ? '0' + days : days;

    updateCountdown(days, hours, mins, secs)
}