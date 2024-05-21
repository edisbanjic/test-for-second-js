// Define a type for the HTML input element
type InputElement = HTMLInputElement;
// Enum for element IDs
enum ElementId {
    Result = "result"
}
// This function clears all the values
function clearScreen(): void {
    const resultElement = document.getElementById(ElementId.Result) as InputElement;
    if (resultElement) {
        resultElement.value = "";
    }
}
// This function displays values
function display(value: string): void {
    const resultElement = document.getElementById(ElementId.Result) as InputElement;
    if (resultElement) {
        resultElement.value += value;
    }
}
// This function evaluates the expression and returns the result
function calculate(): void {
    const resultElement = document.getElementById(ElementId.Result) as InputElement;
    if (resultElement) {
        const p = resultElement.value;
        try {
            const q = eval(p);
            resultElement.value = q;
        } catch (error) {
            resultElement.value = "Error";
        }
    }
}