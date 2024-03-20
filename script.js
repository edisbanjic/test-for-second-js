// This function clear all the values
function clearScreen(): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    if (resultElement) resultElement.value = "";
}

// This function display values
function display(value: string): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    if (resultElement) resultElement.value += value;
}

// This function evaluates the expression and return result
function calculate(): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    if (resultElement) {
        let q = eval(resultElement.value);
        resultElement.value = q.toString();
    }
}