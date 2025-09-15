// var n=2
// function square(num){
//     var ans=num*num
//     return ans
// }

// var square2=square(n)
// var square3=square(2)
// console.log(square2)
// console.log(getname)
// console.log(x)
// var x=7
// var getname=()=>{
//     console.log("hello Sebin")
// }


// var x=7
// function getname(){
//     console.log("Hello Sebin")
// }
// getname()
// console.log(x)
// console.log(getname)

// var x=1
// a();
// b();
// console.log(x)
// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);

// }


// var a=10;

// if(a===undefined){
//     console.log(" a is undefined")
// }
// else {
//     console.log("a is not undefined")
// }
//  var a;
//  console.log(a)
//  a=10
//  console.log(a)
//  a="hello world"
//  console.log(a)

// function a(){
//     var b=10;

//     c();
//     function c(){
// console.log(b)
//     }

// }
// a()
// console.log(b)
// let a=10
// var b=20
// let a;

// a=10
// console.log(a)





// function x(){
//     var a=12;
//     function y()
//     {
//         console.log(a)
//     }
//     a=100
// return y
// }
// var z=x()
// console.log(z)
// z()



// function z(){
//     var b=900
//     function x(){
//     var a=12;
//     function y()
//     {
//         console.log(a,b)
//     }
//     a=100
//     y()
// }
//     x()
// }

// z()








// function x(){
//     var i=1
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//     console.log("hello")
// }
// x()





// function x(){
//     for(let i=1;i<=5;i++){
//            setTimeout(function(){
//         console.log(i)
//     }, i*1000)
//     }
 
// }
// x()




// function x(){
//     for(var i=1;i<=5;i++)
//     {
//         function close(i){
//             setTimeout(() => {
//                 console.log(i)
//             },i*1000);

//         }
//         close(i)
//     }
// }

// x()


// function outer(){
//     var a=10
//     function inner(){
//         console.log(a)
//     }
    
//     return inner
// }

// // outer()()  // Immediately calls the returned function:
// var close=outer()
// close()


// function outer(b) {
//     // inner() is a function defined inside outer(), it has access to 'a' and 'b'
//     function inner() {
//         console.log(a, b);  // Logs variables 'a' and 'b'
//     }

//     let a = 10;  // Local variable 'a' initialized to 10

//     return inner;  // Returns the function 'inner' without executing it
// }

// // Call outer() with argument "Hello world" and store returned function in 'close'
// var close = outer("Hello world");

// // Now call the returned function 'inner', which prints 'a' and 'b'
// close();  // Output: 10 "Hello world"

// function outest(){
//     var c=20
//     function outer(b){
//         function inner(){
//             console.log(a,b,c)
//         }
//         let a=10
//         return inner
//     }
//     return outer
// }
// var close=outest()("hello world")

// close();




//  function Statement




// function a(){

//     console.log("a called")
// }
// a()




// Function Experssion

// var b= function(){
//     console.log("hello")
// }
// b()


// Anonymous Function


// function (){


// }
// function greet(name){  // <-- 'name' is the parameter
//     console.log("hello",+name)
// }
// greet("sebin") // <-- "Alice" is the argument
// 





// What is a callback Function




// setTimeout(function(){
//     console.log("timer")
// },5000)
// function x(y){
// console.log("x")
// y()
// }
// x(function y(){
//     console.log("y")
// })



// Event Loop
// console.log("start")
// setTimeout(() => {
//     console.log("callback")
// }, 5000);
// console.log("end")




// console.log("Start");
// setTimeout(() => {
//     console.log("cb SetTimout")
// }, 5000);
// fetch("https://api.netflix.com")
// .then(()=>{
//     console.log("CB Netfllix")
// })
// console.log("End")





// console.log("Start")
// setTimeout(() => {
//     console.log("callBack")
// }, 5000);
// console.log("End")
// let startDate=new Date().getTime()
// let endDate=startDate
// while(endDate<startDate+10000){
//     endDate=new Date().getTime()
// // }


// const radius=[3,1,2,4]
// const area=function(radius){
//     return Math.PI*radius*radius
// }
// const cicumreference=function(radius){
//     return 2*Math.PI*radius
// }
// const diameter=function(radius){
//     return 2*radius;
// }
// const calculate=function(radius,logic){
//     const Output=[]
//     for(let i=0;i<radius.length;i++){
//         Output.push(logic(radius[i]))
//     }
//     return Output
// }

