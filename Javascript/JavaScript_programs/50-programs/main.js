//  .........1  Find the largest of 3 numbers


// let a= 10
// let b= 20 
// let c= 23
//  if (a>=b && a>=c){
//     console.log(` The largest number is = ${a}`)

//  }
//  else if(b>=a && b>=c){
//     console.log(` The largest number is = ${b}`)
//  }
//  else{
//     console.log(` The largest number is: ${c}`)
//  }




//  2 Check if a number is even or odd



// let n= 10
// if(n%2==0){
//     console.log(`The number ${n} is even number`)
// }
// else
// {
//     console.log(` The number ${n } is odd number`)
// }

// 3 Check if a number is prime



 
// function isPrime(num){
//     if(num<2){
//         return false
//     }
//     for(let i=2; i<=Math.sqrt(num);i++)
//     {

//     if(num % i==0){
//         return false
//     }
//     }
//     return true

// }

// let number=29;
// if(isPrime(number))

// {
//     console.log(`${number} is prime number`)

// }
// else
// {
//     console.log(`${number} is Not prime number`)
// }





// // 4 Find factorial of a number


// let n=10
// let f=1

// for(let i=1; i<=10; i++){
//     f*=i
// }
// console.log(`Factorial of ${n} is ${f}`)






//  5 Find factorial of a number using fuction recursion







// function factorial(n){
//     if (n==0 || n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// let number = 5;
// console.log(`factorial of ${number} is ${factorial(number)}`)






// 6 Generate Fibonacci series (first N terms)




// let a=0, b=0, c=1;
// n=10
// console.log(a)
// for (let i=1;i<10;i++){
//     a=b;
//     b=c;
//     c=a+b;
//     console.log(c)
// }
// Reverse a string



// 7 Check if a string is a palindrome




// let string ="malayalam"
// let reverse=""
// for(let i=string.length-1; i>=0; i--){
//     reverse+=string[i];
// }
// if(string===reverse){
//     console.log(`The string ${string} is Palindrome`);

// }
// else{
//     console.log(`The string ${string} is Not Palindrome`);
// }






// 8 Count vowels in a string



//  let string= "javascript";
//  let count=0
//  let vowels="aeiouAEIOU";
//  for (let i = 0 ;i<string.length; i++)
//  {
//     if(vowels.includes(string[i]))
//     {
//         count++
//     }
//  }
//  console.log(`No of vowels in the string  ${string} is ${count}`)



// 9 Count vowels in a string without using includes



// function countVowels(str){
//     str=str.toLowerCase();
//     let count=0
//     for(let i=0; i< str.length; i++)
//     {
//         let ch =str[i];

//         if(ch==='a'|| ch === 'e' || ch==='i' || ch==='o' ||ch==='o')
//         {
//             count++;
//         }
//     }
//     return count
// }


// let text= "Hello World";
// console.log(` Number of vowels in ${text} is:${countVowels(text)}`)




// 🔹 Arrays






//  10 Find the largest element in an array



// let ar=[1,2,3,4,5,9]
// let largest =ar[0]

// for(i=0; i<=ar.length;i++){
//  if(ar[i]>largest){
//     largest=ar[i]

//  }
// }
// console.log(`The largest the element in the array ${ar} is ${largest}`)






//  11  Find the smallest element in an array



// let array=[1,2,3,4,5,6,10]
// let smallest=array[0]
// for (let i=0; i<=array.length; i++){
//     if(array[i]<smallest){
//         smallest=array[i]
//     }
// }
// console.log(`The smallest the array is ${array} is ${smallest}`)



// 12   Sort an array (without using .sort())





// let array=[1,8,5,9,6,7,3]

// for(let i=0;i<=array.length;i++){
//     for(let j=i+1; i<array.length; j++){}
//     if(array[i] >array[j]){
//         let temp=array[i]
//         array[j]=array[i]
//         array[i]=temp
        
//     }
// }
// console.log(`The sorted array is ${array}`)






// 14 Find the second largest element in an array
//  let array=[1,2,4,7,80,99]
//  largestElement= -Infinity;
//  secondLargestElement=-Infinity;
//  for(let i=0 ; i<array.length;i++)
// {
//     if(array[i]>largestElement){
//         secondLargestElement=largestElement;
//         largestElement=array[i];
//     }
//     else if(array[i]>secondLargestElement && array[i]<largestElement)
//     {
//         secondLargestElement=array[i]
//     }
// }
// console.log(`Second largest element in array  ${array} is ${secondLargestElement}`)



//  15 remove duplicates from an array




//  let array=[1,2,3,3,4,2,3]
//  unique=[]
//  for(let i =0; i<array.length;i++){
//     let dublicate=false

