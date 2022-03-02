import(Math)

const startDate = new Date('Sun Feb 27 2022 00:00:00 GMT-0300');
const todayLaps = document.getElementById("lapNumber");
const todayTotalLaps = document.getElementById("totalNumber");
const dictCycle = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 5,
    7: 4,
    8: 3,
    9: 2,
    0: 1
  }

getNewLaps();
setInterval(getNewLaps, 500);



function getLaps(n){
  let cycleDay = n % 10;
  let result = dictCycle[cycleDay];
  let plus = Math.floor(n / 20);
  result += plus;
  return(result);
}

function dayNum(date1, date2){
    var days = Math.floor((date2-date1)/(1000*60*60*24)) + 1;
    return(days);
}

function totalLaps(n){
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += getLaps(i);
    }
    return(result);
}

function getNewLaps(){
    let nowDate = new Date();
    let day = dayNum(startDate, nowDate);
    let today = getLaps(day);
    let total = totalLaps(day);
    updateLaps(today, total);

}

function updateLaps(today, total){
    todayLaps.innerHTML = today;
    todayTotalLaps.innerHTML = total;
}



