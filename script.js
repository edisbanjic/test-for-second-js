// This function clear all the values
function clearScreen(): void {
    document.getElementById("result")!.value = "";
}

// This function display values
function display(value: string): void {
    document.getElementById("result")!.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    let p: string = <string>document.getElementById("result")!.value;
    let q: number = eval(p);
    document.getElementById("result")!.value = q.toString();
}