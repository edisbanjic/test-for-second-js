// This function clear all the values
function clearScreen(): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "";
}

// This function display values
function display(value: string): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += value;
}

// This function evaluates the expression and return result
function calculate(): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    let p = resultElement.value;
    let q = eval(p);
    resultElement.value = q.toString();
}