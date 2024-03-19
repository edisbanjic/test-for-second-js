// This function clear all the values
function clearScreen(): void {
    let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}
// This function display values
function display(value: string): void {
    let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    let p: string = result.value;
    let q: number = eval(p);  // Note: Using eval is dangerous and should be avoided if possible
    result.value = q.toString();
}