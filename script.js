const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Button click handling
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        const key = button.getAttribute("data-key");

        if (value) appendValue(value);
        if (key === "Escape") clearDisplay();
        if (key === "Backspace") deleteLast();
        if (key === "Enter") calculate();
    });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
    if ((event.key >= "0" && event.key <= "9") || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    }

    if (event.key === "Enter") calculate();
    if (event.key === "Backspace") deleteLast();
    if (event.key === "Escape") clearDisplay();
});
