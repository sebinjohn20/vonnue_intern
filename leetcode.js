///----Longest Palindrome substring----------------
//

//dsfds

// function longestPalindrome(s) {
//   if (s.length === 0) return "";
//   let start = 0;
//   let end = 0;
//   function expand(left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//     return right - left - 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     let len1 = expand(i, i);
//     let len2 = expand(i, i + 1);
//     let len = Math.max(len1, len2);
//     if (len > end - start) {
//       start = i - Math.floor(len - 1) / 2;
//       end = i + Math.floor(len / 2);
//     }
//   }

//   return s.substring(start, end + 1);
// }

// console.log(longestPalindrome("abacababacca"));

// ////

//  2  Container With Most Water

// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let maxArea = 0;

//   while (left < right) {
//     let width = right - left;
//     let area = Math.min(height[left], height[right]) * width;
//     maxArea = Math.max(area, maxArea);

//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxArea;
// }
// console.log(maxArea([8, 8, 6, 2, 5, 4, 8, 3, 7]));

// 3 Sum
// function threeSum(num) {
//   num.sort((a, b) => a - b);
//   const result = [];

//   for (let i = 0; i < num.length - 2; i++) {
//     if (i > 0 && num[i] === num[i - 1]) continue;

//     let left = i + 1;
//     let right = num.length - 1;
//     while (left < right) {
//       const sum = num[i] + num[left] + num[right];
//       if (sum === 0) {
//         result.push([num[i], num[left], num[right]]);
//         while (num[left] === num[left + 1]) left++;
//         while (num[right] === num[right - 1]) right--;
//         right--;
//         left++;
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

// ////
///-----------------------Remove Nth Node From End of List----------------------
// function removeNthFromEnd(head, n) {
//   position = head.length - n;
//   let newArr = head.filter((_, index) => index !== position);

//   return newArr;
// }

// console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
// ListNode definition

// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }
// function removeNthFromEnd(head, n) {
//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let left = dummy;
//   let right = dummy;
//   for (let i = 0; i < n; i++) {
//     right = right.next;
//   }
//   while (right.next !== null) {
//     right = right.next;
//     left = left.next;
//   }
//   left.next = left.next.next;
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
// function arrayToLinkedlist(arr) {
//   let dummy = new ListNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }
// let head = arrayToLinkedlist([1, 2, 3, 4, 5]);
// let newHead = removeNthFromEnd(head, 2);
// newLink = linkedListToArray(newHead);
// console.log(newLink.map((val) => `--> ${val}`).join(" "));

//
// . Remove Duplicates from Sorted Array

// function removeDuplicates(nums) {
//   if (nums.length === 0) return;
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] !== nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return nums.slice(0, i + 1);
// }
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// /////
//  Remove Element

// function removeElement(nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return nums.slice(0, k);
// }
// console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 1));

//  twosum

// function twoSum(nums, target) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     let d = target - nums[i];
//     if (obj[d] !== undefined) {
//       return [obj[d], i];
//     }
//     obj[nums[i]] = i;
//   }
// }

//_________________ Find the Index of the First Occurrence in a String________________>>>>>>>>

// var strStr = function (haystack, needle) {
//   if (haystack === needle || needle === "") return 0;
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (haystack[i] === needle[0]) {
//       let substr = haystack.substring(i, i + needle.length);
//       if (substr === needle) {
//         return i;
//       }
//     }
//   }
//   return -1;
// };
// console.log(strStr("aadbutsad", "aad"));

///------------------------ Next permutation------------------>

// function nextPermutation(nums) {
//   let i = nums.length - 2;
//   while (i >= 0 && nums[i] >= nums[i + 1]) {
//     i--;
//   }
//   if (i >= 0) {
//     let j = nums.length - 1;
//     while (nums[j] <= nums[i]) {
//       j--;
//     }
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//   }
//   let left = i + 1;
//   let right = nums.length - 1;
//   while (left < right) {
//     [nums[left], nums[right]] = [nums[right], nums[left]];
//     left++;
//     right--;
//   }
//   return nums;
// }
// console.log(nextPermutation([1, 3, 5, 4, 2]));

//

////  _______Trap Water________>>>>>>>>>>>>

// function trap(height) {
//   let left = 0;
//   let leftmax = 0;
//   let right = height.length - 1;
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
//   }//dfdfdsf
//   return water;
// }
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

///

///_____________________Rotate List________________________>>>>>>>>>>>>>>>>>

// Definition for singly-linked list
// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }

// function rotateRight(head, k) {
//   // Base cases
//   if (!head || !head.next || k === 0) return head;

//   // Step 1: Find length and tail
//   let length = 1;
//   let tail = head;

//   while (tail.next !== null) {
//     tail = tail.next;
//     length++;
//   }

//   // Step 2: Reduce k
//   k = k % length;
//   if (k === 0) return head;

//   // Step 3: Make the list circular
//   tail.next = head;

//   // Step 4: Find new tail
//   let stepsToNewTail = length - k;
//   let newTail = head;

//   for (let i = 1; i < stepsToNewTail; i++) {
//     newTail = newTail.next;
//   }

//   // Step 5: Break the circle
//   let newHead = newTail.next;
//   newTail.next = null;

//   return newHead;
// }

// function createLinkedList(arr) {
//   if (arr.length === 0) return null;
//   let dummy = new ListNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }

// function printList(head) {
//   let result = [];
//   while (head) {
//     result.push(head.val);
//     head = head.next;
//   }
//   console.log(result.join("->"));
// }

// let head = createLinkedList([1, 2, 3, 4, 5]);
// let rotated = rotateRight(head, 2);
// printList(rotated);

// function sortColors(num) {
//   let s = num.sort((a, b) => a - b);
//   return s;
// }

// console.log(sortColors([2, 0, 2, 1, 1, 0]));

// ///-------------------------Sort colors----------------------------------->

// function sortColors(nums) {
//   let low = 0;
//   let mid = 0;
//   let high = nums.length - 1;
//   while (mid <= high) {
//     if (nums[mid] === 0) {
//       [nums[low], nums[mid]] = [nums[mid], nums[low]];
//       mid++;
//       low++;
//     } else if (nums[mid] === 1) {
//       mid++;
//     } else {
//       [nums[mid], nums[high]] = [nums[high], nums[mid]];
//       high--;
//     }
//   }
//   return nums;
// }
// console.log(sortColors([1, 0, 2, 0, 1, 0, 1]));

///

////--------------------remove duplicate ------------------------------->

// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }
// function deleteDuplicates(head) {
//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let prev = dummy;
//   let current = head;
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
// function createLinkedList(arr) {
//   if (arr.length === 0) return 0;
//   let dummy = new ListNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }
// function printList(head) {
//   let result = [];
//   while (head) {
//     result.push(head.val);
//     head = head.next;
//   }
//   console.log(result.join("->"));
// }

// let head = createLinkedList([1, 2, 3, 3, 4, 4, 5]);
// printList(head);

// let newHead = deleteDuplicates(head);
// printList(newHead);

//////---------------------------. Partition List------------------------------>>>>>>>>>>>

// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }
// function partition(head, x) {
//   let before_head = new ListNode(0);
//   let before = before_head;
//   let after_head = new ListNode(0);
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
// function arrayToLinkedlist(arr) {
//   if (arr.length === 0) return 0;
//   let dummy = new ListNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }
// function printList(head) {
//   let result = [];
//   while (head) {
//     result.push(head.val);
//     head = head.next;
//   }
//   console.log(result.join("->"));
// }

// let head = arrayToLinkedlist([1, 4, 3, 2, 5, 2]);
// let part = partition(head, 3);
// printList(part);

//______________________Merge sorted array___________________

// function merge(nums1, m, nums2, n) {
//   let k = m + n - 1;
//   let i = m - 1;
//   let j = n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
//   return nums1;
// }
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// ///

//----------------------------  Valid Palindrome--------------------------------

// function isPalindrome(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     while (left < right && !isAlphaNum(s[left])) {
//       left++;
//     }
//     while (left < right && !isAlphaNum(s[right])) {
//       right--;
//     }
//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// function isAlphaNum(ch) {
//   return (
//     (ch >= "a" && ch <= "z") ||
//     (ch >= "A" && ch <= "Z") ||
//     (ch >= "0" && ch <= "9")
//   );
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));

