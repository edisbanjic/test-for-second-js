// This function clears all the values
function clearScreen(): void {
    (document.getElementById("result") as HTMLInputElement).value = "";
}
// This function displays values
function display(value: string): void {
    (document.getElementById("result") as HTMLInputElement).value += value;
}
// This function evaluates the expression and returns the result
function calculate(): void {
    const p: string = (document.getElementById("result") as HTMLInputElement).value;
    const q: string = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q;
}