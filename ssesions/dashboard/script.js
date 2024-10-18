const userMgnBTN = document.querySelector('#userMgnBTN');
const learningPlanBTN = document.querySelector('#learningPlanBTN');
const reportsBTN = document.querySelector('#reportsBTN');
const settingsBTN = document.querySelector('#settingsBTN');

const pageFeed = document.querySelector('#page-feed');

userMgnBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<section id="page-feed"><h2>${feedPages[0].title}</h2>
                          <p>${feedPages[0].desc}</p> </section>`;
});

learningPlanBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<section id="page-feed"><h2>${feedPages[1].title}</h2>
                          <p>${feedPages[1].desc}</p> </section>`;
});

reportsBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<section id="page-feed"><h2>${feedPages[2].title}</h2>
                          <p>${feedPages[2].desc}</p> </section>`;
});

settingsBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<section id="page-feed"><h2>${feedPages[3].title}</h2>
                          <p>${feedPages[3].desc}</p> </section>`;
})