// function isPalindrome(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     while (left < right && !isAlphaNum(s[left])) {
//       left++;
//     }
//     while (left < right && !isAlphaNum(s[right])) {
//       right--;
//     }
//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// function isAlphaNum(ch) {
//   return (
//     (ch >= "a" && ch <= "z") ||
//     (ch >= "A" && ch <= "Z") ||
//     (ch >= "0" && ch <= "9")
//   );
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("malayalam"));

///----------------- Linked List Cycle II---------------------

// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }

// function arrayToLinkedlist(arr) {
//   let dummy = new ListNode(0);
//   let head = dummy;
//   for (let val of arr) {
//     head.next = new ListNode(val);
//     head = head.next;
//   }
//   return dummy.next;
// }

// function hasCycle(head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// }

// let a = arrayToLinkedlist([3, 2, 0, -4]);

// let tail = a;
// let cycleNode = a.next;
// while (tail.next !== null) {
//   tail = tail.next;
// }
// tail.next = cycleNode;
// //
// console.log(hasCycle(a));

// function detectCycle(head) {
//   let slow = head;
//   let fast = head;
//   while (fast != null && fast.next != null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       slow = head;

//       while (slow !== fast) {
//         slow = slow.next;
//         fast = fast.next;
//       }
//       return slow;
//     }
//   }
//   return null;
// }

////---------------------143. Reorder List-------------

// function reorderList(head) {
//   if (!head || !head.next) return;

//   let slow = head,
//     fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   let prev = null;
//   let curr = slow.next;
//   slow.next = null;
//   while (curr) {
//     let nexttemp = curr.next;
//     curr.next = prev;

//     prev = curr;
//     curr = nexttemp;
//   }

//   let first = head;
//   let second = prev;
//   while (second) {
//     let temp1 = first.next;
//     let temp2 = second.next;
//     first.next = second;
//     second.next = temp1;
//     first = temp1;
//     second = temp2;
//   }
// }

// function sortList(head) {
//   let arr = [];
//   let curr = head;
//   while (curr) {
//     arr.push(curr.val);
//     curr = curr.next;
//   }
//   arr.sort((a, b) => a - b);
//   curr = head;
//   let i = 0;
//   while (curr) {
//     curr.val = arr[i++];
//     curr = curr.next;
//   }
//   return head;
// }

// function arrayToLinkedlist(arr) {
//   if (arr.length === 0) return 0;
//   let dummy = new ListNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }
// function printList(head) {
//   let result = [];
//   while (head) {
//     result.push(head.val);
//     head = head.next;
//   }
//   console.log(result.join("->"));
// }

// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }

// let list = arrayToLinkedlist([-1, 5, 3, 4, 0]);
// let he = sortList(list);
// printList(he);

///-------------. Reverse Words in a String------------------

// function reverseWords(str) {
//   let words = [];
//   let word = "";
//   let index = 0;
//   for (let i = 0; i <= str.length; i++) {
//     if (i === str.length || str[i] === " ") {
//       if (word.length > 0) {
//         words[index] = word;
//         index++;
//         word = "";
//       }
//     } else {
//       word += str[i];
//     }
//   }
//   let result = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     result += words[i];
//     if (i !== 0) result += " ";
//   }
//   return result;
// }
// console.log(reverseWords("the sky is blue"));

///

////------- Compare Version Number------

// function compareVersion(v1, v2) {
//   let ver1 = v1.split(".");
//   let ver2 = v2.split(".");

//   let n = Math.max(v1.length, v2.length);

//   for (let i = 0; i < n; i++) {
//     let num1 = i < ver1.length ? parseInt(ver1[i], 10) : 0;
//     let num2 = i < ver2.length ? parseInt(ver2[i], 10) : 0;
//     if (num1 > num2) return 1;
//     if (num1 < num2) return -1;
//   }
// }
// console.log(compareVersion("1.2", "1.10"));

// function twoSum(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let sum = nums[right] + nums[left];
//     if (sum === target) return [left + 1, right + 1];
//     else if (sum < target) left++;
//     else {
//       right--;
//     }
//   }
// }
// console.log(twoSum([2, 7, 11, 15], 9));

///--- rotate array----

// function rotate(nums, k) {
//   const n = nums.length;
//   k = k % n; // handle k > n
//   const rotated = new Array(n);

//   // Copy last k elements to the front
//   for (let i = 0; i < k; i++) {
//     rotated[i] = nums[n - k + i];
//   }

//   // Copy first n-k elements to the back
//   for (let i = 0; i < n - k; i++) {
//     rotated[k + i] = nums[i];
//   }

//   return rotated;
// // }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]

// function rotate(nums, k) {
//   const n = nums.length;
//   k = k % n;
//   const rotated = new Array(n);
//   for (let i = 0; i < n; i++) {
//     rotated[(i + k) % n] = nums[i];
//   }
//   return rotated;
// }
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// function isHappy(n) {
//   const seen = new Set();
//   while (n !== 1) {
//     if (seen.has(n)) return false;
//     let sum = 0;
//     let temp = n;
//     while (temp > 0) {
//       let digit = temp % 10;
//       sum += digit * digit;
//       temp = Math.floor(temp / 10);
//     }
//     n = sum;
//   }
//   return true;
// }

