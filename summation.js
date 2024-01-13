let a = 8
let b = 2
let sum = 0

document.getElementById("num1-el").textContent = a
document.getElementById("num2-el").textContent = b

function fcn_sum(){
document.getElementById("sum_el").textContent = "Sum: "+(a+b)
}

function subtract(){
document.getElementById("sum_el").textContent = "Subtract: "+(a-b)
}

function multiply(){
document.getElementById("sum_el").textContent = "Multiply: "+(a*b)
}

function divide(){
document.getElementById("sum_el").textContent = "Divide: "+(a/b)
}