// function getLargest(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// const test_cases = [
//   [[10, 23, 20], 23],
//   [[5, 1, 3], 5],
//   [[0, 0, 0], 0],
//   [[100, 40, 100], 100],
//   [[7, 9, 2], 9],
//   [[50, 200, 150], 100],
//   [[3, -5, -1], 3],
//   [[-10, -3, -20], -3],
// ];

// function run_tests() {
//   for (let i = 0; i < test_cases.length; i++) {
//     const [input, expected] = test_cases[i];
//     const [a, b, c] = input;

//     const result = getLargest(a, b, c);
//     if (result === expected) {
//       console.log(
//         `Test case ${i + 1} is passed --Input(${a},${b},${c})=>${result}`
//       );
//     } else {
//       console.log(
//         ` Test case ${
//           i + 1
//         } failed --Input (${a},${b},${b})=>expected(${result}),got(${expected})`
//       );
//     }
//   }
// }

// run_tests();

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const test_cases = [
//   [2, true],
//   [3, true],
//   [5, true],
//   [7, true],
//   [11, true],
//   [5, false],
//   [4, false],
//   [9, false],
//   [15, false],
//   [25, false],
//   [49, false],
// ];
// for (let i = 0; i < test_cases.length; i++) {
//   const [input, expected] = test_cases[i];
//   const result = isPrime(input);

//   if (result === expected) {
//     console.log(`Test ${i + 1} passed — input(${input}) is prime number `);
//   } else {
//     console.log(
//       `Test ${
//         i + 1
//       } FAILED — input(${input}) expected(${expected}), got(${result}) is not prime Number`
//     );
//   }
// }
// let n = 5;
// let f = 1;
// for (let i = 1; i <= n; i++) {
//   f *= i;
// }
// console.log(`Factorial of ${n} is ${f}`);

// function Factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * Factorial(n - 1);
// }
// let num = 5;
// console.log(`Factorial of ${num} is ${Factorial(num)}`);

// let a = 0,
//   b = 0,
//   c = 1;
// n = 10;
// console.log(a);
// for (let i = 1; i < n; i++) {
//   a = b;
//   b = c;
//   c = a + b;
//   console.log(c);
// }
// function CheckPalindrome(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return str === rev;
// }

// console.log(CheckPalindrome("malayalam"));

// let test_cases = [
//   ["malayalam", true],
//   ["saas", true],
//   ["sassa", true],
// ];

// for (let i = 0; i < test_cases.length; i++) {
//   const [input, expected] = test_cases[i];
//   const result = CheckPalindrome(input);

//   if (result === expected) {
//     console.log(
//       `Test ${i + 1} passed — input(${input}) ${
//         result ? "is Palindrome" : "is not Palindrome"
//       }`
//     );
//   } else {
//     console.log(
//       `Test ${i + 1} FAILED — input(${input}) expected(${
//         expected ? "Palindrome" : "not Palindrome"
//       }), got(${result ? "Palindrome" : "not Palindrome"})`
//     );
//   }
// }

// let string = "javascript";
// let count = 0;
// // let vowels = "aeiouAEIOU";
// // for (let i of string) {
// //   if (vowels.includes(i)) count++;
// // }
// // console.log(count);

// for (let ch of string) {
//   if (ch == "a" || ch === "e" || ch === "i" || ch === "o" || ch === "o") {
//     count++;
//   }
// }
// console.log(count);

// function countVowels(str) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";

//   for (let ch of str) {
//     if (vowels.includes(ch)) count++;
//   }
//   return count;
// }
// let test_cases = [
//   ["javascript", 3], // a, a, i
//   ["HELLO", 2], // E, O
//   ["world", 1], // o
//   ["AEIOU", 2], // all vowels uppercase
//   ["bcdfg", 0], // no vowels
//   ["", 0], // empty string
//   ["Programming", 3], // o, a, i
// ];
// for (let i = 0; i < test_cases.length; i++) {
//   const [input, expected] = test_cases[i];
//   const result = countVowels(input);
//   console.log(
//     result === expected
//       ? `Test ${i + 1} passed — input(${input}) has ${result} vowels`
//       : `Test ${
//           i + 1
//         } FAILED — input(${input}) expected(${expected}), got(${result})`
//   );
// }

// function checkSmallestElement(arr) {
//   let smallest = arr[0];
//   for (let i of arr) {
//     if (i < smallest) {
//       smallest = i;
//     }
//   }
//   return smallest;
// }
// let test_cases = [
//   [[5, 2, 9, 1, 7], 1],
//   [[10, 20, 30], 10],
//   [[-5, -10, -3], -10],
//   [[42], 42], // single element
//   [[100, 99, 98, 97], 97],
//   [[0, 0, 0], 0],
// ];

// for (let i = 0; i < test_cases.length; i++) {
//   const [input, expected] = test_cases[i];
//   const result = checkSmallestElement(input);

//   console.log(
//     result === expected
//       ? `Test ${i + 1} passed — input(${input}) smallest = ${result}`
//       : `Test ${
//           i + 1
//         } FAILED — input(${input}) expected(${expected}), got(${result})`
//   );
// }

// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let test_cases = [
//   [
//     [2, 3, 1, 9, 4],
//     [1, 2, 3, 4, 9],
//   ],
//   [
//     [5, 4, 3, 2, 1],
//     [1, 2, 3, 4, 5],
//   ],
//   [[1], [1]],
//   [
//     [10, -1, 0, 7],
//     [-1, 0, 7, 10],
//   ],
//   [
//     [3, 3, 3],
//     [3, 3, 3],
//   ],
//   [
//     [8, 2],
//     [2, 8],
//   ],
// ];
// for (let i = 0; i < test_cases.length; i++) {
//   const [input, expected] = test_cases[i];
//   const result = sortArray([...input]);
//   console.log(JSON.stringify(result));
//   console.log(
//     JSON.stringify(result) === JSON.stringify(expected)
//       ? `Test ${i + 1} passed - input (${input}) -sorted=${result})`
//       : `Test ${
//           i + 1
//         } FAILED — input(${input}) expected(${expected}), got(${result})`
//   );
// }

// function secondLargestElement(arr) {
//   if (arr.length < 2) return null;
//   let Largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > Largest) {
//       secondLargest = Largest;
//       Largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] < Largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest === -Infinity ? null : secondLargest;
// }

// let test_cases = [
//   [[5, 3, 8, 2, 7], 7], // normal case
//   [[10, 20, 30, 40], 30], // sorted ascending
//   [[40, 30, 20, 10], 30], // sorted descending
//   [[5, 5, 5, 5], null], // all elements same
//   [[9], null], // single element
//   [[9, 9, 8], 8], // duplicates
//   [[-1, -5, -3, -2], -2], // all negative
//   [[100, 50], 50], // only two elements
// ];

// for (let i = 0; i < test_cases.length; i++) {
//   const [input, expected] = test_cases[i];
//   const result = secondLargestElement(input);
//   console.log(
//     result === expected
//       ? `Test ${i + 1} passed — input(${input}) second largest = ${result}`
//       : `Test ${
//           i + 1
//         } FAILED — input(${input}) expected(${expected}), got(${result})`
//   );
// // }
// function removeDuplicateValues(arr) {
//   let unique = [];

//   for (let i = 0; i < arr.length; i++) {
//     let dublicate = false;
//     for (let j = 0; j < unique.length; j++) {
//       if (arr[i] === unique[j]) {
//         dublicate = true;
//         break;
//       }
//     }
//     if (!dublicate) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }

// console.log(removeDuplicateValues([1, 23, 3, 4, 5, 5, 4, 3]));

// let test_cases = [
//   // 1) repeated values
//   [
//     [1, 4, 5, 1, 2, 3, 3],
//     [1, 4, 5, 2, 3],
//   ],

//   // 2) all elements same
//   [[7, 7, 7, 7], [7]],

//   // 3) no duplicates
//   [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//   ],

//   // 4) duplicates in middle
//   [
//     [9, 8, 8, 7],
//     [9, 8, 7],
//   ],

//   // 5) duplicates spread out
//   [
//     [5, 1, 5, 2, 1, 3],
//     [5, 1, 2, 3],
//   ],

//   // 7) long random duplicates
//   [
//     [2, 3, 2, 4, 4, 5, 3, 6],
//     [2, 3, 4, 5, 6],
//   ],

//   // 8) negative numbers
//   [
//     [-1, -2, -2, -3, -1],
//     [-1, -2, -3],
//   ],

//   // 9) mixed big numbers
//   [
//     [100, 200, 100, 300, 200],
//     [100, 200, 300],
//   ],

//   // 10) single element
//   [[42], [42]],
// ];

// for (let i = 0; i < test_cases.length; i++) {
//   const [input, expected] = test_cases[i];
//   const result = removeDuplicateValues(input);
//   console.log(
//     JSON.stringify(result) === JSON.stringify(expected)
//       ? `Test ${i + 1} passed — input(${input}) => ${result}`
//       : `Test ${i + 1} FAILED — expected(${expected}), got(${result})`
//   );
// }

// function arrayEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// }

// let test_cases = [
//   // 1) identical arrays
//   [[1, 2, 3], [1, 2, 3], true],

//   // 2) same length but different values
//   [[1, 2, 3], [1, 2, 4], false],

//   // 3) different lengths
//   [[1, 2], [1, 2, 3], false],

//   // 4) reversed order
//   [[1, 2, 3], [3, 2, 1], false],

//   // 5) all elements same except one
//   [[10, 20, 30], [10, 20, 40], false],

//   // 6) empty arrays — always equal
//   [[], [], true],

//   // 7) arrays with negative numbers
//   [[-1, -2, -3], [-1, -2, -3], true],

//   // 8) arrays with strings
//   [["a", "b", "c"], ["a", "b", "c"], true],

//   // 9) string mismatch
//   [["a", "b", "c"], ["a", "x", "c"], false],

//   // 10) mixed data types
//   [[1, "2", 3], [1, "2", 3], true],

//   // 11) strict mismatch (number vs string)
//   [[1, 2, 3], [1, "2", 3], false],

//   // 12) floating numbers
//   [[1.1, 2.2, 3.3], [1.1, 2.2, 3.3], true],
// ];
// for (let i = 0; i < test_cases.length; i++) {
//   const [arr1, arr2, expected] = test_cases[i];
//   const result = arrayEqual(arr1, arr2);

//   console.log(
//     result === expected
//       ? `Test ${i + 1} PASSED — Arrays ${JSON.stringify(
//           arr1
//         )} and ${JSON.stringify(arr2)} are equal`
//       : `Test ${i + 1} FAILED — expected ${expected}, but got ${result}`
//   );
// }

// function reverseArray(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

// function intersectionArray(arr1, arr2) {
//   let intersection = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         intersection.push(arr1[i]);
//       }
//     }
//   }
//   let result = new Set(intersection);
//   return Array.from(result);
// }

// console.log(intersectionArray([1, 2, 4, 4, 3, 5], [1, 2, 4, 8, 9]));

// let array1 = [1, 2, 3, , 4, 2, 3, 3, 4];
// let array2 = [1, 2, 1, 5, 6, 7];
// let array3 = [];
// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if (array1[i] === array2[j]) {
//       let dublicate = false;

//       for (let k = 0; k < array3.length; k++) {
//         if (array3[k] === array1[i]) {
//           dublicate = true;
//           break;
//         }
//       }
//       if (!dublicate) {
//         array3.push(array1[i]);
//       }
//     }
//   }
// }
// console.log(array3);

// function mergeTwoArray(arr1, arr2) {
//   let merge = [];
//   for (let i = 0; i < arr1.length; i++) {
//     merge.push(arr1[i]);
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     merge.push(arr2[j]);
//   }
//   return merge;
// }
// console.log(mergeTwoArray([1, 2, 4, 5], [4, 5, 6]));

// function longestSentence(str) {
//   let word = str.split(" ");
//   let longest = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length >= longest.length) {
//       longest = word[i];
//     }
//   }
//   return longest;
// }

// let test_cases = [
//   ["I love programming", "programming"],

//   ["JavaScript is awesome", "JavaScript"],

//   ["cat dog elephant", "elephant"],

//   ["one three five seven", "three"], // equal length → last longest

//   ["a bb ccc dddd", "dddd"],

//   ["Hello world", "Hello"],

//   ["same size word test", "word"], // last longest with same size

//   ["", ""], // empty string

//   ["single", "single"],

//   ["hi hello hey", "hello"],
// ];

// for (let i = 0; i < test_cases.length; i++) {
//   let [input, expected] = test_cases[i];
//   let result = longestSentence(input);
//   console.log(
//     result === expected
//       ? `Test ${i + 1} Passed: "${input}" → ${result}`
//       : `Test ${i + 1} FAILED: Expected(${expected}) but got(${result})`
//   );
// }

// function longestSentence(str) {
//   let word = "";
//   let longest = "";
//   for (let i = 0; i <= str.length; i++) {
//     if (i === str.length || str[i] === " ") {
//       if (word.length > longest.length) longest = word;
//       word = "";
//     } else {
//       word += str[i];
//     }
//   }
//   return word;
// }

// function CapitalizeFirstLetter(str) {
//   let c = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i - 1] === " ") {
//       c += str[i].toUpperCase();
//     } else {
//       c += str[i];
//     }
//   }
//   return c;
// }
// let test_cases = [
//   ["i am learning javascript", "I Am Learning Javascript"],
//   ["hello world", "Hello World"],
//   ["javaScript programming", "JavaScript Programming"],
//   ["single", "Single"],
//   ["multiple   spaces here", "Multiple   Spaces Here"], // preserves extra spaces
//   [" already spaced", " Already Spaced"], // leading space stays
//   ["", ""], // empty string
//   ["a b c d", "A B C D"],
// ];

// for (let i = 0; i < test_cases.length; i++) {
//   let [input, expected] = test_cases[i];
//   let result = CapitalizeFirstLetter(input);

//   console.log(
//     result === expected
//       ? `Test ${i + 1} Passed: "${input}" → "${result}"`
//       : `Test ${i + 1} FAILED: expected("${expected}") but got("${result}")`
//   );
// }

// function removeWhitespace(str) {
//   let remove = "";
//   for (let i of str) {
//     if (i !== " ") {
//       remove += i;
//     }
//   }
//   return remove;
// }
// console.log(removeWhitespace("i am learning javascript"));

// function replaceWord(str, target, replacement) {
//   let result = "";
//   let word = "";
//   for (let i = 0; i <= str.length; i++) {
//     if (i === str.length || str[i] === " ") {
//       if (word === target) {
//         result += replacement;
//       } else {
//         result += word;
//       }
//       if (i !== str.length) result += " ";
//       word = "";
//     } else {
//       word += str[i];
//     }
//   }
//   return result;
// }

// console.log(
//   replaceWord(
//     "I love JavaScript because JavaScript is fun",
//     "JavaScript",
//     "Python"
//   )
// );

//

// function subString(str, substr) {
//   let n = str.length;
//   let m = substr.length;
//   for (let i = 0; i < n - m; i++) {
//     let match = true;
//     for (let j = 0; j < m; j++) {
//       if (str[i + j] !== substr[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }
//   return false;
// }
// let str = "I love JavaScript";
// console.log(subString(str, "Java"));

// let str1 = "listen";
// let str2 = "silent";
// if (str1.length !== str2.length) {
//   console.log("not Anagram");
// } else {
//   let sortedstr1 = str1.split("").sort().join("");
//   let sortedstr2 = str2.split("").sort().join("");
//   if (sortedstr1 === sortedstr2) {
//     console.log("two string are anagram");
//   } else {
//     console.log("Not Anagram");
//   }
// }

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let count1 = {};
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     if (count1[char]) {
//       count1[char]++;
//     } else {
//       count1[char] = 1;
//     }
//   }
//   let count2 = {};
//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (count2[char]) {
//       count2[char]++;
//     } else {
//       count2[char] = 1;
//     }
//   }
//   for (let key in count1) {
//     if (count1[key] !== count2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// let str1 = "listen";
// let str2 = "silent";

// if (isAnagram(str1, str2)) {
//   console.log("Two strings are anagram");
// } else {
//   console.log("Not Anagram");
// }

// ////;

// let str1 = "l love javascript";
// let word = "";
// let words = [];
// index = 0;

// for (let i = 0; i <= str1.length; i++) {
//   if (i === str1.length || str1[i] === " ") {
//     words[index] = word;
//     index++;

//     word = "";
//   } else {
//     word += str1[i];
//   }
// }
// let result = "";
// for (let i = words.length - 1; i >= 0; i--) {
//   result += words[i];
//   if (i !== 0) result += " ";
// }
// console.log(result);

// let word = "google";
// let frequency = {};
// for (let i of word) {
//   if (frequency[i]) {
//     frequency[i]++;
//   } else {
//     frequency[i] = 1;
//   }
// }
// for (let key in frequency) {
//  if(frequency[key]===1){
//   console.log(key)
//   break
//  }
// }

// let str = "I love JavaScript and I love coding";
// let frequency = {};
// let word = "";
// for (let i = 0; i < str.length; i++) {
//   if (i === str.length || str[i] === " ") {
//     let w = word;
//     if (frequency[w]) {
//       frequency[w]++;
//     } else {
//       frequency[w] = 1;
//     }
//     word = "";
//   } else {
//     word += str[i];
//   }
// }
// for (let key in frequency) {
//   console.log(`${key}=${frequency[key]}`);
// }

// function isArmstrong(num) {
//   let temp = num;
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit * digit * digit;
//     num = Math.floor(num / 10);
//   }
//   console.log(
//     temp === sum ? `${temp} is Armstrong ` : `${temp} is not Armstrong`
//   );
// }
// isArmstrong(153);

// function isPalindrome(num) {
//   let temp = num;
//   let r = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     r = r * 10 + digit;
//     num = Math.floor(num / 10);
//   }
//   console.log(
//     temp === r
//       ? `The number ${temp} is palindrome`
//       : `The number is not ${temp}palindrome`
//   );
// }
// isPalindrome(12321);

// let person = {
//   name: "Alice",
//   age: 25,
// };
// // let person1 = { ...person };
// // person.age = 26;
// // console.log(person);

// let person1 = structuredClone(person);
// person1.age = 20;
// console.log(person);
// console.log(person1);
// let users = [
//   { id: 1, name: "John", city: "Delhi" },
//   { id: 2, name: "Mary", city: "Mumbai" },
//   { id: 3, name: "John", city: "Delhi" },
//   { id: 4, name: "Alex", city: "Chennai" },
// ];

// let uniqueNames = [];

// for (let i = 0; i < users.length; i++) {
//   let value = users[i].name;
//   let exit = false;
//   for (let j = 0; j < uniqueNames.length; j++) {
//     if (uniqueNames[j] === value) {
//       exit = true;
//       break;
//     }
//   }
//   if (!exit) {
//     uniqueNames.push(value);
//   }
// }

// console.log(uniqueNames); // ["John", "Mary", "Alex"]

// function nextPermutation(number) {
//   let i = number.length - 2;
//   while (i >= 0 && number[i] >= number[i + 1]) {
//     i--;
//   }
//   if (i > 0) {
//     let j = number.length - 1;
//     while (number[j] <= number[i]) {
//       j--;
//     }
//     [number[i], number[j]] = [number[j], number[i]];
//   }
//   let left = i + 1;
//   let right = number.left - 1;
//   while (left < right) {
//     [number[left], number[right]] = [number[right], number[left]];
//     right--;
//     left++;
//   }
//   return number;
// }
// console.log(nextPermutation([))
//sdfsdffsdfdfdfdfdsffdsfsdf
// function maxStableBuildings(H) {
//   const n = H.length;
//   if (n <= 2) return n;

//   let ans = 2;

//   for (let i = 0; i < n; i++) {
//     let seq = [H[i]];

//     for (let j = i + 1; j < n; j++) {
//       const m = seq.length;

//       if (m === 1) {
//         seq.push(H[j]);
//       } else {
//         let a = seq[m - 2];
//         let b = seq[m - 1];
//         let c = H[j];

//         if (Math.abs(b - a) <= 1 || Math.abs(b - c) <= 1) {
//           seq.push(c);
//         }
//       }
//     }

//     ans = Math.max(ans, seq.length);
//   }

//   return ans;
// }
// console.log(maxStableBuildings([5, 3, 6, 2, 5, 4]));

// function maxValidPrefixes(s) {
//   function validCount(s) {
//     let counter = 0;
//     let count = 0;
//     for (let ch of s) {
//       if (ch === "1") {
//         counter++;
//       } else {
//         counter--;
//       }
//       count++;
//       if (counter < 0) break;
//     }
//     return count;
//   }
//   let max = validCount(s);
//   for (let i = 0; i < s.length; i++) {
//     let flip = s.slice(0, i) + (s[i] === "0" ? "1" : "0") + s.slice(i + 1);
//     max = Math.max(max, validCount(flip));
//   }
//   return max;
// }

// console.log(maxValidPrefixes("01010"));

// function longestvalidParentheses(s) {
//   let stack = [];
//   let maxlen = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(") {
//       stack.push(i);
//     } else {
//       stack.pop();
//       if (stack.length === 0) {
//         stack.push(i);
//       } else {
//         maxlen = Math.max(maxlen, i - stack[stack.length - 1]);
//       }
//     }
//   }
//   return maxlen;
// }
// console.log(longestvalidParentheses(")(()())"));
// console.log(longestvalidParentheses(""));

// function search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[left] === target) return left;
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
// }

// function minWindow(s, t) {
//   let need = new Map();
//   for (let ch of t) {
//     need.set(ch, (need.get(ch) || 0) + 1);
//   }
//   let left = 0;
//   let start = 0;
//   let minLen = Infinity;
//   let count = t.length;

//   for (let right = 0; right < s.length; right++) {
//     if (need.has(s[right])) {
//       if (need.get(s[right]) > 0) count--;
//       need.set(s[right], need.get(s[right]) - 1);
//     }
//     while (count === 0) {
//       if (right - left + 1 < minLen) {
//         minLen = right - left + 1;
//         start = left;
//       }
//       if (need.has(s[left])) {
//         need.set(s[left], need.get(s[left]) + 1);
//         if (need.get(s[left]) > 0) count++;
//       }
//       left++;
//     }
//   }
//   return minLen === Infinity ? "" : s.slice(start, start + minLen);
// }
// console.log(minWindow("ADOBECODEBANC", "ABC"));
///fdsfdfdsfdsfdf
// function findRepeatedDnaSequences(s) {
//   let seen = new Set();
//   let repeated = new Set();
//   for (let i = 0; i <= s.length - 10; i++) {
//     let sub = s.slice(i, i + 10);
//     if (seen.has(sub)) {
//       repeated.add(sub);
//     } else {
//       seen.add(sub);
//     }
//   }
//   return [...repeated];
// }
// console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));

// function maxSlidingWindow(nums, k) {
//   const dqueue = [];
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (dqueue.length && dqueue[0] <= i - k) {
//       dqueue.shift();
//     }
//     while (dqueue.length && nums[dqueue[dqueue.length - 1]] <= nums[i]) {
//       dqueue.pop();
//     }
//     dqueue.push(i);
//     if (i >= k - 1) {
//       res.push(nums[dqueue[0]]);
//     }
//   }
//   return res;
// }

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// NamedNodeMap.set(s[left], N);

// function longestSubstring(s, k) {
//   let c = 0;
//   if (s.length < k) return 0;

//   let map = new Map();

//   for (let char of s) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   for (let [char, count] of map) {
//     if (count >= k) {
//       c += count;
//     }
//   }
//   return c;
// }
//console.log(longestSubstring("ababacb", 3));

// function characterReplacement(s, k) {
//   let freq = {};
//   let left = 0;
//   let maxfreq = 0;
//   let mainwindow = 0;
//   for (let right = 0; right < s.length; right++) {
//     freq[s[right]] = (freq[s[right]] || 0) + 1;
//     maxfreq = Math.max(maxfreq, freq[s[right]]);
//     let windowSize = right - left + 1;
//     if (windowSize - maxfreq > k) {
//       freq[s[left]]--;
//       left++;
//     }

//     windowSize = right - left + 1;
//     mainwindow = Math.max(windowSize, mainwindow);
//   }
//   return mainwindow;
// }
// console.log(characterReplacement("AABABBA", 1));

// function totalFruits(fruits) {
//   let left = 0;
//   let map = new Map();
//   let max = 0;
//   for (let right = 0; right < fruits.length; right++) {
//     map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
//     while (map.size > 2) {
//       map.set(fruits[left], map.get(fruits[left]) - 1);
//       if (map.get(fruits[left]) == 0) {
//         map.delete(fruits[left]);
//       }
//       left++;
//     }
//     max = Math.max(max, right - left + 1);
//   }
//   return max;
// }
// console.log(totalFruits([1, 2, 1]));

// function characterReplacement(s, k) {
//   let left = 0;
//   let map = new Map();
//   let maxFre = 0;
//   let maxWindowSize = 0;

//   for (let right = 0; right < s.length; right++) {
//     map.set(s[right], (map.get(s[right]) || 0) + 1);
//     maxFre = Math.max(maxFre, map.get(s[right]));
//     let windowSize = right - left + 1;
//     if (windowSize - maxFre > k) {
//       map.set(s[left], map.get(s[left]) - 1);
//       left++;
//     }
//     windowSize = right - left + 1;
//     maxWindowSize = Math.max(maxWindowSize, windowSize);
//   }
//   return maxWindowSize;
// }
// console.log(characterReplacement("AABABBA", 1));

// function longestOnes(s, k) {
//   let zeroCount = 0;
//   let max = 0;
//   let left = 0;
//   for (let right = 0; right < s.length; right++) {
//     if (s[right] === 0) zeroCount++;
//     while (zeroCount > k) {
//       if (s[left] === 0) zeroCount--;
//       left++;
//     }
//     f;
//     max = Math.max(max, right - left + 1);
//   }
//   return max;
// }
// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// function isValidSudoku(board) {
//   const rows = Array.from({ length: 9 }, () => new Set());
//   const boxes = Array.from({ length: 9 }, () => new Set());
//   const cols = Array.from({ length: 9 }, () => new Set());

//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       let val = board[i][j];
//       if (val === ".") continue;
//       let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//       if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
//         return false;
//       }
//       rows[i].add(val);
//       cols[j].add(val);
//       boxes[boxIndex].add(val);
//     }
//   }
//   return true;
// }
// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ]),
// );
// function sprialOrder(matrix) {
//   let res = [];
//   let top = 0;
//   let bottom = matrix.length - 1;
//   let left = 0;
//   let right = matrix[0].length - 1;
//   while (top <= bottom && left <= right) {
//     for (let j = left; j <= right; j++) {
//       res.push(matrix[top][j]);
//     }
//     top++;
//     for (let i = top; i <= bottom; i++) {
//       res.push(matrix[i][right]);
//     }
//     right--;
//     if (top <= bottom) {
//       for (let j = right; j >= left; j++) {
//         res.push(matrix[bottom][j]);
//       }
//       bottom--;
//     }
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         res.push(matrix[i][left]);
//       }
//       left++;
//     }
//   }
//   return res;
// }
// console.log(
//   sprialOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );

// function twoSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     sum = arr[left] + arr[right];
//     if (sum === target) {
//       return [left, right];
//     } else if (sum > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// function twoSum(arr, target) {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let dif = target - arr[i];
//     if (map.has(dif)) {
//       return [map.get(dif), i];
//     }
//     map.set(arr[i], i);
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));

// function threeSum(num) {
//   num.sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === num[i - 1]) continue;
//     let left = i + 1;
//     let right = num.length - 1;
//     while (left < right) {
//       let sum = num[i] + num[left] + num[right];
//       if (sum === 0) {
//         result.push([num[i], num[left], num[right]]);

//         while (num[left] === num[left + 1]) {
//           left++;
//         }
//         while (num[right] === num[right - 1]) {
//           right--;
//         }
//         left++;
//         right--;
//       } else if (sum > 0) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }
//   return result;
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// function mergeTwoArray(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   let merge = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       merge.push(arr1[i]);
//       i++;
//     } else {
//       merge.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     merge.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     merge.push(arr2[j]);
//     j++;
//   }
//   return merge;
// }

// console.log(mergeTwoArray([1, 2, 3, 4], [7, 10, 11, 15]));

// function moveZero(nums) {
//   let left = 0;

//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== 0) {
//       let temp = nums[left];
//       nums[left] = nums[right];
//       nums[right] = temp;
//       left++;
//     }
//   }
//   return nums;
// }
// console.log(moveZero([0, 1, 1, 0, 0, 1]));

// function longestSubarraySum(arr, k) {
//   let left = 0;
//   let maxLen = 0;
//   let sum = 0;
//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];
//     while (sum > k) {
//       sum -= arr[left];
//       left++;
//     }
//     if (sum === k) {
//       maxLen = Math.max(maxLen, right - left + 1);
//     }
//   }
//   return maxLen;
// }

// console.log(longestSubarraySum([1, 2, 1, 1, 1], 3));

// function longestSubArraySum(arr, k) {
//   let max = 0;
//   let sum = 0;
//   let map = new Map();
//   map.set(0, -1);
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (map.has(sum - k)) {
//       max = Math.max(max, i - map.get(sum - k));
//     }
//     if (!map.has(sum)) {
//       map.set(sum, i);
//     }
//   }

//   return max;
// }
// console.log(longestSubArraySum([1, -1, 5, -2, 3], 3));

// function smallestSubarrySum(arr, k) {
//   let left = 0;
//   let sum = 0;
//   let minLen = Infinity;
//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];
//     while (sum >= k) {
//       minLen = Math.min(minLen, right - left + 1);
//       sum -= arr[left];
//       left++;
//     }
//   }
//   return minLen;
// }

// console.log(smallestSubarrySum([2, 3, 1, 2, 4, 3], 7));

// function smallestSubArraySum(arr, k) {
//   let n = arr.length;
//   let prefix = new Array(n + 1).fill(0);
//   for (let i = 0; i < n; i++) {
//     prefix[i + 1] = prefix[i] + arr[i];
//   }
//   let deque = [];
//   let minLen = Infinity;
//   for (let i = 0; i <= n; i++) {
//     while (deque.length && prefix[i] - prefix[deque[0]] >= k) {
//       minLen = Math.min(minLen, i - deque[0]);
//       deque.shift();
//     }
//     while (deque.length && prefix[i] <= prefix[deque[deque - 1]]) {
//       deque.pop();
//     }
//     deque.push(i);
//   }
//   return minLen === Infinity ? 0 : minLen;
// }
// console.log(smallestSubArraySum([2, -1, 2], 3));

// function longestPalindrome(s) {
//   if (s.length > 2) return s;
//   function expand(left, right) {
//     while (left > 0 && s.length > right && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//     return right - left - 1;
//   }

//   let start = 0;
//   let end = 0;
//   for (let i = 0; i < s.length; i++) {
//     len1 = expand(i, i);
//     len2 = expand(i, i + 1);
//     len = Math.max(len1, len2);
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2);
//     }
//   }
//   return s.slice(start, end + 1);
// }

///

//
// function trap(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let leftmax = 0;
//   let rightmax = 0;
//   let water = 0;
//   while (left < right) {
//     if (height[left] < height[right]) {
//       height[left] >= leftmax
//         ? (leftmax = height[left])
//         : (water += leftmax - height[left]);
//       left++;
//     } else {
//       height[right] >= rightmax
//         ? (rightmax = height[right])
//         : (water += rightmax - height[right]);
//       right--;
//     }
//   }
//   return water;
// }
// console.log(trap([4, 2, 0, 3, 2, 5]));

// function invisibleSegment(nums) {
//   function isInvisible(l, r) {
//     let maxval = -Infinity;
//     let minVal = Infinity;
//     for (let i = l; i <= r; i++) {
//       maxval = Math.max(maxval, nums[i]);
//       minVal = Math.min(minVal, nums[i]);
//     }
//     return maxval - minVal <= r - l;
//   }
//   let left = 0;
//   let outsideSum = 0;
//   let maxsum = 0;
//   for (let right = 1; right < nums.length; right++) {
//     if (isInvisible(left, right)) {
//       for (let i = 0; i < left; i++) outsideSum += nums[i];
//       for (let i = right + 1; i < nums.length; i++) outsideSum += nums[i];
//       if (maxsum <= outsideSum) {
//         maxsum = outsideSum;
//       }
//     }
//     left++;
//   }
//   return maxsum;
// }
// console.log(invisibleSegment([3, 1, 2, 4, 6, 3, -2]));
// console.log(invisibleSegment([3, 1, 2, 4, 6]));

// function maxValidPrefixes(s) {
//   function validCount(s) {
//     let count = 0;
//     let counter = 0;
//     for (let ch of s) {
//       if (ch === "1") {
//         counter++;
//       } else {
//         counter--;
//       }
//       count++;
//       if (counter < 0) break;
//     }
//     return count;
//   }
//   let max = validCount(s);
//   for (let i = 0; i < s.length; i++) {
//     let filp = s.slice(0, i) + (s[i] === "0" ? "1" : "0") + s.slice(i + 1);
//     max = Math.max(max, validCount(filp));
//   }
//   return max;
// }
// console.log(maxValidPrefixes("01010"));

// function maxStableBulidings(H) {
//   n = H.length;
//   if (n <= 2) return n;
//   let ans = 2;
//   for (let i = 0; i < n; i++) {
//     let seq = [H[i]];
//     for (let j = i + 1; j < n; j++) {
//       let m = seq.length;
//       if (m === 1) {
//         seq.push(H[j]);
//       } else {
//         let a = seq[m - 2];
//         let b = seq[m - 1];
//         let c = H[j];
//         if (Math.abs(b - a) <= 1 || Math.abs(b - c) <= 1) {
//           seq.push(H[j]);
//         }
//       }
//     }
//     ans = Math.max(ans, seq.length);
//   }
//   return ans;
// }
// console.log(maxStableBulidings([5, 3, 6, 2, 5, 4]));
// function dominantElements(A, queries) {
//   let result = [];

//   for (let removeIndex of queries) {
//     // Step 1: Compute OR of remaining elements
//     let OR = 0;
//     for (let i = 0; i < A.length; i++) {
//       if (i !== removeIndex) {
//         OR |= A[i];
//       }
//     }

//     // Step 2: Count how many equal OR
//     let count = 0;
//     for (let i = 0; i < A.length; i++) {
//       if (i !== removeIndex && A[i] === OR) {
//         count++;
//       }
//     }

//     result.push(count);
//   }

//   return result;
// }

// console.log(dominantElements([7, 3, 1, 5], [2]));

// function longestvalidParentheses(s) {
//   let stack = [-1];
//   let maxLen = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       stack.push(i);
//     } else {
//       stack.pop();
//       if (stack.length === 0) {
//         stack.push(i);
//       } else {
//         maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
//       }
//     }
//   }
//   return maxLen;
// }
// console.log(longestvalidParentheses("(()"));

// function search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return mid;
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
//   return -1;
// }
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// function searchRange(nums, target) {
//   const result = [-1, -1];
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] >= target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }

