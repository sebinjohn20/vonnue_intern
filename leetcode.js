// ///----Longest Palindrome substring----------------
// //

// //dsfds

// // function longestPalindrome(s) {
// //   if (s.length === 0) return "";
// //   let start = 0;
// //   let end = 0;
// //   function expand(left, right) {
// //     while (left >= 0 && right < s.length && s[left] === s[right]) {
// //       left--;
// //       right++;
// //     }
// //     return right - left - 1;
// //   }

// //   for (let i = 0; i < s.length; i++) {
// //     let len1 = expand(i, i);
// //     let len2 = expand(i, i + 1);
// //     let len = Math.max(len1, len2);
// //     if (len > end - start) {
// //       start = i - Math.floor(len - 1) / 2;
// //       end = i + Math.floor(len / 2);
// //     }
// //   }

// //   return s.substring(start, end + 1);
// // }

// // console.log(longestPalindrome("abacababacca"));

// // ////

// //  2  Container With Most Water

// // function maxArea(height) {
// //   let left = 0;
// //   let right = height.length - 1;
// //   let maxArea = 0;

// //   while (left < right) {
// //     let width = right - left;
// //     let area = Math.min(height[left], height[right]) * width;
// //     maxArea = Math.max(area, maxArea);

// //     if (height[left] < height[right]) {
// //       left++;
// //     } else {
// //       right--;
// //     }
// //   }
// //   return maxArea;
// // }
// // console.log(maxArea([8, 8, 6, 2, 5, 4, 8, 3, 7]));

// // 3 Sum
// // function threeSum(num) {
// //   num.sort((a, b) => a - b);
// //   const result = [];

// //   for (let i = 0; i < num.length - 2; i++) {
// //     if (i > 0 && num[i] === num[i - 1]) continue;

// //     let left = i + 1;
// //     let right = num.length - 1;
// //     while (left < right) {
// //       const sum = num[i] + num[left] + num[right];
// //       if (sum === 0) {
// //         result.push([num[i], num[left], num[right]]);
// //         while (num[left] === num[left + 1]) left++;
// //         while (num[right] === num[right - 1]) right--;
// //         right--;
// //         left++;
// //       } else if (sum > 0) {
// //         right--;
// //       } else {
// //         left++;
// //       }
// //     }
// //   }
// //   return result;
// // }

// // console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// // ////
// ///-----------------------Remove Nth Node From End of List----------------------
// // function removeNthFromEnd(head, n) {
// //   position = head.length - n;
// //   let newArr = head.filter((_, index) => index !== position);

// //   return newArr;
// // }

// // console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
// // ListNode definition

// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }
// // function removeNthFromEnd(head, n) {
// //   let dummy = new ListNode(0);
// //   dummy.next = head;
// //   let left = dummy;
// //   let right = dummy;
// //   for (let i = 0; i < n; i++) {
// //     right = right.next;
// //   }
// //   while (right.next !== null) {
// //     right = right.next;
// //     left = left.next;
// //   }
// //   left.next = left.next.next;
// //   return dummy.next;
// // }
// // function linkedListToArray(head) {
// //   let arr = [];
// //   while (head) {
// //     arr.push(head.val);
// //     head = head.next;
// //   }
// //   return arr;
// // }
// // function arrayToLinkedlist(arr) {
// //   let dummy = new ListNode(0);
// //   let current = dummy;
// //   for (let val of arr) {
// //     current.next = new ListNode(val);
// //     current = current.next;
// //   }
// //   return dummy.next;
// // }
// // let head = arrayToLinkedlist([1, 2, 3, 4, 5]);
// // let newHead = removeNthFromEnd(head, 2);
// // newLink = linkedListToArray(newHead);
// // console.log(newLink.map((val) => `--> ${val}`).join(" "));

// //
// // . Remove Duplicates from Sorted Array

// // function removeDuplicates(nums) {
// //   if (nums.length === 0) return;
// //   let i = 0;
// //   for (let j = 1; j < nums.length; j++) {
// //     if (nums[j] !== nums[i]) {
// //       i++;
// //       nums[i] = nums[j];
// //     }
// //   }
// //   return nums.slice(0, i + 1);
// // }
// // console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// // /////
// //  Remove Element

// // function removeElement(nums, val) {
// //   let k = 0;
// //   for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] !== val) {
// //       nums[k] = nums[i];
// //       k++;
// //     }
// //   }
// //   return nums.slice(0, k);
// // }
// // console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 1));

// //  twosum

// // function twoSum(nums, target) {
// //   let obj = {};
// //   for (let i = 0; i < nums.length; i++) {
// //     let d = target - nums[i];
// //     if (obj[d] !== undefined) {
// //       return [obj[d], i];
// //     }
// //     obj[nums[i]] = i;
// //   }
// // }

// //_________________ Find the Index of the First Occurrence in a String________________>>>>>>>>

// // var strStr = function (haystack, needle) {
// //   if (haystack === needle || needle === "") return 0;
// //   for (let i = 0; i <= haystack.length - needle.length; i++) {
// //     if (haystack[i] === needle[0]) {
// //       let substr = haystack.substring(i, i + needle.length);
// //       if (substr === needle) {
// //         return i;
// //       }
// //     }
// //   }
// //   return -1;
// // };
// // console.log(strStr("aadbutsad", "aad"));

// ///------------------------ Next permutation------------------>

// // function nextPermutation(nums) {
// //   let i = nums.length - 2;
// //   while (i >= 0 && nums[i] >= nums[i + 1]) {
// //     i--;
// //   }
// //   if (i >= 0) {
// //     let j = nums.length - 1;
// //     while (nums[j] <= nums[i]) {
// //       j--;
// //     }
// //     [nums[i], nums[j]] = [nums[j], nums[i]];
// //   }
// //   let left = i + 1;
// //   let right = nums.length - 1;
// //   while (left < right) {
// //     [nums[left], nums[right]] = [nums[right], nums[left]];
// //     left++;
// //     right--;
// //   }
// //   return nums;
// // }
// // console.log(nextPermutation([1, 3, 5, 4, 2]));

// //

// ////  _______Trap Water________>>>>>>>>>>>>

// // function trap(height) {
// //   let left = 0;
// //   let leftmax = 0;
// //   let right = height.length - 1;
// //   let rightmax = 0;
// //   let water = 0;

// //   while (left < right) {
// //     if (height[left] < height[right]) {
// //       height[left] >= leftmax
// //         ? (leftmax = height[left])
// //         : (water += leftmax - height[left]);
// //       left++;
// //     } else {
// //       height[right] >= rightmax
// //         ? (rightmax = height[right])
// //         : (water += rightmax - height[right]);
// //       right--;
// //     }
// //   }//dfdfdsf
// //   return water;
// // }
// // console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// ///

// ///_____________________Rotate List________________________>>>>>>>>>>>>>>>>>

// // Definition for singly-linked list
// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }

// // function rotateRight(head, k) {
// //   // Base cases
// //   if (!head || !head.next || k === 0) return head;

// //   // Step 1: Find length and tail
// //   let length = 1;
// //   let tail = head;

// //   while (tail.next !== null) {
// //     tail = tail.next;
// //     length++;
// //   }

// //   // Step 2: Reduce k
// //   k = k % length;
// //   if (k === 0) return head;

// //   // Step 3: Make the list circular
// //   tail.next = head;

// //   // Step 4: Find new tail
// //   let stepsToNewTail = length - k;
// //   let newTail = head;

// //   for (let i = 1; i < stepsToNewTail; i++) {
// //     newTail = newTail.next;
// //   }

// //   // Step 5: Break the circle
// //   let newHead = newTail.next;
// //   newTail.next = null;

// //   return newHead;
// // }

// // function createLinkedList(arr) {
// //   if (arr.length === 0) return null;
// //   let dummy = new ListNode(0);
// //   let current = dummy;
// //   for (let val of arr) {
// //     current.next = new ListNode(val);
// //     current = current.next;
// //   }
// //   return dummy.next;
// // }

// // function printList(head) {
// //   let result = [];
// //   while (head) {
// //     result.push(head.val);
// //     head = head.next;
// //   }
// //   console.log(result.join("->"));
// // }

// // let head = createLinkedList([1, 2, 3, 4, 5]);
// // let rotated = rotateRight(head, 2);
// // printList(rotated);

// // function sortColors(num) {
// //   let s = num.sort((a, b) => a - b);
// //   return s;
// // }

// // console.log(sortColors([2, 0, 2, 1, 1, 0]));

// // ///-------------------------Sort colors----------------------------------->

// // function sortColors(nums) {
// //   let low = 0;
// //   let mid = 0;
// //   let high = nums.length - 1;
// //   while (mid <= high) {
// //     if (nums[mid] === 0) {
// //       [nums[low], nums[mid]] = [nums[mid], nums[low]];
// //       mid++;
// //       low++;
// //     } else if (nums[mid] === 1) {
// //       mid++;
// //     } else {
// //       [nums[mid], nums[high]] = [nums[high], nums[mid]];
// //       high--;
// //     }
// //   }
// //   return nums;
// // }
// // console.log(sortColors([1, 0, 2, 0, 1, 0, 1]));

// ///

// ////--------------------remove duplicate ------------------------------->

// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }
// // function deleteDuplicates(head) {
// //   let dummy = new ListNode(0);
// //   dummy.next = head;
// //   let prev = dummy;
// //   let current = head;
// //   while (current) {
// //     if (current.next && current.val === current.next.val) {
// //       let duplicate = current.val;
// //       while (current && current.val === duplicate) {
// //         current = current.next;
// //       }
// //       prev.next = current;
// //     } else {
// //       prev = current;
// //       current = current.next;
// //     }
// //   }
// //   return dummy.next;
// // }
// // function createLinkedList(arr) {
// //   if (arr.length === 0) return 0;
// //   let dummy = new ListNode(0);
// //   let current = dummy;
// //   for (let val of arr) {
// //     current.next = new ListNode(val);
// //     current = current.next;
// //   }
// //   return dummy.next;
// // }
// // function printList(head) {
// //   let result = [];
// //   while (head) {
// //     result.push(head.val);
// //     head = head.next;
// //   }
// //   console.log(result.join("->"));
// // }

// // let head = createLinkedList([1, 2, 3, 3, 4, 4, 5]);
// // printList(head);

// // let newHead = deleteDuplicates(head);
// // printList(newHead);

// //////---------------------------. Partition List------------------------------>>>>>>>>>>>

// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }
// // function partition(head, x) {
// //   let before_head = new ListNode(0);
// //   let before = before_head;
// //   let after_head = new ListNode(0);
// //   let after = after_head;
// //   let current = head;
// //   while (current) {
// //     if (current.val < x) {
// //       before.next = current;
// //       before = before.next;
// //     } else {
// //       after.next = current;
// //       after = after.next;
// //     }
// //     current = current.next;
// //   }
// //   after.next = null;
// //   before.next = after_head.next;
// //   return before_head.next;
// // }
// // function arrayToLinkedlist(arr) {
// //   if (arr.length === 0) return 0;
// //   let dummy = new ListNode(0);
// //   let current = dummy;
// //   for (let val of arr) {
// //     current.next = new ListNode(val);
// //     current = current.next;
// //   }
// //   return dummy.next;
// // }
// // function printList(head) {
// //   let result = [];
// //   while (head) {
// //     result.push(head.val);
// //     head = head.next;
// //   }
// //   console.log(result.join("->"));
// // }

// // let head = arrayToLinkedlist([1, 4, 3, 2, 5, 2]);
// // let part = partition(head, 3);
// // printList(part);

// //______________________Merge sorted array___________________

// // function merge(nums1, m, nums2, n) {
// //   let k = m + n - 1;
// //   let i = m - 1;
// //   let j = n - 1;

// //   while (i >= 0 && j >= 0) {
// //     if (nums1[i] > nums2[j]) {
// //       nums1[k] = nums1[i];
// //       i--;
// //     } else {
// //       nums1[k] = nums2[j];
// //       j--;
// //     }
// //     k--;
// //   }
// //   while (j >= 0) {
// //     nums1[k] = nums2[j];
// //     j--;
// //     k--;
// //   }
// //   return nums1;
// // }
// // console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// // ///

// //----------------------------  Valid Palindrome--------------------------------

// // function isPalindrome(s) {
// //   let left = 0;
// //   let right = s.length - 1;
// //   while (left < right) {
// //     while (left < right && !isAlphaNum(s[left])) {
// //       left++;
// //     }
// //     while (left < right && !isAlphaNum(s[right])) {
// //       right--;
// //     }
// //     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
// //       return false;
// //     }
// //     left++;
// //     right--;
// //   }
// //   return true;
// // }
// // function isAlphaNum(ch) {
// //   return (
// //     (ch >= "a" && ch <= "z") ||
// //     (ch >= "A" && ch <= "Z") ||
// //     (ch >= "0" && ch <= "9")
// //   );
// // }

// // console.log(isPalindrome("A man, a plan, a canal: Panama"));
// // console.log(isPalindrome("race a car"));

// // function isPalindrome(s) {
// //   let left = 0;
// //   let right = s.length - 1;
// //   while (left < right) {
// //     while (left < right && !isAlphaNum(s[left])) {
// //       left++;
// //     }
// //     while (left < right && !isAlphaNum(s[right])) {
// //       right--;
// //     }
// //     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
// //       return false;
// //     }
// //     left++;
// //     right--;
// //   }
// //   return true;
// // }

