// This function clear all the values
function clearScreen(): void {
    (document.getElementById("result") as HTMLInputElement).value = "";
}
// This function display values
function display(value: string): void {
    (document.getElementById("result") as HTMLInputElement).value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    var p = (document.getElementById("result") as HTMLInputElement).value;
    // eval() is a dangerous function, which executes code. Here it is used for simplicity.
    var q = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q.toString();