// This function clears all the values
function clearScreen(): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "";
}

// This function displays values
function display(value: string): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += value;
}

// This function evaluates the expression and returns result
function calculate(): void {
    let resultElement = document.getElementById("result") as HTMLInputElement;
    let p = resultElement.value;
    try {
        let q = eval(p);
        resultElement.value = q;
    } catch (e) {
        resultElement.value = "Error";
    }
}