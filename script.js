// This function clear all the values
function clearScreen() {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "";
}

// This function display values
function display(value: string) {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += value;
}

// This function evaluates the expression and return result
function calculate() {
    let p = (document.getElementById("result") as HTMLInputElement).value;
    let q = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q.toString();
}