// // function isAlphaNum(ch) {
// //   return (
// //     (ch >= "a" && ch <= "z") ||
// //     (ch >= "A" && ch <= "Z") ||
// //     (ch >= "0" && ch <= "9")
// //   );
// // }
// // console.log(isPalindrome("A man, a plan, a canal: Panama"));
// // console.log(isPalindrome("malayalam"));

// ///----------------- Linked List Cycle II---------------------

// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }

// // function arrayToLinkedlist(arr) {
// //   let dummy = new ListNode(0);
// //   let head = dummy;
// //   for (let val of arr) {
// //     head.next = new ListNode(val);
// //     head = head.next;
// //   }
// //   return dummy.next;
// // }

// // function hasCycle(head) {
// //   let slow = head;
// //   let fast = head;

// //   while (fast !== null && fast.next !== null) {
// //     slow = slow.next;
// //     fast = fast.next.next;

// //     if (slow === fast) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }

// // let a = arrayToLinkedlist([3, 2, 0, -4]);

// // let tail = a;
// // let cycleNode = a.next;
// // while (tail.next !== null) {
// //   tail = tail.next;
// // }
// // tail.next = cycleNode;
// // //
// // console.log(hasCycle(a));

// // function detectCycle(head) {
// //   let slow = head;
// //   let fast = head;
// //   while (fast != null && fast.next != null) {
// //     slow = slow.next;
// //     fast = fast.next.next;

// //     if (slow === fast) {
// //       slow = head;

// //       while (slow !== fast) {
// //         slow = slow.next;
// //         fast = fast.next;
// //       }
// //       return slow;
// //     }
// //   }
// //   return null;
// // }

// ////---------------------143. Reorder List-------------

// // function reorderList(head) {
// //   if (!head || !head.next) return;

// //   let slow = head,
// //     fast = head;
// //   while (fast && fast.next) {
// //     slow = slow.next;
// //     fast = fast.next.next;
// //   }
// //   let prev = null;
// //   let curr = slow.next;
// //   slow.next = null;
// //   while (curr) {
// //     let nexttemp = curr.next;
// //     curr.next = prev;

// //     prev = curr;
// //     curr = nexttemp;
// //   }

// //   let first = head;
// //   let second = prev;
// //   while (second) {
// //     let temp1 = first.next;
// //     let temp2 = second.next;
// //     first.next = second;
// //     second.next = temp1;
// //     first = temp1;
// //     second = temp2;
// //   }
// // }

// // function sortList(head) {
// //   let arr = [];
// //   let curr = head;
// //   while (curr) {
// //     arr.push(curr.val);
// //     curr = curr.next;
// //   }
// //   arr.sort((a, b) => a - b);
// //   curr = head;
// //   let i = 0;
// //   while (curr) {
// //     curr.val = arr[i++];
// //     curr = curr.next;
// //   }
// //   return head;
// // }

// // function arrayToLinkedlist(arr) {
// //   if (arr.length === 0) return 0;
// //   let dummy = new ListNode(0);
// //   let current = dummy;
// //   for (let val of arr) {
// //     current.next = new ListNode(val);
// //     current = current.next;
// //   }
// //   return dummy.next;
// // }
// // function printList(head) {
// //   let result = [];
// //   while (head) {
// //     result.push(head.val);
// //     head = head.next;
// //   }
// //   console.log(result.join("->"));
// // }

// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }

// // let list = arrayToLinkedlist([-1, 5, 3, 4, 0]);
// // let he = sortList(list);
// // printList(he);

// ///-------------. Reverse Words in a String------------------

// // function reverseWords(str) {
// //   let words = [];
// //   let word = "";
// //   let index = 0;
// //   for (let i = 0; i <= str.length; i++) {
// //     if (i === str.length || str[i] === " ") {
// //       if (word.length > 0) {
// //         words[index] = word;
// //         index++;
// //         word = "";
// //       }
// //     } else {
// //       word += str[i];
// //     }
// //   }
// //   let result = "";
// //   for (let i = words.length - 1; i >= 0; i--) {
// //     result += words[i];
// //     if (i !== 0) result += " ";
// //   }
// //   return result;
// // }
// // console.log(reverseWords("the sky is blue"));

// ///

// ////------- Compare Version Number------

// // function compareVersion(v1, v2) {
// //   let ver1 = v1.split(".");
// //   let ver2 = v2.split(".");

// //   let n = Math.max(v1.length, v2.length);

// //   for (let i = 0; i < n; i++) {
// //     let num1 = i < ver1.length ? parseInt(ver1[i], 10) : 0;
// //     let num2 = i < ver2.length ? parseInt(ver2[i], 10) : 0;
// //     if (num1 > num2) return 1;
// //     if (num1 < num2) return -1;
// //   }
// // }
// // console.log(compareVersion("1.2", "1.10"));

// // function twoSum(nums, target) {
// //   let left = 0;
// //   let right = nums.length - 1;

// //   while (left < right) {
// //     let sum = nums[right] + nums[left];
// //     if (sum === target) return [left + 1, right + 1];
// //     else if (sum < target) left++;
// //     else {
// //       right--;
// //     }
// //   }
// // }
// // console.log(twoSum([2, 7, 11, 15], 9));

// ///--- rotate array----

// // function rotate(nums, k) {
// //   const n = nums.length;
// //   k = k % n; // handle k > n
// //   const rotated = new Array(n);

// //   // Copy last k elements to the front
// //   for (let i = 0; i < k; i++) {
// //     rotated[i] = nums[n - k + i];
// //   }

// //   // Copy first n-k elements to the back
// //   for (let i = 0; i < n - k; i++) {
// //     rotated[k + i] = nums[i];
// //   }

// //   return rotated;
// // // }

// // console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// // Output: [5, 6, 7, 1, 2, 3, 4]

// // function rotate(nums, k) {
// //   const n = nums.length;
// //   k = k % n;
// //   const rotated = new Array(n);
// //   for (let i = 0; i < n; i++) {
// //     rotated[(i + k) % n] = nums[i];
// //   }
// //   return rotated;
// // }
// // console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// // function isHappy(n) {
// //   const seen = new Set();
// //   while (n !== 1) {
// //     if (seen.has(n)) return false;
// //     let sum = 0;
// //     let temp = n;
// //     while (temp > 0) {
// //       let digit = temp % 10;
// //       sum += digit * digit;
// //       temp = Math.floor(temp / 10);
// //     }
// //     n = sum;
// //   }
// //   return true;
// // }

// ///

// ////-----------------4. Palindrome Linked List----------------

// // function ListNode(val, next = null) {
// //   this.val = val;
// //   this.next = next;
// // }
// // function isPalindrome(head) {
// //   if (!head || !head.next) return true;
// //   let slow = head;
// //   let fast = head;
// //   while (fast & fast.next) {
// //     slow = slow.next;
// //     fast = fast.next.next;
// //   }
// //   let prev = null;
// //   while (slow) {
// //     let next = slow.next;
// //     slow.next = prev;
// //     prev = slow;
// //     slow = next;
// //   }
// //   let left = head;
// //   let right = prev;
// //   while (right) {
// //     if (left.val !== right.val) return false;
// //     left = left.next;
// //     right = right.next;
// //   }
// //   return true;
// // }

// ///------------ Move Zeros------------------------

// // function moveZeros(num) {
// //   let left = 0;
// //   for (let right = 0; right < num.length; right++) {
// //     if (num[right] !== 0) {
// //       let temp = num[left];
// //       num[left] = num[right];
// //       num[right] = temp;
// //       left++;
// //     }
// //   }
// //   return num;
// // }
// // console.log(moveZeros([0, 1, 32, 0, 4, 0]));

// // function findDuplicate(nums) {
// //   let left = 0;
// //   for (let right = 1; right < nums.length; right++) {
// //     if (nums[right] !== nums[left]) {
// //       left++;
// //     } else {
// //       return nums[right];
// //     }
// //   }
// // }
// // console.log(findDuplicate([1, 3, 4, 4, 2]));

// ///

// ///--------Median element-----

// ///kjhkjdkjashdkjhakjhkajshdkjhkjdhkjasdkhkjkjkjjkkjhhjh

// // function merge(nums1, nums2) {
// //   let i = nums1.length + 1;
// //   let j = nums2.length + 1;
// //   let k = j + i - 1;

// //   while (i >= 0 && j >= 0) {
// //     if (nums1[i] > nums2[j]) {
// //       nums1[k] = nums1[i];
// //       i--;
// //     } else {
// //       nums1[k] = nums2[j];
// //       j--;
// //     }
// //     k--;
// //   }
// //   while (j >= 0) {
// //     nums1[k] = nums2[j];
// //     j--;
// //     k--;
// //   }
// //   return nums1;
// // function reversString(s) {
// //   let left = 0;
// //   let right = s.length - 1;
// //   while (left < right) {
// //     [s[left], s[right]] = [s[right], s[left]];
// //     left++;
// //     right--;
// //   }
// //   return s;
// // }
// // console.log(reversString(["h", "e", "l", "l", "o"]));

// //

// // function reverseVowel(s) {
// //   const vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
// //   let arr = s.split("");
// //   let left = 0;
// //   let right = arr.length - 1;
// //   let a = [];

// //   while (left < right) {
// //     while (left < right && !vowel.has(arr[left])) {
// //       a.push(arr[left]);
// //       left++;
// //     }
// //     while (left < right && !vowel.has(arr[right])) {
// //       right--;
// //       a.push(arr[left]);
// //     }

// //     [arr[left], arr[right]] = [arr[right], arr[left]];
// //     left++;
// //     right--;
// //   }
// //   return arr.join("");
// // }
// // console.log(reverseVowel("IceCreAm"));

// ///dfdsfsdfsdf

// // function mergeTwoArrays(a, b) {
// //   let i = 0;
// //   let j = 0;
// //   let result = [];
// //   k = 0;

// //   while (i < a.length && j < b.length) {
// //     if (a[i] <= b[j]) {
// //       result[k++] = a[i];
// //       i++;
// //     } else {
// //       result[k++] = b[j];
// //       j++;
// //     }
// //   }

// //   // // remaining elements of a
// //   // while (i < a.length) {
// //   //   result.push(a[i]);
// //   //   i++;
// //   // }

// //   // // remaining elements of b
// //   // while (j < b.length) {
// //   //   result.push(b[j]);
// //   //   j++;
// //   // }

// //   return result;
// // }

// // console.log(mergeTwoArrays([1, 3, 5, 7, 9], [2, 4, 6, 8]));

// // function intersectionArray(num1, num2) {
// //   result = [];
// //   for (let i = 0; i < num1.length; i++) {
// //     for (let j = 0; j < num2.length; j++) {
// //       if (num1[i] === num2[j] && !result.includes(num1[i])) {
// //         result.push(num1[i]);
// //       }
// //     }
// //   }
// //   return result;
// // }
// // console.log(intersectionArray([1, 2, 2, 1], [2, 2]));

// /// ______________  Intersection of Two Arrays_________________________________

// // function intersection(num1, num2) {
// //   num1.sort((a, b) => a - b);
// //   num2.sort((a, b) => a - b);
// //   let i = 0,
// //     j = 0;
// //   let result = [];

// //   while (i < num1.length && j < num2.length) {
// //     if (num1[i] === num2[j]) {
// //       if (result.length === 0 || result[result.length - 1] !== num1[i]) {
// //         result.push(num1[i]);
// //       }
// //       i++;
// //       j++;
// //     } else if (num1[i] < num2[j]) {
// //       i++;
// //     } else {
// //       j++;
// //     }
// //   }
// //   return result;
// // }

// // console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// //---------------- Is Subsequence------------------------

// // function isSubsequence(s, t) {
// //   let i = 0;
// //   j = 0;
// //   while (i < s.length && j < t.length) {
// //     if (s[i] === t[j]) {
// //       i++;
// //     }
// //     j++;
// //   }
// //   return i === s.length;
// // }

// // console.log(isSubsequence("abc", "ahbgdc"));

// // function findContentChildren(a, b) {
// //   a.sort((a, b) => a - b);
// //   b.sort((a, b) => a - b);

// //   let j = 0;
// //   let i = 0;
// //   let count = 0;
// //   while (i < a.length && j < b.length) {
// //     if (a[j] >= b[i]) {
// //       count++;
// //       i++;
// //       j++;
// //     } else {
// //       j++;
// //     }
// //   }
// //   return count;
// // }
// // console.log(findContentChildren([1, 2, 3], [1, 1]));

// ///

// // function findRadius(houses,heaters){
// //   houses.sort((a,b)=a-b)
// //   heaters.sort((a,b)=a-b)
// //   let j=0
// //   let radius=0

// //   for(let i=0;i<houses.length;i++){
// //     while(j<heaters.length-1 && Math.abs(heaters[j+1]-houses[i]<=Math.abs(heaters[j]-houses[i]))){
// //       j++
// //     }
// //     radius=Math.max(radius,Math.abs(heaters[j]-houses[i]))
// //   }
// //   return radius
// // };

