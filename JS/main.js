let countDownDate = new Date("2023 7 25 10:25:25").getTime()

let couter = setInterval( () =>{
    //Get Date Now
    let dateNow = new Date().getTime();

    //Find the Date Defferent Between now and countDownDate
    let dateDiff = countDownDate - dateNow;

    //Get time unite

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(countDownDate == 0){
        clearInterval(couter)
    }

},1000)

let skillsSection = document.querySelector(".our-skills");
let spanSkills = document.querySelectorAll(".the-progress span");

let stateSction = document.querySelector(".stats");
let num = document.querySelectorAll(".box h4");
let start = false;


window.onscroll = function () {
      // Skills Animate Width
    if (window.scrollY >= skillsSection.offsetTop) {
        spanSkills.forEach((span) => {
            span.style.width = span.dataset.width;
        });    
    }    
      // Stats Increase Number
    if (window.scrollY >= stateSction.offsetTop - 300) {
        if (!start) {
            num.forEach((num) => startcount(num));
        }
        start = true;
    }
};    



function startcount(el) {
    let goal = el.dataset.num;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// color switcher 

let lis = document.querySelectorAll(".color ul li")
let root = document.querySelector(":root")


if(window.localStorage.getItem("switcher-color")){

    root.style.setProperty("--main-color", window.localStorage.getItem("switcher-color"))
    root.style.setProperty("--main-color-alt", window.localStorage.getItem("switcher-color-alt"))

    lis.forEach((li) =>{
        li.classList.remove("active")
    })
    document.querySelector(`[data-color="${window.localStorage.getItem("switcher-color")}"]`).classList.add("active")
}

lis.forEach((ele) => {
    ele.addEventListener("click" , (li) => {
        lis.forEach((e) => {
            e.classList.remove("active")
        })
        li.currentTarget.classList.add("active")
        window.localStorage.setItem("switcher-color", li.currentTarget.dataset.color)
        window.localStorage.setItem("switcher-color-alt", li.currentTarget.dataset.colorr)
        root.style.setProperty("--main-color", li.currentTarget.dataset.color)
        root.style.setProperty("--main-color-alt", li.currentTarget.dataset.colorr)
    })
})