//     if (nums[mid] === target) {
//       result[0] = mid;
//     }
//   }
//   left = 0;
//   right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] <= target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }

//     if (nums[mid] === target) {
//       result[1] = mid;
//     }
//   }

//   return result;
// }
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// //

// function longestOfLongestSubstring(s) {
//   let map = new Map();
//   let left = 0;
//   let maxLen = 0;
//   for (let right = 0; right < s.length; right++) {
//     while (map.has(s[right])) {
//       map.delete(s[left]);
//       left++;
//     }
//     map.set(s[right]);
//     maxLen = Math.max(maxLen, right - left + 1);
//   }
//   return maxLen;
// }
// console.log(longestOfLongestSubstring("abcabcbb"));

// function minWindow(s, t) {
//   let need = new Map();

//   for (let ch of t) {
//     need.set(ch, (need.get(ch) || 0) + 1);
//   }

//   let left = 0;
//   let count = t.length;
//   let minLen = Infinity;
//   let start = 0;
//   for (let right = 0; right < s.length; right++) {
//     if (need.has(s[right])) {
//       if (need.get(s[right]) > 0) count--;
//       need.set(s[right], need.get(s[right]) - 1);
//     }
//     while (count === 0) {
//       if (right - left + 1 < minLen) {
//         minLen = right - left + 1;
//         start = left;
//       }
//       if (need.has(s[left])) {
//         need.set(s[left], need.get(s[left]) + 1);
//         if (need.get(s[left]) > 0) count++;
//       }
//       left++;
//     }
//   }
//   return minLen === Infinity ? "" : s.slice(start, start + minLen);
// }
// console.log(minWindow("ADOBECODEBANC", "ABC"));

