const dateContainer = document.querySelector('.date'),
    dayContainer = document.querySelector('.day'),
    timeContainer = document.querySelector('.time'),
    secondsContainer = document.querySelector('.seconds'),
    ampmContainer = document.querySelector('.ampm');

function getDateTime() {
    const dateTime = new Date(),
    hours = dateTime.getHours(),
    ampm = `${hours >= 12 ? `PM` : `AM`}`,
    minutes = dateTime.getMinutes(),
    seconds = dateTime.getSeconds(),
    year = dateTime.getFullYear(),
    month = dateTime.getMonth() + 1,
    date = dateTime.getDate(),
    day = dateTime.getDay(),
    dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    hours_12 = `${hours % 12}`;

    dateContainer.textContent = `${year < 10 ? `0${year}` : year}. ${month < 10 ? `0${month}`: month}. ${date < 10 ? `0${date}` : date}.`;
    dayContainer.textContent = `${dayArray[day]}`;
    dayContainer.classList.add(dayArray[day]);
    timeContainer.textContent = `${hours_12 < 10 ? `0${hours_12}`:hours_12}:${minutes < 10 ? `0${minutes}` : minutes}`;
    secondsContainer.textContent = `${seconds < 10 ? `0${seconds}` : seconds}`;
    ampmContainer.textContent = `${ampm}`;

}

function init(){
    getDateTime();
    setInterval(getDateTime, 1000);
}

init();