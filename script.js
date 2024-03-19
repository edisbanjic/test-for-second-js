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
    var q = eval(p); // Ideally, avoid using eval due to security issues
    (document.getElementById("result") as HTMLInputElement).value = q;
}