///

////-----------------4. Palindrome Linked List----------------

// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }
// function isPalindrome(head) {
//   if (!head || !head.next) return true;
//   let slow = head;
//   let fast = head;
//   while (fast & fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   let prev = null;
//   while (slow) {
//     let next = slow.next;
//     slow.next = prev;
//     prev = slow;
//     slow = next;
//   }
//   let left = head;
//   let right = prev;
//   while (right) {
//     if (left.val !== right.val) return false;
//     left = left.next;
//     right = right.next;
//   }
//   return true;
// }

///------------ Move Zeros------------------------

// function moveZeros(num) {
//   let left = 0;
//   for (let right = 0; right < num.length; right++) {
//     if (num[right] !== 0) {
//       let temp = num[left];
//       num[left] = num[right];
//       num[right] = temp;
//       left++;
//     }
//   }
//   return num;
// }
// console.log(moveZeros([0, 1, 32, 0, 4, 0]));

// function findDuplicate(nums) {
//   let left = 0;
//   for (let right = 1; right < nums.length; right++) {
//     if (nums[right] !== nums[left]) {
//       left++;
//     } else {
//       return nums[right];
//     }
//   }
// }
// console.log(findDuplicate([1, 3, 4, 4, 2]));

///

///--------Median element-----

///kjhkjdkjashdkjhakjhkajshdkjhkjdhkjasdkhkjkjkjjkkjhhjh

// function merge(nums1, nums2) {
//   let i = nums1.length + 1;
//   let j = nums2.length + 1;
//   let k = j + i - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
//   return nums1;
// function reversString(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
//   return s;
// }
// console.log(reversString(["h", "e", "l", "l", "o"]));

//

// function reverseVowel(s) {
//   const vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
//   let arr = s.split("");
//   let left = 0;
//   let right = arr.length - 1;
//   let a = [];

//   while (left < right) {
//     while (left < right && !vowel.has(arr[left])) {
//       a.push(arr[left]);
//       left++;
//     }
//     while (left < right && !vowel.has(arr[right])) {
//       right--;
//       a.push(arr[left]);
//     }

//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr.join("");
// }
// console.log(reverseVowel("IceCreAm"));

///dfdsfsdfsdf

// function mergeTwoArrays(a, b) {
//   let i = 0;
//   let j = 0;
//   let result = [];
//   k = 0;

//   while (i < a.length && j < b.length) {
//     if (a[i] <= b[j]) {
//       result[k++] = a[i];
//       i++;
//     } else {
//       result[k++] = b[j];
//       j++;
//     }
//   }

//   // // remaining elements of a
//   // while (i < a.length) {
//   //   result.push(a[i]);
//   //   i++;
//   // }

//   // // remaining elements of b
//   // while (j < b.length) {
//   //   result.push(b[j]);
//   //   j++;
//   // }

//   return result;
// }

// console.log(mergeTwoArrays([1, 3, 5, 7, 9], [2, 4, 6, 8]));

// function intersectionArray(num1, num2) {
//   result = [];
//   for (let i = 0; i < num1.length; i++) {
//     for (let j = 0; j < num2.length; j++) {
//       if (num1[i] === num2[j] && !result.includes(num1[i])) {
//         result.push(num1[i]);
//       }
//     }
//   }
//   return result;
// }
// console.log(intersectionArray([1, 2, 2, 1], [2, 2]));

/// ______________  Intersection of Two Arrays_________________________________

// function intersection(num1, num2) {
//   num1.sort((a, b) => a - b);
//   num2.sort((a, b) => a - b);
//   let i = 0,
//     j = 0;
//   let result = [];

//   while (i < num1.length && j < num2.length) {
//     if (num1[i] === num2[j]) {
//       if (result.length === 0 || result[result.length - 1] !== num1[i]) {
//         result.push(num1[i]);
//       }
//       i++;
//       j++;
//     } else if (num1[i] < num2[j]) {
//       i++;
//     } else {
//       j++;
//     }
//   }
//   return result;
// }

// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

//---------------- Is Subsequence------------------------

// function isSubsequence(s, t) {
//   let i = 0;
//   j = 0;
//   while (i < s.length && j < t.length) {
//     if (s[i] === t[j]) {
//       i++;
//     }
//     j++;
//   }
//   return i === s.length;
// }

// console.log(isSubsequence("abc", "ahbgdc"));

// function findContentChildren(a, b) {
//   a.sort((a, b) => a - b);
//   b.sort((a, b) => a - b);

//   let j = 0;
//   let i = 0;
//   let count = 0;
//   while (i < a.length && j < b.length) {
//     if (a[j] >= b[i]) {
//       count++;
//       i++;
//       j++;
//     } else {
//       j++;
//     }
//   }
//   return count;
// }
// console.log(findContentChildren([1, 2, 3], [1, 1]));

///

// function findRadius(houses,heaters){
//   houses.sort((a,b)=a-b)
//   heaters.sort((a,b)=a-b)
//   let j=0
//   let radius=0

//   for(let i=0;i<houses.length;i++){
//     while(j<heaters.length-1 && Math.abs(heaters[j+1]-houses[i]<=Math.abs(heaters[j]-houses[i]))){
//       j++
//     }
//     radius=Math.max(radius,Math.abs(heaters[j]-houses[i]))
//   }
//   return radius
// };

// function binarySearch(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));

//------------------Longest Substring Without Repeating Characters----------

// function lengthOfLongestSubstring(s) {
//   let set = new Set();
//   let left = 0;
//   let maxLen = 0;
//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[left]);
//       left++;
//     }
//     set.add(s[right]);
//     maxLen = Math.max(maxLen, right - left + 1);
//   }
//   return maxLen;
// }
// console.log(lengthOfLongestSubstring("abcabcbb"));

// function findSubstring(s, words) {
//   if (words.length === 0) return [];

//   let wordLen = words[0].length;
//   let wordCount = words.length;
//   let totalLen = wordLen * wordCount;

//   let wordMap = {};
//   for (let w of words) {
//     if (wordMap[w] === undefined) {
//       wordMap[w] = 1;
//     } else {
//       wordMap[w]++;
//     }
//   }

//   const result = [];
//   for (let i = 0; i < wordLen; i++) {
//     let left = i;
//     let seen = {};
//     let count = 0;
//     for (let right = i; right + wordLen <= s.length; right += wordLen) {
//       const word = s.substring;
//     }
//   }
// }

///---------------. Repeated DNA Sequences--------------

// using an object

// function dna(str) {
//   const re = [];
//   const seen = {};

