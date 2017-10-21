let pizza = document.querySelector("#pizza");
let rPosition = document.querySelector(".rPosition");
let stop = document.querySelector(".stopButton");
let start = document.querySelector(".startButton");
let run = 0;
let header = document.querySelector(".start h1");
let bodyE = document.querySelector("body");
let wazupA = document.querySelector(".wazupAudio")
let screamA = document.querySelector(".screamAudio")
let pizzaA = document.querySelector(".pizzaAudio")
let contin = 0;
let speed = 500;

//Defining vw and vh
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

//Play pizza audio
pizzaA.volume = 0.1;
pizzaA.play();



//Space Bar
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        stopButtonAction();
    }
}


stop.addEventListener('click', stopButtonAction);

function stopButtonAction() {
    speed = 50;
    rPosition.style.transition = "all .05s";
    stop.value = "Haha, thought so? Enjoy a faster game ;-) ";
};

/*This is the actualy stop button function, but we just want to troll you

function stopButtonAction () {
    if (contin == 0) {
        stop.value = "Continue";
        pizzaA.pause();
        contin = 1;
        run = 1;
        rPosition.style.transition = "all 0s";
    } else if (contin == 1) {
        stop.value = "Stop";
        pizzaA.play();
        contin = 1;
        run = 0;
        rPosition.style.transition = "all .3s";
        moveAround();
    }
}; */

start.addEventListener('click', function () {
    run = 0;
    moveAround();
    pizza.classList.remove("hide");
    stop.classList.remove("hide");
    start.classList.add("fade");
    header.classList.add("fade")

});
//setTimeout(moveAround, 500);
rPosition.addEventListener('click', caughtPizza);

function moveAround() {
    let x = (Math.random() * w);
    let y = (Math.random() * h);

    if (x > w - 200) {
        x = w - 200;
        console.log("STOP X")
    }
    if (y > h - 190) {
        y = h - 190;
        console.log("STOP Y")
    }

    // rPosition.style.transform = "translate(" + x + "px," + y + "px)";
    rPosition.style.top = y + "px";
    rPosition.style.left = x + "px";
    console.log(x + "," + y);
    if (run == 0) {
        setTimeout(moveAround, speed);

    }


}

function caughtPizza() {
    run = 1;
    bodyE.style.backgroundImage = "url(whatsup.jpg)";
    pizza.classList.add("hide");
    pizzaA.pause();
    wazupA.play();
    setTimeout(scary, 2000);
}

function scary() {
    bodyE.style.backgroundImage = "url(scare.jpg)";
    screamA.play();
    wazupA.pause();


}
