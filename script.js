// This function clear all the values
function clearScreen(): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value = "";
}

// This function display values
function display(value: string): void {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value += value;
}

// This function evaluates the expression and return result
function calculate(): void {
    const result = document.getElementById("result") as HTMLInputElement;
    const p = result.value;
    try {
        const q = eval(p);
        result.value = q;
    } catch (e) {
        result.value = 'Invalid Expression';
    }
}