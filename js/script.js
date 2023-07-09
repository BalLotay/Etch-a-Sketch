const body = document.querySelector("body");
const container = document.querySelector(".container")

// const n = prompt("n?");
// const width = `${1/n * 100}%`;
// console.log(width);
// body.style.setProperty("--flex-basis", width)

// console.log(item);
// item.style.flexBasis = width;

const n = 2;
const width = `${1/n * 100}%`;
body.style.setProperty("--flex-basis", width)


for (let i = 0; i < n * n; i++) {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    container.appendChild(newItem);
}

const item = document.querySelector(".item")
const items = document.querySelectorAll(".item")

function makeBlack() {
    console.log("Hello");
    e.style.backgroundColor = "yellow";
}

const originalRGB = [0, 255, 255]

const RGB1 = 0;
const RGB2 = 255;
const RGB3 = 255;

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        console.log("Hello");
        item.style.backgroundColor = getRGBString(originalRGB);
        console.log(item.style.backgroundColor);
        let newRGB = [200, 200, 200];
        newRGB.forEach((value, index) => {
            newRGB[index] = darkenBy10Percent(originalRGB[1], value);
            console.log(value);
        });
        // console.log(darkenBy10Percent(originalRGB[1], newRGB[1]));
        console.log(newRGB);
        item.style.backgroundColor = getRGBString(newRGB);
    });
})

function getRGBString(rgbArray) {
    return `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
}

function darkenBy10Percent(originalRGB, newRGB) {
    return newRGB - (originalRGB * 0.1);
}