// function findRepeatedDnaSequences(s) {
//   let seen = new Set();
//   let repeated = new Set();
//   for (let i = 0; i <= s.length - 10; i++) {
//     let sub = s.slice(i, i + 10);
//     if (seen.has(sub)) {
//       repeated.add(sub);
//     } else {
//       seen.add(sub);
//     }
//   }
//   return repeated;
// }

// console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));

// function minSubArrayLen(nums, target) {
//   let left = 0;
//   let minLen = Infinity;
//   let sum = 0;
//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];

//     while (sum > target) {
//       sum -= nums[left];
//       left++;
//     }
//     if (sum === target) {
//       minLen = Math.min(minLen, right - left + 1);
//     }
//   }
//   return minLen === Infinity ? 0 : minLen;
// }
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// function containsNearByDuplicate(nums, k) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       if (i - map.get(nums[i])) {
//         return true;
//       }
//     }
//     map.set(nums[i], i);
//   }
//   return false;
// }

// function maxSlidingWindow(nums, k) {
//   let deque = [];
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (deque.length && deque[0] <= i - k) {
//       deque.shift();
//     }
//     while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
//       deque.pop();
//     }
//     deque.push(i);
//     if (i >= k - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }
//   return result;
// }
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// function longestSubstring(s, k) {
//   let freq = {};

//   if (s.length < k) return 0;
//   for (let char of s) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let char in freq) {
//     if (freq[char] < k) {
//       let maxlen = 0;
//       for (let part of s.split(char)) {
//         maxlen = Math.max(maxlen, longestSubstring(part, k));
//       }
//       return maxlen;
//     }
//   }
//   return s.length;
// }
// console.log(longestSubstring("aaabb", 3));

// function numberOfArithmeticSlices(nums) {
//   let left = 0;
//   let total = 0;
//   let count = 0;
//   for (let right = 2; right < nums.length; right++) {
//     if (nums[right] - nums[right - 1] === nums[right - 1] - nums[right - 2]) {
//       count++;
//       total += count;
//     } else {
//       count = 0;
//     }
//   }
//   return total;
// }
// console.log(numberOfArithmeticSlices([1, 2, 3, 4]));

// function characterReplacement(s, k) {
//   let map = new Map();
//   let left = 0;
//   let maxfre = 0;
//   let mainwindow = 0;
//   for (let right = 0; right < s.length; right++) {
//     map.set(s[right], (map.get(s[right]) || 0) + 1);
//     maxfre = Math.max(maxfre, map.get(s[right]));
//     let windowSize = right - left + 1;
//     if (windowSize - maxfre > k) {
//       map.set(s[left], map.get(s[left]) - 1);
//       left++;
//     }
//     windowSize = right - left + 1;
//     mainwindow = Math.max(windowSize, mainwindow);
//   }
//   return mainwindow;
// }
// console.log(characterReplacement("AABABBA", 1));

// function longestOnes(s, k) {
//   let zeroCount = 0;
//   let max = 0;
//   let left = 0;
//   for (let right = 0; right < s.length; right++) {
//     if (s[right] === 0) zeroCount++;
//     while (zeroCount > k) {
//       if (s[left] === 0) zeroCount--;
//       left++;
//     }
//     max = Math.max(max, right - left + 1);
//   }
//   return max;
// }
// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// ///

// function shorestSubarray(arr, k) {
//   let n = arr.length;
//   let prefix = new Array(n + 1).fill(0);
//   for (let i = 0; i < n; i++) {
//     prefix[i + 1] = prefix[i] + arr[i];
//   }
//   let deque = [];
//   let minLength = Infinity;
//   for (let i = 0; i <= n; i++) {
//     while (deque.length && prefix[i] - prefix[deque[0]] >= k) {
//       minLength = Math.min(minLength, i - deque[0]);
//       deque.shift();
//     }
//     while (deque.length && prefix[i] <= prefix[deque[deque.length - 1]]) {
//       deque.pop();
//     }
//     deque.push(i);
//   }
//   return minLength === Infinity ? -1 : minLength;
// }
// console.log(shorestSubarray([2, -1, 2], 3));

// function longestSubarray(nums, limit) {
//   let maxDeque = [];
//   let minDeque = [];
//   let left = 0;
//   let ans = 0;
//   for (let right = 0; right < nums.length; right++) {
//     while (maxDeque.length && maxDeque[maxDeque.length - 1] < nums[right]) {
//       maxDeque.pop();
//     }
//     maxDeque.push(nums[right]);

//     while (minDeque.length && minDeque[minDeque.length - 1] > nums[right]) {
//       minDeque.pop();
//     }
//     minDeque.push(nums[right]);
//     while (maxDeque[0] - minDeque[0] > limit) {
//       if (nums[left] === maxDeque[0]) maxDeque.shift();
//       if (nums[left] === minDeque[0]) minDeque.shift();
//       left++;
//     }
//     ans = Math.max(ans, right - left + 1);
//   }
//   return ans;
// }
// console.log(longestSubarray([8, 2, 4, 7], 4));

// function maxResult(nums, k) {
//   let n = nums.length;
//   let dp = new Array(n);
//   let deque = [0];
//   dp[0] = nums[0];
//   for (let i = 1; i < n; i++) {
//     while (deque.length && deque[0] < i - k) {
//       deque.shift();
//     }
//     dp[i] = nums[i] + dp[deque[0]];
//     while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
//       deque.pop();
//     }
//     deque.push(i);
//   }
//   return dp[n - 1];
// }

// console.log(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2));
// console.log(maxResult([1, -1, -2, 4, -7, 3], 2));
//fdsfsdfsdfdfsdffdffsdfsdfsdfsdfsdfsdfsdfsdffsddfdsfsdfsdffsdfsdfsdfsdfsdf

// function subarraySum(nums, k) {
//   let sum = 0;
//   let count = 0;
//   const map = new Map();
//   map.set(0, 1);
//   for (let num of nums) {
//     sum += num;
//     if (map.has(sum - k)) {
//       count += map.get(sum - k);
//     }
//     map.set(sum, (map.get(sum) || 0) + 1);
//   }
//   return map;
// }
// console.log(subarraySum([1, 2, 3], 3));

//

// function findMaxLength(nums) {
//   let map = new Map();
//   let sum = 0;
//   let maxlen = 0;
//   map.set(0, -1);
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i] === 0 ? -1 : 1;
//     if (map.has(sum)) {
//       maxlen = Math.max(maxlen, i - map.get(sum));
//     } else {
//       map.set(sum, i);
//     }
//   }
//   return map;
// }
// console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]));

