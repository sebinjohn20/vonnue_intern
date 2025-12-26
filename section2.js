// 1 Write a program to calculate the remainder of two numbers?

// let num1=17;
// let num2=3;
// let remainder=num1%num2
// console.log(`Remainder of two ${num1} and ${num2} is ${remainder}`)

// 2 Write a program to find the average of an array of numbers?

// let array=[1,2,3,4,5]
// let sum=0
// for(let i=0;i<array.length;i++){
//      sum += array[i]
// }
// average=sum/array.length
// console.log(`Average of array ${array} is ${average}`)

// 3 Write a program to add two matrices?

// let matrix1=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let matrix2=[
//     [9,8,7],
//     [6,5,4],
//     [3,2,1]
// ]
// let result=[]

// for(let i=0;i<matrix1.length;i++){
//     result[i]=[]
//     for(let j=0;j<matrix1.length;j++){
//         result[i][j]= matrix1[i][j]+matrix2[i][j]
//     }
// }
// console.log(`sum of two matrix is `)
// for(let i=0;i<result.length;i++){
//     console.log(result[i])
// }

//  4 Write a program to calculate the area of a rectangle, given its length and breadth?

// let l=10;
// let b=3
// let area=l*b
// console.log(`Area of rectangle is ${area}`)

// 5 Write a program to check if the given matrix is a diagonal matrix?

