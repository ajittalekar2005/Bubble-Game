

var co = document.querySelector(".cover");
var no = document.getElementById("no");
var score = document.getElementById("score");
var time = document.getElementById("time");
var find = document.getElementById("bu");
var hint = document.getElementById("hint");

 var bubb = " radial-gradient(    circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4) 40%,rgba(255, 255, 255, 0.2) 60% )";

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
    for (var i = 0; i < 180; i++) {
        var div = document.createElement("div");
        div.className = "gole";
        div.textContent = Math.floor(Math.random() * 100); 
        if( i == 50)
            div.textContent = no.textContent;
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


const bubbles = document.querySelectorAll(".gole"); // All bubble divs inside

bubbles.forEach(bubble => {
    bubble.addEventListener("mouseenter", () => {
        bubble.style.transform = "scale(1.1)";
        bubble.style.border = " 4px solid gray ";
        bubble.style.transition = "transform 0.2s ease";
    });

    bubble.addEventListener("mouseleave", () => {
        bubble.style.transform = "scale(1)";
        bubble.style.border = "none"
    });
    
});




co.addEventListener("click", function (det) {
    targetedNo = det.target.textContent;

    if (targetedNo == searchedNo) {
        det.target.textContent = " ";
        det.target.style.backgroundImage = "url('correct.png')";
        det.target.style.backgroundSize = "cover";
        det.target.style.transform = "scale(1.1)";
        det.target.style.transition = "transform 0.2s ease";
    }
    else if(det.target.className == "cover"){
         det.style.backgroundColor =" #2980b9";

    }
    else {
        det.target.style.backgroundImage = "url('wrong.png')";
        det.target.style.backgroundSize = "cover";
        setTimeout(() => {
             det.target.style.background = "none";
             det.target.style.background = " radial-gradient(    circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4) 40%,rgba(255, 255, 255, 0.2) 60% )";

        }, 300);
        
    }
    
    if (targetedNo == searchedNo) {
    
        setTimeout(() => {
            if (t > 0) {
                number();
                z=1;
                addNumber();
                Score();
                flage = true;
            }
        }, 300); 
    }
});



find.addEventListener("click", function () {
    var all = document.querySelectorAll(".gole");

    if (c == 0)
        alert("Your found limit is up");
    all.forEach(div => {

        if (div.textContent == searchedNo && c > 0 && flage == true) {
            div.style.background = " radial-gradient(    circle at 30% 30%, rgb(237, 228, 228), rgba(241, 223, 223, 0.9) 40%,rgba(255, 255, 255, 0.5) 60% )";
            div.style.border = "solid black 2px";

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
        if (Number(div.textContent) == searchedNo ) {
            z = 0;
        }

        // div.style.backgroundColor = "white";
        // div.style.backgroundImage = "none";
        // div.style.background = bubb;
          div.style.background = " radial-gradient(    circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4) 40%,rgba(255, 255, 255, 0.2) 60% )";


        div.style.border = "none";
    });

    if (z == 1) {
        all[25].textContent = searchedNo;
    }

}


function number() {
    no.textContent = Math.floor(Math.random() * 100);
    searchedNo = no.textContent;
}


let bubbleContainer = document.getElementById('bubble-container');
if (!bubbleContainer) {
    bubbleContainer = document.createElement('div');
    bubbleContainer.id = 'bubble-container';
    document.body.appendChild(bubbleContainer);
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.zIndex = 2000; 
    
  
    const startX = Math.random() * 100;
    bubble.style.setProperty('--startX', `${startX}vw`);
    
 
    const drift = (Math.random() - 0.5) * 20;
    bubble.style.setProperty('--drift', `${drift}vw`);
    

    const duration = Math.random() * 4 + 4;
    bubble.style.setProperty('--duration', `${duration}s`);
    
    bubbleContainer.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

setInterval(createBubble, 300);


for(let i = 0; i < 15; i++) {
    createBubble();
}

