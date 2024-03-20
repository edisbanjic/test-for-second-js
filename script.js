// This function clears all the values
function clearScreen(): void {
    let result = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}

// This function displays values
function display(value: string): void {
    let result = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}

// This function evaluates the expression and returns result
function calculate(): void {
    let result = document.getElementById("result") as HTMLInputElement;
    let q = eval(result.value);
    result.value = q.toString();
}