//   for (let i = 0; i + 9 < str.length; i++) {
//     let seq = str.slice(i, i + 10);
//     seen[seq] = seen[seq] + 1 || 1;
//     if (seen[seq] === 2) {
//       re.push(seq);
//     }
//   }
//   return re;
// }

// using Set

// function dna(str) {
//   let postSeq = new Set();
//   let res = new Set();
//   for (let i = 0; i <= str.length - 10; i++) {
//     let comparable = str.substring(i, i + 10);
//     postSeq.has(comparable) ? res.add(comparable) : postSeq.add(comparable);
//   }
//   return [...res];
// }

// console.log(dna("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));

///

//  -----------------Minimum Size Subarray Sum---------------

// function minSubArrayLen(target, num) {
//   let high = 0;
//   let low = 0;
//   let currentSum = 0;
//   let minSlidingWindowSize = Infinity;
//   while (high < num.length) {
//     currentSum += num[high];
//     high++;
//     while (currentSum >= target) {
//       let slidingWindowSize = high - low;
//       minSlidingWindowSize = Math.min(minSlidingWindowSize, slidingWindowSize);
//       currentSum -= num[low];
//       low++;
//     }
//   }
//   return minSlidingWindowSize === Infinity ? 0 : minSlidingWindowSize;
// }

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

///--------------------------------------------Contains Duplicate II--------------

// function containsNearbyDuplicate(nums, k) {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return true;
//     }
//     set.add(nums[i]);
//     if (set.size > k) {
//       set.delete(nums[i - k]);
//     }
//   }
//   return false;
// }

// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

/////

///--------------------------------------------Contains Duplicate III--------------

// function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
//   if (valueDiff < 0) return false;
//   const size = valueDiff + 1;
//   const buckets = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const bucket = Math.floor(num / size);
//     if (buckets.has(bucket)) return true;
//     if (
//       buckets.has(bucket - 1) &&
//       Math.abs(num - buckets.get(bucket - 1)) <= valueDiff
//     ) {
//       return true;
//     }
//     if (
//       buckets.has(bucket + 1) &&
//       Math.abs(nums - buckets.get(bucket + 1)) <= valueDiff
//     ) {
//       return true;
//     }
//     buckets.set(bucket, num);
//     if (i >= indexDiff) {
//       const oldNum = nums[i - indexDiff];
//       const oldBucket = Math.floor(oldNum / size);
//       bucket.delete(oldBucket);
//     }
//     return false;
//   }
// }
// console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));

///

///-----Longest Substring with At Least K Repeating Characters

// function longestSubstring(s, k) {
//   if (s.length < k) return 0;
//   let sum = 0;
//   const freq = {};

//   for (let char of s) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let char in freq) {
//     if (freq[char] < k) {
//       let maxlen = 0;
//       let substrings = s.split(char);
//       for (let sub of substrings) {
//         maxlen = Math.max(maxlen, longestSubstring(sub, k));
//       }
//       return maxlen;
//     }
//   }
//   return s.length;
// }
// console.log(longestSubstring("ababbc", 2));

////--------413. Arithmetic Slices------------------

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

////---------------424. Longest Repeating Character Replacement-----------------------

// function characterReplacement(s, k) {
//   let freq = {};
//   let left = 0;
//   let maxfreq = 0;
//   let mainWindow = 0;

//   for (let right = 0; right < s.length; right++) {
//     freq[s[right]] = (freq[s[right]] || 0) + 1;
//     maxfreq = Math.max(maxfreq, freq[s[right]]);
//     let windowSize = right - left + 1;
//     if (windowSize - maxfreq > k) {
//       freq[s[left]]--;
//       left++;
//     }
//     windowSize = right - left + 1;
//     mainWindow = Math.max(mainWindow, windowSize);
//   }

//   return mainWindow;
// }

// console.log(characterReplacement("ABAB", 2));

//------------------438. Find All Anagrams in a String-----------------------

// function findAnagrams(s, p) {
//   let result = [];
//   let pCount = Array(26).fill(0);
//   let sCount = Array(26).fill(0);
//   const aCode = "a".charCodeAt(0);
//   for (let char of p) {
//     pCount[char.charCodeAt(0) - aCode]++;
//   }
//   for (let i = 0; i < s.length; i++) {
//     sCount[s.charCodeAt(i) - aCode]++;
//     if (i >= p.length) {
//       sCount[s.charCodeAt(i - p.length) - aCode]--;
//     }

//     if (arraysEqual(sCount, pCount)) {
//       result.push(i - p.length + 1);
//     }
//   }
//   return result;
// }
// function arraysEqual(arr1, arr2) {
//   for (let i = 0; i < 26; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// console.log(findAnagrams("cbaebabacd", "abc"));

////--------------567. Permutation in String------------

// function checkInclusion(s1, s2) {
//   if (s1.length > s2.length) return false;
//   let s1Count = Array(26).fill(0);
//   let s2count = Array(26).fill(0);
//   const aCode = "a".charCodeAt(0);

//   for (let char of s1) {
//     s1Count[char.charCodeAt(0) - aCode]++;
//   }
//   for (let i = 0; i < s2.length; i++) {
//     s2count[s2.charCodeAt(i) - aCode]++;
//     if (i >= s1.length) {
//       s2count[s2.charCodeAt(i - s1.length) - aCode]--;
//     }
//     if (arraysEqual(s1Count, s2count)) {
//       return true;
//     }
//   }
//   return false;
// }
// function arraysEqual(arr1, arr2) {
//   for (let i = 0; i < 26; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// console.log(checkInclusion("ab", "eidbaooo"));

///lkjkllkjlkkljjjjjjjjlkljklj

///--------------594. Longest Harmonious Subsequence--------------

// function findLHS(nums) {
//   let n = nums.length;
//   let left = 0;
//   let right = 1;
//   let res = 0;
//   nums.sort((a, b) => a - b);
//   while (right < n) {
//     while (nums[right] - nums[left] > 1) {
//       left++;
//     }
//     if (nums[right] - nums[left] === 1) {
//       res = Math.max(res, right - left + 1);
//     }
//     right++;
//   }
//   return res;
// }
// console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
// //

/////---------------643. Maximum Average Subarray I-----------

// function findMaxAverage(nums, k) {
//   let windowSum = 0;
//   for (let i = 0; i < k; i++) {
//     windowSum += nums[i];
//   }
//   let max = windowSum;
//   for (let i = k; i < nums.length; i++) {
//     windowSum += nums[i];
//     windowSum -= nums[i - k];
//     max = Math.max(max, windowSum);
//   }
//   return max / k;
// }
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

////--------------- Find K Closest Elements----------------