// // function binarySearch(nums, target) {
// //   let left = 0;
// //   let right = nums.length - 1;
// //   while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
// //     if (nums[mid] === target) {
// //       return mid;
// //     } else if (nums[mid] < target) {
// //       left = mid + 1;
// //     } else {
// //       right = mid - 1;
// //     }
// //   }
// //   return -1;
// // }

// // console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));

// //------------------Longest Substring Without Repeating Characters----------

// // function lengthOfLongestSubstring(s) {
// //   let set = new Set();
// //   let left = 0;
// //   let maxLen = 0;
// //   for (let right = 0; right < s.length; right++) {
// //     while (set.has(s[right])) {
// //       set.delete(s[left]);
// //       left++;
// //     }
// //     set.add(s[right]);
// //     maxLen = Math.max(maxLen, right - left + 1);
// //   }
// //   return maxLen;
// // }
// // console.log(lengthOfLongestSubstring("abcabcbb"));

// // function findSubstring(s, words) {
// //   if (words.length === 0) return [];

// //   let wordLen = words[0].length;
// //   let wordCount = words.length;
// //   let totalLen = wordLen * wordCount;

// //   let wordMap = {};
// //   for (let w of words) {
// //     if (wordMap[w] === undefined) {
// //       wordMap[w] = 1;
// //     } else {
// //       wordMap[w]++;
// //     }
// //   }

// //   const result = [];
// //   for (let i = 0; i < wordLen; i++) {
// //     let left = i;
// //     let seen = {};
// //     let count = 0;
// //     for (let right = i; right + wordLen <= s.length; right += wordLen) {
// //       const word = s.substring;
// //     }
// //   }
// // }

// ///---------------. Repeated DNA Sequences--------------

// // using an object

// // function dna(str) {
// //   const re = [];
// //   const seen = {};

// //   for (let i = 0; i + 9 < str.length; i++) {
// //     let seq = str.slice(i, i + 10);
// //     seen[seq] = seen[seq] + 1 || 1;
// //     if (seen[seq] === 2) {
// //       re.push(seq);
// //     }
// //   }
// //   return re;
// // }

// // using Set

// // function dna(str) {
// //   let postSeq = new Set();
// //   let res = new Set();
// //   for (let i = 0; i <= str.length - 10; i++) {
// //     let comparable = str.substring(i, i + 10);
// //     postSeq.has(comparable) ? res.add(comparable) : postSeq.add(comparable);
// //   }
// //   return [...res];
// // }

// // console.log(dna("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));

// ///

// //  -----------------Minimum Size Subarray Sum---------------

// // function minSubArrayLen(target, num) {
// //   let high = 0;
// //   let low = 0;
// //   let currentSum = 0;
// //   let minSlidingWindowSize = Infinity;
// //   while (high < num.length) {
// //     currentSum += num[high];
// //     high++;
// //     while (currentSum >= target) {
// //       let slidingWindowSize = high - low;
// //       minSlidingWindowSize = Math.min(minSlidingWindowSize, slidingWindowSize);
// //       currentSum -= num[low];
// //       low++;
// //     }
// //   }
// //   return minSlidingWindowSize === Infinity ? 0 : minSlidingWindowSize;
// // }

// // console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// ///--------------------------------------------Contains Duplicate II--------------

// // function containsNearbyDuplicate(nums, k) {
// //   let set = new Set();
// //   for (let i = 0; i < nums.length; i++) {
// //     if (set.has(nums[i])) {
// //       return true;
// //     }
// //     set.add(nums[i]);
// //     if (set.size > k) {
// //       set.delete(nums[i - k]);
// //     }
// //   }
// //   return false;
// // }

// // console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

// /////

// ///--------------------------------------------Contains Duplicate III--------------

// // function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
// //   if (valueDiff < 0) return false;
// //   const size = valueDiff + 1;
// //   const buckets = new Map();

// //   for (let i = 0; i < nums.length; i++) {
// //     const num = nums[i];
// //     const bucket = Math.floor(num / size);
// //     if (buckets.has(bucket)) return true;
// //     if (
// //       buckets.has(bucket - 1) &&
// //       Math.abs(num - buckets.get(bucket - 1)) <= valueDiff
// //     ) {
// //       return true;
// //     }
// //     if (
// //       buckets.has(bucket + 1) &&
// //       Math.abs(nums - buckets.get(bucket + 1)) <= valueDiff
// //     ) {
// //       return true;
// //     }
// //     buckets.set(bucket, num);
// //     if (i >= indexDiff) {
// //       const oldNum = nums[i - indexDiff];
// //       const oldBucket = Math.floor(oldNum / size);
// //       bucket.delete(oldBucket);
// //     }
// //     return false;
// //   }
// // }
// // console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));

// ///

// ///-----Longest Substring with At Least K Repeating Characters

// // function longestSubstring(s, k) {
// //   if (s.length < k) return 0;
// //   let sum = 0;
// //   const freq = {};

// //   for (let char of s) {
// //     freq[char] = (freq[char] || 0) + 1;
// //   }

// //   for (let char in freq) {
// //     if (freq[char] < k) {
// //       let maxlen = 0;
// //       let substrings = s.split(char);
// //       for (let sub of substrings) {
// //         maxlen = Math.max(maxlen, longestSubstring(sub, k));
// //       }
// //       return maxlen;
// //     }
// //   }
// //   return s.length;
// // }
// // console.log(longestSubstring("ababbc", 2));

// ////--------413. Arithmetic Slices------------------

// // function numberOfArithmeticSlices(nums) {
// //   let left = 0;
// //   let total = 0;
// //   let count = 0;
// //   for (let right = 2; right < nums.length; right++) {
// //     if (nums[right] - nums[right - 1] === nums[right - 1] - nums[right - 2]) {
// //       count++;
// //       total += count;
// //     } else {
// //       count = 0;
// //     }
// //   }
// //   return total;
// // }

// // console.log(numberOfArithmeticSlices([1, 2, 3, 4]));

// ////---------------424. Longest Repeating Character Replacement-----------------------

// // function characterReplacement(s, k) {
// //   let freq = {};
// //   let left = 0;
// //   let maxfreq = 0;
// //   let mainWindow = 0;

// //   for (let right = 0; right < s.length; right++) {
// //     freq[s[right]] = (freq[s[right]] || 0) + 1;
// //     maxfreq = Math.max(maxfreq, freq[s[right]]);
// //     let windowSize = right - left + 1;
// //     if (windowSize - maxfreq > k) {
// //       freq[s[left]]--;
// //       left++;
// //     }
// //     windowSize = right - left + 1;
// //     mainWindow = Math.max(mainWindow, windowSize);
// //   }

// //   return mainWindow;
// // }

// // console.log(characterReplacement("ABAB", 2));

// //------------------438. Find All Anagrams in a String-----------------------

// // function findAnagrams(s, p) {
// //   let result = [];
// //   let pCount = Array(26).fill(0);
// //   let sCount = Array(26).fill(0);
// //   const aCode = "a".charCodeAt(0);
// //   for (let char of p) {
// //     pCount[char.charCodeAt(0) - aCode]++;
// //   }
// //   for (let i = 0; i < s.length; i++) {
// //     sCount[s.charCodeAt(i) - aCode]++;
// //     if (i >= p.length) {
// //       sCount[s.charCodeAt(i - p.length) - aCode]--;
// //     }

// //     if (arraysEqual(sCount, pCount)) {
// //       result.push(i - p.length + 1);
// //     }
// //   }
// //   return result;
// // }
// // function arraysEqual(arr1, arr2) {
// //   for (let i = 0; i < 26; i++) {
// //     if (arr1[i] !== arr2[i]) return false;
// //   }
// //   return true;
// // }

// // console.log(findAnagrams("cbaebabacd", "abc"));

// ////--------------567. Permutation in String------------

// // function checkInclusion(s1, s2) {
// //   if (s1.length > s2.length) return false;
// //   let s1Count = Array(26).fill(0);
// //   let s2count = Array(26).fill(0);
// //   const aCode = "a".charCodeAt(0);

// //   for (let char of s1) {
// //     s1Count[char.charCodeAt(0) - aCode]++;
// //   }
// //   for (let i = 0; i < s2.length; i++) {
// //     s2count[s2.charCodeAt(i) - aCode]++;
// //     if (i >= s1.length) {
// //       s2count[s2.charCodeAt(i - s1.length) - aCode]--;
// //     }
// //     if (arraysEqual(s1Count, s2count)) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }
// // function arraysEqual(arr1, arr2) {
// //   for (let i = 0; i < 26; i++) {
// //     if (arr1[i] !== arr2[i]) return false;
// //   }
// //   return true;
// // }

// // console.log(checkInclusion("ab", "eidbaooo"));

// ///lkjkllkjlkkljjjjjjjjlkljklj

// ///--------------594. Longest Harmonious Subsequence--------------

// // function findLHS(nums) {
// //   let n = nums.length;
// //   let left = 0;
// //   let right = 1;
// //   let res = 0;
// //   nums.sort((a, b) => a - b);
// //   while (right < n) {
// //     while (nums[right] - nums[left] > 1) {
// //       left++;
// //     }
// //     if (nums[right] - nums[left] === 1) {
// //       res = Math.max(res, right - left + 1);
// //     }
// //     right++;
// //   }
// //   return res;
// // }
// // console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
// // //

// /////---------------643. Maximum Average Subarray I-----------

// // function findMaxAverage(nums, k) {
// //   let windowSum = 0;
// //   for (let i = 0; i < k; i++) {
// //     windowSum += nums[i];
// //   }
// //   let max = windowSum;
// //   for (let i = k; i < nums.length; i++) {
// //     windowSum += nums[i];
// //     windowSum -= nums[i - k];
// //     max = Math.max(max, windowSum);
// //   }
// //   return max / k;
// // }
// // console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// ////--------------- Find K Closest Elements----------------

// // function findClosestElement(arr, k, x) {
// //   let left = 0;
// //   let right = arr.length - k;
// //   while (left < right) {
// //     let mid = Math.floor((left + right) / 2);
// //     if (x - arr[mid] > arr[mid + k] - x) {
// //       left = mid + 1;
// //     } else {
// //       right = mid;
// //     }
// //   }
// //   return arr.slice(left, left + k);
// // }

// //---------------718. Maximum Length of Repeated Subarray--------------

// // function findLength(num1, num2) {
// //   const n = num2.length;
// //   let max = 0;
// //   let dp = Array(n + 1).fill(0);
// //   for (let i = 1; i <= num1.length; i++) {
// //     for (let j = n; j >= 1; j--) {
// //       if (num1[i - 1] === num2[j - 1]) {
// //         dp[j] = dp[j - 1] + 1;
// //         max = Math.max(max, dp[j]);
// //       } else {
// //         dp[j] = 0;
// //       }
// //     }
// //   }
// //   return max;
// // }

// // console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));

// // function findLength(num1, num2) {
// //   const n = num2.length;
// //   let max = n - 1;
// //   let dp = Array(n).fill(0);
// //   for (let i = 1; i <= num1.length; i++) {
// //     for (let j = n; j >= 1; j--) {
// //       if (num1[i - 1] === num2[j - 1]) {
// //         dp[j - 1] = num1[i - 1];
// //       }
// //     }
// //   }
// //   return dp.filter((value) => value !== 0);
// // }

// // console.log(findLength([1, 2, 3, 2, 1, 4], [3, 2, 1, 4, 7]));

// ////-------------- N-Queens-----------------

// // function solveNQueens(n) {
// //   const res = [];
// //   const board = Array.from({ length: n }, () => ".".repeat(n).split(""));
// //   const cols = new Set();
// //   const diag1 = new Set();
// //   const diag2 = new Set();
// //   function backtrack(row) {
// //     if (row === n) {
// //       res.push(board.map((r) => r.join("")));
// //       return;
// //     }
// //     for (let col = 0; col < n; col++) {
// //       if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
// //         continue;
// //       }
// //       board[row][col] = "Q";
// //       cols.add(col);
// //       diag1.add(row - col);
// //       diag2.add(row + col);
// //       backtrack(row + 1);
// //       board[row][col] = ".";
// //       cols.delete(col);
// //       diag1.delete(row - col);
// //       diag2.delete(row + col);
// //     }
// //   }
// //   backtrack(0);
// //   return res;
// // }

// // console.log(solveNQueens(4));

// // ///;

// // ///----------------////-------------- N-Queens II -----------------

// // function totalNQueens(n) {
// //   let count = 0;
// //   let cols = new Set();
// //   let diag1 = new Set();
// //   let diag2 = new Set();
// //   function backtrack(row) {
// //     if (row === n) {
// //       count++;
// //       return;
// //     }
// //     for (let col = 0; col < n; col++) {
// //       if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col))
// //         continue;

// //       cols.add(col);
// //       diag1.add(row - col);
// //       diag2.add(row + col);
// //       backtrack(row + 1);
// //       cols.delete(col);
// //       diag1.delete(row - col);
// //       diag2.delete(row + col);
// //     }
// //   }
// //   backtrack(0);
// //   return count;
// // }
// // console.log(totalNQueens(4));

// //////////---------------------------------Permutations I------------

// // function permute(nums) {
// //   const result = [];
// //   function backtrack(start) {
// //     if (start === nums.length) {
// //       result.push([...nums]);
// //       return;
// //     }

// //     for (let i = start; i < nums.length; i++) {
// //       [nums[start], nums[i]] = [nums[i], nums[start]];

