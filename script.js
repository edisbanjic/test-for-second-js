// This function clears all the values
function clearScreen(): void {
    let elem = document.getElementById("result") as HTMLInputElement;
    elem.value = "";
}

// This function displays values
function display(value: string): void {
    let elem = document.getElementById("result") as HTMLInputElement;
    elem.value += value;
}

// This function evaluates the expression and returns result
function calculate(): void {
    let p = (document.getElementById("result") as HTMLInputElement).value;
    let q = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q.toString();
}