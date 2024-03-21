// This function clear all the values
function clearScreen(): void {
    let resultElement: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "";
// This function display values
function display(value: string): void {
    let resultElement: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += value;
// This function evaluates the expression and return result
function calculate(): void {
    let resultElement: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    let p: string = resultElement.value;
    let q: number = eval(p); // Not safe in production code
    resultElement.value = String(q);