// //       backtrack(start + 1);

// //       [nums[start], nums[i]] = [nums[i], nums[start]];
// //     }
// //   }
// //   backtrack(0);
// //   return result;
// // }

// // console.log(permute([1, 2, 3]));

// //////////---------------------------------Permutations II------------

// // console.log(permdfsdute([1, 1, 2]));
// // function permuteUnique(nums) {
// //   const result = [];
// //   nums.sort((a, b) => a - b);

// //   function backtrack(start) {
// //     if (start === nums.length) {
// //       result.push([...nums]);
// //       return;
// //     }

// //     const seen = new Set();

// //     for (let i = start; i < nums.length; i++) {
// //       if (seen.has(nums[i])) continue;
// //       seen.add(nums[i]);

// //       // ✅ swap
// //       [nums[start], nums[i]] = [nums[i], nums[start]];

// //       backtrack(start + 1);

// //       // ✅ backtrack
// //       [nums[start], nums[i]] = [nums[i], nums[start]];
// //     }
// //   }

// //   backtrack(0);
// //   return result;
// // }

// // console.log(permuteUnique([1, 1, 2]));

// ////-------Fruit Into Baskets-----

// // function totalFruit(fruits) {
// //   let fruit1 = -1,
// //     fruit2 = -1;
// //   let lastFruitCount = 0;
// //   let curr = 0;
// //   let max = 0;

// //   for (let fruit of fruits) {
// //     if (fruit === fruit1 || fruit === fruit2) {
// //       curr++;
// //     } else {
// //       curr = lastFruitCount + 1;
// //     }
// //     if (fruit === fruit2) {
// //       lastFruitCount++;
// //     } else {
// //       lastFruitCount = 1;
// //       fruit1 = fruit2;
// //       fruit2 = fruit;
// //     }
// //     max = Math.max(max, curr);
// //   }
// //   return max;
// // }
// // console.log(totalFruit([1, 2, 3, 2, 2]));

// /// ------------------Binary Subarrays With Sum

// // function atmost(nums, k) {
// //   let left = 0;
// //   let sum = 0;
// //   let count = 0;
// //   if (k < 0) {
// //     return 0;
// //   }
// //   for (let right = 0; right < nums.length; right++) {
// //     sum += nums[right];
// //     while (sum > k) {
// //       sum -= nums[left];
// //       left++;
// //     }
// //     count += right - left + 1;
// //   }
// //   return count;
// // }

// // function numSubarraysWithSum(nums, goal) {
// //   return atmost(nums, goal) - atmost(nums, goal - 1);
// // }
// // console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

// ///--------------Longest Turbulent Subarray-----------
// // function maxTurbulenceSize(arr) {
// //   if (arr.length === 1) return 1;
// //   let maxLen = 1;
// //   let currLen = 1;
// //   let prevSign = 0;
// //   for (let i = 1; i < arr.length; i++) {
// //     let diff = arr[i] - arr[i - 1];
// //     let curSign = diff > 0 ? 1 : diff < 0 ? -1 : 0;
// //     if (curSign === 0) {
// //       currLen = 1;
// //     } else if (currLen === -prevSign) {
// //       currLen++;
// //     } else {
// //       currLen = 2;
// //     }
// //     prevSign = curSign;
// //     maxLen = Math.max(maxLen, curSign);
// //   }
// //   return maxLen;
// // }

// ///

// // function moveZeros(nums) {
// //   let l = 0;
// //   let temp;
// //   for (let r = 0; r < nums.length; r++) {
// //     if (nums[r] !== 0) {
// //       temp = nums[l];
// //       nums[l] = nums[r];
// //       nums[r] = temp;
// //       l++;
// //     }
// //   }
// //   return nums;
// // }
// // console.log(moveZeros([0, 1, 32, 0, 4, 0]));

// ///----------------------------209. Minimum Size Subarray Sum---------------------

// // function minSubArrayLen(target, nums) {
// //   let left = 0;
// //   let sum = 0;
// //   let minLen = Infinity;

// //   for (let right = 0; right < nums.length; right++) {
// //     sum += nums[right];
// //     while (sum >= target) {
// //       minLen = Math.min(minLen, right - left + 1);
// //       sum -= nums[left];
// //       left++;
// //     }
// //   }
// //   return minLen === Infinity ? 0 : minLen;
// // }

// // console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// ////--------------------- Product of Array Except Self-------------

// // function productExceptSelf(nums) {
// //   const n = nums.length;
// //   const answer = [];
// //   for (let i = 0; i < n; i++) {
// //     let product = 1;
// //     for (let j = 0; j < n; j++) {
// //       if (i !== j) {
// //         product *= nums[j];
// //       }
// //     }
// //     answer.push(product);
// //   }
// //   return answer;
// // }
// // console.log(productExceptSelf([1, 2, 3, 4]));

// // function productExceptSelf(nums) {
// //   const n = nums.length;
// //   const res = new Array(n).fill(1);
// //   let left = 1;
// //   for (let i = 0; i < n; i++) {
// //     res[i] = left;
// //     left *= nums[i];
// //   }

// //   let right = 1;
// //   for (let i = n - 1; i >= 0; i--) {
// //     res[i] *= right;
// //     right *= nums[i];
// //   }
// //   return res;
// // }
// // console.log(productExceptSelf([1, 2, 3, 4]));

// ///

// ///---------------303. Range Sum Query - Immutable------------

// // function numArray(nums) {
// //   this.prefix = new Array(nums.length + 1).fill(0);

// //   for (let i = 0; i < nums.length; i++) {
// //     this.prefix[i + 1] = this.prefix[i] + nums[i];
// //   }
// // }

// // numArray.prototype.sumRange = function (left, right) {
// //   return this.prefix[right + 1] - this.prefix[left];
// // };

// // ///

// // function stockMerchant(n, arr) {
// //   const count = {};
// //   let pairs = 0;
// //   for (let s of arr) {
// //     if (count[s]) {
// //       count[s]++;
// //     } else {
// //       count[s] = 1;
// //     }
// //   }
// //   for (let key in count) {
// //     pairs += Math.floor(count[key] / 2);
// //   }
// //   return pairs;
// // }
// // console.log(stockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// // function simpleArraySum(ar) {
// //   let sum = 0;
// //   for (let i of ar) {
// //     sum += i;
// //   }
// //   return sum;
// // }

// ///

// // function breakingRecords(score) {
// //   maxCount = 0;
// //   minCount = 0;
// //   max = score[0];
// //   min = score[0];
// //   for (let i = 1; i < score.length; i++) {
// //     if (score[i] > max) {
// //       max = score[i];
// //       maxCount++;
// //     } else if (score[i] < min) {
// //       min = score[i];
// //       minCount++;
// //     }
// //   }
// //   return [maxCount, minCount];
// // }

// // function kangaroo(x1, v1, x2, v2) {
// //   for (let i = 0; i < 10000; i++) {
// //     if (x1 === x2) {
// //       return "YES";
// //     }
// //     x1 += v1;
// //     x2 += v2;
// //     return "NO";
// //   }
// // // }

// // function staircase(n) {
// //   for (let i = 0; i < n; i++) {
// //     let str = "";
// //     for (let j = 0; j < n - i - 1; j++) {
// //       str += " ";
// //     }
// //     for (let k = 0; k <= i; k++) {
// //       str += "#";
// //     }
// //     console.log(str);
// //   }
// // }
// // staircase(6);

// // function compareTriplets(a, b) {
// //   let alice = 0;
// //   let bob = 0;
// //   for (let i = 0; i < a.length; i++) {
// //     if (a[i] > b[i]) {
// //       alice += 1;
// //     } else if (a[i] < b[i]) {
// //       bob += 1;
// //     }
// //   }
// //   return [alice, bob];
// // }

// // console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// // function quickSort(arr) {
// //   const pivot = arr[0];
// //   const left = [];
// //   const right = [];
// //   for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] < pivot) {
// //       left.push(arr[i]);
// //     } else {
// //       right.push(arr[i]);
// //     }
// //   }
// //   return [...left, pivot, ...right];
// // }
// // console.log(quickSort([4, 5, 3, 7, 2]));

// //

// // function superReducedString(s) {
// //   const stack = [];

// //   for (let ch of s) {
// //     if (stack.length > 0 && stack[stack.length - 1] === ch) {
// //       stack.pop();
// //     } else {
// //       stack.push(ch);
// //     }
// //   }
// //   return stack.length === 0 ? "Empty String" : stack.join("");
// // }

// // function bonAppetit(bill, k, b) {
// //   let annCost = 0;
// //   for (let i = 0; i < bill.length; i++) {
// //     if (i !== k) {
// //       annCost += bill[i];
// //     }
// //   }
// //   const fairShare = annCost / 2;
// //   if (fairShare === b) {
// //     console.log("Bon Appetit");
// //   } else {
// //     console.log(b - fairShare);
// //   }
// // }
// // bonAppetit([3, 10, 2, 9], 1, 7);

// // function plusMinus(arr) {
// //   let neg = 0;
// //   let zero = 0;
// //   let post = 0;
// //   const l = arr.length;
// //   for (let i of arr) {
// //     if (i < 0) {
// //       neg += 1;
// //     } else if (i > 0) {
// //       post += 1;
// //     } else {
// //       zero += 1;
// //     }
// //   }
// //   console.log((post / l).toFixed(6));
// //   console.log((neg / l).toFixed(6));
// //   console.log((zero / l).toFixed(6));
// // }
// // plusMinus([-4, 3, -9, 0, 4, 1]);

// // function birthday(s, d, m) {
// //   let count = 0;
// //   let sum = 0;

// //   for (let i = 0; i < m; i++) {
// //     sum += s[i];
// //   }
// //   if (sum === d) count++;
// //   for (let i = m; i < s.length; i++) {
// //     sum = sum - s[i - m] + s[i];
// //     if (sum === d) count++;
// //   }
// //   return count;
// // }

// //

// // function migratoryBrids(arr) {
// //   const freq = {};
// //   for (let brid of arr) {
// //     if (freq[brid]) {
// //       freq[brid]++;
// //     } else {
// //       freq[brid] = 1;
// //     }
// //   }
// //   let maxCount = Math.max(...Object.values(freq));
// //   let result = Infinity;
// //   for (let brid in freq) {
// //     if (freq[brid] === maxCount) {
// //       result = Math.min(result, brid);
// //     }
// //   }
// //   return result;
// // }
// // console.log(migratoryBrids([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

// // function diagonalDiffernce(arr) {
// //   let firstD = 0;
// //   let secondD = 0;
// //   const n = arr.length;
// //   for (let i = 0; i < n; i++) {
// //     firstD += arr[i][i];
// //     secondD += arr[i][n - 1 - i];
// //   }
// //   return Math.abs(firstD - secondD);
// // }

// //

// // function birthdayCakeCandles(candles) {
// //   let max = Math.max(...candles);
// //   let count = 0;
// //   for (let i of candles) {
// //     if (i === max) count++;
// //   }
// //   return count;
// // }

// // console.log(birthdayCakeCandles([3, 2, 1, 3]));

// // function gradingStudents(grades) {
// //   let result = [];
// //   for (let g of grades) {
// //     if (g < 36) {
// //       result.push(g);
// //     } else {
// //       let next = Math.ceil(g / 5) * 5;
// //       result.push(next - g < 3 ? next : g);
// //     }
// //   }
// //   return result;
// // }
// //kljjlkjlkjlkjlkjkl

// // function pageCount(n, p) {
// //   const front = Math.floor(p / 2);
// //   const back = Math.floor(n / 2) - Math.floor(p / 2);
// //   return Math.min(front, back);
// // }
// // function divisibleSumPairs(n, k, ar) {
// //   let count = 0;
// //   for (let i = 0; i < ar.length; i++) {
// //     for (let j = i + 1; j < ar.length; j++) {
// //       if (ar[i] + (ar[j] % k) === 0) {
// //         count++;
// //       }
// //     }
// //   }
// //   return count;
// // }
// // function miniMaxSum(arr) {
// //   arr.sort((a, b) => a - b);
// //   let min = 0;
// //   let max = 0;

// //   for (let i = 0; i < arr.length - 1; i++) {
// //     min += arr[i];
// //   }

// //   for (let i = 1; i < arr.length; i++) {
// //     max += arr[i];
// //   }

// //   console.log(min, max);
// // }
// // miniMaxSum([1, 2, 3, 4, 5]);

// // ///

// // function countingValleys(steps, path) {
// //   let altitude = 0;
// //   let valleys = 0;
// //   for (let step of path) {
// //     if (step === "U") {
// //       altitude++;
// //       if (altitude == 0) {
// //         valleys++;
// //       }
// //     } else {
// //       altitude--;
// //     }
// //   }
// //   return valleys;
// // }

// // function libraryFine(d1, m1, y1, d2, m2, y2) {
// //   if (d1 !== d2 && m1 === m2 && y1 === y2) {
// //     return (d1 - d2) * 15;
// //   } else if (d1 !== d2 && m1 !== m2 && y1 === y2) {
// //     return (m1 - m2) * 500;
// //   } else {
// //     return (y1 - y2) * 10000;
// //   }
// // }

