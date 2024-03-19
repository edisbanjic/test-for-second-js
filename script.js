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
    let q = eval(p); // Note: Using eval can be unsafe as it can execute arbitrary code. Consider safer alternatives for parsing expressions.
    resultElement.value = q.toString();
}