//     for (let j=0; j<unique.length;j++){
//         if(array[i]===array[j]){
//             dublicate=true;
//             break
        
//         }
//     }
//     if(!dublicate){
//         unique.push(array[i])
//     }
//  }
//  console.log(`The unique element are ${unique}`)




// 16 Check if two arrays are equal



// function arrayEqual( arr1 ,arr2)
// {
//     if (arr1.length!==arr2.length){
//        return false
//     }
//     for(i=0; i<arr1.length;i++){
//         if(arr1[i]!==arr2[i])
//         {
//             return false

//         }
//     }
//     return true 
// }
// let array1=[1,2,3,4,5,6]
// let array2=[1,2,3,4,5,6]
// if(arrayEqual(array1, array2))
// {
//     console.log("The two array are same")
// }
// else
//     console.log("Two array are not same")





// 17 Reverse an array





// let array=[1,2,3,4,5]
// let r=[]
// for(let i=array.length-1;i>=0;i--){
//     r.push(array[i])

// }
// console.log(`The reverse the array is ${r} `)




// Find the sum of all elements in an array


// let array=[1,2,3,4,5]
// sum=0
// for(let i=0; i<array.length; i++)
// {
//     sum+=array[i]
// }
// console.log(`Sum of array of elements ${array} is ${sum}`)


// 18 Find intersection of two arrays



// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];
// let intersection = [];

// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i] === array2[j]) {
//             intersection.push(array1[i]);
//         }
//     }
// }

// console.log(intersection);





// let array1=[1,2,3,,4,2,3,3,4,]
// let array2=[1,2 ,1,5,6,7,]
// let array3=[]
// for(let i=0;i<array1.length; i++){
//     for(let j=0;j<array2.length;j++){
//         if( array1[i]===array2[j]){
//             let dublicate=false

//             for(let k=0 ; k<array3.length;k++){
//                 if(array3[k]===array1[i]){
//                     dublicate=true
//                     break
//                 }
//             }
//             if(!dublicate){
//                 array3.push(array1[i])
//             }
//         }

//     }
// }
// console.log(array3)



// 19 Merge two array 

//     let array1=[1,2,3,4,5];
//     let array2=[6,,7,8,9]
//     let Merge=[]
// for (let i=0; i<array1.length ; i++){
//     Merge.push(array1[i])
// }
// for(let  j =0; j<array2.length; j++){
//     Merge.push(array2[j])
// }
// console.log(`Merged array is [${Merge}]`)





// 20  Count occurrences of each character in a string

// let string="javascript"
// count={}
// for(let i=0; i<string.length; i++)
    
// {
//     let char=string[i]
//     if (count[char]){
//         count[char]++
//     }
//     else{
//         count[char]=1
//     }

// }
// console.log(count)






// 22 Find the longest word in a sentence


// using split() function

// let sentence = "I am learning JavaScript programming";
// let word=sentence.split(" ")
// let longestSentence=""
// for (let i=0 ; i<word.length; i++){
//     if(word[i].length>longestSentence.length)
//     {
//         longestSentence=word[i]
//     }
// }
// console.log(`The longest word in the sentence is ${longestSentence}`)




// without using split() function




// let sentence = "I am learning JavaScript programming";
// let word = "";
// let longestWord = "";   

// for (let i = 0; i <= sentence.length; i++) {
//     if (i === sentence.length || sentence[i] === " ") {
//         if (word.length > longestWord.length) {
//             longestWord = word;   
//         }
//         word = "";
//     } else {
//         word += sentence[i];
//     }
// }

// console.log(`The longest word is "${longestWord}"`);


// 23 Capitalize first letter of each word in a sentence



// let sentence = "i am learning javascript programming";
// let c=""
// for (let i =0; i<sentence.length; i++){
//     if(i===0 || sentence[i-1]===" ")
//     {
//         c+=sentence[i].toUpperCase()
//     }
//     else{
//         c+=sentence[i]
//     }
// }
// console.log(`Capitalize first letter in sentence is ${c}`)








// 24 Remove all white spaces from a string






// let sentence = "i am learning javascript programming";
// let removeWhitespace=""
// for(let i=0; i<sentence.length;i++){
//     if (sentence[i]!==" ")
//     {
//         removeWhitespace+=sentence[i]
//     }
// }
// console.log(`Remove the whitespace in the sentence is :${removeWhitespace}`)





//25  Replace all occurrences of a word in a string


// let str = "I love JavaScript. JavaScript is powerful.";
// let result=str.replaceAll("JavaScript", "Python");
// console.log(str)




// 26 Find substring without using .includes()



// using includes

