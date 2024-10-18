const box = document.querySelector('#box');
const button = document.querySelector('#hideButton');
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const changeTextButton = document.querySelector("#changeTextButton");
const movetotop = document.querySelector("#movetotop");

button.onclick = function () {
    if (box.style.display !== 'none') {
        box.style.display = 'none';
        hideButton.innerHTML = "Show box";
    } else {
        box.style.display = 'block';
        hideButton.innerHTML = "Hide box";
    }
};

btnRed.addEventListener('click', () => {
    box.style.background = 'red';
});

btnBlue.addEventListener('click', () => {
    box.style.background = 'blue';
});

changeTextButton.addEventListener("click", () => {
    box.innerHTML = movetotop.value;
})