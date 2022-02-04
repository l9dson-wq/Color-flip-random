// const btn = document.querySelector('.button_color');
// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const color = document.querySelector(".color_css");

// btn.addEventListener("click", function () {
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E","F"];
const btn = document.querySelector('.button_color');
const color = document.querySelector(".color_css");

btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}