// let matrix=[
//     [1,0,0],
//     [0,2,0],
//     [0,0,3]
// ]
// let isDiagonal=true;
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;i<matrix.length;j++){
//         if(i!==j && matrix[i][j]!==0){
//             isDiagonal=false
//         }
//     }
// }
// if(isDiagonal){
//     console.log("The matrix is diagonal matrix")
// }
// else{
//     console.log("The matrix is not diagonal matrix")
// }

//  6 Write a program to check if the given matrix is an identity matrix?

// let matrix1=[
//     [1,0,0],
//     [0,1,0],
//     [0,0,1]
// ]
// let identity=true
// for(let i=0; i<matrix1.length;i++){
// for(let j=0; j<matrix.length;j++){
//     if(i===j && matrix1[i][j]!==1){
//         identity=false

//     }
//     if(i!==j && matrix1[i][j]!==0){
//         identity=false
//     }
// }
// }
// if(identity){
//     console.log("The matrix is identity")
// }
// else{
//     console.log("The matrix is not identiy")
// }

// 7 Write a program that returns the transpose of a given matrix?

// let  matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let transpose=[]
// for(let i=0;i<matrix.length;i++){
//     transpose[i]=[]
//  for(let j=0;j<matrix.length;j++){
//     transpose[i][j]=matrix[j][i]
//  }
// }
// console.log("Transpose of the matrix is:")
// for(i=0;i<transpose.length;i++){
//     console.log(transpose[i])
// }

// 8 Write a program to find the most repeated value in an array of numbers?

// let arr= [4, 1, 2, 4, 3, 2, 4, 1, 2, 2];
// let frequency={};
// let maxcount=0;
// let mostrepeated;
// for(let i=0;i<arr.length;i++){
//     let num=arr[i]
//     if (frequency[num])
//     {
//         frequency[num]++
//     }
//     else{
//         frequency[num]=1
//     }
//     if(frequency[num]>maxcount){
//         maxcount=frequency[num]
//         mostrepeated=num
//     }
// }
// console.log("Most Repeated Value:", mostrepeated);
// console.log("It appears", maxcount, "times");

// 9 Write a program that approximates the derivative of f(x) = x^n?

// function derivative(n,x){
//     let h=0.0001;
//     let fxh=Math.pow(x+h,n);
//     let fx=Math.pow(x,n);
//     return (fxh-fx)/h;
// }
// let n=3
// let x=2
// console.log(`Approximate derivative of f(x) = x^${n} at x = ${x} is:`, derivative(n, x));

//10 Write a program to check if the given number is a perfect square or not?

// function isPerfectSquare(num){
//     if(num<0)return false

// let sqrt=Math.floor(Math.sqrt(num))
// return sqrt*sqrt===num

// }
// let n=49
// if(isPerfectSquare){
//     console.log(`The number ${n} is perfect number`)

// }
// else{
//     console.log(`The number &{n} is not perfect number`)
// }

// 11 Write a program to calculate the area of a triangle given its base and height?

// function areaTriangle(b, h){

//     return 0.5*b*h
// }
// console.log(`Area of triangle is :${areaTriangle(10,5)}`)

// 12 Write a program to calculate the Fibonacci series of a given number?

// let a=0,b=0,c=1
// console.log(a+ " ")
// let n=10
// for(let i =0;i<n;i++){
//     a=b
//     b=c
//     c=a+b;
//     console.log(c+" ")
// }

// 14 Write a program to check whether a given number is an Armstrong number or not?

// let number=153
// let temp=number
// let sum=0
// let digits=number.toString().length
// while(temp>0){
//     let digit=temp%10;
//     sum+=digit**digits
//     temp=Math.floor(temp/10)
// }
// if(sum===number){
//     console.log(`The number ${number} is Armstrong`)
// }
// else{
//     console.log(`The number is ${number} is not Armstrong`)
// }

// 15 Write a program to check whether a given number is a perfect number or not?

// function perfectNumber(num){
//     if(num<1)return false
//     let sum=0
//     for(let i=1; i<=num/2; i++){
//         if(num%i===0){
//             sum+=i
//         }
//     }
//     return sum===num
// }
// let number=28
// if(perfectNumber(number)){
//     console.log(`The number ${number} is perfect number`)

// }
// else{
//     console.log(`The number ${number} is not perfect number`)
// }

// 16 Write a program to convert the decimal number to a binary representation?

// using buildin method

// let num =5
// let binary=num.toString(2)
// console.log(`Binary representaion of number ${num} is :${binary}`)

// without using buildin method

// function decimalToBinary(n){
//     if(num==0) return 0
//     let binary=""
//     while(num>0){
//         let remainder=num%2;
//         binary+=remainder
//         num=Math.floor(num/2)
//     }
//     return binary

// }

// let number=10
// console.log(`The binary representation of number ${number} is ${decimalToBinary(number)}`)

// 17 Write a program to check whether the given string is palindrome or not?

// let string="malayalam"
// let rev=""
// for(let i=string.length-1; i>=0; i--){
//     rev+=string[i]
// }
// if(string===rev){
//     console.log(`The string is palindrome ${string}`)

// }
// else{
//     console.log(`The string  ${string} is not palindrome`)
// }

//18  Write a program to find the greatest common divisor (GCD) of two numbers?

// function gcd(a,b){
//     while(b!==0){
//         let temp=b
//         b=a%b
//         a=temp
//     }
//     return a
// }
// let num1=36
// let num2=60
// console.log(`The GCD of ${num1} and ${num2} is ${gcd(num1,num2)}`)

// //  19 Write a program to find the least common multiple (LCM) of two numbers?

// function gcd(a,b){
//     while(b!==0){
//         let temp=b
//         b=a%b
//         a=temp
//     }
//     return a
// }
// function lcm(a,b){
//     return (a*b)/gcd(a,b)
// }

//  let num1=12
// let num2=18
// console.log(`The GCD of ${num1} and ${num2} is ${lcm(num1,num2)}`)

// 20 Write a program to count the number of vowels in a string?

// let string="malaylam"
// let count=0
// for(let i=0; i<string.length;i++){
//     let char=string[i]
//     if( char==='a' || char==='e' || char==='i' || char=='o' || char===' u'){
//         count++
//     }
// }
// console.log(`The number of Vowels in string ${string} is ${count}`)

// 21 Write a program to calculate the factorial of a number using a recursive method?

// function factorial(n){
//     if(n===0 || n===1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// let num=10
// console.log(`The factorial of number ${num} is ${factorial(num)} `)

//22 Write a program to find the first n prime numbers up to the given number?

// let limit=50
// prime=[]

// for(let number=2; number<limit;number++){
//     let isPrime=true
//     for(let i=2;i<Math.sqrt(number);i++){
//         if(number%i===0){
//             isPrime=false
//             break
//         }
//     }
//      if(isPrime){
//         prime.push(number)

//  }

// }
// console.log(prime)

// 23  Write a program to remove duplicates in an array of numbers?

// let array =[1,2,3,4,4,6,7,7]
// let removeduplicate=[]
// for(let i=0;i<array.length;i++){
//     let isdublicate=true
//     for(let j=0;j<removeduplicate.length;j++){
//         if(array[i]===removeduplicate[j]){
//             isdublicate=false
//             break
//         }
//     }
//     if(isdublicate){
//         removeduplicate.push(array[i])
//     }
// }
// console.log(`Remove the duplicate element in the array is ${removeduplicate}`)

//24  Write a program to check whether the given string with space is palindrome or not?

// let string= "race car"
// let removeWhitespace=""
// for(let i=0; i<string.length;i++){
//     if(string[i]!==" ")
//         removeWhitespace+=string[i].toLowerCase()
// }
// let reverse=""
// for(let i=removeWhitespace.length-1;i>=0;i--){
//      reverse+=removeWhitespace[i]
// }
// if(reverse===removeWhitespace){
//     console.log(`The string  ${removeWhitespace} is Palindrome `)
// }
// else{
//     console.log(`The string ${removeWhitespace} is not Palindrome`)
// }

//25  Write a program to simplify a fraction of two numbers to its lowest term?

// let numerator = 36;
// let denominator = 60;
// let a=numerator;
// let b=denominator;
// while(b!==0){
//     let temp=b
//     b=a%b
//     a=temp
// }
// gcd=a
// let simplifiedNumerator = numerator / gcd;
// let simplifiedDenominator = denominator / gcd;

// console.log(`The simplified fraction of ${numerator}/${denominator} is ${simplifiedNumerator}/${simplifiedDenominator}`);

//26  Write a program to find the range (difference between the highest and lowest values) in an array of numbers?

// let numbers = [5, 12, 3, 20, 7, 1, 15];
// let max =numbers[0]
// let min=numbers[0]
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>max)max=numbers[i]
//     if(numbers[i]<min)min=numbers[i]
// }
// let difference=max-min
// console.log(`Difference between the higest ${max} and lowest ${min} value is ${difference}`)

