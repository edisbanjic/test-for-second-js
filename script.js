// This function clear all the values
function clearScreen(): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "";
}

// This function display values
function display(value: string): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += value;
}

// This function evaluates the expression and return result
function calculate(): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    const p: string = resultElement.value;
    try {
        const q: number = eval(p);
        resultElement.value = q.toString();
    } catch (error) {
        console.error("Error evaluating expression: ", error);
        resultElement.value = "Error";
    }
}