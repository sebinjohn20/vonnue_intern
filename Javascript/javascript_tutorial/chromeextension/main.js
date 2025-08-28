
// let inputBtn=document.getElementById("input-el")
// inputBtn.addEventListener("click",function(){
//     console.log( "button clicked from addEventListener")
// })

// let boxEl=document.getElementById("box")
// boxEl.addEventListener("click",function(){
//     console.log("I want open the box")
// })

let  myLeads=[ "hi","hello"]
let intputEl=document.getElementById("input-el")
let inputBtn=document.getElementById("save-btn")
let ulEl=document.getElementById("ul-el")
inputBtn.addEventListener("click",function (){
    myLeads.push(intputEl.value)
    console.log(myLeads)
})

for( let i=0 ; i<myLeads.length; i++){
    ulEl.textContent+=myLeads[i]

}
ulEl.innerHTML="<li> sebin </li>"