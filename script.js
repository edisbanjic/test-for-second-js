// This function clear all the values
function clearScreen() {
    let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}

// This function display values
function display(value: string) {
    let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}

// This function evaluates the expression and return result
function calculate() {
    let p: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    let q: string = eval(p.value);
    p.value = q;
}