// function findClosestElement(arr, k, x) {
//   let left = 0;
//   let right = arr.length - k;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (x - arr[mid] > arr[mid + k] - x) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return arr.slice(left, left + k);
// }

//---------------718. Maximum Length of Repeated Subarray--------------

// function findLength(num1, num2) {
//   const n = num2.length;
//   let max = 0;
//   let dp = Array(n + 1).fill(0);
//   for (let i = 1; i <= num1.length; i++) {
//     for (let j = n; j >= 1; j--) {
//       if (num1[i - 1] === num2[j - 1]) {
//         dp[j] = dp[j - 1] + 1;
//         max = Math.max(max, dp[j]);
//       } else {
//         dp[j] = 0;
//       }
//     }
//   }
//   return max;
// }

// console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));

// function findLength(num1, num2) {
//   const n = num2.length;
//   let max = n - 1;
//   let dp = Array(n).fill(0);
//   for (let i = 1; i <= num1.length; i++) {
//     for (let j = n; j >= 1; j--) {
//       if (num1[i - 1] === num2[j - 1]) {
//         dp[j - 1] = num1[i - 1];
//       }
//     }
//   }
//   return dp.filter((value) => value !== 0);
// }

// console.log(findLength([1, 2, 3, 2, 1, 4], [3, 2, 1, 4, 7]));

////-------------- N-Queens-----------------

// function solveNQueens(n) {
//   const res = [];
//   const board = Array.from({ length: n }, () => ".".repeat(n).split(""));
//   const cols = new Set();
//   const diag1 = new Set();
//   const diag2 = new Set();
//   function backtrack(row) {
//     if (row === n) {
//       res.push(board.map((r) => r.join("")));
//       return;
//     }
//     for (let col = 0; col < n; col++) {
//       if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
//         continue;
//       }
//       board[row][col] = "Q";
//       cols.add(col);
//       diag1.add(row - col);
//       diag2.add(row + col);
//       backtrack(row + 1);
//       board[row][col] = ".";
//       cols.delete(col);
//       diag1.delete(row - col);
//       diag2.delete(row + col);
//     }
//   }
//   backtrack(0);
//   return res;
// }

// console.log(solveNQueens(4));

// ///;

// ///----------------////-------------- N-Queens II -----------------

// function totalNQueens(n) {
//   let count = 0;
//   let cols = new Set();
//   let diag1 = new Set();
//   let diag2 = new Set();
//   function backtrack(row) {
//     if (row === n) {
//       count++;
//       return;
//     }
//     for (let col = 0; col < n; col++) {
//       if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col))
//         continue;

//       cols.add(col);
//       diag1.add(row - col);
//       diag2.add(row + col);
//       backtrack(row + 1);
//       cols.delete(col);
//       diag1.delete(row - col);
//       diag2.delete(row + col);
//     }
//   }
//   backtrack(0);
//   return count;
// }
// console.log(totalNQueens(4));

//////////---------------------------------Permutations I------------

// function permute(nums) {
//   const result = [];
//   function backtrack(start) {
//     if (start === nums.length) {
//       result.push([...nums]);
//       return;
//     }

//     for (let i = start; i < nums.length; i++) {
//       [nums[start], nums[i]] = [nums[i], nums[start]];

//       backtrack(start + 1);

//       [nums[start], nums[i]] = [nums[i], nums[start]];
//     }
//   }
//   backtrack(0);
//   return result;
// }

// console.log(permute([1, 2, 3]));

//////////---------------------------------Permutations II------------

// console.log(permdfsdute([1, 1, 2]));
// function permuteUnique(nums) {
//   const result = [];
//   nums.sort((a, b) => a - b);

//   function backtrack(start) {
//     if (start === nums.length) {
//       result.push([...nums]);
//       return;
//     }

//     const seen = new Set();

//     for (let i = start; i < nums.length; i++) {
//       if (seen.has(nums[i])) continue;
//       seen.add(nums[i]);

//       // ✅ swap
//       [nums[start], nums[i]] = [nums[i], nums[start]];

//       backtrack(start + 1);

//       // ✅ backtrack
//       [nums[start], nums[i]] = [nums[i], nums[start]];
//     }
//   }

//   backtrack(0);
//   return result;
// }

// console.log(permuteUnique([1, 1, 2]));

////-------Fruit Into Baskets-----

// function totalFruit(fruits) {
//   let fruit1 = -1,
//     fruit2 = -1;
//   let lastFruitCount = 0;
//   let curr = 0;
//   let max = 0;

//   for (let fruit of fruits) {
//     if (fruit === fruit1 || fruit === fruit2) {
//       curr++;
//     } else {
//       curr = lastFruitCount + 1;
//     }
//     if (fruit === fruit2) {
//       lastFruitCount++;
//     } else {
//       lastFruitCount = 1;
//       fruit1 = fruit2;
//       fruit2 = fruit;
//     }
//     max = Math.max(max, curr);
//   }
//   return max;
// }
// console.log(totalFruit([1, 2, 3, 2, 2]));

/// ------------------Binary Subarrays With Sum

// function atmost(nums, k) {
//   let left = 0;
//   let sum = 0;
//   let count = 0;
//   if (k < 0) {
//     return 0;
//   }
//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
//     while (sum > k) {
//       sum -= nums[left];
//       left++;
//     }
//     count += right - left + 1;
//   }
//   return count;
// }

// function numSubarraysWithSum(nums, goal) {
//   return atmost(nums, goal) - atmost(nums, goal - 1);
// }
// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

///--------------Longest Turbulent Subarray-----------
// function maxTurbulenceSize(arr) {
//   if (arr.length === 1) return 1;
//   let maxLen = 1;
//   let currLen = 1;
//   let prevSign = 0;
//   for (let i = 1; i < arr.length; i++) {
//     let diff = arr[i] - arr[i - 1];
//     let curSign = diff > 0 ? 1 : diff < 0 ? -1 : 0;
//     if (curSign === 0) {
//       currLen = 1;
//     } else if (currLen === -prevSign) {
//       currLen++;
//     } else {
//       currLen = 2;
//     }
//     prevSign = curSign;
//     maxLen = Math.max(maxLen, curSign);
//   }
//   return maxLen;
// }

///

// function moveZeros(nums) {
//   let l = 0;
//   let temp;
//   for (let r = 0; r < nums.length; r++) {
//     if (nums[r] !== 0) {
//       temp = nums[l];
//       nums[l] = nums[r];
//       nums[r] = temp;
//       l++;
//     }
//   }
//   return nums;
// }
// console.log(moveZeros([0, 1, 32, 0, 4, 0]));

///----------------------------209. Minimum Size Subarray Sum---------------------

