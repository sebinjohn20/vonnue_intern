
// let inputBtn=document.getElementById("input-el")
// inputBtn.addEventListener("click",function(){
//     console.log( "button clicked from addEventListener")
// })

// let boxEl=document.getElementById("box")
// boxEl.addEventListener("click",function(){
//     console.log("I want open the box")
// })

let  myLeads=[]
let oldLeads=[]
let inputEl=document.getElementById("input-el")
let inputBtn=document.getElementById("save-btn")
let deleteBtn=document.getElementById("delete-all")
let saveTab=document.getElementById("savetab")
console.log(localStorage.getItem("myLeads"))

let ulEl=document.getElementById("ul-el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}
const tab=[
    { url:" www.google.com"}
]
function render(leads){
      ulEl.innerHTML = "" 
    for( let i=0 ; i<leads.length; i++){
    // ulEl.textContent+=" <li>"+ myLeads[i]+ "</li"
  const li=  document.createElement("li")
  const a= document.createElement("a")

  
  a.href=leads[i]
  a.target="_blank"
  a.textContent=leads[i]

    li.appendChild(a)
  ulEl.appendChild(li)


}



}



deleteBtn.addEventListener("click",function(){
    console.log("deleted")
    localStorage.clear()
    myLeads=[]
    render(myLeads)

})



inputBtn.addEventListener("click",function (){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
  
})
saveTab.addEventListener("click",function(){

  chrome.tab.query({active:true,currentWindow: true}, function(tab){

  })


    console.log(tab[0].url)
    myLeads.push(tab[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})








// const credit=0
// if (credit>0){
//     console.log("Let's play")
// }
// else{
//     console.log("Sorry, you have no credits")
// }

let myCourse =["Learn CSS Animations", "U I Design Fundamentals","Intro to clean code"]



function logItems(arr){
  for(let i=0; i<arr.length ;i++)
  {
    console.log(arr[i])
  }
}
logItems(myCourse)


localStorage.setItem("myCredits","100")















