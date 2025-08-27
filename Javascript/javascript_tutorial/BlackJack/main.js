
// if(sum < 21){
//     console.log("Do you want to draw a  new card?")

// }else if(sum ===21){
//     console.log("Whoo ! You've got Blackjacket! ")

// }else if (sum>21){
//     console.log("you're out the game!")
// }
// let age=22;
// ag
// if(age<=21){
//     console.log("you cant enter the club")
// }
// elsse
// {
//     console.log("welcome club")
// }
// let age=100
// if (age < 100){
//     console.log("Not eligible")
// }else if (age===100){
//     console.log("Here is your birthday card from the King")
// }else {
//     console.log("Not eligible ,you have already gotten one")
// }

let cards=[]
let sum = 0
let hasBlackJack = false 
let isAlive =false
let message = ""


let messageel = document.getElementById("messages")
let sumEl = document.querySelector("#sumel") 
let cardEl=document.getElementById("cardel") 
let player={ 
    name:"per",
    chips:145,
    sayHello:function(){
        console.log("Hai Sebin")
    }
}



player.sayHello()
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + ":$"+player.chips
function getRandomCard(){
  let random=Math.floor(Math.random()*13)+1
    if (random> 10){
        return 10
    }
    else if( random ===1){
        return 11
    }
    else{
        return random;
    }

}


function startgame()
{
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}

function rendergame() {
      cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
         cardEl.textContent += cards[i] +" ";
    }
   
    sumEl.textContent = "Sum: " + sum   

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    messageel.textContent = message
}
function newgame(){
    if( isAlive=== true && hasBlackJack ===false){
    console.log("Drawing a new card from the deck!")
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    rendergame()

    }
}




// let hasCompleted=false
// let givesCertificate=true
// if(hasCompleted===true && givesCertificate==true)
//     {
//    generateCertificate()
// }
// function generateCertificate(){
//     console.log("Generating certificate...")

// // }
// let hasSolvedChallenge=true
// let hasHIntsLeft=false
// if( hasSolvedChallenge ===false || hasHIntsLeft===false)
// {
//     showsolution()
// }


 
// function showsolution(){
//     console.log("Showing the solution")
// }







// let likeDocumentaries=false
// let likesStartsups=true
// if (likeDocumentaries ===true || likesStartsups  ===true){
//     recommendMovie()
// }
// function recommendMovie(){
//     console.log("Hey. check out this new film we think you will like")
// }






// let floornumber =Math.floor(Math.random()*6)
// console.log(floornumber)
// console.log(randomnumber)
// function rollDice(){
//     let randomnumber=Math.floor(Math.random()*6)+1
//     return randomnumber
// }
// console.log(rollDice())


// let player1Time=102
// let player2Time=107
// function getFastestRaceTime(){
//     if( player1Time< player2Time){
//         return player1Time
//     }
//     else if(player2Time< player1Time){
//         return player2Time
//     }
//     else
//         return player1Time

// }
// let fastestrace= getFastestRaceTime()
// console.log(fastestrace)
// function getTotalraceTime(){
//     return player1Time+player2Time
// }
// let totalTime=getTotalraceTime()
// console.log(totalTime)
// for(let i= 10; i<100 ;i+=10){
//     console.log(i)


// }
// let num=[1,2,3,4,5]
// for(let i=0; i<num.length; i++)
// {
// console.log(num[i])
// }
// let sentence=["Hello","my","name","is", "per"]
// let greetingEl=document.getElementById("greeting-el")
// for(let i=0; i< sentence.length;i++){
//     greetingEl.textContent+=sentence[i]
//     + " ";
// }


// for (let count=1; count< 11 ; count+=2)
// {

//     console.log(count)
// }



//Arrays

// let featurePosts=[
//     "Check out my Netflix clone",
//     "Here's the code for my projects",
//     " I 've just relunched my porfolio"
// ]
// let experience =[
//     " CEO at google",
//     "frontend Developer"
// ]

// console.log(featurePosts[0])

// console.log(featurePosts.length)

// let per=[ 7,4]
// per.push(6)
// console.log(per)




// let newmessage="same here"
// experience.push(newmessage)
// console.log(experience)
// experience.pop()
// console.log(experience)



// let course={
//     title:"Learn CSS Grid for free",
//     lesson:16,
//     creator:"Per Harald Borgen",
//     length:63,
//     level:2,
//     isFree:true,
//     tags:[ "html","css"]

// }
// console.log(course.length)
// console.log(course["tags"])



// let castle={
//     title:"Live like a king in my castle",
//     price: 190,
//     isSuperHost:true,
//     image:["img"]
// }
// console.log(castle.price)
// let person={
//     name:"Sebin John",
//     age:25,
//     country:"India"
// }
// function logData(){
//     console.log(person.name + "is" + person.age+ " year old and lives in" +person.country); 
// }
// logData()
// let age=15
// if(age<6)
// {
//     console.log("free")
// }
// else if (age<18){
//     console.log ("child discount")
// }
// else if (age< 26){
//     console.log("student discount")
// }
// else if (age<66)
// {
//     console.log("full price")
// }
// else
// {
//     console.log("senior citizen discount")
// }













// let largeCountries=["china","India","USA","Indonesia"]
// for(let i=0; i< largeCountries.length;i++){
//     console.log("-"+largeCountries[i])
// }






 let largeCountries=["china","India","USA","Indonesia"]

console.log(largeCountries.push("Ireland"))
largeCountries.pop()
largeCountries.shift("England")
largeCountries.unshift()

console.log(largeCountries)