// This function clear all the values
function clearScreen(): void {
    const result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}
// This function display values
function display(value: string): void {
    const result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    const result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    const p: string = result.value;
    const q: number = eval(p); // Attention: Using eval() can introduce security risks!
    result.value = q.toString();
}