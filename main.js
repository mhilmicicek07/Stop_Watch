// button variables
const startButton = document.querySelector("#button-start"),
 stopButton = document.querySelector("#button-stop"),
 resetButton = document.querySelector("#button-reset");

//display variable
const miliSecond = document.querySelector(".milisecond"),
 second = document.querySelector(".second"),
 minute = document.querySelector(".minute"),
 hour = document.querySelector(".hour");

// variables
let hr = "0" + 0;
let min = "0" + 0;
let sec = "0" + 0;
let ms = "0" + 0;

let startTimer;

function putValue () {
    miliSecond.innerText = ms;
    second.innerText = sec;
    minute.innerText = min;
    hour.innerText = hr;
}

function start() {
    startButton.classList.add("active");
    stopButton.classList.remove("active");
    resetButton.classList.add("active");

    startTimer = setInterval(() => {
        ms++;
        ms < 10 ? (ms = "0" + ms) : (ms = ms);
        if(ms == 100){
            sec++;
            sec < 10 ? (sec = "0" + sec) : (sec = sec);
            ms = "0" + 0;
        }

        if(sec == 60) {
            min++;
            min < 10 ? (min = "0" + min) : (min = min);
            sec = "0" + 0;
        }

        if(min == 60) {
            hr++;
            hr < 10 ? (hr = "0" + hr) : (hr = hr);
            min = "0" + 0;
        }

        putValue ();
    }, 10); // 0.01 saniyede bir güncelleme saniyede 10 güncelleme
}

function stop() {
    startButton.classList.remove("active");
    stopButton.classList.add("active");
    resetButton.classList.remove("active");

    clearInterval(startTimer);
}
function reset() {
    startButton.classList.remove("active");
    stopButton.classList.add("active");
    resetButton.classList.remove("active");

    hr = "0" + 0;
    min = "0" + 0;
    sec = "0" + 0;
    ms = "0" + 0;

    putValue();
}

// start button active class'ına sahip ise reset butonunun yaptığı işlemi engellemek gerek.

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

// ternory operator
// koşul ? doğruysa ne yapılacak : yanlışsa ne yapılacak ; (ternory operatörü react)