// // function timeConversion(s) {
// //   let hour = parseInt(s.slice(0, 2));
// //   let rest = s.slice(2, 8);
// //   let period = s.slice(8);
// //   console.log(rest);
// //   if (period === "AM") {
// //     if (hour === 12) hour = 0;
// //   } else {
// //     if (hour != 12) hour += 12;
// //   }
// //   return String(hour).padStart(2, "0") + rest;
// // }

// // console.log(timeConversion("07:05:45PM"));

// // import { useState } from "react";

// // export default function UserForm() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     age: "",
// //   });

// //   const [submittedData, setSubmittedData] = useState(null);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmittedData(formData);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// //       <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
// //         <h1 className="text-xl font-semibold mb-4">User Form</h1>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className="w-full border rounded-lg p-2"
// //             required
// //           />

// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="w-full border rounded-lg p-2"
// //             required
// //           />

// //           <input
// //             type="number"
// //             name="age"
// //             placeholder="Age"
// //             value={formData.age}
// //             onChange={handleChange}
// //             className="w-full border rounded-lg p-2"
// //             required
// //           />

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
// //           >
// //             Submit
// //           </button>
// //         </form>

// //         {submittedData && (
// //           <div className="mt-6 border-t pt-4">
// //             <h2 className="text-lg font-medium mb-2">User Details</h2>
// //             <p><strong>Name:</strong> {submittedData.name}</p>
// //             <p><strong>Email:</strong> {submittedData.email}</p>
// //             <p><strong>Age:</strong> {submittedData.age}</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // function caesarCipher(s, k) {
// //   k = k % 26;
// //   let result = "";
// //   for (let ch of s) {
// //     let code = ch.charCodeAt(0);
// //     if (code >= 97 && code <= 122) {
// //       result += String.fromCharCode(((code - 97 + k) % 26) + 97);
// //     } else if (code >= 65 && code <= 90) {
// //       result += String.fromCharCode(((code - 65 + k) % 26) + 65);
// //     } else {
// //       result += ch;
// //     }
// //   }
// //   return result;
// // // }
// // function caesarCipher(s, k) {
// //   const lower = "abcdefghijklmnopqrstuvwxyz";
// //   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //   k = k % 26;

// //   let result = "";
// //   for (let ch of s) {
// //     if (lower.includes(ch)) {
// //       let id = lower.indexOf(ch);
// //       result += lower[(id + k) % 26];
// //     } else if (upper.includes(ch)) {
// //       let id = higher.indexOf(ch);
// //       result += lower[(id + k) % 26];
// //     } else {
// //       result += ch;
// //     }
// //   }
// //   return result;
// // }

// //sdfsdfsdfdfsdfsdfsdfsdfsfsdfsdfdfsdfsdfsdf

// // function towerBreakers(n, m) {
// //   if (m === 1) return 2;
// //   if (n % 2 === 0) return 2;
// //   return 1;
// //}

// // function dayOfProgrammer(year) {
// //   if (year === 1918) {
// //     return "26.09.1918";
// //   }
// //   let leap;
// //   if (year < 1918) {
// //     leap = year % 4 === 0;
// //   } else {
// //     iseap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
// //   }
// //   const day = leap ? "12" : "13";
// //   return `${day}.09.${year}`;
// // }

// // function hurdleRace(k, height) {
// //   const maxHeight = Math.max(...height);
// //   return Math.max(0, maxHeight - k);
// // }

// // function minimumNumber(n, password) {
// //   let isDigit = false;
// //   let isLower = false;
// //   let isUpper = false;
// //   let isSpecial = false;
// //   const numbers = "0123456789";
// //   const lower = "abcdefghijklmnopqrstuvwxyz";
// //   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //   const special = "!@#$%^&*()-+";

// //   for (let ch of password) {
// //     if (numbers.includes(ch)) isDigit = true;
// //     else if (lower.includes(ch)) isLower = true;
// //     else if (upper.includes(ch)) isUpper = true;
// //     else if (special.includes(ch)) isSpecial = true;
// //   }
// //   let m = 0;
// //   if (!isDigit) m++;
// //   if (!isLower) m++;
// //   if (!isUpper) m++;
// //   if (!isSpecial) m++;
// //   return Math.max(m, 6 - n);
// // }

// // function minimumAbsoluteDifference(arr) {
// //   arr.sort((a, b) => a - b);
// //   let md = Infinity;
// //   for (let i = 0; i < arr.length; i++) {
// //     const differnce = Math.abs(arr[i + 1] - arr[i]);
// //     if (differnce < md) {
// //       md = differnce;
// //     }
// //   }

// //   return md;
// // }

// // function marsExploration(s) {
// //   let count = 0;
// //   const pattern = "SOS";
// //   for (let i = 0; i < s.length; i++) {
// //     if (s[i] !== pattern[i % 3]) {
// //       count++;
// //     }
// //   }
// //   return count;
// // }

// // console.log(marsExploration("SOSSOT"));

// // function getMoneySpent(keyboards, drives, budget) {
// //   let maxSpend = -1;
// //   let total = 0;
// //   for (let key of keyboards) {
// //     for (let dri of drives) {
// //       total = key + dri;
// //       if (total <= budget && total > maxSpend) maxSpend = total;
// //     }
// //   }
// //   return maxSpend;
// // }

// // function camelcase(s) {
// //   let count = 1;
// //   for (let ch of s) {
// //     if (ch >= "A" && ch <= "z") {
// //       count++;
// //     }
// //   }
// //   return count;
// // }
// // function viralAdvertising(n) {
// //   let shared = 5;
// //   let count = 0;
// //   for (let day = 0; day < n; day++) {
// //     let liked = Math.floor(shared / 2);
// //     count += liked;
// //     shared = liked * 3;
// //   }
// //   return count;
// // }

// //

// // function jumpingOnClouds(c, k) {
// //   let energy = 100;
// //   let cloud = 0;
// //   for (let i = 0; i < c.length; i++) {
// //     cloud = (cloud + k) % c.length;
// //     energy -= 1 + 2 * c[cloud];
// //     if(cloud===0)break
// //   }
// //   return energy;
// // }
// // console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

// // function marcsCakewalk(calorie) {
// //   calorie.sort((a, b) => b - a);

// //   let miles = 0;

// //   for (let i = 0; i < calorie.length; i++) {
// //     miles += calorie[i] * Math.pow(2, i);
// //   }
// //   return miles;
// // }

// // console.log(marcsCakewalk([7, 4, 9, 6]));

// // function catAndMouse(x, y, z) {
// //   const distA = Math.abs(x - z);
// //   const distB = Math.abs(y - z);

// //   if (distA < distB) {
// //     return "Cat A";
// //   } else if (distB < distA) {
// //     return "Cat B";
// //   } else {
// //     return "Mouse C";
// //   }
// // }

// // console.log(catAndMouse(1, 2, 3));
// // function petrolPumpTour(petrolPumps) {
// //   let totalFuel = 0;
// //   let currentFuel = 0;
// //   let startIndex = 0;
// //   for (let i = 0; i < petrolPumps.length; i++) {
// //     let petrol = petrolPumps[i][0];
// //     let distance = petrolPumps[i][1];
// //     let gain = petrol - distance;
// //     totalFuel += gain;
// //     currentFuel += gain;
// //     if (currentFuel < 0) {
// //       startIndex = i + 1;

// //       currentFuel = 0;
// //     }
// //   }
// //   return totalFuel >= 0 ? startIndex : -1;
// // }

// // function twoSum(arr, k) {
// //   let left = 0;
// //   let right = arr.length - 1;

// //   while (left < right) {
// //     let sum = arr[left] + arr[right];
// //     if (sum === k) {
// //       return [left, right];
// //     } else if (sum > k) {
// //       right--;
// //     } else {
// //       left++;
// //     }
// //   }
// //   return [];
// // }
// // console.log(twoSum([2, 7, 11, 15], 9));

// // function twoSum(arr, target) {
// //   let obj = {};
// //   for (let i = 0; arr.length; i++) {
// //     let d = target - arr[i];
// //     if (d in obj) {
// //       return [obj[d], i];
// //     }
// //     obj[arr[i]] = i;
// //   }
// //   return [];
// // }

// // console.log(twoSum([2, 7, 1, 15], 9));

// // function twoSum(nums, target) {
// //   const map = new Map();
// //   for (let i = 0; i < nums.length; i++) {
// //     let d = target - nums[i];
// //     if (map.has(d)) {
// //       return [map.get(d), i];
// //     }
// //     map.set(nums[i], i);
// //   }0
// //   return [];
// // }
// // console.log(twoSum([2, 7, 11, 15], 9));

// // function threeSum(num) {
// //   num.sort((a, b) => a - b);
// //   let result = [];

// //   for (let i = 0; i < num.length; i++) {
// //     if (i > 0 && num[i] === num[i - 1]) continue;
// //     let left = i + 1;
// //     let right = num.length - 1;
// //     while (left < right) {
// //       const sum = num[i] + num[left] + num[right];
// //       if (sum === 0) {
// //         result.push([num[i], num[left], num[right]]);

// //         while (num[left] === num[left + 1]) left++;
// //         while (num[right] === num[right - 1]) right--;
// //         left++;
// //         right--;
// //       } else if (sum > 0) {
// //         right--;
// //       } else {
// //         left++;
// //       }
// //     }
// //   }
// //   return result;
// // }
// // console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// // function mergeTwoArrays(arr1, arr2) {
// //   let i = 0,
// //     j = 0;
// //   const result = [];
// //   while (i < arr1.length && j < arr2.length) {
// //     if (arr1[i] <= arr2[j]) {
// //       result.push(arr1[i]);
// //       i++;
// //     } else {
// //       result.push(arr2[j]);
// //       j++;
// //     }
// //   }
// //   while (i < arr1.length) {
// //     result.push(arr1[i]);
// //     i++;
// //   }
// //   while (j < arr1.length) {
// //     result.push(arr2[j]);
// //     j++;
// //   }
// //   return result;
// // }
// // console.log(mergeTwoArrays([1, 3, 5], [2, 4, 6]));

// ///

// // function Palindrome(str) {
// //   let right = str.length - 1;

// //   for (let left = 0; left < str.length / 2; left++) {
// //     if (str[left] !== str[right]) {
// //       return false;
// //     }
// //     right--;
// //   }
// //   return true;
// // }
// // console.log(Palindrome("malaiaalam"));

// // function moveZeros(arr) {
// //   let left = 0;
// //   let temp;
// //   for (let right = 0; right < arr.length; right++) {
// //     if (arr[right] !== 0) {
// //       temp = arr[left];
// //       arr[left] = arr[right];
// //       arr[right] = temp;
// //       left++;
// //     }
// //   }
// //   return arr;
// // }
// // console.log(moveZeros([0, 1, 0, 0, 1, 0, 2, 3]));
// // Longest subarray sum equals k

// // function longestSubarraySum(arr, k) {
// //   let left = 0;
// //   let sum = 0;
// //   let maxlen = 0;
// //   for (let right = 0; right < arr.length; right++) {
// //     sum += arr[right];
// //     while (sum > k) {
// //       sum -= arr[left];
// //       left++;
// //     }
// //     if (sum === k) {
// //       maxlen = Math.max(maxlen, right - left + 1);
// //     }
// //   }
// //   return maxlen;
// // }

// // console.log(longestSubarraySum([1, 2, 1, 1, 1], 3));

// // function longestSubarraySum(arr, k) {
// //   let max = 0;
// //   let sum = 0;
// //   let map = new Map();
// //   for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];

// //     if (sum === k) {
// //       max = i + 1;
// //     }
// //     if (map.has(sum - k)) {
// //       max = Math.max(max, i - map.get(sum - k));
// //     }
// //     if (!map.has(sum)) {
// //       map.set(sum, i);
// //     }
// //   }
// //   return max;
// // }
// // console.log(longestSubarraySum([1, -1, 5, -2, 3], 3));

// // function smallestSubArraySum(arr, k) {
// //   let n = arr.length;
// //   let prefix = new Array(n + 1).fill(0);
// //   for (let i = 0; i < n; i++) {
// //     prefix[i + 1] = prefix[i] + arr[i];
// //   }
// //   let q = [];
// //   let minlen = Infinity;
// //   for (let i = 0; i <= n; i++) {
// //     while (q.length && prefix[i] - prefix[q[0]] >= k) {
// //       minlen = Math.min(minlen, i - q[0]);
// //       q.shift();
// //     }
// //     while (q.length && prefix[i] <= prefix[q[q.length - 1]]) {
// //       q.pop();
// //     }
// //     q.push(i);
// //   }
// //   return minlen;
// // }

// // console.log(smallestSubArraySum([2, -1, 2], 3));

// ///

// // function longestPalindrome(s) {
// //   if (s.length < 2) return s;
// //   function expand(left, right) {
// //     while (left >= 0 && s.length > right && s[left] === s[right]) {
// //       left--;
// //       right++;
// //     }
// //     return right - left - 1;
// //   }
// //   let start = 0,
// //     end = 0;
// //   for (let i = 0; i < s.length; i++) {
// //     len1 = expand(i, i);
// //     len2 = expand(i, i + 1);
// //     len = Math.max(len1, len2);
// //     if (len > end - start) {
// //       start = i - Math.floor((len - 1) / 2);
// //       end = i + Math.floor(len / 2);
// //     }
// //     console.log(i);
// //   }
// //   console.log(start, end);

