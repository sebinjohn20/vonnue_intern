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
let str5 = "hello world program";
let noSpace = "";
for (let i = 0; i < str5.length; i++) {
    if (str5[i] === " ") {
        noSpace += str5[i];
 