// console.log(calculate(radius,area))
// console.log(calculate(radius,cicumreference))
// console.log(calculate(radius,diameter))



// radius.map(area)







// MAP Function

// const array=[5,1,3,2,6]
// const output=array.map((x)=>x+x)
// console.log(output)


// Fliter Function



// const array=[5,2,3,5,1,4]
// const output= array.filter((x)=>x%2===0)

// console.log(output)



// Reduce Function


// const array=[5,3,4,6,7]
// const output=array.reduce((acc,curr)=>{
// if(curr>acc)
//     acc=curr
//   return acc
// },array[0])
// console.log(output)

// const users=[
//     {firstName: "Akshay",lastName:"saini",age:26},
//     {firstName:"Alan", lastName:"Benny",age:75},
//     {firstName:"Akhil", lastName:"k",age:20},
//     {firstName:"Alan", lastName:"k",age:20}
// ]
// const output=users.map((x)=>x.firstName +" "+ x.lastName)
// console.log(output)



// const output=users.reduce((acc,cur)=>{
//     if(acc[cur.age]){
//         acc[cur.age]+=1
//     }
//     else{
//         acc[cur.age]=1
//     }
//     return acc;
// },{})
// console.log(output)


// const output=users.filter((x)=>x.age<30)
// .map((x)=>x.firstName)
// console.log(output)




// const output=users.reduce((acc,curr)=>{
// if(curr.age<30){
//     acc.push(curr.firstName)
// }
// return acc
// },[])
// console.log(output)




// Count occurrences of elements in an array



// const fruits = ["apple", "banana", "apple", "cherry", "banana"];
// const output=fruits.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]+=1
//     }
//     else{
//         acc[curr]=1
//     }
//     return acc
// },{})




// const array=["apple","banana"] ;
// const output=array.map((x)=>x.toUpperCase())
// console.log(output)



// const array=[{name:"Alice"}, {name:"Bob"}];
// console.log( output=array.map((x)=>x.name))



// const array=["hello","world"]
// console.log(array.map((x)=>x.length))




// const array=[1,2,3];
// console.log(array.map((x)=>x+10))



// const array=[0,1,2]
// console.log(array.map(Boolean))




// const array=[{name:"Alice",age:25}]
// console.log(array.map((x)=>`${x.name} is ${x.age}`))




// const array=[2,3,4] 
// console.log(array.map((x)=>x*x))



// const array=[1,2,3]
// console.log(array.map((x)=>x.toString()))

// console.log([0,null,"hello",false].filter(Boolean))


// console.log([5,12,5].reduce((a,c)=>c>a?c:a))


// console.log([5,12,5].reduce((a,c)=>c<a?c:a))


// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Andrew", age: 30 },
//     { name: "Bob", age: 40 }
// ];
// const output=users.filter((x)=>x.name.startsWith("A"))
// .reduce((sum,user)=>sum+user.age,0)
// console.log(output)



// const numbers = [[1, -2], [3, -4], [5, -6]];
// const output=numbers.reduce((acc,arr)=>acc.concat(arr),[]).filter((x)=>x>0)
// console.log(output)




// const users = [
//     { name: "Alice", skills: ["JavaScript", "React"] },
//     { name: "Bob", skills: ["Node.js", "React"] },
//     { name: "Charlie", skills: ["JavaScript", "Angular"] }
// ];



// const output=users.map(users=>users.skills)
// .reduce((acc,skills)=>acc.concat(skills),[])
// .reduce((acc,curr)=>{
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc
// },[])


// console.log(output)



// const products = [
//     { name: "Laptop", price: 1000, inStock: true },
//     { name: "Phone", price: 500, inStock: false },
//     { name: "Tablet", price: 300, inStock: true }
// ];
// const output=products.filter(products=>products.inStock)
// .reduce((sum,product)=>sum+product.price,0)

// console.log(output)



// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 }
// ];
// const output=users.reduce((acc,user)=>{
//     if(acc[user.age]===undefined){
//         acc[user.age]=[]
//     }
//     acc[user.age].push(user.name)
//     return acc
// },{})


// console.log(output)



// const orders = [
//     { id: 1, amount: 500, delivered: true },
//     { id: 2, amount: 1500, delivered: false },
//     { id: 3, amount: 2000, delivered: true }
// ];



// const Output=orders.filter(order=>order.delivered)
// .filter(order=>order.delivered)
// .map(order=>order.amount)
// .reduce((acc,sum)=>acc+sum,0)
// console.log(Output)

