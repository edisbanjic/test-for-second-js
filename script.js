// This function clear all the values
function clearScreen() {
    (document.getElementById("result") as HTMLInputElement).value = "";
}
// This function display values
function display(value: string) {
    (document.getElementById("result") as HTMLInputElement).value += value;
}
function calculate() {
    let p = (document.getElementById("result") as HTMLInputElement).value;
    let q = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q.toString();
}