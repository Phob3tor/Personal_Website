const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
]

const weekNames = [
    "Mon", "Tue", "Wed", "Thu",
    "Fri", "Sat", "Sun"
]

const headerDate = document.getElementById("header-date");
const headerTime = document.getElementById("header-time");

// get the current time via API
async function fetchTime() {
    return fetch('https://worldtimeapi.org/api/timezone/Europe/Berlin')
        .then(response => response.json());
}

// refresh the time in the header
const refreshDate = () => {
    fetchTime().then(timeData => {
        // create a Date Object
        let currentDate = new Date(timeData.datetime)

        // the current date
        let day = currentDate.getDay().toString().padStart(2, "0");
        let month = monthNames[currentDate.getMonth()]
        let year = currentDate.getFullYear();
        let weekDay = weekNames[timeData.day_of_week - 1];

        // the current time
        let min = currentDate.getMinutes().toString().padStart(2, "0");
        let hours = currentDate.getHours().toString().padStart(2, "0");
        let abr = timeData.abbreviation;

        // change the content of the date and time spans
        headerDate.innerText = `${weekDay}, ${month} ${day} ${year}, `;
        headerTime.innerText = `${hours}:${min}, ${abr}`;
    });
}

window.onload = refreshDate()

let timeInterval = setInterval(() => {
    refreshDate();
}, 10000);

