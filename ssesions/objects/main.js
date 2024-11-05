const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let points = 0;
let timer = 15;

let maca = {};
maca.width = 128;
maca.height = 128;
maca.color = "#ff0000";
maca.x = 400;
maca.y = 300;
maca.speed = 10;
let macaOn = false;

const myMaca = new Image();
myMaca.src = "cat.png";

myMaca.onload = function () {
    macaOn = true;

}

let miu = {};
miu.width = 48;
miu.height = 48;
miu.color = "#ff0000";
miu.x = Math.random() * canvas.width;
miu.y = Math.random() * canvas.height;
miu.speed = 10;
let miuOn = false;

const myMiu = new Image();
myMiu.src = "mouse.png";

myMiu.onload = function () {
    miuOn = true;

}

addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        maca.x += maca.speed;
    }

    if (event.key == "ArrowLeft") {
        maca.x -= maca.speed;
    }

    if (event.key == "ArrowUp") {
        maca.y -= maca.speed;
    }

    if (event.key == "ArrowDown") {
        maca.y += maca.speed;
    }
});

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (macaOn) { ctx.drawImage(myMaca, maca.x, maca.y); }
    if (miuOn) { ctx.drawImage(myMiu, miu.x, miu.y); }

    if (maca.x > 770) { maca.x = -60; }
    if (maca.x < -60) { maca.x = 750; }
    if (maca.y > 500) { maca.y = -60; }
    if (maca.y < -60) { maca.y = 500; }

    ctx.font = "25px serif";
    ctx.fillStyle = "brown";
    ctx.fillText("Points: " + points, 10, 30);
    ctx.fillText("Timer: " + timer, 680, 30);
}

setInterval(render, 1);