// function minSubArrayLen(target, nums) {
//   let left = 0;
//   let sum = 0;
//   let minLen = Infinity;

//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
//     while (sum >= target) {
//       minLen = Math.min(minLen, right - left + 1);
//       sum -= nums[left];
//       left++;
//     }
//   }
//   return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

////--------------------- Product of Array Except Self-------------

// function productExceptSelf(nums) {
//   const n = nums.length;
//   const answer = [];
//   for (let i = 0; i < n; i++) {
//     let product = 1;
//     for (let j = 0; j < n; j++) {
//       if (i !== j) {
//         product *= nums[j];
//       }
//     }
//     answer.push(product);
//   }
//   return answer;
// }
// console.log(productExceptSelf([1, 2, 3, 4]));

// function productExceptSelf(nums) {
//   const n = nums.length;
//   const res = new Array(n).fill(1);
//   let left = 1;
//   for (let i = 0; i < n; i++) {
//     res[i] = left;
//     left *= nums[i];
//   }

//   let right = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     res[i] *= right;
//     right *= nums[i];
//   }
//   return res;
// }
// console.log(productExceptSelf([1, 2, 3, 4]));

///

///---------------303. Range Sum Query - Immutable------------

// function numArray(nums) {
//   this.prefix = new Array(nums.length + 1).fill(0);

//   for (let i = 0; i < nums.length; i++) {
//     this.prefix[i + 1] = this.prefix[i] + nums[i];
//   }
// }

// numArray.prototype.sumRange = function (left, right) {
//   return this.prefix[right + 1] - this.prefix[left];
// };

// ///

// function stockMerchant(n, arr) {
//   const count = {};
//   let pairs = 0;
//   for (let s of arr) {
//     if (count[s]) {
//       count[s]++;
//     } else {
//       count[s] = 1;
//     }
//   }
//   for (let key in count) {
//     pairs += Math.floor(count[key] / 2);
//   }
//   return pairs;
// }
// console.log(stockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// function simpleArraySum(ar) {
//   let sum = 0;
//   for (let i of ar) {
//     sum += i;
//   }
//   return sum;
// }

///

// function breakingRecords(score) {
//   maxCount = 0;
//   minCount = 0;
//   max = score[0];
//   min = score[0];
//   for (let i = 1; i < score.length; i++) {
//     if (score[i] > max) {
//       max = score[i];
//       maxCount++;
//     } else if (score[i] < min) {
//       min = score[i];
//       minCount++;
//     }
//   }
//   return [maxCount, minCount];
// }

// function kangaroo(x1, v1, x2, v2) {
//   for (let i = 0; i < 10000; i++) {
//     if (x1 === x2) {
//       return "YES";
//     }
//     x1 += v1;
//     x2 += v2;
//     return "NO";
//   }
// // }

// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n - i - 1; j++) {
//       str += " ";
//     }
//     for (let k = 0; k <= i; k++) {
//       str += "#";
//     }
//     console.log(str);
//   }
// }
// staircase(6);

// function compareTriplets(a, b) {
//   let alice = 0;
//   let bob = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       alice += 1;
//     } else if (a[i] < b[i]) {
//       bob += 1;
//     }
//   }
//   return [alice, bob];
// }

// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// function quickSort(arr) {
//   const pivot = arr[0];
//   const left = [];
//   const right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...left, pivot, ...right];
// }
// console.log(quickSort([4, 5, 3, 7, 2]));

//

// function superReducedString(s) {
//   const stack = [];

//   for (let ch of s) {
//     if (stack.length > 0 && stack[stack.length - 1] === ch) {
//       stack.pop();
//     } else {
//       stack.push(ch);
//     }
//   }
//   return stack.length === 0 ? "Empty String" : stack.join("");
// }

// function bonAppetit(bill, k, b) {
//   let annCost = 0;
//   for (let i = 0; i < bill.length; i++) {
//     if (i !== k) {
//       annCost += bill[i];
//     }
//   }
//   const fairShare = annCost / 2;
//   if (fairShare === b) {
//     console.log("Bon Appetit");
//   } else {
//     console.log(b - fairShare);
//   }
// }
// bonAppetit([3, 10, 2, 9], 1, 7);

// function plusMinus(arr) {
//   let neg = 0;
//   let zero = 0;
//   let post = 0;
//   const l = arr.length;
//   for (let i of arr) {
//     if (i < 0) {
//       neg += 1;
//     } else if (i > 0) {
//       post += 1;
//     } else {
//       zero += 1;
//     }
//   }
//   console.log((post / l).toFixed(6));
//   console.log((neg / l).toFixed(6));
//   console.log((zero / l).toFixed(6));
// }
// plusMinus([-4, 3, -9, 0, 4, 1]);

// function birthday(s, d, m) {
//   let count = 0;
//   let sum = 0;

//   for (let i = 0; i < m; i++) {
//     sum += s[i];
//   }
//   if (sum === d) count++;
//   for (let i = m; i < s.length; i++) {
//     sum = sum - s[i - m] + s[i];
//     if (sum === d) count++;
//   }
//   return count;
// }

//

// function migratoryBrids(arr) {
//   const freq = {};
//   for (let brid of arr) {
//     if (freq[brid]) {
//       freq[brid]++;
//     } else {
//       freq[brid] = 1;
//     }
//   }
//   let maxCount = Math.max(...Object.values(freq));
//   let result = Infinity;
//   for (let brid in freq) {
//     if (freq[brid] === maxCount) {
//       result = Math.min(result, brid);
//     }
//   }
//   return result;
// }
// console.log(migratoryBrids([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

// function diagonalDiffernce(arr) {
//   let firstD = 0;
//   let secondD = 0;
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     firstD += arr[i][i];
//     secondD += arr[i][n - 1 - i];
//   }
//   return Math.abs(firstD - secondD);
// }

//

// function birthdayCakeCandles(candles) {
//   let max = Math.max(...candles);
//   let count = 0;
//   for (let i of candles) {
//     if (i === max) count++;
//   }
//   return count;
// }

// console.log(birthdayCakeCandles([3, 2, 1, 3]));

// function gradingStudents(grades) {
//   let result = [];
//   for (let g of grades) {
//     if (g < 36) {
//       result.push(g);
//     } else {
//       let next = Math.ceil(g / 5) * 5;
//       result.push(next - g < 3 ? next : g);
//     }
//   }
//   return result;
// }
//kljjlkjlkjlkjlkjkl

