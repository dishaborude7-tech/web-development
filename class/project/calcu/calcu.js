function appendToDisplay(value) {
    document.getElementById("display").value += value;
};

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var expression = document.getElementById("display").value;      
    document.getElementById("display").value = eval(expression);
}
 function del() {   
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue .substring(0, currentValue.length - 1);         
 }