// 27 Check the given number is positive, negative or zero.
// let number=0
// if(number===0)
//     console.log(`The number ${number} is zero`)
// else if(number>0){
//     console.log(`The number ${number} is postive number`)
// }
// else{
//     console.log(`The number${number} is negative number`)
// }

// 28 Check if the given alphabet is vowel or consonant.

// function vowelOrconsonant(char){
//    char = char.toLowerCase();
//    if(char==='a'|| char==='e' ||char=='i' || char==='o' || char==='u'){
//         console.log(`The given alphabet ${char} is vowel`)
//     }
//     else{
//         console.log(`The given alphabet ${char} is consonant`)
//         }
//     }

// let testCases = ['a', 'f', 'c', 'u', 'E', 'G', 'i'];
// for(let i=0;i<testCases.length;i++){
//     vowelOrconsonant(testCases[i])
// }

// 29 Check the given age is eligible for voting.

// function votingEligility(age){

//     if (age>=18){
//         console.log(`This person age ${age} is eligible for voting`)
//     }
//     else{
//         console.log(`This person age ${age} is not eligible for voting`)
//     }
// }
// }
//  let testcases=[18,23,45,67,12,18]
//  for(let i=0;i<testcases.length;i++)
//  {
//     votingEligility(testcases[i])
//  }

// 30 Check the given number is even or odd.

// function checkEvenorOdd(num){
//     if(num%2===0){
//         console.log(` The number ${num} is Even number`)
//     }
//     else{
//         console.log(`This number ${num} is odd number`)
//     }
// }
// let testCases=[1,2,3,5,6,17,19,100]
// for(let i=0; i<testCases.length;i++){
//     checkEvenorOdd(testCases[i])
// }

// 31 Given a number x, calculate the sum of n natural numbers of x.

// function sum_of_natural_numbers(num){
//     if(num<1){
//         console.log(`${num} please enter the postive number`)
//     }
//      let sum=(num*(num+1))/2
//      console.log(`Sum of first ${num} natural number is ${sum}`)
// }

// let testCases=[9,3,510,17,34]
// for(let i=0;i<testCases.length;i++){
//     sum_of_natural_numbers(testCases[i])
// }

// 32 Calculate the multiplication table of a given number.

// function multiplication_table(num){
//     console.log(`The multiplication table of ${num} is`)
//     for(let i=1;i<=10;i++){
//         console.log(`${i} * ${num} = ${i*num}`)
//     }
// }
// let testCases=[1,2,3,4,7,9]
// for(let i=0;i<testCases.length;i++){
//     multiplication_table(testCases[i])
// }

