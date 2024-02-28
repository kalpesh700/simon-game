let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btn = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector("h2"); // Added global variable for h2

document.addEventListener("keypress", function () {
    if (started === false) {
        alert("Game has started"); // Fixed the alert message
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
    let randomidx = Math.floor(Math.random() * 4);
    let randcolor = btn[randomidx];
    let randbtn = document.querySelector("." + randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
}

function checkAns() {
    let idx = level - 1;
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000); // Removed parentheses after levelup
        }
    } else {
        h2.innerText = "Game over!!!!!!";
        let over=document.querySelector("body");
        setTimeout( over.style.backgroundColor="red",250);
        reset();
    }
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) { // Added 'let' before btn for local scope
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns();
}
