// This function clear all the values
function clearScreen(): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "";
}
// This function display values
function display(value: string): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    const p = resultElement.value;
    const q = eval(p);
    resultElement.value = q.toString();
}