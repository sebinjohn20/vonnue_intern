let number1=document.getElementById("num1");
let number2=document.getElementById("num2");
function add(){
    let n1=parseFloat(number1.value);
    let n2=parseFloat(number2.value)
    document.getElementById("result").innerText=n1+n2;
}
function subtract(){
    let n1=parseFloat(number1.value)
    let n2=parseFloat(number2.value)
    document.getElementById("result").innerText=n1-n2
}
function division(){
    let n1=parseFloat(number1.value)
    let n2=parseFloat(number2.value)
    document.getElementById("result").innerText=n1/n2;
}
function multiply(){
    let n1=parseFloat(number1.value)
    let n2=parseFloat(number2.value)
    document.getElementById("result").innerText=n1*n2;
}
