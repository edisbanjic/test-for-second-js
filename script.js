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
    var p = element.value;
    var q = eval(p); // Note: Using eval() is not recommended due to security risks.
    element.value = q;
}