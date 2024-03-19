// This function clear all the values
function clearScreen(): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value = "";
// This function display values
function display(value: string): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value += value;
// This function evaluates the expression and return result
function calculate(): void {
    const p = (document.getElementById("result") as HTMLInputElement).value;
    const q = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q;