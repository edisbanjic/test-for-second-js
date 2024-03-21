// This function clear all the values
function clearScreen(): void {
    const element = document.getElementById("result") as HTMLInputElement;
    element.value = "";
}
// This function display values
function display(value: string): void {
    const element = document.getElementById("result") as HTMLInputElement;
    element.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    const element = document.getElementById("result") as HTMLInputElement;
    const p = element.value;
    // WARNING: Using `eval` can be dangerous. Consider using a safer alternative for real projects.
    const q = eval(p);
    element.value = q.toString();
}