// 33 Calculate the factorial of a given number.

// function factorial(num)
// {
//     let f=1;
//     for(let i=1; i<=num; i++){
//         f=f*i
//     }
//     console.log(`Factorial of number ${num} is ${f}`)
// }
// let testCases=[1,5,10,8]
// for(let i=0;i<testCases.length;i++){
//     factorial(testCases[i])
// }

// 34 Find the max value in an array of numbers.

// function  findMax(arr){
//     let max=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if (arr[i]> max)
//         {
//             max=arr[i]
//         }
//     }
//     console.log(`Max value in the array [${arr}] is =  ${max}`)
// }
// let testCases=[
//     [1,2,3,4,10,23],
//     [40,67,100,-1,-200],
//     [1,30,199,100]
// ]
// for(let i=0;i<testCases.length;i++){
//     findMax(testCases[i])
// }

//34  Calculate the average value in an array of numbers.

// function averageNumbers(arr){
//     let sum=0
//     for(let i=0;i<arr.length; i++){
//         sum+=arr[i]
//     }
//     let average=sum/arr.length
//     console.log(`Average value in array ${arr} = ${average} `)
// }

// let testCases=[
//     [1,2,3,4,5,6],
//     [10,20,39,45,70],
//     [3,4,5,690,70,90]
// ]
// for(let i=0; i < testCases.length; i++){
//     averageNumbers(testCases[i])
// }

// 35 Check if the given number is prime or not.

// function checkprime(num){
//     if (num<=1){
//         console.log(`This number ${num} is not prime number`);
//         return;
//     }
//     for(let i=2; i<Math.sqrt(num) ;i++){
//         if(num%i===0){
//             console.log(`This number ${num} not prime number`);
//             return
//         }

//     }
//     console.log(`This number ${num} is prime number`)

// }
// let testCases=[1,24,9,20,17,15,13,23]
// for(let i=0; i < testCases.length; i++){
//     checkprime(testCases[i])
// }

// 36  first non repeating character

// function firstNonRepeating(str){

// let count={};
// for( let char of str){
//     if( count[char]){
//         count[char]+=1
//     }
//     else{
//         count[char]=1
// }
// }
// for (let char of str){
//     if(count[char]==1){
//         return char
//     }
// }

// return null
// }

// console.log(firstNonRepeating("google"))

// 37  merge two Array

// function sortarry(array){
//     for(let i=0; i<array.length;i++){
//         for(let j=i+1; j<array.length;j++){
//             if(array[i]>array[j]){
//                 let temp=array[i]
//                 array[i]=array[j]
//                 array[j]=temp;
//             }
//         }
//     }
//     return array;

// }
// // function mergeArray(Arr1,Arr2){
// //     let merge=[];
// //     for(let i=0; i<Arr1.length;i++){
// //         merge.push(Arr1[i]);
// //     }
// //      for(let i=0; i<Arr2.length;i++){
// //         merge.push(Arr2[i]);
// //     }
// //     return sortarry(merge);
// // }
// function mergeArray(Arr1,Arr2){
//     let merge=[...Arr1,...Arr2]
//     return sortarry(merge);
// }

// let array1=[3,4,29,6,7]
// let array2=[5,1,10,20]
// console.log(`Merged array is:${mergeArray(array1,array2)}`)

// 38 mex (minimum excluded value) in JavaScript

// let array=[0,1,2,4,5,7]
// let max=0
// for(let i=0;i<array.length;i++){
//     if(array[i]!==max){
//         break

//     }
//     max++
// }
// console.log(max)

// The list is not sorted then mex

// function sortedArray(array){
//     for(let i=0; i<array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(array[i]>array[j]){
//                 let temp=array[i];
//                 array[i]=array[j]
//                 array[j]=temp
//             }
//         }
//     }
//     return  array
// }
// let a=[1,4,5,6,2,0]
// let find=sortedArray(a)
// let max=0
// for (let i=0; i<find.length;i++){
//     if(find[i]!==max){
//         break
//         }
//         max++
// }
// console.log(max)

// prime product
// let limit=50
// let prime=[];
// for(let n=2 ; n<=limit; n++){
//     let isPrime=true;
//     for(let i=2;i<Math.sqrt(n); i++ ){
//         if(n%i===0){
//             isPrime=false
//             break
//     }
// }
//     if(isPrime){
//         prime.push(n)
//     }