// //   return s.slice(start, end + 1);
// // }

// //console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// // function threeSum(arr) {
// //   arr.sort((a, b) => a - b);
// //   let result = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (i > 0 && arr[i] === arr[i - 1]) continue;
// //     let left = i + 1;
// //     let right = arr.length - 1;
// //     while (left < right) {
// //       let sum = arr[i] + arr[left] + arr[right];
// //       if (sum === 0) {
// //         result.push([arr[i], arr[left], arr[right]]);
// //         while (arr[left] === arr[left + 1]) left++;
// //         while (arr[right] === arr[right - 1]) right--;
// //         left++;
// //         right--;
// //       } else if (sum > 0) {
// //         right--;
// //       } else {
// //         left++;
// //       }
// //     }
// //   }
// //   return result;
// // }
// // console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// // function threeSumClosest(arr, target) {
// //   arr.sort((a, b) => a - b);

// //   let closestSum = arr[0] + arr[1] + arr[2];
// //   for (let i = 0; i < arr.length - 2; i++) {
// //     let left = i + 1;
// //     let right = arr.length - 1;

// //     while (left < right) {
// //       let sum = arr[i] + arr[left] + arr[right];
// //       if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
// //         closestSum = sum;
// //       }
// //       if (sum === target) {
// //         return sum;
// //       } else if (sum > target) {
// //         right--;
// //       } else {
// //         left++;
// //       }
// //     }
// //   }
// //   return closestSum;
// // }
// //console.log(threeSumClosest([-1, 0, 1, 2, -1, -4], 1));

// // function fourSum(arr, target) {
// //   arr.sort((a, b) => a - b);
// //   let result = [];
// //   for (let i = 0; i < arr.length - 3; i++) {
// //     if (i > 0 && arr[i] === arr[i - 1]) continue;
// //     for (let j = i + 1; j < arr.length - 2; j++) {
// //       if (j > i + 1 && arr[j] === arr[j - 1]) continue;
// //       let left = j + 1;
// //       let right = arr.length - 1;
// //       while (left < right) {
// //         let sum = arr[i] + arr[j] + arr[left] + arr[right];

// //         if (sum === target) {
// //           result.push(arr[i], arr[j], arr[left], arr[right]);
// //           while (left < right && arr[left] === arr[left + 1]) left++;
// //           while (left < right && arr[right] === arr[right - 1]) right--;
// //           left++;
// //           right--;
// //         } else if (sum > target) {
// //           right--;
// //         } else {
// //           left++;
// //         }
// //       }
// //     }
// //   }
// //   return result;
// // }

// // console.log(fourSum([2, 2, 2, 2, 2], 8));

// // function removeDuplicates(nums) {
// //   if (nums.length === 0) return 0;
// //   let left = 0;
// //   for (let right = 1; right < nums.length; right++) {
// //     if (nums[right] !== nums[left]) {
// //       left++;
// //       nums[left] = nums[right];
// //     }
// //   }
// //   return nums.slice(0, left + 1);
// // }
// // console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// // function removeElement(nums, val) {
// //   if (nums.length === 0) return 0;
// //   let left = 0;
// //   for (let right = 0; right < nums.length; right++) {
// //     if (nums[right] !== val) {
// //       nums[left] = nums[right];
// //       left++;
// //     }
// //   }
// //   return nums.slice(0, left);
// // }
// // console.log(removeElement([3, 2, 2, 5, 6, 3], 3));

// // function strStr(haystack, needle) {
// //   if (haystack === needle || needle === "") return 0;
// //   for (let i = 0; i <= haystack.length - needle.length; i++) {
// //     if (haystack[i] === needle[0]) {
// //       let substr = haystack.slice(i, i + needle.length);
// //       if (strStr === needle) {
// //         return i;
// //       }
// //     }
// //   }
// // }
// // strStr("sadbutsad", "sad");

// ///sadasdasdasdasdasdasdsdsdsadsddd

// // function nextPermutation(nums) {
// //   let i = nums.length - 2;
// //   while (i >= 0 && nums[i] >= nums[i + 1]) {
// //     i--;
// //   }
// //   if (i >= 0) {
// //     let j = nums.length - 1;
// //     while (nums[j] <= nums[i]) {
// //       j--;
// //     }

// //     [nums[i], nums[j]] = [nums[j], nums[i]];
// //   }
// //   let left = i + 1;
// //   let right = nums.length - 1;
// //   while (left < right) {
// //     [nums[left], nums[right]] = [nums[right], nums[left]];
// //     left++;
// //     right--;
// //   }
// //   return nums;
// // }
// // console.log(nextPermutation([1, 2, 3]));
// // console.log(nextPermutation([3, 2, 1]));

// //

// // function trap(height) {
// //   let left = 0;
// //   let right = height.length - 1;
// //   let leftmax = 0;
// //   let rightmax = 0;
// //   let water = 0;
// //   while (left < right) {
// //     if (height[left] < height[right]) {
// //       height[left] >= leftmax
// //         ? (leftmax = height[left])
// //         : (water += leftmax - height[left]);
// //       left++;
// //     } else {
// //       height[right] >= rightmax
// //         ? (rightmax = height[right])
// //         : (water += rightmax - height[right]);
// //       right--;
// //     }
// //   }

// //   return water;
// // }
// // console.log(trap([4, 2, 0, 3, 2, 5]));

// ///

// // function invisibelSegment(nums) {
// //   function isInvisible(l, r) {
// //     let maxval = -Infinity;
// //     let minVal = Infinity;
// //     for (let i = l; i <= r; i++) {
// //       maxval = Math.max(maxval, nums[i]);
// //       minVal = Math.min(minVal, nums[i]);
// //     }
// //     return maxval - minVal <= r - l;
// //   }
// //
// //   let left = 0;
// //   let outsideSum = 0;
// //   let maxsum = 0;
// //   for (let right = 1; right < nums.length; right++) {
// //     if (isInvisible(left, right)) {
// //       for (let i = 0; i < left; i++) outsideSum += nums[i];
// //       for (let i = right + 1; i < nums.length; i++) outsideSum += nums[i];

// //       console.log(
// //         `Remove segment [${left},${right}] = ${nums.slice(left, right + 1)}, sum after removal = ${outsideSum}`,
// //       );
// //       if (maxsum <= outsideSum) {
// //         maxsum = outsideSum;
// //       }
// //     }
// //     left++;
// //   }
// //   return maxsum;
// // }
// // console.log(invisibelSegment([3, 1, 2, 4, 6, 3, -2]));

// // function maxNumber(num) {
// //   let counter = 0;
// //   let sum = 0;
// //   for (let i = 0; i < num.length; i++) {
// //     if (num[i] === "1") {
// //       counter++;
// //     } else {
// //       counter--;
// //     }
// //     if (counter < 0) {
// //       counter = counter + 2;
// //     }
// //     sum += counter;
// //   }
// //   return sum;
// // }
// // console.log(maxNumber("01010"));
// // function maxValidPrefixes(s) {
// //   function validCount(s) {
// //     let count = 0;
// //     let counter = 0;
// //     for (let ch of s) {
// //       if (ch === "1") {
// //         counter++;
// //       } else {
// //         counter--;
// //       }
// //       count++;
// //       if (counter < 0) break;
// //     }
// //     return count;
// //   }
// //   let max = validCount(s);

// //   for (let i = 0; i < s.length; i++) {
// //     let flip = s.slice(0, i) + (s[i] === "0" ? "1" : "0") + s.slice(i + 1);
// //     max = Math.max(max, validCount(flip));
// //   }
// //   return max;
// // }

// // console.log(maxValidPrefixes("01010")); // 5

// // console.log(maxValidPrefixes("01010111"));

// // function iscountEvent(num) {
// //   let sum = 0;

// //   for (let i = 0; i < num.length; i++) {
// //     for (let j = 0; j < num[i].length; j++) {
// //       sum += num[i][j];
// //     }
// //   }
// //   return sum % 2 === 0 ? "YES" : "NO";
// // }

// // console.log(
// //   iscountEvent([
// //     [1, 1],
// //     [1, 0],
// //   ]),
// // );

// // function maxStableBuildings(H) {
// //   n = H.length;

// //   if (n <= 2) return n;
// //   let ans = 2;
// //   for (let i = 0; i < n; i++) {
// //     let seq = [H[i]];
// //     for (let j = i + 1; j < n; j++) {
// //       let m = seq.length;
// //       if (m === 1) {
// //         seq.push(H[j]);
// //       } else {
// //         let a = seq[m - 2];
// //         let b = seq[m - 1];
// //         let c = H[j];
// //         if (Math.abs(b - a) <= 1 || Math.abs(b - c) <= 1) {
// //           seq.push(H[j]);
// //         }
// //       }
// //     }
// //     ans = Math.max(ans, seq.length);
// //   }
// //   return ans;
// // }

// // // example
// // console.log(maxStableBuildings([5, 3, 6, 2, 5, 4]));

// // function sortColors(nums) {
// //   return nums.sort((a, b) => a - b);
// // }

// // console.log(sortColors([0, 2, 1, 0, 2, 1]));

// // function findSubstring(s, word) {
// //   let result = "".concat(...word);
// //   console.log(result);
// // }
// // findSubstring("barfoothefoobarman", ["foo", "bar"]);

// // function longestvalidParentheses(s) {
// //   let maxlen = 0;
// //   let left = 0;
// //   let right = s.length;
// //   while (left < right) {
// //     if (s[left] === "(" && s[left + 1] === ")") {
// //       maxlen += 2;
// //       left = left + 2;
// //     } else {
// //       left++;
// //     }
// //   }
// //   return maxlen;
// // }

// // function longestvalidParentheses(s) {
// //   let stack = [-1]; // base index
// //   let maxlen = 0;

// //   for (let i = 0; i < s.length; i++) {
// //     if (s[i] === "(") {
// //       stack.push(i);
// //     } else {
// //       stack.pop();
// //       if (stack.length === 0) {
// //         stack.push(i);
// //       } else {
// //         maxlen = Math.max(maxlen, i - [stack.length - 1]);
// //       }
// //     }
// //   }

// //   return maxlen;
// // }

// // console.log(longestvalidParentheses("(()"));
// // console.log(longestvalidParentheses(")()())"));
// // console.log(longestvalidParentheses(""));

// // //dfdfdfdfdfddfdsffdfdf

// // function search(nums, target) {
// //   let left = 0;
// //   let right = nums.length - 1;
// //   while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
// //     if (nums[mid] === target) return mid;
// //     if (nums[left] <= nums[mid]) {
// //       if (nums[left] <= target && target < nums[mid]) {
// //         right = mid - 1;
// //       } else {
// //         left = mid + 1;
// //       }
// //     } else {
// //       if (nums[mid] < target && target <= nums[right]) {
// //         left = mid + 1;
// //       } else {
// //         right = mid - 1;
// //       }
// //     }
// //   }
// //   return -1;
// // }

// // console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// // function searchRange(nums, target) {
// //   const result = [-1, -1];

// //   let left = 0;
// //   right = nums.length - 1;
// //   while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
// //     if (nums[mid] < target) {
// //       left = mid + 1;
// //     } else {
// //       if (nums[mid] === target) result[0] = mid;
// //       right = mid - 1;
// //     }
// //   }
// //   left = 0;
// //   right = nums.length - 1;
// //   while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
// //     if (nums[mid] > target) {
// //       right = mid - 1;
// //     } else {
// //       if (nums[mid] === target) result[1] = mid;
// //       left = mid + 1;
// //     }
// //   }
// //   return result;
// // }
// // console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// // function lengthOfLongestSubstring(s) {
// //   let map = new Map();
// //   let left = 0;
// //   let maxlen = 0;
// //   for (let right = 0; right < s.length; right++) {
// //     while (map.has(s[right])) {
// //       map.delete(s[left]);
// //       left++;
// //     }
// //     map.set(s[right]);
// //     maxlen = Math.max(maxlen, right - left + 1);
// //   }
// //   return maxlen;
// // }
// // console.log(lengthOfLongestSubstring("abcabcbb"));

// ///hkhkhkjhjkhjkhjkhjkhjk

// // function minWindow(s, t) {
// //   let need = new Map();
// //   for (let ch of t) {
// //     need.set(ch, (need.get(ch) || 0) + 1);
// //   }
// //   let left = 0;
// //   let start = 0;
// //   let maxLen = Infinity;
// //   let count = t.length;
// //   for (let right = 0; right < s.length; right++) {
// //     if (need.has(s[right])) {
// //       if (need.get(s[right]) > 0) count--;
// //       need.set(s[right], need.get(s[right]) - 1);
// //     }
// //     while (count === 0) {
// //       if (right - left + 1 < maxLen) {
// //         maxLen = right - left + 1;
// //         start = left;
// //       }
// //       if (need.has(s[left])) {
// //         need.set(s[left], need.get(s[left]) + 1);
// //         if (need.get(s[left]) > 0) count++;
// //       }
// //       left++;
// //     }
// //   }
// //   return maxLen === Infinity ? "" : s.slice(start, start + maxLen);
// // }

// //sfsdfdsfds
// // console.log(minWindow("ADOBECODEBANC", "ABC"));

