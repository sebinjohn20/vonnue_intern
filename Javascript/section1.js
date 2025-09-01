// 1. Print numbers from 1 to 10
// for(let i=1; i<=10;i++)
// {

//     console.log(i)
// }
// console.log("-----------")
// 2. Print even numbers from 1 to 20
// for(let i=2;i<=20;i+=2){
//     console.log(i)
// }
// console.log("-----------")

// 3. Print odd numbers from 1 to 20
// for(let i=1;i<=20;i+=2)
// {
//     console.log(i)
//}
// 4. Print numbers from n to 1 (reverse order)
// let n=10;
// for(let i=n; i>=1;i--)
// {
//     console.log(i)
// }
// 8. Multiplication table of a number
// let num=5;
// for(let i=1; i<=10; i++)
// {
// console.log(`${num} * ${i}=${num*i}`);
// }
// prime number
// num=4
// let isPrime=true
// for(let i=2; i<=Math.sqrt(num);i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
// }
// console.log(`${num} is prime?`, isPrime);
// 11. Count digits in a number

// let num =12345;
// let count=num.toString().length;
// console.log(count);
// 12. Reverse a number
// let num=12345;
// let rev=0;
// temp =num;
// while(temp> 0){
//     rev=rev*10+(temp %10);
//     temp=Math.floor(temp/10);
    
// }
// console.log(rev)
// 13. Sum of digits of a number
// num=12345;
// sum=0
// temp = num;
// while( temp>0){
//     sum+=temp%10;
//     temp=Math.floor(temp/10);
// }
// console.log(sum)
// 14. Check if a number is palindrome
// num=121;
// rev=0;
// temp=num;
// while(temp>0){
//     rev=rev*10+(temp%10);
//     temp=Math.floor(temp/10);
// }
// console.log('${num} is palindrome',rev===num);

// 19. Find largest number in array
// let array=[1,3,4.6,79];
// let max=array[0];
// for(let i=1;i<array.length; i++){
//     if (array[i]> max) max=array[i];

// }
// console.log("Largest=",max);
// 21. Sum of array elements
// let array=[1,2,3, 4,5];
// let sum=0;
// for(let i=0; i<array.length; i++){
// sum+=array[i];
// }
// console.log(sum)
// 24. Count even and odd numbers in array
// array=[1,2,3,4,5,6,7,8,9];
// let evencount=0,oddcount=0;
// for( let i=0; i<array.length; i++)

//     {
//         if(array[i]%2===0)evencount++;
//         else oddcount++;
//     }
//     console.log("Even",evencount,"odd=",oddcount)
    // 25. Find second largest number
// let arr = [10, 5, 20, 8, 15];
// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest; // shift the old largest
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] < largest) {
//         secondLargest = arr[i];
//     }
// } 

// console.log("Second largest number:", secondLargest);
// 32. Count occurrences of an element
// let array=[1,3,4,4,5,4,4]
// let searchelement=4
// let count=0
// for(let i=0; i<array.length;i++){
//     if(array[i]==searchelement) count++;
// }
// console.log(count)

// Merge two arrays
// let a1=[1,2,3];
// let a2=[4,5,6]
// let merge=[];
// for(let i=0; i<a1.length;i++) merge.push(a1[i]);
// for(let i=0; i<a2.length;i++) merge.push(a2[i])

// console.log(merge)
// 36. Remove specific element from array
// let array=[1,2,3,4,5];
// let removeElement=3;
// let newarray=[];
// for(let i=0;i<array.length;i++){
//     if(array[i]!== removeElement)
//         newarray.push(array[i]);
// }
// console.log(newarray)
//  Count vowels in a string
// let str="javascript";
// let vowels="aeiouAEIOU";
// let vowelscount=0;
// for(let i=0; i<str.length;i++)
//     if(vowels.includes(str[i])){
//         vowelscount++;
//     }
// console.log(vowelscount)
// let str="hello world program";
// let reversewords=str.split(" ").reverse().join(" ");
// console.log(reversewords)
// Find Prime Numbers in a Range
// let start=10,end=30;
// array=[];
// for(let num =start;num<=end;num++){
//     let isprime=true;
//     if(num<2)isprime=false;
//     for(let i=2; i<Math.sqrt(num); i++){
//         if(num%i==0){
//             isprime=false;
//             break;
            
//         }
        
//     }
// if(isprime){
//     array.push(num)
// }
    
// }
// console.log(array);
// 22. Sum of Prime Numbers in a Range
// let sumprime=0;
// for(let num=2;num<=20;num++)
// {
//     let isprime=true;
//     for(let i=2 ; i<Math.sqrt(num); i++){
//         if(num % i===0){
//             isprime=false;
//             break;
//         }
//     }
//     if(isprime) sumprime+=num;
// }
// console.log(sumprime);
// 49. Find Prime Numbers in Array
// let array=[2,3,4,5,6,7,8,9,10]
// let arrayprime=[];
// for(let i=0;i<array.length;i++){
//     let num= array[i]
//     let isprime =true
//     if(num<2)isprime=false;
//     for(let j=2;j<=Math.sqrt(num);j++){
//         if(num%j===0){
//             isprime=false;
//             break;
//         }
//     }
//     if(isprime) arrayprime.push(num);

// }
// console.log(arrayprime);
// let colors=["red", "green","blue", "yellow"];
// colors.pop()
// console.log(colors);
// // Remove first element
// colors.shift();
// console.log(colors)
// colors.splice(1,1);
// // console.log(colors);
// let person={
//     name: "Sebin",
//     age:25,
//     city:"New York"
// };
// console.log(person);
// console.log(person.name);
// person.country="USA";
// person.place="pulpally";
// console.log(person);
// delete person.place;
// console.log(person);
// for(let key in person){
//     console.log(key+":" +person[key]);
// }
// let employee={
//     name:"john",
//     position:"Develooper",
//     address:{
//         city:"Bangalore",
//         zip: 560001
//     }
// };
// console.log(employee.address.city)
// let obj={ a:1 ,b:2,c:3}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj))
// 
// 
// let obj1={ a:1 , b:2}
// let obj2={ c:3,d:5}
// let merge={...obj1,...obj2};
// console.log(merge);
// 12. Object with Dynamic Keys
// let keyname="email";
// let user={
//     name: "bob",
//     [keyname]:"bob@Example.com"
    
// };
// console.log(user.email)
// 13. Object Freeze / Seal
// let obj={name:"Alice"};
// Object.freeze(obj);
// obj.name="bob";
// console.log(obj.name);
// let obj={name:"Alice"};
// Object.seal(obj);
// obj.name="Bob";
// obj.age=25;
// console.log(obj);
// let obj={a:1, b:2,c:3};
// console.log(Object.keys(obj).length);
// 1. Convert Array of Objects to Single Object by ID
// let user=[
//     { id: 1, name:"Alice"},
//     {id:2, name:"Bob"}
// ];
// let byId=Object.fromEntries(user.map(u=>[u.id,u]))
// console.log(byId);
// 6. Write a code to create an arrow function?

let add =(a,b)=>a+b;
console.log(add(6,2))