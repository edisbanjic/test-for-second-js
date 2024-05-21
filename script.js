// Define a type for the HTML input element
type InputElement = HTMLInputElement;
// This function clears all the values
function clearScreen(): void {
    (document.getElementById("result") as InputElement).value = "";
}
// This function displays values
function display(value: string): void {
    (document.getElementById("result") as InputElement).value += value;
}
// This function evaluates the expression and returns the result
function calculate(): void {
    const p: string = (document.getElementById("result") as InputElement).value;
    const q: string = eval(p);
    (document.getElementById("result") as InputElement).value = q;
}