// function rotate(num, k) {
//   const n = num.length;
//   k = k % n;
//   const rotated = new Array(n);
//   for (let i = 0; i < k; i++) {
//     rotated[i] = num[n - k + i];
//   }
//   for (let i = 0; i < n - k; i++) {
//     rotated[k + i] = num[i];
//   }
//   return rotated;
// }
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// 1,2,3,4,5,6,7,1,2,3,4,5,6,7

// function rotated(num, k) {
//   let n = num.length;
//   k = k % n;
//   let c = n - k;

//   let copy = [...num, ...num];

//   return copy.slice(c, c + n);
// }
// console.log(rotated([1, 2, 3, 4, 5, 6, 7], 3));

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   let map = new Map();
//   for (let char of s) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   for (let char of t) {
//     if (map.has(char)) {
//       map.set(char, map.get(char) - 1);
//     } else {
//       return false;
//     }
//     if (map.get(char) === 0) {
//       map.delete(char);
//     }
//   }
//   return map.size === 0;
// }

// function findAnagrams(s, t) {
//   let need = new Map();
//   const result = [];
//   let left = 0;
//   for (let char of t) {
//     need.set(char, (need.get(char) || 0) + 1);
//   }
//   let count = t.length;
//   for (let right = 0; right < s.length; right++) {
//     if (need.has(s[right])) {
//       if (need.get(s[right]) > 0) count--;
//       need.set(s[right], need.get(s[right]) - 1);
//     }
//     if (right - left + 1 === t.length) {
//       if (count === 0) result.push(left);