// // function findRepeatedDnaSequences(s) {
// //   let seen = new Map();
// //   let repeated = new Map();
// //   for (let i = 0; i <= s.length - 10; i++) {
// //     let sub = s.slice(i, i + 10);
// //     if (seen.has(sub)) {
// //       repeated.set(sub, true);
// //     } else {
// //       seen.set(sub, true);
// //     }
// //   }
// //   return [...repeated.keys()];
// // }

// // function findRepeatedDnaSequences(s) {
// //   let seen = new Set();
// //   let repeated = new Set();
// //   for (let i = 0; i <= s.length - 10; i++) {
// //     let sub = s.slice(i, i + 10);
// //     if (seen.has(sub)) {
// //       repeated.add(sub);
// //     } else {
// //       seen.add(sub);
// //     }
// //   }
// //   return [...repeated];
// // }
// // console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));

// // function minSubArrayLen(target, nums) {
// //   let left = 0;
// //   let minLen = Infinity;
// //   let sum = 0;
// //   for (let right = 0; right < nums.length; right++) {
// //     sum += nums[right];

// //     while (sum > target) {
// //       sum -= nums[left];
// //       left++;
// //     }
// //     if (sum === target) {
// //       minLen = Math.min(minLen, right - left + 1);
// //     }
// //   }
// //   return minLen === Infinity ? 0 : minLen;
// // }

// // console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// // function containsNearbyDuplicate(nums, k) {
// //   const map = new Map();
// //   for (let i = 0; i < nums.length; i++) {
// //     if (map.has(nums[i])) {
// //       if (i - map.get(nums[i]) <= k) {
// //         return true;
// //       }
// //     }
// //     map.set(nums[i], i);
// //   }
// // }
// // function maxSlidingWindow(num, k) {
// //   let result = [];
// //   for (let i = 0; i < num.length - k; i++) {
// //     let max = -Infinity;
// //     for (let j = 0; j < i + k; j++) {
// //       max = Math.max(max, num[j]);
// //     }
// //     result.push(max);
// //   }
// //   return result;
// // }

// // function maxSlidingWindow(nums, k) {
// //   const deque = [];
// //   const res = [];
// //   for (let i = 0; i < nums.length; i++) {
// //     if (deque.length && deque[0] <= i - k) {
// //       deque.shift();
// //     }
// //     while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
// //       deque.pop();
// //     }
// //     deque.push(i);
// //     if (i >= k - 1) {
// //       res.push(nums[deque[0]]);
// //     }
// //   }
// //   return res;
// // }
// // console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// // function longestSubstring(s, k) {
// //   let freq = {};

// //   if (s.length < k) return 0;
// //   for (let char of s) {
// //     freq[char] = (freq[char] || 0) + 1;
// //   }

// //   for (let char in freq) {
// //     if (freq[char] < k) {
// //       let maxlen = 0;
// //       for (let part of s.split(char)) {
// //         maxlen = Math.max(maxlen, longestSubstring(part, k));
// //       }
// //       return maxlen;
// //     }
// //   }
// //   return s.length;
// // }
// // console.log(longestSubstring("aaabb", 3));

// // function numberOfArithmeticSlices(nums) {
// //   let left = 0;
// //   let total = 0;
// //   let count = 0;
// //   for (let right = 2; right < nums.length; right++) {
// //     if (nums[right] - nums[right - 1] === nums[right - 1] - nums[right - 2]) {
// //       count++;
// //       total += count;
// //     } else {
// //       count = 0;
// //     }
// //   }
// //   return total;
// // }
// // console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
// // console.log(numberOfArithmeticSlices([1]));

// // function characterReplacement(s, k) {
// //   let freq = {};
// //   let left = 0;
// //   let maxfreq = 0;
// //   let mainWindow = 0;
// //   for (let char of s) {
// //     freq[s[right]] = (freq[s[right]] || 0) + 1;
// //     maxfreq = Math.max(maxfreq, freq[s[right]]);
// //     let windowSize = right - left + 1;
// //     if (windowSize - maxfreq > k) {
// //       freq[s[left]]--;

// //       left++;
// //     }
// //     windowSize = right - left + 1;
// //     mainWindow = Math.max(windowSize, mainWindow);
// //   }
// //   return mainWindow;
// // }
// // console.log(characterReplacement("AABABBA", 1));

// // ///

// // function totalFruits(fruits) {
// //   let left = 0;
// //   let map = new Map();
// //   let max = 0;
// //   for (let right = 0; right < fruits.length; right++) {
// //     map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
// //     while (map.size > 2) {
// //       map.set(fruits[left], map.get(fruits[left]) - 1);
// //       if (map.get(fruits[left]) == 0) {
// //         map.delete(fruits[left]);
// //       }
// //       left++;
// //     }
// //     max = Math.max(max, right - left + 1);
// //   }
// //   return max;
// // }
// // console.log(totalFruits([1, 2, 1]));

// // function characterReplacement(s, k) {
// //   let left = 0;
// //   let map = new Map();
// //   let maxFre = 0;
// //   let maxWindowSize = 0;

// //   for (let right = 0; right < s.length; right++) {
// //     map.set(s[right], (map.get(s[right]) || 0) + 1);
// //     maxFre = Math.max(maxFre, map.get(s[right]));
// //     let windowSize = right - left + 1;
// //     if (windowSize - maxFre > k) {
// //       map.set(s[left], map.get(s[left]) - 1);
// //       left++;
// //     }
// //     windowSize = right - left + 1;
// //     maxWindowSize = Math.max(maxWindowSize, windowSize);
// //   }
// //   return maxWindowSize;
// // }
// // console.log(characterReplacement("AABABBA", 1));

// // function longestOnes(s, k) {
// //   let zeroCount = 0;
// //   let max = 0;
// //   let left = 0;
// //   for (let right = 0; right < s.length; right++) {
// //     if (s[right] === 0) zeroCount++;
// //     while (zeroCount > k) {
// //       if (s[left] === 0) zeroCount--;
// //       left++;
// //     }
// //     max = Math.max(max, right - left + 1);
// //   }
// //   return max;
// // }
// // console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// ///

// // function longestSubarray(nums) {
// //   let left = 0;
// //   let zeroCount = 0;
// //   let max = 0;
// //   for (let right = 0; right < nums.length; right++) {
// //     if (nums[right] === 0) zeroCount++;
// //     while (zeroCount > 1) {
// //       if (nums[left] === 0) zeroCount--;
// //       left++;
// //     }
// //     max = Math.max(max, right - left + 1);
// //   }
// //   return max - 1;
// // }
// // console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
// // console.log(longestSubarray([1, 1, 0, 1]));

// // function shorestSubarray(arr, k) {
// //   let n = arr.length;
// //   let prefix = new Array(n + 1).fill(0);

// //   for (let i = 0; i < n; i++) {
// //     prefix[i + 1] = prefix[i] + arr[i];
// //   }

// //   let deque = [];
// //   let minlen = Infinity;

// //   for (let i = 0; i <= n; i++) {
// //     while (deque.length && prefix[i] - prefix[deque[0]] >= k) {
// //       minlen = Math.min(minlen, i - deque[0]);
// //       deque.shift();
// //     }
// //     while (deque.length && prefix[i] <= prefix[deque[deque.length - 1]]) {
// //       deque.pop();
// //     }
// //     deque.push(i);
// //   }
// //   return minlen === Infinity ? -1 : minlen;
// // }

// // console.log(shorestSubarray([2, -1, 2], 3));

// // function longestSubarray(nums, limit) {
// //   let maxDeque = [];
// //   let minDeque = [];
// //   let left = 0;
// //   let ans = 0;

// //   for (let right = 0; right < nums.length; right++) {
// //     while (maxDeque.length && maxDeque[maxDeque.length - 1] < nums[right]) {
// //       /// remove Smaller element from back
// //       maxDeque.pop();
// //     }
// //     maxDeque.push(nums[right]);

// //     while (minDeque.length && minDeque[minDeque.length - 1] > nums[right]) {
// //       ///reomver greater element from front
// //       minDeque.pop();
// //     }
// //     minDeque.push(nums[right]);
// //     while (maxDeque[0] - minDeque[0] > limit) {
// //       if (nums[left] === maxDeque[0]) maxDeque.shift();
// //       if (nums[left] === minDeque[0]) minDeque.shift();
// //       left++;
// //     }
// //     ans = Math.max(ans, right - left + 1);
// //   }
// //   return ans;
// // }

// // console.log(longestSubarray([8, 2, 4, 7], 4));

// // function maxResult(nums, k) {
// //   let n = nums.length;
// //   let dp = new Array(n);
// //   let deque = [0];
// //   dp[0] = nums[0];
// //   for (let i = 1; i < n; i++) {
// //     while (deque.length && deque[0] < i - k) {
// //       deque.shift();
// //     }
// //     dp[i] = nums[i] + dp[deque[0]];
// //     while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
// //       deque.pop();
// //     }
// //     deque.push(i);
// //   }
// //   return dp[n - 1];
// // }
// // console.log(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2));
// // console.log(maxResult([1, -1, -2, 4, -7, 3], 2));

// // function constrainedSubsetSum(nums, k) {
// //   let n = nums.length;
// //   let dp = new Array(n);
// //   let deque = [0];
// //   dp[0] = nums[0];
// //   let answer = dp[0];
// //   for (let i = 1; i < n; i++) {
// //     while (deque.length && deque[0] < i - k) {
// //       deque.shift();
// //     }
// //     dp[i] = nums[i] + Math.max(0, dp[deque[0]]);
// //     while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
// //       deque.pop();
// //     }
// //     deque.push(i);
// //     answer = Math.max(answer, dp[i]);
// //   }
// //   return answer;
// // }
// // console.log(constrainedSubsetSum([10, 2, -10, 5, 20], 2));
// // console.log(constrainedSubsetSum([10, -2, -10, -5, 20], 2));
// // console.log(constrainedSubsetSum([-1, -2, 103], 1));

// // function subarraySum(nums, k) {
// //   let sum = 0;
// //   let count = 0;
// //   const map = new Map();
// //   map.set(0, 1);
// //   for (let num of nums) {
// //     sum += num;
// //     if (map.has(sum - k)) {
// //       count += map.get(sum - k);
// //     }
// //     map.set(sum, (map.get(sum) || 0) + 1);
// //   }
// //   return count;
// // }

// // console.log(subarraySum([1, 2, 3], 3));

// // function subarrayDivByK(nums, k) {
// //   let count = 0;
// //   let sum = 0;
// //   let map = new Map();
// //   map.set(0, 1);
// //   for (let num of nums) {
// //     sum += num;
// //     let rem = sum % k;
// //     if (rem < 0) rem += k;
// //     if (map.has(rem)) {
// //       count += map.get(rem);
// //     }
// //     map.set(rem, (map.get(rem) || 0) + 1);
// //   }
// //   return count;
// // }
// // console.log(subarrayDivByK([4, 5, 0, -2, -3, 1], 5));

// // function findMaxLength(nums) {
// //   let map = new Map();
// //   let sum = 0;
// //   let maxlen = 0;
// //   map.set(0, -1);
// //   for (let i = 0; i < nums.length; i++) {
// //     sum += nums[i] === 0 ? -1 : 1;
// //     if (map.has(sum)) {
// //       maxlen = Math.max(maxlen, i - map.get(sum));
// //     } else {
// //       map.set(sum, i);
// //     }
// //   }
// //   return max;
// // }

// // console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]));

// // function rotate(num, k) {
// //   const n = num.length;
// //   k = k % n;
// //   const rotated = new Array(n);
// //   for (let i = 0; i < k; i++) {
// //     rotated[i] = num[n - k + i];
// //   }
// //   for (let i = 0; i < n - k; i++) {
// //     rotated[k + i] = num[i];
// //   }
// //   return rotated;
// // }

// // console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// // function anagram(s, t) {
// //   let need = new Map();
// //   const result = [];
// //   let left = 0;
// //   for (let ch of t) {
// //     need.set(ch, (need.get(ch) || 0) + 1);
// //   }
// //   let count = t.length;
// //   for (let right = 0; right < s.length; right++) {
// //     if (need.has(s[right])) {
// //       if (need.get(s[right]) > 0) count--;
// //       need.set(s[right], need.get(s[right]) - 1);
// //     }
// //     if (right - left + 1 === t.length) {
// //       if (count === 0) result.push(left);

// //       if (need.has(s[left])) {
// //         need.set(s[left], need.get(s[left]) + 1);
// //         if (need.get(s[left]) > 0) count++;
// //       }
// //       left++;
// //     }
// //   }
// //   return result;
// // }

// // console.log(anagram("cbaebabacd", "abc"));

// // function checkInclusion(s1, s2) {
// //   let left = 0;
// //   let need = new Map();
// //   for (let ch of s1) {
// //     need.set(ch, (need.get(ch) || 0) + 1);
// //   }
// //   let count = s1.length;
// //   for (let right = 0; right < s2.length; right++) {
// //     if (need.has(s2[right])) {
// //       if (need.get(s2[right]) > 0) count--;
// //       need.set(s2[right], need.get(s2[right]) - 1);
// //     }
// //     if (right - left + 1 === s1.length) {
// //       if (count === 0) return true;
// //       if (need.has(s2[left])) {
// //         need.set(s2[left], need.get(s2[left]) + 1);
// //         if (need.get(s2[left]) > 0) count++;
// //       }
// //       left++;
// //     }
// //   }
// //   return false;
// // }

