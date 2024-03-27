// This function clear all the values
function clearScreen(): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}
// This function display values
function display(value: string): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    const p = resultElement.value;
    const q = eval(p); // Note: using eval() is not recommended for security reasons
    resultElement.value = q.toString();
}