//       if (need.has(s[left])) {
//         need.set(s[left], need.get(s[left]) + 1);
//         if (need.get(s[left]) > 0) count++;
//       }

//       left++;
//     }
//   }
//   return result;
// }
// console.log(findAnagrams("cbaebabacd", "abc"));

// function longestMountain(arr) {
//   let n = arr.length;
//   let ans = 0;
//   let i = 1;
//   while (i < n - 1)
//     if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//       let left = i;
//       let right = i;
//       while (left > 0 && arr[left - 1] < arr[left]) {
//         left--;
//       }
//       while (right < n - 1 && arr[right] > arr[right + 1]) {
//         right++;
//       }
//       ans = Math.max(ans, right - left + 1);
//       i = right;
//     } else {
//       i++;
//     }
//   return ans;
// }
// console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));

//

// function maxProfit(prices) {
//   let min = Infinity;
//   let max = 0;
//   for (let price of prices) {
//     min = Math.min(min, price);
//     let profit = price - min;
//     max = Math.max(max, profit);
//   }
//   return max;
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

///

// class CreateNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// function arrayToLinkedList(arr) {
//   let dummy = new CreateNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new CreateNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }

// function linkedListToArray(head) {
//   let arr = [];
//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   return arr;
// }
// function reverseList(head) {
//   let prev = null;
//   let curr = head;
//   while (curr) {
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// }
// let head = arrayToLinkedList([1, 2, 3, 4, 5]);
// console.log("Original", linkedListToArray(head));
// let reverse = reverseList(head);
// console.log(
//   linkedListToArray(reverse)
//     .map((val) => `--->${val}`)
//     .join(" "),
// );

