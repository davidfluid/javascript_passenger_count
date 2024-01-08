let count = 0
let save_el=""

function increment(){
count+=1    
document.getElementById("count-el").innerText = count
save_el= document.getElementById("save-el").innerText + count + " - "
}

// document object model

function save(){
document.getElementById("save-el").innerText = save_el
count = 0
document.getElementById("count-el").textContent = count
}