const email = document.querySelector('#email');
const msg = document.querySelector('#msg');
const pass = document.querySelector('#pass');
const loginBtn = document.querySelector('loginBtn');

let emailUser = 'info@futureminds.io';
let paddUser = 'Fma#2024'

loginBtn.addEventListener('click', function () {
    if (email.value === emailUser && pass.value === paddUser) {
        msg.innerHTML = `<span style="color:green">𝔠𝔬𝔯𝔯𝔢𝔠𝔱</span>`;
    }
    else {
        msg.innerHTML = `<span style="color:red">𝔦𝔫𝔠𝔬𝔯𝔯𝔢𝔠𝔱</span>`;
    }
});