const ListGame = document.querySelector(".ListGame");
const AddGame = document.querySelector("#AddGame");
const gTitle = document.querySelector("#gTitle");
const gDesc = document.querySelector("#gDesc");
const gViews = document.querySelector("#gViews");
const gLikes = document.querySelector("#gLikes");

AddGame.addEventListener("click", () => {
    let newGame = {
        name: gTitle.value,
        desc: gDesc.value,
        views: gViews.value,
        likes: gLikes.value
    }

    allGames.push(newGame);
    renderList();
});

function renderList() {
    ListGame.innerHTML = '';
    for (let i = 0; i < allGames.length; i++) {
        ListGame.innerHTML += `<li>
                <h3>${allGames[i].name}</h3>
                <p>Desc: ${allGames[i].desc}</p>
                <p>Views: ${allGames[i].views}</p>
                <p>Likes: ${allGames[i].likes}</p>
                <p><a onclick="removeItem(${i})" href="#">Remove</a></p>
            </li>`;
    }
}

function removeItem(g) {
    allGames.splice(g, 1);
    renderList();
}