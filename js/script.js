const body = document.querySelector("body");
const container = document.querySelector(".container")
const originalRGB = [0, 255, 255]

function createGrid(n) {
    const width = `${1/n * 100}%`;
    body.style.setProperty("--flex-basis", width);
    
    for (let i = 0; i < n * n; i++) {
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        container.appendChild(newItem);
    }
}

function main() {
    const n = 16;
    createGrid(16);
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
    
            if (item.style.backgroundColor === "") {
                item.style.backgroundColor = getRGBString(originalRGB);
                console.log(item.style.backgroundColor);
                item.classList.add("10");
                return;
            }
            const percent = item.className.split(" ").pop();
            let newRGB = [];
            
            originalRGB.forEach((rgbValue) => {
                newRGB.push(getDarkerRGB(rgbValue, percent))
            });
            
            item.style.backgroundColor = getRGBString(newRGB);
            item.classList.replace(percent, +percent + 10);
        });
    })
}

function getRGBString(rgbArray) {
    return `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
}

function getDarkerRGB(rgbToChange, percent) {
    return rgbToChange * (1 - percent/100); 
}

main()