// let str=" I love Javascript";
// let substr1="Javascript"
// let substr2="Python"
// console.log(str.includes(substr1))
// console.log(str.includes(substr2))

// without using includes


// let str=" I love Javascript"
// let substr="Java"
// let found=false
// for(let i=0;i<str.length-substr.length;i++){
//     let match =true;
//     for (let j=0;j<substr.length;j++){
//         if(str[j+i]!==substr[j]){
//             match =false
//             break
//         }
//     }
//     if(match){
//         found=true
//         break
//     }

// }
// console.log(found)





// 27 Check if two strings are anagrams



// let str1="listen";
// let str2="silent"
// if (str1.length!==str2.length){
//     console.log("not Anagram")
// }
// else{
//     let sortedstr1=str1.split("").sort().join("");
//     let sortedstr2=str2.split("").sort().join("")
//     if(sortedstr1===sortedstr2){
//         console.log("two string are anagram")
//     }
//     else{
//         console.log("not anagram")
//     }
// }

//28 Reverse each word in a sentence
// let str="I love javascript"
// let word =""
// let result=""
// for(let i=0; i<=str.length;i++)
// {
//     if(i===str.length || str[i]===" "){
//         let rev=""
//         for(let j=word.length-1; j>=0;j--){
//             rev+=word[j]
//         }
//         result+=rev
//         if(i!==str.length){
//             result+=" "
//         }
//         word=""
//     }else{
//         word+=str[i]
//     }

    
// }
// console.log(result)




// 29 Find frequency of words in a sentence


// let str = "I love JavaScript and I love coding";
// let frequency={}
// let word=""
// for(let i=0;i<str.length;i++){
//     if(i===str.length|| str[i]===" "){
//         let w=word
//         if(frequency[w]){
//             frequency[w]+=1
//         }
//         else{
//             frequency[w]=1
//         }
//         word=""
//     }
//     else{
//         word+=str[i]
//     }
// }
// console.log(frequency)


// 🔹 Numbers & Math



// 30 Find Armstrong number (e.g., 153)

// let num=153
// let temp=num

// let sum=0
// let digits=num.toString().length;
// while(temp>0){
//     let digit=temp%10;
//     sum+=digit**digits;
//     temp=Math.floor(temp/10);
// }
// if(sum===num){
//     console.log(`${num} is an Armstring number`)

// }
// else{
//     console.log(`${num} is not an Armstrong number`)
// }






// 31  Convert binary → decimal





// function binaryTodecimal(binary){
//     let decimal=0
//     let power=0
//     for(let i=0; i<binary.length-1; i++){
//         let bit=binary[i]
//         if(bit==='1'){
//             decimal+=Math.pow(2,power)
//         }
//         power++
//     }
//     console.log(`Binary ${binary} -> Decimal ${decimal}`)
// }
// let testCases=["1011", "1101", "1000", "111111", "0", "1"]
// for(let i=0; i < testCases.length; i++){
//     binaryTodecimal(testCases[i])
// }






// 32  Find sum of digits of a number





//  function sumOfdigits(num){
//     let sum=0;
//     let original=num
//     while(num>0){
//         sum+=num%10;
//         num=Math.floor(num/10)
//     }
//     console.log(`The sum of digits ${original} is ${sum}`)
//  }
//  let testCases=[123,456,789,1090]
//  for(let i=0; i < testCases.length; i++){
//     sumOfdigits(testCases[i])
//  }






// 33 Check if a number is palindrome





// function isPalindrome(num){
//     let reverse=0
//     let digit=0
//     let original=num
//     while(num>0){
//         digit=num%10;
//         reverse=reverse*10+digit
//         num=Math.floor(num/10)
//     }
//     if(reverse===original){
//         console.log(`The number ${original} is palindrome`)
//     }
//     else{
//         console.log(`The number ${original} is not palindrome`)
//     }
    
// }
// let testCases = [121, 12321, 123, 101, 4554, 10];

// for(let i=0; i < testCases.length; i++){
//     isPalindrome(testCases[i])
// }





// 🔹 Intermediate (Objects & Functions)

// 34  Count occurrences of elements in an array (using object/map)



// Using Object


// function countOccurrence(arr){
//     let count={}
//     for(let i=0; i < arr.length ; i++){
//         let element=arr[i]
//         if(count[element]){
//             count[element]+=1
//         }
//         else{
//             count[element]=1

//         }
//     }
//     console.log(`Count the occurrence in the array ${arr} is:`,count)
// }
// let testCases=[
//     [1, 2, 2, 3, 3, 3, 4],
//     ["apple", "banana", "apple", "orange", "banana"],
//     []
// ];
// for(let i=0; i<testCases.length;i++){
//     countOccurrence(testCases[i])
// }




