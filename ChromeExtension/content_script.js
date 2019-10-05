function findGameTimes() {
    let gameTimes = document.querySelectorAll('.card-time')
    let gameDate = document.querySelector("#date-container > div > div.p-button-group > div:nth-child(2) > button > input").value

    for (let times of gameTimes){
        let gameTime = times.innerText.slice(0,-3);
        let gameMoment = moment.tz(gameDate+" "+gameTime, "LL hh:mm A", "America/New_York");
        let convertedTime = gameMoment.clone().tz("Europe/Oslo");
        console.log(gameMoment, convertedTime)
        times.innerText = convertedTime.format("HH:mm");
    }
}

var m = document.createElement('script');
m.src = chrome.runtime.getURL('moment.min.js');
(document.head || document.documentElement).appendChild(m);

var m_timezone = document.createElement('script');
m_timezone.src = chrome.runtime.getURL('moment-timezone-with-data-10-year-range.min.js');
(document.head || document.documentElement).appendChild(m_timezone);

m.onload = function() {
    this.remove()
    findGameTimes()
};
