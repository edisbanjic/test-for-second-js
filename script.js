// This function clears all the values
function clearScreen(): void {
    let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}
// This function displays values
function display(value: string): void {
    let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    var p: string = (document.getElementById("result") as HTMLInputElement).value;
    var q: number = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q.toString();
}