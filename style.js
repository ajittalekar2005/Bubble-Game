

var co = document.querySelector(".cover");
var no = document.getElementById("no");
var score = document.getElementById("score");
var time = document.getElementById("time");
var find = document.getElementById("bu");
var hint = document.getElementById("hint");

var flage = true;

var c = 5;

hint.textContent = c;

score.textContent = 0;
var scoreVlaue = 0;
var t = 60;
var searchedNo;
var z = 1;

function Score() {
    scoreVlaue += 10;
    score.textContent = scoreVlaue;

}



number();

function createCircle() {
    for (var i = 0; i < 200; i++) {
        var div = document.createElement("div");
        div.className = "gole";
        div.textContent = Math.floor(Math.random() * 100); // Generates a random number between 0-99
        co.appendChild(div);
    }
}

createCircle();



function runTime() {
    var timeinter = setInterval(function () {
        if (t > 0) {
            t--;
            time.textContent = t;
        }
        else {
            clearInterval(timeinter);
            co.innerHTML = `<h1>  Your score is ${scoreVlaue},</h1>`;
            no.innerHTML = '0';
        }
    }, 1000)
}
runTime();

co.addEventListener("click", function (det) {

    targetedNo = det.target.textContent;

    if(targetedNo == searchedNo){
      det.target.style.backgroundColor = "blue";
    }
    if (targetedNo == searchedNo && t > 0) {
        number();
        addNumber();
        Score();
        flage = true;
    }

})


find.addEventListener("click", function () {
    var all = document.querySelectorAll(".gole");

    if (c == 0)
        alert("Your found limit is up");
    all.forEach(div => {

        if (div.textContent == searchedNo && c > 0 && flage == true) {
            div.style.backgroundColor = "white";

        }


    });

    if (c > 0 && flage == true) {
        c = c - 1;
        hint.textContent = c;
        flage = false;

    }

})


function addNumber() {

    var all = document.querySelectorAll(".gole");
    var z = 1;


    all.forEach(div => {

        div.textContent = Math.floor(Math.random() * 100);
        if (Number(div.textContent) == searchedNo && z == 1) {
            z = 0;
        }

        div.style.backgroundColor = "bisque";
    });

    if (z == 1) {
        all[25].textContent = searchedNo;
    }

}


function number() {
    no.textContent = Math.floor(Math.random() * 100);

    searchedNo = no.textContent;
}