// function hasCycle(head) {
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) return true;
//   }
//   return false;
// }

// function detectCycle(head) {
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       slow = head;
//       while (slow != fast) {
//         slow = slow.next;
//         fast = fast.next;
//       }
//       return slow;
//     }
//   }
// }

class CreateNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let dummy = new CreateNode(0);
  let head = dummy;
  for (let val of arr) {
    head.next = new CreateNode(val);
    head = head.next;
  }
  return dummy.next;
}

function linkedListToArray(head) {
  let result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// function removeNthFromEnd(head, n) {
//   let dummy = new CreateNode(0);
//   dummy.next = head;
//   let left = dummy;
//   let right = dummy;
//   for (let i = 0; i < n; i++) {
//     right = right.next;
//   }
//   while (right.next) {
//     left = left.next;
//     right = right.next;
//   }
//   left.next = left.next.next;
//   return dummy.next;
// }
// let head = arrayToLinkedList([1, 2, 3, 4, 5]);
// let remove = removeNthFromEnd(head, 2);
// console.log(linkedListToArray(remove));

// function rotateRight(head, k) {
//   if (!head || !head.next || k === 0) return head;
//   let length = 1;
//   let tail = head;
//   while (tail.next) {
//     tail = tail.next;
//     length++;
//   }
//   k = k % length;
//   if (k === 0) return head;
//   let stepToNewTail = length - k;
//   tail.next = head;
//   let newTail = head;
//   for (let i = 1; i < stepToNewTail; i++) {
//     newTail = newTail.next;
//   }
//   let newHead = newTail.next;
//   newTail.next = null;
//   return newHead;
// }

// let head = arrayToLinkedList([1, 2, 3, 4, 5]);
// let roate = rotateRight(head, 2);
// console.log(linkedListToArray(roate));

// function deleteDuplicates(head) {
//   let dummy = new CreateNode(0);
//   dummy.next = head;
//   let prev = dummy;
//   let current = dummy;
//   while (current) {
//     if (current.next && current.val === current.next.val) {
//       let duplicate = current.val;
//       while (current && current.val === duplicate) {
//         current = current.next;
//       }
//       prev.next = current;
//     } else {
//       prev = current;
//       current = current.next;
//     }
//   }
//   return dummy.next;
// }

// let head = arrayToLinkedList([1, 2, 3, 3, 4, 4, 5]);
// let deleted = deleteDuplicates(head);
// console.log(linkedListToArray(deleted));

// function partition(head, x) {
//   let before_head = new CreateNode(0);
//   let before = before_head;
//   let after_head = new CreateNode(0);

//   let after = after_head;
//   let current = head;
//   while (current) {
//     if (current.val < x) {
//       before.next = current;
//       before = before.next;
//     } else {
//       after.next = current;
//       after = after.next;
//     }
//     current = current.next;
//   }
//   after.next = null;
//   before.next = after_head.next;
//   return before_head.next;
// }
// let head = arrayToLinkedList([1, 4, 3, 2, 5, 2]);
// let part = partition(head, 3);
// console.log(linkedListToArray(part));

// function reverseBetween(head, left, right) {
//   if (!head || left === right) return head;
//   let dummy = new CreateNode(0);
//   dummy.next = head;
//   let prev = dummy;
//   for (let i = 1; i < left; i++) {
//     prev = prev.next;
//   }
//   let curr = prev.next;
//   for (let i = 0; i < right - left; i++) {
//     let temp = curr.next;
//     curr.next = temp.next;
//     temp.next = prev.next;
//     prev.next = temp;
//   }
//   return dummy.next;
// }

// let head = arrayToLinkedList([1, 2, 3, 4, 5]);
// let reverse = reverseBetween(head, 2, 4);
// console.log(linkedListToArray(reverse));

// function ispalindrome(head) {
//   if (!head || !head.next) return true;

//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   let prev = null;
//   while (slow) {
//     let temp = slow.next;
//     slow.next = prev;
//     prev = slow;
//     slow = temp;
//   }
//   let left = head;
//   let right = prev;
//   while (right) {
//     if (left.val !== right.val) return false;
//     left = left.next;
//     right = right.next;
//   }
// // }

// function insertionSort(head) {
//   if (!head) return null;
//   let dummy = new CreateNode(0);
//   let current = head;
//   while (current) {
//     let pre = dummy;
//     let next = current.next;
//     while (pre.next && pre.next.val < current.val) {
//       pre = pre.next;
//     }
//     current.next = pre.next;
//     pre.next = current;
//     current = next;
//   }
//   return dummy.next;
// }

// let head = arrayToLinkedList([4, 2, 1, 3]);
// let insertsort = insertionSort(head);
// console.log(linkedListToArray(insertsort));

// //dsfsdfsfsdfsdfffdfsdffddsfsdfsdfsdfdsfsdfdffsdfdsfsdfsdfdsfsfdsdfsdfsdfsdfsdfsdffdsffdfdfsddsfdfdsfdsfffsdsdfsfsffdffffdsffsffffdfdsffdfdfsdfsfsdfsdfsdfsdfsdfdfffffffdfdsfsdffdfdsdfdasdsdsddffsffdsfdfsfdfdsdfdsfdfdffsdfsdfsdfsdfsfsdffsdffsdfdfsddfsdfdffsdfsdfffdfssdfdsfdsfsdfffdfssdfsdfsdfsdfsdfsdfffdfdsfsdfdffsdfsdfsdfsddsfsdfsdfsdfsdfdsfdfdfdfdsfsdfsdfsdfsdfsdfsdfdsfsdfsdfdfdfdsfdsfsfsdfsdfsdfsdfsdfsdfffdfsdfssdfsfddfdfdfdsfdsfdsfdsfdsfdfdfffdfdffdsddfsfdfdsfffdfdsfdfdffdfsdfsdffsdffsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfsdfsdfdsfsdfsdfsdfsffffdffdsfdfdfdffdfdsfsdfsdfsdfdfdfdsffsdfdsffsdfdsfsdfsdfdfsdfsdfsdfsdfsdfssdfsdfdfsdfsfffffsdfsfsfsfsfsdfsdfsafdfsdfsdffsdfdsfsdfsdfsfdfdsfsdfdffsfsdfsfsfsdfsdfdfsdfsdfdfsdfsdfsdfsdfsdffsfsdfsdffsfsdffdsfsdfsdfsdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdffdfdsfdsddfsdfsdffsdfsdfdsfsdffsffdsdsfdsfdddfsdfsdffdsfffdsfsdffsdfdfsdfsdfsfdsfdfdfsdfsdfsdffsdfsdfdfdsfdfsdffsdfdsffffdsdffdsfdfdfdfdfdfffsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsadfasdfsdfsdfsdfsdffdfsdfdfsdfsdfsdfsdfsfsdfdfdsfdsfdsfsdfffffffdfdfsdfsdfafsdfsdfsfsfsdfsdfasdfdsfdsffsdfasfsdfsdfdfsdfffffsfasdfdfdsfdfdsffsdfdfdsfdsfsdfdfsdfsdfsdfdfdsfdsfsdfsdfsdfsdfsdfdfdfsdfddfsdfdsfdsfdfsdfs dfsdfdffdsfs dfsdffdffdsfdsfdf dfsdfff dfs dfdsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfsf s fs dfssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd fssd f ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff ss d ff_fsdfss	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d	f	f	s	s	d
// fdf;

// function topKFrequent(nums, k) {
//   let freq = new Map();
//   let result = [];

//   for (let num of nums) {
//     freq.set(num, (freq.get(num) || 0) + 1);
//   }
//   for (let [num, count] of freq.entries()) {
//     result.push([num, count]);
//   }
//   return result
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map((item) => item[0]);
// }
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// function findMedianSortedArrays(num1, nums2) {
//   let result = [...num1, ...nums2].sort((a, b) => a - b);

//   return result.length % 2 === 0
//     ? (result[result.length / 2 - 1] + result[result.length / 2]) / 2
//     : result[Math.floor(result.length / 2)];
// }
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
