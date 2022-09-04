function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function deleter() {
    var a = document.getElementById("result").value;
    a=a.substring(0,a.length-1)
    document.getElementById("result").value = a;
}