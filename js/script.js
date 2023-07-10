const body = document.querySelector("body");
const container = document.querySelector(".container")
const originalRGB = [24, 221, 165]

function createGrid(n) {
    const width = `${1/n * 100}%`;
    body.style.setProperty("--flex-basis", width);

    if (n === 1) {
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        container.appendChild(newItem);
        newItem.style.borderRadius = "12px";
        return;
    }

    for (let i = 1; i <= n * n; i++) {
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        switch (i) {
            case 1:             newItem.classList.add("corner-square-1"); break;
            case n:             newItem.classList.add("corner-square-2"); break;
            case n * n - n + 1: newItem.classList.add("corner-square-3"); break;
            case n * n:         newItem.classList.add("corner-square-4"); break;
            default:            break;
        }

        container.appendChild(newItem);
    }
}

function enableColoring(items) {
    items.forEach((item) => {
        
        item.addEventListener("mouseover", (e) => {
            if (item.style.backgroundColor === "") {
                item.style.backgroundColor = getRGBString(originalRGB);
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

function main() {
    const n = 16;
    createGrid(n);
    const items = document.querySelectorAll(".item");

    enableColoring(items);
    
    const rewindButton = document.querySelector("button");
    const rewindIcon = document.querySelector(".rewind-icon");
    rewindButton.addEventListener("transitionend", () => {
        if (rewindIcon.classList.length == 2) {
            rewindIcon.classList.remove("turn-360");
        }
    });
    rewindButton.addEventListener("click", () => {
        let n;
        while (true) {
            n = +prompt("What's n?", "1-100");
            if ((n < 1 || n > 100)) {
                alert("n has to be between 1 and 100");
                continue;
            }
            break;
        }
        rewindIcon.classList.add("turn-360");
        container.replaceChildren();
        createGrid(n);
        let newItems = document.querySelectorAll(".item");
        enableColoring(newItems);
    });
}

main()