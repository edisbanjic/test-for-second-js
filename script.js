// This function clear all the values
function clearScreen(): void {
    (document.getElementById("result") as HTMLInputElement).value = "";
}
// This function display values
function display(value: string): void {
    (document.getElementById("result") as HTMLInputElement).value += value;
}
function calculate(): void {
    var p = (document.getElementById("result") as HTMLInputElement).value;
    var q = eval(p); // Note: Using eval() can be harmful. Consider a safer alternative for real projects
    (document.getElementById("result") as HTMLInputElement).value = q.toString();
}