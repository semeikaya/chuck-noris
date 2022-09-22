const random = document.querySelector("#button");
const joke = document.querySelector("#joke");
const fe = () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((data) => {
            return data.json();
        })
        .then((data2) => {
            return data2.value;
        })
        .then((data3) => {
            joke.textContent = data3;
        });
};

random.addEventListener("click", () => {
    fe();
});
