document.addEventListener("DOMContentLoaded", () => {
    // document button consts
    const linkBtn = document.getElementById("link-btn");
    const langBtn = document.getElementById("lang-btn");
    const sumBtn = document.getElementById("sum-btn");
    const bioBtn = document.getElementById("bio-btn");
    const statBtn = document.getElementById("stat-btn");
    const credBtn = document.getElementById("cred-btn");

    // document window consts
    const sections = document.querySelectorAll("main-section");

    const linkSec = document.getElementById("link-section");
    const langSec = document.getElementById("lang-section");
    const sumSec = document.getElementById("sum-section")
    const bioSec = document.getElementById("bio-section");
    const statSec = document.getElementById("stat-section");
    const credSec = document.getElementById("cred-section");



    const credPic = document.getElementById("cred-pic");

    // document skill bars
    const skillBars = document.getElementsByClassName("bar-inner");



    // window open
    const windows = {
        "link": 0,
        "lang": 0,
        "sum": 0,
        "bio": 0,
        "stat": 0,
        "cred": 0
    }


    const hideAll = () => {
        windows["stat"] = 0;
        windows["bio"] = 0;
        windows["cred"] = 0;
        windows["lang"] = 0;
        windows["sum"] = 0;
        windows["link"] = 0;
        linkSec.classList.add("hidden");
        langSec.classList.add("hidden");
        sumSec.classList.add("hidden");
        bioSec.classList.add("hidden");
        statSec.classList.add("hidden");
        credSec.classList.add("hidden");
    }

    const unHide = (sect) => {
        hideAll();
        sect.classList.remove("hidden");
    }


    langBtn.addEventListener("click", () => {
        if (windows["lang"] == 1) {
            hideAll();
            windows["lang"] = 0;
        }
        else {
            unHide(langSec);
            windows["lang"] = 1;
        }
        
    });

    linkBtn.addEventListener("click", () => {
        if (windows["link"] == 1) {
            hideAll();
            windows["link"] = 0;
        }
        else {
            unHide(linkSec);
            windows["link"] = 1;
        }
        
    });

    sumBtn.addEventListener("click", () => {
        if (windows["sum"] == 1) {
            hideAll();
            windows["sum"] = 0;
        }
        else {
            unHide(sumSec);
            windows["sum"] = 1;
        }
    });

    bioBtn.addEventListener("click", () => {
        if (windows["bio"] == 1) {
            hideAll();
            windows["bio"] = 0;
        }
        else {
            unHide(bioSec);
            windows["bio"] = 1;
        }
    });

    statBtn.addEventListener("click", () => {
        if (windows["stat"] == 1) {
            hideAll();
            windows["stat"] = 0;
        }
        else {
            unHide(statSec);
            fillBars();
            windows["stat"] = 1;

        }
    });

    credBtn.addEventListener("click", async () => {
        if (windows["cred"] == 1) {
            hideAll();
            windows["cred"] = 0;
        }
        else {
            let dogPic = await fetchDog();
            credPic.src = dogPic["message"];
            unHide(credSec);
            windows["cred"] = 1;
        }
    })

    async function fetchDog() {
        return fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json());
    }


    const fillBars = () => {
        for (let bar of skillBars) {
            let currentBar = bar.id.split("-")[0];
            let start = 0;

            let barInterval = setInterval(() => {
                if (start >= skills[currentBar]) {
                    clearInterval(barInterval);
                }
                else {
                    start++;
                    bar.style.width = start + "%";
                }
            }, 10);
        }
    }

    

});

