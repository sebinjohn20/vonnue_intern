


// **************** CallBack Function *******************








// let cameraAngleDescision=[]


// function processThirdUmpireReview(groundUmpireReq,CallBack){
//  if(!groundUmpireReq) return
//  groundUmpireReq && CallBack()
//  const[cameraAngle1Result,cameraAngle2Result]=cameraAngleDescision// Array destructuring
// cameraAngle1Result? displayMessageinScreen("out"): displayMessageinScreen("Not Out")
// if(cameraAngleDescision.length>1){
// cameraAngle1Result &&cameraAngle2Result? displayMessageinScreen("out"): displayMessageinScreen("Not out")

// }


// }

// function displayMessageinScreen(finalScreenDecision){
//  const outputEl=document.getElementById("output");
//  outputEl.innerHTML=finalScreenDecision
// }


// function getThirdUmpireResponse(){
//  let descision=prompt("What is your decision")
//     descision=descision.toLowerCase()==="out"? true:false

   
//     cameraAngleDescision.push(descision)
//     return descision
    
// }
// function checkCameraAngle1(){
//     getThirdUmpireResponse()
    

// }


// function checkCameraAngle2(){

//   getThirdUmpireResponse()
// }
// processThirdUmpireReview(true,checkCameraAngle1)
// processThirdUmpireReview(true,checkCameraAngle2)











// ***********************CallBack Hell*********************

// console.log(" 1. Third umpire review requested.");
// let outputEl=document.getElementById("output");
// let umpireDecision;
// const TIMEOUT=10000
// function getThirdUmpireResults(CallBack){
//     console.log("2. Third umpire review stared.");
//     console.log("3. Third is checking Cameras.");
   
//     setTimeout(() => {
//         umpireDecision="OUT"
        
//         console.log(` 4.Third umpire result is ${umpireDecision} `);
//          CallBack()
//     }, TIMEOUT);
   
  
// }
//      function displayThirdUmpireResults(CallBack){
//     console.log(`5. Ready to show results in ground screen:${umpireDecision}`)
//     outputEl.innerText=umpireDecision;
//     CallBack()

// }
// function passInfoGroundUmpire(CallBack){
//     console.log("Hey ground Umpire,please revert the decision")
//     CallBack()
// }
// function restartMacth(){
//     console.log("Restart the match")
// }
// getThirdUmpireResults( function(){
//     displayThirdUmpireResults( function (){
//         passInfoGroundUmpire( function(){
//             restartMacth()
//         })
//     })
   
// })






///************************** */ Callback Promise**************************************





// console.log(" 1. Third umpire review requested.");
// let outputEl=document.getElementById("output");
// let umpireDecision;
// const TIMEOUT=10000
// function getThirdUmpireResults(){
//     console.log("2. Third umpire review stared.");
//     console.log("3. Third is checking Cameras.");
   
  
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//        resolve( umpireDecision="OUT")
        
//         console.log(` 4.Third umpire result is ${umpireDecision} `);
       
//     }, TIMEOUT);
//    })
  
// }
//      function displayThirdUmpireResults(){
//     console.log(`5. Ready to show results in ground screen:${umpireDecision}`)
//     return new Promise((resolve,reject)=>{
//         resolve(   outputEl.innerText=umpireDecision)
//     })
 
   

// }
// function passInfoGroundUmpire(){
  
//     console.log("Hey ground Umpire,please revert the decision")
    
    
  
// }
// function restartMacth(){
//     console.log("Restart the match")
// }





// getThirdUmpireResults()
// .then(displayThirdUmpireResults)
// .then(passInfoGroundUmpire)
// .then(restartMacth)







//************* */ async and await function



// console.log(" 1. Third umpire review requested.");
// let outputEl=document.getElementById("output");
// let umpireDecision;
// const TIMEOUT=10000
// function getThirdUmpireResults(){
//     console.log("2. Third umpire review stared.");
//     console.log("3. Third is checking Cameras.");
   
  
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//        resolve( umpireDecision="OUT")
        
//         console.log(` 4.Third umpire result is ${umpireDecision} `);
       
//     }, TIMEOUT);
//    })
  
// }
//      function displayThirdUmpireResults(){
//     console.log(`5. Ready to show results in ground screen:${umpireDecision}`)
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//              resolve(   outputEl.innerText=umpireDecision)
//         }, TIMEOUT);
       
//     })
 
   

// }
// function passInfoGroundUmpire(){
  
//     console.log("Hey ground Umpire,please revert the decision")
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Success")
//         },TIMEOUT);
//     })
    
  
// }
// function restartMacth(){
//     console.log("Restart the match")
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("let restart the match")
//         }, TIMEOUT);
//     })
// }

// async function InitThirdUmpire() {
//     await getThirdUmpireResults()
//     await displayThirdUmpireResults()
//     await passInfoGroundUmpire()
//     await restartMacth()
    
// }
//  InitThirdUmpire()




const rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = "";
  
  // spaces
  for (let j = 1; j <= rows - i; j++) {
    str += " ";
  }
  
  // stars
  for (let k = 1; k <= i; k++) {
    str += "*";
  }
  
  console.log(str);
}
