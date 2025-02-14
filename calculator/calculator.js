const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const answer = document.querySelector(".answer-btn");
const clear = document.querySelector(".clear-btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Only add to display if it's a valid input
        display.value += button.textContent;
    });
});

answer.addEventListener("click", () => {
    try {
            display.value = eval(display.value);
        }
    catch (error) {
        // Catch any error (e.g., invalid expression) and show an error message
        display.value = "Error";
    }
});

clear.addEventListener("click", () => {
    display.value = "";
});


