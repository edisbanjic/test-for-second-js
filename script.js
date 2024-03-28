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
    let p = (document.getElementById("result") as HTMLInputElement).value;
    let q = eval(p); // Note: eval has security and performance issues.
    (document.getElementById("result") as HTMLInputElement).value = q.toString();
}