// // console.log(checkInclusion("ab", "eidbaooo"));

// // function longestMountain(arr) {
// //   let n = arr.length;
// //   let ans = 0;
// //   let i = 1;
// //   while (i < n - 1) {
// //     if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
// //       let left = i;
// //       let right = i;
// //       while (left > 0 && arr[left - 1] < arr[left]) {
// //         left--;
// //       }
// //       while (right < n - 1 && arr[right] > arr[right + 1]) {
// //         right++;
// //       }
// //       ans = Math.max(ans, right - left + 1);
// //       i = right;
// //     } else {
// //       i++;
// //     }
// //   }
// //   return ans;
// // }

// // console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));

// // function validMountainArray(arr) {
// //   const n = arr.length;
// //   if (n < 3) return false;
// //   let i = 0;
// //   while (i + 1 < n && arr[i] < arr[i + 1]) {
// //     i++;
// //   }
// //   if (i == 0 || i === n - 1) return false;
// //   while (i + 1 < n && arr[i] > arr[i + 1]) {
// //     i++;
// //   }
// //   return i === n - 1;
// // }

// // console.log(validMountainArray([2, 1])); // false
// // console.log(validMountainArray([3, 5, 5])); // false
// // console.log(validMountainArray([0, 3, 2, 1]));
// // console.log(validMountainArray([1, 2, 3, 4, 0, 3, 4]));

// // ///

// // function maxProfit(prices) {
// //   let min = Infinity;
// //   let max = 0;
// //   for (let price of prices) {
// //     min = Math.min(min, price);
// //     let profit = price - min;
// //     max = Math.max(max, profit);
// //   }
// //   return max;
// // }

// // function sortedSquares(nums) {
// //   let n = nums.length;
// //   let newArray = new Array();
// //   let pos = n - 1;

// //   let left = 0;
// //   let right = n - 1;
// //   while (left <= right) {
// //     let sqleft = nums[left] * nums[left];
// //     let sqright = nums[right] * nums[right];
// //     if (sqleft < sqright) {
// //       newArray[pos] = sqright;
// //       right--;
// //     } else {
// //       newArray[pos] = sqleft;
// //       left++;
// //     }
// //     pos--;
// //   }
// //   return newArray;
// // }
// // console.log(sortedSquares([-4, -1, 0, 3, 10]));

// ///

// // function increasingTriplet(nums) {
// //   let first = Infinity;
// //   let second = Infinity;
// //   for (let num of nums) {
// //     if (num <= first) {
// //       first = num;
// //     } else if (num <= second) {
// //       second = num;
// //     } else {
// //       true;
// //     }
// //   }
// //   return false;
// // }                                 
// // function findUnsortedSubarray(nums) {
// //   let n = nums.length;

// //   let left = -1;
// //   let right = -1;

// //   let maxFar = -Infinity;
// //   let minfar = Infinity;
// //   for (let i = 0; i < n; i++) {
// //     if (nums[i] < maxFar) {
// //       right = i;
// //     } else {
// //       maxFar = nums[i];
// //     }
// //   }
// //   for (let i = n - 1; i >= 0; i--) {
// //     if (nums[i] > minfar) {
// //       left = i;
// //     } else {
// //       minfar = nums[i];
// //     }
// //     if (right === -1) return 0;
// //   }
// //   return right - left + 1;
// // }
// // console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));

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
//       for (let j = right; j >= left; j--) {
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

// function generateMatrix(n) {
//   const matrix = Array.from({ length: n }, () => Array(n).fill(0));

//   let top = 0;
//   let left = 0;
//   let bottom = n - 1;
//   let right = n - 1;

//   let num = 1;
//   while (top <= bottom && left <= right) {
//     for (let j = left; j <= right; j++) {
//       matrix[top][j] = num++;
//     }
//     top++;
//     for (let i = top; i <= bottom; i++) {
//       matrix[i][right] = num++;
//     }
//     right--;
//     if (top <= bottom) {
//       for (let j = right; j >= left; j--) {
//         matrix[bottom][j] = num++;
//       }
//       bottom--;
//     }
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         matrix[i][left] = num++;
//       }
//       left++;
//     }
//   }
//   return matrix;
// }

// const data = { name: "John", age: 30 };
// function fecthData() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {

//       reslove(data);
//     }, 2000);
//   });
// }
// fecthData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err));

// function greet(city) {
//   console.log(this.name + "from" + city);
// }
// let person = {
//   name: "sebin",
// };

// greet.call(person, "dehi");

// greet.apply(person, ["Mumbai"]);
// let fn = greet.bind(person, "chennai");
// fn();

//// 206. Reverse Linked List

// class CreatNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// function arrayToLinkedList(arr) {
//   let dummy = new CreatNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new CreatNode(val);
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
//   let current = head;
//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// }
// let head = arrayToLinkedList([1, 2, 3, 4, 5]);
// console.log("Original", linkedListToArray(head));
// let reverse = reverseList(head);
// console.log(
//   linkedListToArray(reverse)
//     .map((val) => `--> ${val}`)
//     .join(" "),
// );
// ///dfsjjgfgfgfgfdgfgfdgfgfgfgfgfdgfdg

// class CreateNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// function arrayToLinkedList(arr) {
//   let dummy = new CreatNode(0);
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new CreatNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }
// function linkedListToArray(head) {
//   let res = [];
//   while (head) {
//     res.push(head.val);
//     head = head.next;
//   }
//   return arr;
// }

// function hasCycle(head) {
//   while (fast && fast.next) {
//     let slow = head;
//     let fast = head;
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) return true;
//   }
//   return false;
// }

////-------------142. Linked List Cycle II----------------

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
//   let res = [];
//   while (head) {
//     res.push(head.val);
//     head = head.next;
//   }
//   return res;
// }

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

// console.log(linkedListToArray(removeNthFromEnd(head, 2)));

//sdfsdfsdfdsfsdfsdfsdf

//////--------------------  21. Merge Two Sorted Lists

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
//   let res = [];
//   while (head) {
//     res.push(head.val);
//     head = head.next;
//   }
//   return res;
// }
// function mergeTwoLists(list1, list2) {
//   let dummy = new CreateNode(0);
//   let tail = dummy;
//   while (list1 && list2) {
//     if (list1.val <= list2.val) {
//       tail.next = list1;
//       list1 = list1.next;
//     } else {
//       tail.next = list2;
//       list2 = list2.next;
//     }
//     tail = tail.next;
//   }
//   tail.next = list1 || list2;
// }

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
//   let res = [];
//   while (head) {
//     res.push(head.val);
//     head = head.next;
//   }
//   return res;
// }
// function reorderList(head) {
//   if (!head || !head.next) return;
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   let prev = null;
//   let curr = slow.next;
//   slow.next = null;
//   while (curr) {
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
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
//   return head;
// }
// let head = arrayToLinkedList([1, 2, 3, 4, 5]);
// console.log(linkedListToArray(reorderList(head)));

////--------2. Add Two Numbers-----

class CreateNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToLinkedList(arr) {
  let dummy = new CreateNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new CreateNode(val);
    current = current.next;
  }
  return dummy.next;
}
function linkedListToArray(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

// function addTwoNumbers(l1, l2) {
//   let dummy = new CreateNode(0);
//   let cur = dummy;
//   let carry = 0;
//   while (l1 || l2 || carry) {
//     let sum = carry;
//     if (l1) {
//       sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2) {
//       sum += l2.val;
//       l2 = l2.next;
//     }
//     carry = Math.floor(sum / 10);
//     cur.next = new CreateNode(sum % 10);
//     cur = cur.next;
//   }
//   return dummy.next;
// }

// let head1 = arrayToLinkedList([2, 4, 3]);
// let head2 = arrayToLinkedList([5, 6, 4]);
// let add = addTwoNumbers(head1, head2);
// console.log(linkedListToArray(add));

// function reveresBetween(head, left, right) {
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
// let reverse = reveresBetween(head, 2, 4);
// console.log(linkedListToArray(reverse));

// function reverseKGroup(head, k) {
//   let dummy = new CreateNode(0);
//   dummy.next = head;
//   let groupPrev = dummy;
//   while (true) {
//     let kth = groupPrev;
//     for (let i = 0; i < k && kth; i++) {
//       kth = kth.next;
//     }
//     if (!kth) break;
//     let groupNext = kth.next;

//     let prev = groupNext;
//     let curr = groupPrev.next;
//     while (curr !== groupNext) {
//       let temp = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = temp;
//     }
//     let temp = groupPrev.next;
//     groupPrev.next = kth;
//     groupPrev = temp;
//   }
//   return dummy.next;
// }
// let head = arrayToLinkedList([1, 2, 3, 4, 5]);
// let group = reverseKGroup(head, 2);
// console.log(linkedListToArray(group));

// function getIntersectionNode(headA, headB) {
//   if (!headA || !headA) return null;
//   let pA = headA;
//   let pB = headB;
//   while (pA !== pB) {
//     if (pA === null) {
//       pA = headB;
//     } else {
//       pA = pA.next;
//     }
//     if (pB === null) {
//       pB = headA;
//     } else {
//       pB = pB.next;
//     }
//   }
//   return pA;
// }

// function copyRandomList(head) {
//   if (!head) return null;
//   const map = new Map();
//   let curr = head;
//   while (curr) {
//     map.set(curr, new Node(curr.val));
//     curr = curr.next;
//   }
//   curr = head;
//   while (curr) {
//     let copy = map.get(curr);
//     copy.next = map.get(copy.next) || null;
//     copy.random = map.get(curr.random) || null;
//     curr = curr.next;
//   }
// }

// function mergeKlist(lists) {
//   if (!lists.length) return null;
//   let merge = [];
//   for (let head of lists) {
//     while (head) {
//       merge.push(head.val);
//       head = head.next;
//     }
//   }
//   merge.sort((a, b) => a - b);
//   let dummy = new CreateNode(0);
//   let curr = dummy;
//   for (let val of merge) {
//     curr.next = new CreateNode(val);
//     curr = curr.next;
//   }
//   return dummy.next;
// }

// function isPalindrome(head) {
//   if (!head || !head.next) return true;

//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   let prev = null;
//   while (slow) {
//     let curr = slow.next;
//     slow.next = prev;
//     prev = slow;
//     slow = curr;
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

// class myQueue {
//   constructor() {
//     this.s1 = [];
//     this.s2 = [];
//   }

//   push(x) {
//     this.s1.push(x);
//   }
//   pop() {
//     if (this.s2.length === 0) {
//       while (this.s1.length) {
//         this.s2.push(this.s1.pop());
//       }
//     }
//     return this.s2.pop();
//   }
//   peek() {
//     if (this.s2.length === 0) {
//       while (this.s1.length) {
//         this.s2.push(this.s1.pop());
//       }
//     }
//     return this.s2[this.s2.length - 1];
//   }
//   empty() {
//     return this.s1.length === 0 && this.s2.length === 0;
//   }
// }
// const q = new myQueue();
// q.push(10);
// q.push(20);
// q.push(30);
// console.log(q.pop());

class MyStack {
  constructor() {
    this.q1 = [];
  }

  push(x) {
    this.q1.push(x);
    let size = this.q1.length;
    while (size > 1) {
      this.q1.push(this.q1.shift());
      size--;
    }
  }
  pop() {
    return this.q1.shift();
  }
  top() {
    return this.q1[0];
  }
  empty() {
    return this.q1.length === 0;
  }
}

let stack = new MyStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(50);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// class MinStack {
//   constructor() {
//     this.stack = [];
//     this.MinStack = [];
//   }
//   push(val) {
//     this.stack.push(val);
//     if (this.MinStack.length === 0) {
//       this.MinStack.push(val);
//     } else {
//       let currentMin = Math.min(val, this.MinStack[this.MinStack.length - 1]);
//       this.MinStack.push(currentMin);
//     }
//   }

//   pop() {
//     this.stack.pop();
//     this.MinStack.pop();
//   }
//   top() {
//     return this.stack[this.stack.length - 1];
//   }
//   getMin() {
//     return this.MinStack[this.MinStack.length - 1];
//   }
// }
// let stack = new MinStack();
// stack.push(10);
// stack.push(20);
// stack.push(1);
// console.log(stack.getMin());

// class MyCircularQueue {
//   constructor(k) {
//     this.q = new Array(k);
//     this.capacity = k;
//     this.front = 0;
//     this.rear = -1;
//     this.size = 0;
//   }
//   enQueue(vlaue) {
//     if (this.isFull()) return false;
//     this.rear = (this.rear + 1) % this.capacity;
//     this.q[this.rear] = vlaue;
//     this.size++;
//     return true;
//   }
//   deQueue() {
//     if (this.isEmpty()) return false;

//     let removed = this.q[this.front];
//     this.front = (this.front + 1) % this.capacity;
//     this.size--;

//     return removed;
//   }
//   Front() {
//     if (this.isEmpty()) return -1;
//     return this.q[this.front];
//   }

//   Rear() {
//     if (this.isEmpty()) return -1;
//     return this.q[this.rear];
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   isFull() {
//     return this.size === this.capacity;
//   }
// }

// let q = new MyCircularQueue(3);
// q.enQueue(10);
// q.enQueue(30);
// q.enQueue(20);
// console.log(q.deQueue());
// console.log(q.Front());