// function pageCount(n, p) {
//   const front = Math.floor(p / 2);
//   const back = Math.floor(n / 2) - Math.floor(p / 2);
//   return Math.min(front, back);
// }
// function divisibleSumPairs(n, k, ar) {
//   let count = 0;
//   for (let i = 0; i < ar.length; i++) {
//     for (let j = i + 1; j < ar.length; j++) {
//       if (ar[i] + (ar[j] % k) === 0) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// function miniMaxSum(arr) {
//   arr.sort((a, b) => a - b);
//   let min = 0;
//   let max = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     min += arr[i];
//   }

//   for (let i = 1; i < arr.length; i++) {
//     max += arr[i];
//   }

//   console.log(min, max);
// }
// miniMaxSum([1, 2, 3, 4, 5]);

// ///

// function countingValleys(steps, path) {
//   let altitude = 0;
//   let valleys = 0;
//   for (let step of path) {
//     if (step === "U") {
//       altitude++;
//       if (altitude == 0) {
//         valleys++;
//       }
//     } else {
//       altitude--;
//     }
//   }
//   return valleys;
// }

// function libraryFine(d1, m1, y1, d2, m2, y2) {
//   if (d1 !== d2 && m1 === m2 && y1 === y2) {
//     return (d1 - d2) * 15;
//   } else if (d1 !== d2 && m1 !== m2 && y1 === y2) {
//     return (m1 - m2) * 500;
//   } else {
//     return (y1 - y2) * 10000;
//   }
// }

// function timeConversion(s) {
//   let hour = parseInt(s.slice(0, 2));
//   let rest = s.slice(2, 8);
//   let period = s.slice(8);
//   console.log(rest);
//   if (period === "AM") {
//     if (hour === 12) hour = 0;
//   } else {
//     if (hour != 12) hour += 12;
//   }
//   return String(hour).padStart(2, "0") + rest;
// }

// console.log(timeConversion("07:05:45PM"));

// import { useState } from "react";

// export default function UserForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
//         <h1 className="text-xl font-semibold mb-4">User Form</h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-2"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-2"
//             required
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-2"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>

//         {submittedData && (
//           <div className="mt-6 border-t pt-4">
//             <h2 className="text-lg font-medium mb-2">User Details</h2>
//             <p><strong>Name:</strong> {submittedData.name}</p>
//             <p><strong>Email:</strong> {submittedData.email}</p>
//             <p><strong>Age:</strong> {submittedData.age}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function caesarCipher(s, k) {
//   k = k % 26;
//   let result = "";
//   for (let ch of s) {
//     let code = ch.charCodeAt(0);
//     if (code >= 97 && code <= 122) {
//       result += String.fromCharCode(((code - 97 + k) % 26) + 97);
//     } else if (code >= 65 && code <= 90) {
//       result += String.fromCharCode(((code - 65 + k) % 26) + 65);
//     } else {
//       result += ch;
//     }
//   }
//   return result;
// // }
// function caesarCipher(s, k) {
//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   k = k % 26;

//   let result = "";
//   for (let ch of s) {
//     if (lower.includes(ch)) {
//       let id = lower.indexOf(ch);
//       result += lower[(id + k) % 26];
//     } else if (upper.includes(ch)) {
//       let id = higher.indexOf(ch);
//       result += lower[(id + k) % 26];
//     } else {
//       result += ch;
//     }
//   }
//   return result;
// }

//sdfsdfsdfdfsdfsdfsdfsdfsfsdfsdfdfsdfsdfsdf

// function towerBreakers(n, m) {
//   if (m === 1) return 2;
//   if (n % 2 === 0) return 2;
//   return 1;
//}

// function dayOfProgrammer(year) {
//   if (year === 1918) {
//     return "26.09.1918";
//   }
//   let leap;
//   if (year < 1918) {
//     leap = year % 4 === 0;
//   } else {
//     iseap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
//   }
//   const day = leap ? "12" : "13";
//   return `${day}.09.${year}`;
// }

//dfdsfdffdfdsfdffdfdfdfdfdfdfdfdfdsfdsfd

// function hurdleRace(k, height) {
//   const maxHeight = Math.max(...height);
//   return Math.max(0, maxHeight - k);
// }

// function minimumNumber(n, password) {
//   let isDigit = false;
//   let isLower = false;
//   let isUpper = false;
//   let isSpecial = false;
//   const numbers = "0123456789";
//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const special = "!@#$%^&*()-+";

//   for (let ch of password) {
//     if (numbers.includes(ch)) isDigit = true;
//     else if (lower.includes(ch)) isLower = true;
//     else if (upper.includes(ch)) isUpper = true;
//     else if (special.includes(ch)) isSpecial = true;
//   }
//   let m = 0;
//   if (!isDigit) m++;
//   if (!isLower) m++;
//   if (!isUpper) m++;
//   if (!isSpecial) m++;
//   return Math.max(m, 6 - n);
// }

// function minimumAbsoluteDifference(arr) {
//   arr.sort((a, b) => a - b);
//   let md = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     const differnce = Math.abs(arr[i + 1] - arr[i]);
//     if (differnce < md) {
//       md = differnce;
//     }
//   }

//   return md;
// }

// function marsExploration(s) {
//   let count = 0;
//   const pattern = "SOS";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== pattern[i % 3]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(marsExploration("SOSSOT"));

//fdsddfdfdfdffdfdsfdsfdfdfdfdfdfdfdfdf

// function getMoneySpent(keyboards, drives, budget) {
//   let maxSpend = -1;
//   let total = 0;
//   for (let key of keyboards) {
//     for (let dri of drives) {
//       total = key + dri;
//       if (total <= budget && total > maxSpend) maxSpend = total;
//     }
//   }
//   return maxSpend;
// }

// function camelcase(s) {
//   let count = 1;
//   for (let ch of s) {
//     if (ch >= "A" && ch <= "z") {
//       count++;
//     }
//   }
//   return count;
// }
// function viralAdvertising(n) {
//   let shared = 5;
//   let count = 0;
//   for (let day = 0; day < n; day++) {
//     let liked = Math.floor(shared / 2);
//     count += liked;
//     shared = liked * 3;
//   }
//   return count;
// }

//

// function jumpingOnClouds(c, k) {
//   let energy = 100;
//   let cloud = 0;
//   for (let i = 0; i < c.length; i++) {
//     cloud = (cloud + k) % c.length;
//     energy -= 1 + 2 * c[cloud];
//     if(cloud===0)break
//   }
//   return energy;
// }
// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

//dfsfsdffdfdsfdsfsdfdsfsdfsdfsdfsdfffdsfsdfsddsfdfdsfdf
// function marcsCakewalk(calorie) {
//   calorie.sort((a, b) => b - a);

//   let miles = 0;

//   for (let i = 0; i < calorie.length; i++) {
//     miles += calorie[i] * Math.pow(2, i);
//   }
//   return miles;
// }

// console.log(marcsCakewalk([7, 4, 9, 6]));

