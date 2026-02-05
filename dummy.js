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

///fdsfsdfsdfsdfsdfsdfdsfsdfsdfdsfsdfdsffdsfsdfdfffdffsdgdfgdfgdfgdfgdfgdfsdfsdfsdfgdsgsgdfgdfgsgsgsgsdgdfgfdgsdfgsdgfdgdfgdfgfdgsgdfgdfgdfgfgdfgfdggdfgdgdfsfdfdsdfsdfgdfgdfgdsgdfgsdfgdfgsfdgdfgdfgdfgdfgdfgdfgsdfgfsdgdfgfggdfgdfgdfgsgdsfgsdfgdfgsgsdfgdfgsgsdgdfgfdgfdgfdsfsdfsdfsdfsdfsafddsfdffdasfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfdfsdfdsfsfsdfsdfsfddsfdsfsdfdsfsdffsdfdsfdsfsfdfdfsdfsdfsdfsdfdsfsdfsdfdfdfsdfdsfsdfdsfdsfasfsdffdsdfdsfsdfdfsdfdfsdfsdffsdfsdfsdfsdfdsfsdfsdfdfdsfsdfdsffsdfsdfdsfsdfdsfdf

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

//dfsdfdsfdsfdfdsfsdfsdfsdfsadfsdfsdfdsfsfdsdfdsdfsdfdfsdfdfdsfdsfsdfdfsdfsdfsdfdsfdsfdsfdsfsdfsdfsdffsdfsdfdfdsffffdfdsdsfsdfdsfdfdfsdfdsfdsfdsfdsfffffffffffffffffsfdfdfsdfsdfsdfsdfsdfdsfdfdfdsfdsfdsfsdfdsfdfdsfdsf

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

///dsfsdfdsfsdfsdfdfsdfdsfsdfsdfsdffsdfdsfdsfdfdsfdsfdsfsdfdsfsdsfsdfsdsdfsdfsdfsdfsdfdsfsdfsdfdsfdsffddfsdfffsdfsdfsdfsdfsdfsdffdsfsdfsdfsdfsfdfsdfsdfsdfdfdsfsdfsdfdsfsdfsdfsdfdsfdsfdsfdsfdfsdfdsfdsffdfdsfdsffddsfdsfdsfsdfsdfsdfsdfsdfsdfhhjgjhhjggjhhjjhhjghjghjgjhhjhjjhjhjjhhjhjhjhjhjhjhjhjhjhjhgjghjddsfdsdfsdfsffdfdsfdsfdfdsfsdfsadfdf

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
///jhgjhgjhgjhgjhjhjhjjhjhjjhjjsdfsdfsdfsdfsdfsdfsdfsdfsdfdfsdfsdfsdfghjghjgjhjghghjghjgjhgjhjghgjhjhgghjhgjghjghjghjghjghjghjghjhgjghjghjghjghsdfsdfdsfsdfsdfsdfsdfsdfdsfsdfsdfdsfsdfsdfsdfsdfsdfdsfdsfsdfsdfsdfsdffdffdffdfdf

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

function longestOnes(s, k) {
  let zeroCount = 0;
  let max = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === 0) zeroCount++;
    while (zeroCount > k) {
      if (s[left] === 0) zeroCount--;
      left++;
    }
    f;
    max = Math.max(max, right - left + 1);
  }
  return max;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