// using map


// function countOccurencesMap(arr){
//     let counts= new Map();
//     for(let element of arr)
//     {
//         counts.set (element,(counts.get(element) || 0)+1);
//     }
//     console.log(`Occurences in [${arr}]`)
//     for(let[key, value] of counts.entries()){
//         console.log(`${key} -> ${value}`)
//     }
// }
// let testCases=[
//     [1,2,3,3,4,2,6,7,8,7,6,7],
//     ["apple", "banana", "apple", "orange", "banana"],
//     []
// ]
// for (let i=0; i <testCases.length; i++){
//     countOccurencesMap(testCases[i])
// }






// 35 Merge two objects


// Using Spread Operator


// let obj1={ a:1,b:2,c:4}
// let obj2={ e:3,d:4,f:2}
// let merge={...obj1,...obj2}
// console.log(merge)


// 36 Clone an object (shallow & deep copy)


// Methods to Create a Shallow Copy:

// let obj1={a:1,b:{x:10}}
// let shallow1=Object.assign({},obj1);
// let shallow2={...obj1}
// console.log(shallow1)
// console.log(shallow2)
//  shallow1.b.x=99;
//  console.log(obj1.b.x)
//  let deep=structuredClone(obj1)
//  deep.b.x=77
//  console.log(obj1.b.x)






// 37  Find unique values from array of objects


// function getUniqueBykey(arr,key){
//     let seen=new Set();
//     return arr.filter(obj=>{
//         if(seen.has(obj[key])) return false
//         seen.add(obj[key]);
//         return true;
//     });

// }
// let users=[
//     { id:1, name: "Alice"},
//     { id:2, name:"Bob"},
//     { id:3, name:"Charlie"},
//     { id:1, name: "Alice"},
//     { id:2, name:"Bob"}
// ]
// console.log("Unique vy id:",getUniqueBykey(users,"id"))
// console.log("Unique by name:", getUniqueBykey(users,"name"))




// 38  Group objects by a property (e.g., students by grade)


// function groupBy(arr,key){
//     return arr.reduce((acc,obj) => {
//         let groupKey=obj[key]
//         if(!acc[groupKey]){
//             acc[groupKey]=[];
//         }
//         acc[groupKey].push(obj)
//         return acc;
//     })
// }

// let students = [
//     { name: "Alice", grade: "A" },
//     { name: "Bob", grade: "B" },
//     { name: "Charlie", grade: "A" },
//     { name: "David", grade: "C" },
//     { name: "Eva", grade: "B" }
// ];

// console.log(groupBy(students, "grade"));

// Flatten a nested array
let arr=[1,[2,[3,4],5],6]

let flatArr=arr.flat(Infinity)
console.log(flatArr)









// Implement a stack using array




// class Stack{

//     constructor(size){
//         this.size=size;
//         this.items=new Array(size);
//         this.top=-1;

//     }
//     push(element){

//         if(this.top===this.size-1){
//             console.log("Stack Overflow")
//             return
//         }
//         this.top++;
//         this.items[this.top]=element
//     }
//     pop(){
//         if(this.top===-1){
//             console.log("stack Underflow")
//              return null
//         }
//         let popped=this.items[this.top]
//         this.top--
//         return popped;
       
//     }
//     printStack(){
//         let result="";
//         for(let i=0;i<=this.top;i++){
//             result+=this.items[i]+ " ";

//         }
//         console.log(result)
//     }
    
//     }
//     let stack=new Stack(5)
//     stack.push(10);
//     stack.push(20)
//     stack.push(30)
//     stack.pop()
//     stack.printStack()







// Implement a queue using array






// class Queue{
//     constructor (size){
//         this.size=size;
//         this.items=[];
//         this.front=0
//         this.rear=0
//     }
//     enqueue(element){
//         if(this.rear===this.size){
//             console.log("queue is full")
//         }
//         this.items[this.rear]=element;
//         this.rear++
//     }
//     dequeue(){
//         if(this.rear===this.front){
//             console.log("Queue is empty")
//             return null;
//         }
//         let removed=this.items[this.front];
//         this.front++;
//         return removed
//     }
//     printQueue(){
//         let result="";
//         if(this.rear===this.front){
//             console.log("Queue is Empty")
//         }
//         else{
//         for(let i=this.front;i<this.rear;i++){
//             result+= " -> "+this.items[i]
//         }
//         console.log(result)
//     }
//     }
// }




// let queue=new Queue(5)
// queue.enqueue(10)
// queue.enqueue(20)
// queue.printQueue()
// queue.dequeue()
// queue.dequeue()
// queue.printQueue()
// Implement a debounce function