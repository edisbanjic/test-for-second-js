// This function clears all the values
function clearScreen(): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value = "";
// This function displays values
function display(value: string): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value += value;
// This function evaluates the expression and return result
function calculate(): void {
    const result = document.getElementById("result") as HTMLInputElement;
    const q = eval(result.value);
    result.value = q.toString();