// }

// let a=2
// let b=5
// console.log(prime)
// let product=prime[a-1]*prime[b-1]
// console.log(prime[a-1])
// console.log(product)

// Right-aligned Pyramid

//     *
//    **
//   ***
//  ****
// *****

///fsdf
// const rows =5

// for(let i=1; i<=rows;i++){
//   let str="";
//   for(let j=1; j<= rows-i;j++){
//     str +=" ";
//   }
//   for(let k=1; k<=i ; k++){
//     str +=" *"
//   }
//   console.log(str)
// }

// Left-Aligned Pyramid
// *
// **
// ***
// ****
// *****\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// rows=5
// for(let i=1;i<=rows;i++){
//   let str="";
//   for(let j=1 ;j<=i;j++){
//     str+="*"
//   }
//   console.log(str)
// }

// Centered Pyramid

//     *
//    ***
//   *****
//  *******
// *********

rows = 7;

for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j <= rows - i; j++) {
    str += " ";
  }
  for (k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  console.log(str);
}

// Inverted Pyramid
// *****
// ****
// ***
// **
// *

// row=5
// for(let i=row ;i>=1;i--){
//   let str=""
//   for(let j=1;j<=i;j++ ){
//     str+="*"

//   }
//   console.log(str);
// }

// let rows = 5;

// // Top half
// for (let i = 1; i <= rows; i++) {
//   let str = "";

//   // spaces
//   for (let j = 1; j <= rows - i; j++) {
//     str += " ";
//   }

//   // stars
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += "*";
//   }

//   console.log(str);
// }

// // Bottom half
// for (let i = rows - 1; i >= 1; i--) {
//   let str = "";

//   // spaces
//   for (let j = 1; j <= rows - i; j++) {
//     str += " ";
//   }

//   // stars
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += "*";
//   }

//   console.log(str);
// }

// Hollow Square
// *****
// *   *
// *   *
// *   *
// *****

// const row=9

// for(let i=1 ; i<=row ;i++){
//   let str=""
//   for(let j=1;j<=row;j++){
//     if(i===1 || i===row || j===1 || j===row){
//       str+="*"
//     }
//     else{
//       str +=" "
//     }
//   }
//   console.log(str)
// }

// function boardingSystem(commands){
//   let queue=[]
//   for(let command of commands){
//     let parts=command.split(" ");
//     let action=parts[0]
//     let name=parts[1]
//      if(action=== "ADD_NORMAL" && name){
//       queue.push(name);
//      }
//      else if(action==='ADD_PRIORITY' && name){
//       queue.unshift(name);
//      }
//      else if(action=== "BOARD"){
//       if(queue.length >0){
//         console.log(queue.shift());
//       }
//       else{
//         console.log("No Passengers in line")
//       }
//      }
//      else{
//       console.log("invalid command")
//      }
//   }
// }
// const input = [
//   "ADD_NORMAL Alice",
//   "ADD_NORMAL Bob",
//   "ADD_PRIORITY Carol",
//   "BOARD",
//     "BOARD",
//       "BOARD"
// ]
// boardingSystem(input)

// function bulbToggle(commands){
//   let state="OFF";
//   for(let command of commands){
//     if(command === "TOGGLE"){
//       state=state=="OFF"? "ON": "OFF";
//       console.log(state=="ON"? "Light ON💡": "Light OFF");
//     }
//     else{
//       console.log("Invalid Commands")\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//     }
//   }
// }
// let input=["TOGGLE", "TOGGLE", "TOGGLE"]
// bulbToggle(input)
// actual  conversion code starts here

///dfdfddfdfddfbbbexddsxdfdsfdsfsdfdsfsdfsdfdsf

// function twoSum(num, target) {
//   let obj = {};

//   for (let i = 0; i < num.length; i++) {
//     let diff = target - num[i];
//     if (obj[diff] !== undefined) {
//       return [obj[diff], i];
//     }
//     obj[num[i]] = i;
//   }
// }
//
function longestPalindrome(s) {
  if (s.length === 0) return "";
  let start = 0;
  let end = 0;
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expand(i, i);
    let len2 = expand(i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor(len - 1) / 2;
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

console.log(longestPalindrome("abacababacca"));

////
