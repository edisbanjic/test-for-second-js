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
    var q = eval(p); // Note: Using eval() is dangerous and should be avoided when possible
    (document.getElementById("result") as HTMLInputElement).value = q;
}