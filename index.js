// Get the input display element
let display = document.getElementById("Total");

// Function to append numbers and operators to the display
function appendinput(value) {
    display.value += value;
}

// Function to clear the display
function clearInput() {
    display.value = "";
}

// Function to remove the last character (Backspace)
function backSpaceInput() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch {
        display.value = "Error"; // Display "Error" if the input is invalid
    }
}
