const userMgnBTN = document.querySelector("#userMgnBTN");
const learingPlanBTN = document.querySelector("#learingPlanBTN");
const reportsBTN = document.querySelector("#reportsBTN");
const settingsBTN = document.querySelector("#settingsBTN");

console.log("You are on!");

userMgnBTN.addEventListener(function () {
    userMgnBTN.style.display = "display:block";
    learingPlanBTN.style.display = "none";
    reportsBTN.style.display = "none";
    settingsBTN.style.display = "none";
});