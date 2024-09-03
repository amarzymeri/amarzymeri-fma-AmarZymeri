const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "./loja-start/images/background.png";

let bgReady = false;
bgGame.onload = function () {
    bgReady = true;
}

let startOver = document.createElement("button");
startOver.innerText = "Start Over";
startOver.style.fontSize = "20px";
startOver.style.padding = "10px";
startOver.style.visibility = "hidden";
document.body.appendChild(startOver);

let ticTimer = 15;
let points = 0;

let catObj = {};
catObj.x = 0;
catObj.y = 30;
catObj.speed = 10;
catObj.width = 105;
catObj.height = 128;

let catReady = false;
const catImg = new Image();
catImg.src = "./loja-start/images/cat.png";
catImg.onload = function () {
    catReady = true;
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;
mouseObj.x = Math.floor(Math.random() * 460);
mouseObj.y = 30 + Math.floor(Math.random() * 396);

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = "./loja-start/images/mouse.png";
mouseImg.onload = function () {
    mouseReady = true;
}

addEventListener("keydown", function (e) {
    if (e.key == "ArrowUp") {
        catObj.y -= catObj.speed;
    }
    if (e.key == "ArrowDown") {
        catObj.y += catObj.speed;
    }
    if (e.key == "ArrowRight") {
        catObj.x += catObj.speed;
    }
    if (e.key == "ArrowLeft") {
        catObj.x -= catObj.speed;
    }
});

function render() {
    if (bgReady) { ctx.drawImage(bgGame, 0, 0); }
    if (catReady) { ctx.drawImage(catImg, catObj.x, catObj.y); }
    if (mouseReady) { ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y) }

    if (catObj.x > 500) { catObj.x = -50; }
    if (catObj.x < -51) { catObj.x = 499; }

    if (catObj.y > 460) { catObj.y = -50; }
    if (catObj.y < 40) { catObj.y = 41; }

    if ((catObj.x + catObj.width) > mouseObj.x
        && (catObj.y + catObj.height) > mouseObj.y
        && (catObj.x + 15) < (mouseObj.x + mouseObj.width)
        && (catObj.y + 10) < (mouseObj.x + mouseObj.height)
    ) {
        mousePosition()
        if (ticTimer != 0) { points++; }
    }

    if (ticTimer == 0) {
        mouseObj.x = 3000;

        if (points => 3) {
            ctx.fillStyle = "white";
            ctx.fillText("You WIN", 220, 200);
        }
        else {
            ctx.fillStyle = "red";
            ctx.fillText("You LOSE", 220, 200);
        }
    }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Points: " + points, 10, 25);
    ctx.fillText("Timer: " + ticTimer, 425, 25);
}

function mousePosition() {
    mouseObj.x = Math.floor(Math.random() * 460);
    mouseObj.y = 30 + Math.floor(Math.random() * 396);
}

let timer = function () {
    if (ticTimer != 0) { ticTimer--; } else {
        gameOver = true;
        startOver.style.visibility = "visible";
    }
}

startOver.addEventListener("click", function () {
    location.reload();
})

const renderFrame = setInterval(render, 10);
const timeRunner = setInterval(timer, 1000);