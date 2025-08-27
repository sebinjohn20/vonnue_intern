let countEl=document.getElementById("counter");
    let saveEl=document.getElementById("pervious")
    
       let count = 0; 

    function increment() {
      count += 1;
      countEl.innerText=count
    }

    //   function decrement(){
    //     count -=1;
    //     document.getElementById("counter").innerText=count;
    //   }
      function save(){
        let pervious_element = count + "-";
        saveEl.innerText+=pervious_element
        countEl.textContent=0
        count=0
        }
        
    // let wecomeEl=document.getElementById("welcome-el")
    // let name="Sebin John";
    // let greeting="welcome back";
    // wecomeEl.innerText= name+
    // " " + greeting;
// let first_name="Sebin";
// let last_name="John";
// fullname=first_name+ " " +last_name;
// console.log(fullname)
// let name="Linda"
// let greeting="Hi there"
// function greetLinda(){
//     console.log(greeting+ ","+ name + "!")
// }
// greetLinda()
// let myPoints=3;
// function add3points(){
//     myPoints+=3
// }
// function removepoints(){
//     myPoints-=1
// }
// add3points()
// add3points()
// add3points()
// removepoints()
// removepoints()
// console.log(myPoints)
// console.log("2" +2)
// console.log(11+2)
// console.log("my points:" +5+9)
