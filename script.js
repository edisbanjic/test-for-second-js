// This function clear all the values
function clearScreen(): void {
    let result = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}

// This function display values
function display(value: string): void {
    let result = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}

// This function evaluates the expression and return result
function calculate(): void {
    let result = document.getElementById("result") as HTMLInputElement;
    let p = result.value;
    let q = eval(p); // Note: Using 'eval' is not safe and should be avoided for serious applications
    result.value = q.toString();
}