let division = document.getElementById("division");
let i;
let string = "";
let input = document.querySelector("input");
let button;
let xHas = false;
let operator;
let x;
let y;
let z;
for (i = 1; i <= 4; i++) {
    button = document.createElement("button");
    if (i <= 3) {
        button.textContent = `${i}`;
    } else {
        button.textContent = '+';
    }
    button.style.marginLeft = "5px";
    division.appendChild(button);
}

let container = document.getElementById("container");
let contain = document.getElementById("contain");

for (i = 1; i <= 4; i++) {
    button = document.createElement("button");
    if (i <= 3) button.textContent = `${i + 3}`;
    else button.textContent = '-';
    button.style.marginLeft = "5px";
    container.appendChild(button);
}
for (i = 1; i <= 4; i++) {
    let button = document.createElement("button");
    if (i <= 3) button.textContent = `${i + 6}`;
    else button.textContent = '/';
    button.style.marginLeft = "5px";
    contain.appendChild(button);
}
document.body.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        let btnValue = event.target.textContent;

        if (!isNaN(btnValue)) {
            string += btnValue;
            input.value = string;

            if (xHas) {
                y = parseInt(string);
            }
        } else if (btnValue === '+' || btnValue === '-' || btnValue === '/') {
            operator = btnValue;
            x = parseInt(string);
            string = "";
            input.value = "";
            xHas = true;
        } else if (btnValue === '=') {
            if (operator === '+') {
                z = x + y;
            } else if (operator === '-') {
                z = x - y;
            } else if (operator === '/') {
                z = x / y;
            }
            string = "";
            input.value = z;
            console.log("Result =", z);
            xHas = false;
            x = z;
            y = null;
        }
    }
});
//Improve this further, abhi ke liye toh hogya, add error, backspace and possibility to add three or even four