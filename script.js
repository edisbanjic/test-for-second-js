// Define a type for the result element
type ResultElement = HTMLInputElement | null;

// This function clears all the values
function clearScreen(): void {
    const resultElement: ResultElement = document.getElementById("result") as ResultElement;
    if (resultElement) {
        resultElement.value = "";
    }
}

// This function displays values
function display(value: string): void {
    const resultElement: ResultElement = document.getElementById("result") as ResultElement;
    if (resultElement) {
        resultElement.value += value;
    }
}

// This function evaluates the expression and returns the result
function calculate(): void {
    const resultElement: ResultElement = document.getElementById("result") as ResultElement;
    if (resultElement) {
        const p: string = resultElement.value;
        const q: string = eval(p);
        resultElement.value = q;
    }
}