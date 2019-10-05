function findGameTimes() {
    let gameTimes = document.querySelectorAll('.card-time')
    for (let times of gameTimes){
        times.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
    }
}

var s = document.createElement('script');
s.src = chrome.runtime.getURL('moment.min.js');
s.onload = function() {
    this.remove();
    findGameTimes()
};
(document.head || document.documentElement).appendChild(s);