// function catAndMouse(x, y, z) {
//   const distA = Math.abs(x - z);
//   const distB = Math.abs(y - z);

//   if (distA < distB) {
//     return "Cat A";
//   } else if (distB < distA) {
//     return "Cat B";
//   } else {
//     return "Mouse C";
//   }
// }

// console.log(catAndMouse(1, 2, 3));
// function petrolPumpTour(petrolPumps) {
//   let totalFuel = 0;
//   let currentFuel = 0;
//   let startIndex = 0;
//   for (let i = 0; i < petrolPumps.length; i++) {
//     let petrol = petrolPumps[i][0];
//     let distance = petrolPumps[i][1];
//     let gain = petrol - distance;
//     totalFuel += gain;
//     currentFuel += gain;
//     if (currentFuel < 0) {
//       startIndex = i + 1;

//       currentFuel = 0;
//     }
//   }
//   return totalFuel >= 0 ? startIndex : -1;
// }

// function twoSum(arr, k) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === k) {
//       return [left, right];
//     } else if (sum > k) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));

// function twoSum(arr, target) {
//   let obj = {};
//   for (let i = 0; arr.length; i++) {
//     let d = target - arr[i];
//     if (d in obj) {
//       return [obj[d], i];
//     }
//     obj[arr[i]] = i;
//   }
//   return [];
// }

// console.log(twoSum([2, 7, 1, 15], 9));

// function twoSum(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let d = target - nums[i];
//     if (map.has(d)) {
//       return [map.get(d), i];
//     }
//     map.set(nums[i], i);
//   }0
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));

// function threeSum(num) {
//   num.sort((a, b) => a - b);
//   let result = [];

//   for (let i = 0; i < num.length; i++) {
//     if (i > 0 && num[i] === num[i - 1]) continue;
//     let left = i + 1;
//     let right = num.length - 1;
//     while (left < right) {
//       const sum = num[i] + num[left] + num[right];
//       if (sum === 0) {
//         result.push([num[i], num[left], num[right]]);

//         while (num[left] === num[left + 1]) left++;
//         while (num[right] === num[right - 1]) right--;
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

// function mergeTwoArrays(arr1, arr2) {
//   let i = 0,
//     j = 0;
//   const result = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//   while (j < arr1.length) {
//     result.push(arr2[j]);
//     j++;
//   }
//   return result;
// }
// console.log(mergeTwoArrays([1, 3, 5], [2, 4, 6]));

///

// function Palindrome(str) {
//   let right = str.length - 1;

//   for (let left = 0; left < str.length / 2; left++) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     right--;
//   }
//   return true;
// }
// console.log(Palindrome("malaiaalam"));

// function moveZeros(arr) {
//   let left = 0;
//   let temp;
//   for (let right = 0; right < arr.length; right++) {
//     if (arr[right] !== 0) {
//       temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left++;
//     }
//   }
//   return arr;
// }
// console.log(moveZeros([0, 1, 0, 0, 1, 0, 2, 3]));
// Longest subarray sum equals k

// function longestSubarraySum(arr, k) {
//   let left = 0;
//   let sum = 0;
//   let maxlen = 0;
//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];
//     while (sum > k) {
//       sum -= arr[left];
//       left++;
//     }
//     if (sum === k) {
//       maxlen = Math.max(maxlen, right - left + 1);
//     }
//   }
//   return maxlen;
// }

// console.log(longestSubarraySum([1, 2, 1, 1, 1], 3));

// function longestSubarraySum(arr, k) {
//   let max = 0;
//   let sum = 0;
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (sum === k) {
//       max = i + 1;
//     }
//     if (map.has(sum - k)) {
//       max = Math.max(max, i - map.get(sum - k));
//     }
//     if (!map.has(sum)) {
//       map.set(sum, i);
//     }
//   }
//   return max;
// }
// console.log(longestSubarraySum([1, -1, 5, -2, 3], 3));

// function smallestSubArraySum(arr, k) {
//   let n = arr.length;
//   let prefix = new Array(n + 1).fill(0);
//   for (let i = 0; i < n; i++) {
//     prefix[i + 1] = prefix[i] + arr[i];
//   }
//   let q = [];
//   let minlen = Infinity;
//   for (let i = 0; i <= n; i++) {
//     while (q.length && prefix[i] - prefix[q[0]] >= k) {
//       minlen = Math.min(minlen, i - q[0]);
//       q.shift();
//     }
//     while (q.length && prefix[i] <= prefix[q[q.length - 1]]) {
//       q.pop();
//     }
//     q.push(i);
//   }
//   return minlen;
// }

// console.log(smallestSubArraySum([2, -1, 2], 3));

///sdfsdfsdfddsfsdfdsfffdsdfdsfaffdsfdsfdfdsfdfdsdffsdfsdfdsfdfsdfsdadsfsdfdsfdsfdsfdsffdfdffsdsdfdsfdffsadfsdfsdfdsfsffdsfdfdfdfdsfdsfdffsfdfdsdfsfdsfsfsdfdfsdfsdfsdfsdfsdfsdfdfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfsdfsdffsdfasfsdfsdfsdfdsfsdfsdfsafsdfsdfsdfsdfsdfdsfsdfdsfsfsdfsdfadfsdfsdfsdfsdfdsfsdf

// function longestPalindrome(s) {
//   if (s.length < 2) return s;
//   function expand(left, right) {
//     while (left >= 0 && s.length > right && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//     return right - left - 1;
//   }
//   let start = 0,
//     end = 0;
//   for (let i = 0; i < s.length; i++) {
//     len1 = expand(i, i);
//     len2 = expand(i, i + 1);
//     len = Math.max(len1, len2);
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2);
//     }
//     console.log(i);
//   }
//   console.log(start, end);

//   return s.slice(start, end + 1);
// }
// console.log(longestPalindrome("cbbd"));dsdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdfdfsdfsdfsdfddsfdsfsdfsdfsdfsdfsfsdfsdfsdfdfdffsdfdfdsfdsfsdfsdfdf

//console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// function threeSum(arr) {
//   arr.sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) continue;
//     let left = i + 1;
//     let right = arr.length - 1;
//     while (left < right) {
//       let sum = arr[i] + arr[left] + arr[right];
//       if (sum === 0) {
//         result.push([arr[i], arr[left], arr[right]]);
//         while (arr[left] === arr[left + 1]) left++;
//         while (arr[right] === arr[right - 1]) right--;
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

function threeSumClosest(arr, target) {
  arr.sort((a, b) => a - b);

  let closestSum = arr[0] + arr[1] + arr[2];
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return closestSum;
}
console.log(threeSumClosest([-1, 0, 1, 2, -1, -4], 1));
