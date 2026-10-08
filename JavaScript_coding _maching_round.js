// JavaScript Coding — Code Snippets

// 1. EVEN OR ODD

function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(10));

// 2. LARGEST OF THREE NUMBERS

function largest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largest(10, 25, 15));

// 3. REVERSE A NUMBER

function reverseNumber(num) {
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reverse;
}
console.log(reverseNumber(1234));

// 4. PALINDROME NUMBER

function isPalindrome(num) {
  let original = num;
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reverse;
}
console.log(isPalindrome(121));

// 5. FACTORIAL

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 6. FIBONACCI SERIES

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return result;
}
console.log(fibonacci(7));

// 7. PRIME NUMBER

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

// 8. SUM OF DIGITS

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(1234));

// 9. COUNT DIGITS

function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log(countDigits(12345));

// 10. SWAP TWO NUMBERS

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
console.log(swap(10, 20));

// ─────────────────────────────────────────
// 2 — STRING CODING
// ─────────────────────────────────────────

// 11. REVERSE A STRING

function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString('hello'));

// 12. STRING PALINDROME

function isPalindrome(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return str === reverse;
}
console.log(isPalindrome('madam'));

// 13. COUNT VOWELS

function countVowels(str) {
  let count = 0;
  let vowels = 'aeiou';
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Hello World'));

// 14. FREQUENCY OF EACH CHARACTER

function charFrequency(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(charFrequency('hello'));

// 14.1. Find highest Frequency

function highestFrequency(str) {
  const frequency = {};
  let maxChar = '';
  let maxCount = 0;
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(highestFrequency('javascript'));

// 15. FIRST NON-REPEATING CHARACTER

function firstNonRepeating(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeating('aabbcdd'));

// 16. REMOVE DUPLICATE CHARACTERS

function removeDuplicates(str) {
  let result = '';
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}
console.log(removeDuplicates('programming'));

// 17. LONGEST WORD IN A SENTENCE

function longestWord(sentence) {
  let words = sentence.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord('I love JavaScript programming'));

// 18. COUNT WORDS IN A SENTENCE

function countWords(sentence) {
  let words = sentence.trim().split(/\s+/);
  return sentence.trim() === '' ? 0 : words.length;
}
console.log(countWords('I love JavaScript'));

// 19. CHECK ANAGRAM

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequency = {};
  for (let char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!frequency[char]) {
      return false;
    }
    frequency[char]--;
  }
  return true;
}
console.log(isAnagram('listen', 'silent'));

// 20. CAPITALIZE FIRST LETTER OF EVERY WORD

function capitalizeWords(sentence) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
console.log(capitalizeWords('hello world javascript'));

// ─────────────────────────────────────────
// LEVEL 3 — ARRAY CODING
// ─────────────────────────────────────────

// 21. MAXIMUM NUMBER

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax([10, 5, 25, 8]));

// 22. MINIMUM NUMBER

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log(findMin([10, 5, 25, 8]));

// 23. SUM OF ARRAY

function arraySum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(arraySum([1, 2, 3, 4]));

// 24. AVERAGE OF ARRAY

function arrayAverage(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}
console.log(arrayAverage([10, 20, 30]));

// 25. REVERSE ARRAY

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4]));

// 26. REMOVE DUPLICATES

function removeDuplicates(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// 27. SECOND LARGEST

function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 25, 15]));

// 28. SECOND SMALLEST

function secondSmallest(arr) {
  let smallest = Infinity;
  let second = Infinity;
  for (let num of arr) {
    if (num < smallest) {
      second = smallest;
      smallest = num;
    } else if (num < second && num !== smallest) {
      second = num;
    }
  }
  return second;
}
console.log(secondSmallest([10, 5, 25, 15]));

// 29. FREQUENCY OF ELEMENTS

function frequency(arr) {
  let result = {};
  for (let num of arr) {
    result[num] = (result[num] || 0) + 1;
  }
  return result;
}
console.log(frequency([1, 2, 2, 3, 3, 3]));

// 30. COMMON ELEMENTS

function commonElements(arr1, arr2) {
  let result = [];
  for (let num of arr1) {
    if (arr2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(commonElements([1, 2, 3], [2, 3, 4]));

// 31. DIFFERENCE BETWEEN ARRAYS

function arrayDifference(arr1, arr2) {
  let result = [];
  for (let num of arr1) {
    if (!arr2.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(arrayDifference([1, 2, 3], [2, 4]));

// 32. MERGE TWO ARRAYS

function mergeArrays(arr1, arr2) {
  let result = [];
  for (let num of arr1) result.push(num);
  for (let num of arr2) result.push(num);
  return result;
}
console.log(mergeArrays([1, 2], [3, 4]));

// 33. MISSING NUMBER

function missingNumber(arr) {
  let n = arr.length + 1;
  let expected = (n * (n + 1)) / 2;
  let actual = 0;
  for (let num of arr) {
    actual += num;
  }
  return expected - actual;
}
console.log(missingNumber([1, 2, 3, 5]));

// 34. MOVE ZEROES TO END

function moveZeroes(arr) {
  let result = [];
  let zeroes = 0;
  for (let num of arr) {
    if (num === 0) {
      zeroes++;
    } else {
      result.push(num);
    }
  }
  while (zeroes > 0) {
    result.push(0);
    zeroes--;
  }
  return result;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));

// 35. FIND DUPLICATE ELEMENTS

function findDuplicates(arr) {
  let frequency = {};
  let result = [];
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  for (let num of arr) {
    if (frequency[num] > 1 && !result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(findDuplicates([1, 2, 2, 3, 3, 4]));

// 36. FIRST DUPLICATE ELEMENT

function firstDuplicate(arr) {
  let seen = {};
  for (let num of arr) {
    if (seen[num]) return num;
    seen[num] = true;
  }
  return null;
}
console.log(firstDuplicate([2, 1, 3, 1, 4]));

// 37. PAIR WITH TARGET SUM

function pairSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}
console.log(pairSum([2, 7, 11, 15], 9));

// 38. SORT WITHOUT sort()

function sortArray(arr) {
  let result = [...arr];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}
console.log(sortArray([5, 2, 8, 1]));

// 39. FLATTEN NESTED ARRAY

function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3, 4]]]));

// 40. CHUNK ARRAY

function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));

// ─────────────────────────────────────────
// LEVEL 4 — ARRAY METHODS
// ─────────────────────────────────────────

// 41. DOUBLE EVERY NUMBER — map()

function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleNumbers([1, 2, 3, 4]));

// 42. GET USER NAMES — map()

function getNames(users) {
  return users.map((user) => user.name);
}
console.log(
  getNames([
    { name: 'A', age: 20 },
    { name: 'B', age: 25 },
  ])
);

// 43. GET EVEN NUMBERS — filter()

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 6]));

// 44. SALARY GREATER THAN 50000 — filter()

function highSalaryEmployees(employees) {
  return employees.filter((employee) => employee.salary > 50000);
}
console.log(
  highSalaryEmployees([
    { name: 'A', salary: 40000 },
    { name: 'B', salary: 70000 },
  ])
);

// 45. SUM USING reduce()

function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(arraySum([1, 2, 3, 4]));

// 46. MAXIMUM USING reduce()

function findMax(arr) {
  return arr.reduce((max, num) => {
    return num > max ? num : max;
  }, -Infinity);
}
console.log(findMax([10, 25, 5, 30]));

// 47. FREQUENCY USING reduce()

function frequency(arr) {
  return arr.reduce((result, num) => {
    result[num] = (result[num] || 0) + 1;
    return result;
  }, {});
}
console.log(frequency([1, 2, 2, 3, 3, 3]));

// 48. GROUP BY DEPARTMENT — reduce()

function groupByDepartment(employees) {
  return employees.reduce((result, employee) => {
    let dept = employee.dept;
    if (!result[dept]) {
      result[dept] = [];
    }
    result[dept].push(employee);
    return result;
  }, {});
}

// 49. TOTAL SALARY — reduce()

function totalSalary(employees) {
  return employees.reduce((total, employee) => {
    return total + employee.salary;
  }, 0);
}

// 50. EMPLOYEE ARRAY

let employees = [
  { name: 'A', salary: 40000, dept: 'IT' },
  { name: 'B', salary: 70000, dept: 'HR' },
  { name: 'C', salary: 60000, dept: 'IT' },
];
let highestSalary = employees.reduce((max, employee) => {
  return Math.max(max, employee.salary);
}, -Infinity);
console.log(highestSalary);
let lowestSalary = employees.reduce((min, employee) => {
  return Math.min(min, employee.salary);
}, Infinity);
console.log(lowestSalary);
let itEmployees = employees.filter((employee) => {
  return employee.dept === 'IT';
});
console.log(itEmployees);
let employeeNames = employees.map((employee) => {
  return employee.name;
});
console.log(employeeNames);
let totalSalary = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);
console.log(totalSalary);
let averageSalary =
  employees.reduce((total, employee) => {
    return total + employee.salary;
  }, 0) / employees.length;
console.log(averageSalary);
let groupedEmployees = employees.reduce((result, employee) => {
  let dept = employee.dept;
  if (!result[dept]) {
    result[dept] = [];
  }
  result[dept].push(employee);
  return result;
}, {});
console.log(groupedEmployees);

// ─────────────────────────────────────────
// LEVEL 5 — OBJECT CODING
// ─────────────────────────────────────────

// 51. Find employee with highest salary

const employees = [
  { name: 'A', salary: 40000 },
  { name: 'B', salary: 70000 },
  { name: 'C', salary: 50000 },
];
const highest = employees.reduce((max, emp) =>
  emp.salary > max.salary ? emp : max
);
console.log(highest);

// 52. Find employee with lowest salary

const employees = [
  { name: 'A', salary: 40000 },
  { name: 'B', salary: 70000 },
  { name: 'C', salary: 50000 },
];
const lowest = employees.reduce((min, emp) =>
  emp.salary < min.salary ? emp : min
);
console.log(lowest);

// 53. Count number of properties

const user = { name: 'Nitin', age: 25, city: 'Indore' };
const count = Object.keys(user).length;
console.log(count);

// 54. Convert object into array

const user = { name: 'Nitin', age: 25 };
const result = Object.entries(user);
console.log(result);

// 55. Convert array into object

const arr = [
  ['name', 'Nitin'],
  ['age', 25],
];
const result = Object.fromEntries(arr);
console.log(result);

// 56. Merge two objects

const obj1 = { name: 'Nitin', age: 25 };
const obj2 = { city: 'Indore', role: 'Developer' };
const result = { ...obj1, ...obj2 };
console.log(result);

// 57. Find duplicate objects based on ID

const employees = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'C' },
  { id: 3, name: 'D' },
  { id: 2, name: 'E' },
];
const seen = new Set();
const duplicates = [];
employees.forEach((emp) => {
  if (seen.has(emp.id)) {
    duplicates.push(emp);
  } else {
    seen.add(emp.id);
  }
});
console.log(duplicates);

// 58. Group objects by property

const employees = [
  { name: 'A', department: 'IT' },
  { name: 'B', department: 'HR' },
  { name: 'C', department: 'IT' },
];
const result = employees.reduce((group, emp) => {
  const dept = emp.department;
  if (!group[dept]) {
    group[dept] = [];
  }
  group[dept].push(emp);
  return group;
}, {});
console.log(result);

// 59. Sort objects by salary

const employees = [
  { name: 'A', salary: 50000 },
  { name: 'B', salary: 30000 },
  { name: 'C', salary: 70000 },
];
employees.sort((a, b) => a.salary - b.salary);
console.log(employees);

// 60. Highest-paid employee in each department

const employees = [
  { name: 'A', department: 'IT', salary: 50000 },
  { name: 'B', department: 'HR', salary: 40000 },
  { name: 'C', department: 'IT', salary: 70000 },
  { name: 'D', department: 'HR', salary: 60000 },
];
const result = employees.reduce((group, emp) => {
  const dept = emp.department;
  if (!group[dept] || emp.salary > group[dept].salary) {
    group[dept] = emp;
  }
  return group;
}, {});
console.log(result);

// ─────────────────────────────────────────
// 6 — JAVASCRIPT OUTPUT QUESTIONS
// ─────────────────────────────────────────

// 61. var vs let

console.log(a);
var a = 10;

// 62. let vs const

let a = 10;
a = 20;
const b = 30;
console.log(a);
console.log(b);

// 63. Hoisting

console.log(a);
var a = 10;

// 64. Temporal Dead Zone

console.log(a);
let a = 10;

// 65. == vs ===

console.log(5 == '5');
console.log(5 === '5');

// 66. Type Coercion

console.log('5' + 2);
console.log('5' - 2);

// 67. null vs undefined

let a = null;
let b;
console.log(a);
console.log(b);

// 68. typeof

console.log(typeof 10);
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});

// 69. Truthy and Falsy

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean('Hello'));
console.log(Boolean(10));

// 70. Scope

let a = 10;
function test() {
  let b = 20;
  console.log(a);
  console.log(b);
}
test();

// 71. Closure

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

// 72. this

const user = {
  name: 'Nitin',
  showName: function () {
    console.log(this.name);
  },
};
user.showName();

// 73. Regular Function vs Arrow Function

const user = {
  name: 'Nitin',
  regular: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
user.regular();
user.arrow();

// 74. setTimeout()

console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
console.log('C');

// 75. Promise vs setTimeout()

console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
Promise.resolve().then(() => {
  console.log('C');
});
console.log('D');

// 76. Microtask vs Macrotask

console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');

// 77. Event Loop

console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
Promise.resolve().then(() => {
  console.log('3');
});
console.log('4');

// 78. Callback Execution Order

function first(callback) {
  console.log('First');
  callback();
}
function second() {
  console.log('Second');
}
first(second);
console.log('Third');

// 79. Promise Chaining

Promise.resolve(10)
  .then((value) => {
    console.log(value);
    return value * 2;
  })
  .then((value) => {
    console.log(value);
  });

// 80. async/await Execution Order

console.log('A');
async function test() {
  console.log('B');
  await Promise.resolve();
  console.log('C');
}
test();
console.log('D');

// ─────────────────────────────────────────
// 7 — FUNCTION CODING
// ─────────────────────────────────────────

// 81. Sum Any Number of Arguments

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(10, 20, 30, 40));

// 82. Counter Function

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// 83. Function That Executes Another Function

function execute(fn) {
  fn();
}
function sayHello() {
  console.log('Hello');
}
execute(sayHello);

// 84. Own forEach()

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
const numbers = [10, 20, 30];
myForEach(numbers, (value, index) => {
  console.log(index, value);
});

// 85. Own map()

function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
const numbers = [1, 2, 3];
const result = myMap(numbers, (num) => num * 2);
console.log(result);

// 86. Own filter()

function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];
const result = myFilter(numbers, (num) => num % 2 === 0);
console.log(result);

// 87. Own reduce()

function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
const numbers = [1, 2, 3, 4];
const result = myReduce(numbers, (total, num) => total + num, 0);
console.log(result);

// 88. Function Accepts Callback

function executeCallback(callback) {
  callback();
}
executeCallback(() => {
  console.log('Callback executed');
});

// 89. Function Returns Another Function

function outer() {
  return function inner() {
    console.log('Inner function');
  };
}
const result = outer();
result();

// 90. Private State Using Closure

function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount();
account.deposit(1000);
console.log(account.getBalance());

// ─────────────────────────────────────────
// 8 — INTERMEDIATE JAVASCRIPT CODING
// ─────────────────────────────────────────

// 91. IMPLEMENT debounce()

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

// 92. IMPLEMENT throttle()

function throttle(callback, delay) {
  let waiting = false;
  return function (...args) {
    if (waiting) return;
    callback.apply(this, args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

// 93. IMPLEMENT once()

function once(callback) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = callback.apply(this, args);
      called = true;
    }
    return result;
  };
}

// 94. IMPLEMENT MEMOIZATION

function memoize(callback) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    let result = callback(...args);
    cache[key] = result;
    return result;
  };
}

// 95. IMPLEMENT CURRYING

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}
function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));

// 96. DEEP CLONE OBJECT

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  let result = {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}

// 97. DEEP COMPARE TWO OBJECTS

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

// 98. FLATTEN NESTED OBJECT

function flattenObject(obj, prefix = '', result = {}) {
  for (let key in obj) {
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

// 99. FLATTEN NESTED ARRAY

function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// 100. IMPLEMENT Promise.all()

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// 101. SIMPLE EventEmitter

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  emit(event, data) {
    if (!this.events[event]) return;
    for (let callback of this.events[event]) {
      callback(data);
    }
  }
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }
}

// 102. CUSTOM bind()

Function.prototype.myBind = function (context, ...args) {
  let fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

// 103. CUSTOM call()

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  let key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};

// 104. CUSTOM apply()

Function.prototype.myApply = function (context, args = []) {
  context = context || globalThis;
  let key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};

// ─────────────────────────────────────────
// 9 — ASYNCHRONOUS JAVASCRIPT
// ─────────────────────────────────────────

// 105. CREATE AND RESOLVE PROMISE

const promise = new Promise((resolve) => {
  resolve('Success');
});
promise.then((result) => {
  console.log(result);
});

// 106. CREATE AND REJECT PROMISE

const promise = new Promise((resolve, reject) => {
  reject('Something went wrong');
});
promise.catch((error) => {
  console.log(error);
});

// 107. then() AND catch()

Promise.resolve('Success')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 108. CALLBACK TO PROMISE

function getData(callback) {
  setTimeout(() => {
    callback(null, 'Data received');
  }, 1000);
}
function getDataPromise() {
  return new Promise((resolve, reject) => {
    getData((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// 109. PROMISE TO async/await

async function fetchData() {
  try {
    let result = await getDataPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// 110. EXECUTE MULTIPLE PROMISES IN PARALLEL

async function runTasks() {
  const p1 = Promise.resolve('Task 1');
  const p2 = Promise.resolve('Task 2');
  const p3 = Promise.resolve('Task 3');
  const results = await Promise.all([p1, p2, p3]);
  console.log(results);
}

// 111. Promise.all()

async function runAll() {
  const results = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ]);
  console.log(results);
}

// 112. Promise.allSettled()

async function runAllSettled() {
  const results = await Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Failed'),
    Promise.resolve('Success'),
  ]);
  console.log(results);
}

// 113. Promise.all / allSettled / race / any

Promise.all(promises);
Promise.allSettled(promises);
Promise.race(promises);
Promise.any(promises);

// 114. RETRY FAILED ASYNC OPERATION

async function retry(fn, attempts) {
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === attempts) {
        throw error;
      }
    }
  }
}

// 115. EXECUTE TASKS SEQUENTIALLY

async function runSequential(tasks) {
  let results = [];
  for (let task of tasks) {
    let result = await task();
    results.push(result);
  }
  return results;
}

// 116. LIMIT CONCURRENT OPERATIONS

async function runWithLimit(tasks, limit) {
  let results = [];
  let index = 0;
  async function worker() {
    while (index < tasks.length) {
      let current = index++;
      results[current] = await tasks[current]();
    }
  }
  let workers = [];
  for (let i = 0; i < limit; i++) {
    workers.push(worker());
  }
  await Promise.all(workers);
  return results;
}

// ─────────────────────────────────────────
// 10 — CLOSURES & HIGHER-ORDER FUNCTIONS
// ─────────────────────────────────────────

// 117. PRIVATE COUNTER

function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());

// 118. PRIVATE VARIABLE

function createUser() {
  let password = '12345';
  return {
    getPassword() {
      return password;
    },
  };
}
const user = createUser();
console.log(user.getPassword());

// 119. FUNCTION FACTORY

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5));

// 120. CUSTOM LOGGER

function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}
const logger = createLogger('INFO');
logger('Server started');

// 121. once() USING CLOSURE

function once(callback) {
  let called = false;
  return function (...args) {
    if (called) return;
    called = true;
    return callback(...args);
  };
}

// 122. MEMOIZATION USING CLOSURE

function memoize(fn) {
  let cache = {};
  return function (num) {
    if (num in cache) {
      return cache[num];
    }
    cache[num] = fn(num);
    return cache[num];
  };
}

// 123. REMEMBER PREVIOUS RESULTS

function remember() {
  let previous = null;
  return function (value) {
    let oldValue = previous;
    previous = value;
    return oldValue;
  };
}
const rememberValue = remember();
console.log(rememberValue(10));
console.log(rememberValue(20));

// 124. HIGHER-ORDER FUNCTION

function withLogging(fn) {
  return function (...args) {
    console.log('Function called');
    let result = fn(...args);
    console.log('Function completed');
    return result;
  };
}
const add = withLogging((a, b) => a + b);
console.log(add(2, 3));

// 125. FUNCTION COMPOSITION

function compose(f, g) {
  return function (value) {
    return f(g(value));
  };
}
const double = (num) => num * 2;
const addOne = (num) => num + 1;
const result = compose(double, addOne);
console.log(result(5));

// 126. pipe()

function pipe(...functions) {
  return function (value) {
    return functions.reduce((result, fn) => fn(result), value);
  };
}
const result = pipe(
  (num) => num + 1,
  (num) => num * 2
);
console.log(result(5));

// 127. compose()

function compose(...functions) {
  return function (value) {
    return functions.reduceRight((result, fn) => fn(result), value);
  };
}
const result = compose(
  (num) => num * 2,
  (num) => num + 1
);
console.log(result(5));

// ─────────────────────────────────────────
// 11 — THIS, CALL, APPLY, BIND
// ─────────────────────────────────────────

// 128. PREDICT this

const user = {
  name: 'Nitin',
  greet() {
    console.log(this.name);
  },
};
user.greet();

// 129. CUSTOM call()

function greet(city) {
  console.log(this.name, city);
}
const user = { name: 'Nitin' };
greet.call(user, 'Indore');

// 130. CUSTOM apply()

greet.apply(user, ['Indore']);

// 131. CUSTOM bind()

const newGreet = greet.bind(user);
newGreet('Indore');

// 132. this OUTPUT QUESTION

const user = {
  name: 'Nitin',
  getName() {
    return this.name;
  },
};
console.log(user.getName());

// 133. NORMAL FUNCTION vs ARROW

const user = {
  name: 'Nitin',
  normal: function () {
    return this.name;
  },
  arrow: () => {
    return this.name;
  },
};
console.log(user.normal());
console.log(user.arrow());

// 134. this INSIDE OBJECT METHOD

const user = {
  name: 'Nitin',
  greet() {
    console.log(this.name);
  },
};
user.greet();

// 135. this INSIDE CALLBACK

const user = {
  name: 'Nitin',
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  },
};
user.greet();

// 136. this INSIDE setTimeout()

const user = {
  name: 'Nitin',
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};
user.greet();

// 137. this INSIDE CLASS

class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}
const user = new User('Nitin');
user.greet();

// ─────────────────────────────────────────
// 12 — OBJECT & DATA TRANSFORMATION
// ─────────────────────────────────────────

// 138. ARRAY TO OBJECT BY ID

function indexById(users) {
  return users.reduce((result, user) => {
    result[user.id] = user;
    return result;
  }, {});
}

// 139. GROUP BY MULTIPLE PROPERTIES

function groupByDeptAndRole(users) {
  return users.reduce((result, user) => {
    let dept = user.department;
    let role = user.role;
    if (!result[dept]) {
      result[dept] = {};
    }
    if (!result[dept][role]) {
      result[dept][role] = [];
    }
    result[dept][role].push(user);
    return result;
  }, {});
}

// 140. REMOVE DUPLICATE OBJECTS BY ID

function removeDuplicates(users) {
  let seen = new Set();
  let result = [];
  for (let user of users) {
    if (!seen.has(user.id)) {
      seen.add(user.id);
      result.push(user);
    }
  }
  return result;
}

// 141. UPDATE OBJECT BY ID

function updateUser(users, id, data) {
  return users.map((user) => (user.id === id ? { ...user, ...data } : user));
}

// 142. DELETE OBJECT BY ID

function deleteUser(users, id) {
  return users.filter((user) => user.id !== id);
}

// 143. FIND OBJECT BY ID

function findUser(users, id) {
  return users.find((user) => user.id === id);
}

// 144. FIND ALL MATCHING OBJECTS

function findUsers(users, condition) {
  return users.filter(condition);
}

// 145. SORT BY MULTIPLE FIELDS

function sortUsers(users) {
  return [...users].sort((a, b) => {
    if (a.department !== b.department) {
      return a.department.localeCompare(b.department);
    }
    return a.salary - b.salary;
  });
}

// 146. NESTED API DATA → FLAT

const data = { user: { profile: { name: 'Nitin', city: 'Indore' } } };
function flattenObject(obj, prefix = '', result = {}) {
  for (let key in obj) {
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}
console.log(flattenObject(data));

// 147. FLAT → NESTED DATA

function unflattenObject(obj) {
  let result = {};
  for (let key in obj) {
    let keys = key.split('.');
    let current = result;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = obj[key];
  }
  return result;
}

// 148. API → UI DATA

const apiData = [
  {
    id: 1,
    first_name: 'Nitin',
    last_name: 'Rajput',
    profile: { city: 'Indore' },
  },
];
const uiData = apiData.map((user) => ({
  id: user.id,
  name: `${user.first_name} ${user.last_name}`,
  city: user.profile.city,
}));

// ─────────────────────────────────────────
// 13 — REAL INTERVIEW PRACTICE
// ─────────────────────────────────────────

// 149. SEARCH / FILTER USERS

function searchUsers(users, search) {
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
}

// 150. SORT EMPLOYEES

function sortEmployees(employees) {
  return [...employees].sort((a, b) => b.salary - a.salary);
}

// 151. PAGINATION

function paginate(arr, page, limit) {
  let start = (page - 1) * limit;
  return arr.slice(start, start + limit);
}
console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));

// 152. AUTOCOMPLETE

function autocomplete(users, search) {
  return users.filter((user) =>
    user.name.toLowerCase().startsWith(search.toLowerCase())
  );
}

// 153. SHOPPING CART

function addToCart(cart, product) {
  return [...cart, product];
}
function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

// 154. CART SUBTOTAL

function subtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// 155. CART TOTAL WITH DISCOUNT

function cartTotal(cart, discount) {
  let total = subtotal(cart);
  return total - (total * discount) / 100;
}

// 156. CART TOTAL WITH TAX

function cartTotalWithTax(cart, tax) {
  let total = subtotal(cart);
  return total + (total * tax) / 100;
}

// 157. GROUP CART ITEMS BY CATEGORY

function groupByCategory(cart) {
  return cart.reduce((result, item) => {
    if (!result[item.category]) {
      result[item.category] = [];
    }
    result[item.category].push(item);
    return result;
  }, {});
}

// 158. MOST EXPENSIVE PRODUCT

function mostExpensive(products) {
  return products.reduce((max, product) => {
    return product.price > max.price ? product : max;
  }, products[0]);
}

// 159. MOST FREQUENTLY PURCHASED PRODUCT

function mostFrequent(products) {
  let frequency = {};
  for (let product of products) {
    frequency[product.id] = (frequency[product.id] || 0) + 1;
  }
  let maxId = null;
  let maxCount = 0;
  for (let id in frequency) {
    if (frequency[id] > maxCount) {
      maxCount = frequency[id];
      maxId = id;
    }
  }
  return maxId;
}

// 160. REMOVE DUPLICATE PRODUCTS

function removeDuplicateProducts(products) {
  let seen = new Set();
  return products.filter((product) => {
    if (seen.has(product.id)) {
      return false;
    }
    seen.add(product.id);
    return true;
  });
}

// 161. INVENTORY MANAGEMENT

function addProduct(inventory, product) {
  inventory.push(product);
}
function removeProduct(inventory, id) {
  return inventory.filter((product) => product.id !== id);
}
function findProduct(inventory, id) {
  return inventory.find((product) => product.id === id);
}

// 162. TASK MANAGEMENT SYSTEM

let tasks = [];
function addTask(title) {
  tasks.push({ id: Date.now(), title, completed: false });
}
function completeTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: true } : task
  );
}
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

// 163. EXPENSE TRACKER

let expenses = [];
function addExpense(title, amount, category) {
  expenses.push({ id: Date.now(), title, amount, category });
}
function totalExpenses() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}
function categoryExpenses(category) {
  return expenses
    .filter((expense) => expense.category === category)
    .reduce((total, expense) => total + expense.amount, 0);
}

// ─────────────────────────────────────────
// 14 — JAVASCRIPT IMPLEMENTATION QUESTIONS
// ─────────────────────────────────────────

// 164. IMPLEMENT YOUR OWN map()

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log([1, 2, 3].myMap((num) => num * 2));

// 165. IMPLEMENT YOUR OWN filter()

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log([1, 2, 3, 4].myFilter((num) => num % 2 === 0));

// 166. IMPLEMENT YOUR OWN reduce()

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let start = 0;
  if (accumulator === undefined) {
    accumulator = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
console.log([1, 2, 3, 4].myReduce((sum, num) => sum + num, 0));

// 167. IMPLEMENT YOUR OWN forEach()

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
[1, 2, 3].myForEach((num) => {
  console.log(num);
});

// 168. IMPLEMENT YOUR OWN find()

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
console.log([1, 2, 3, 4].myFind((num) => num > 2));

// 169. IMPLEMENT YOUR OWN findIndex()

Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
console.log([10, 20, 30].myFindIndex((num) => num === 20));

// 170. IMPLEMENT YOUR OWN some()

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
console.log([1, 2, 3].mySome((num) => num > 2));

// 171. IMPLEMENT YOUR OWN every()

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
console.log([2, 4, 6].myEvery((num) => num % 2 === 0));

// 172. IMPLEMENT YOUR OWN includes()

Array.prototype.myIncludes = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};
console.log([1, 2, 3].myIncludes(2));

// 173. IMPLEMENT YOUR OWN flat()

function myFlat(arr, depth = 1) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...myFlat(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(myFlat([1, [2, [3, 4]]], 2));

// 174. IMPLEMENT YOUR OWN flatMap()

function myFlatMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = callback(arr[i], i, arr);
    if (Array.isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }
  return result;
}
console.log(myFlatMap([1, 2, 3], (num) => [num, num * 2]));

// 175. IMPLEMENT YOUR OWN debounce()

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
const search = debounce(() => {
  console.log('API Call');
}, 500);

// 176. IMPLEMENT YOUR OWN throttle()

function throttle(callback, delay) {
  let waiting = false;
  return function (...args) {
    if (waiting) return;
    callback.apply(this, args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

// 177. IMPLEMENT YOUR OWN once()

function once(callback) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = callback.apply(this, args);
      called = true;
    }
    return result;
  };
}
const runOnce = once(() => {
  console.log('Executed');
  return 100;
});
console.log(runOnce());
console.log(runOnce());

// 178. IMPLEMENT YOUR OWN memoize()

function memoize(callback) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    let result = callback(...args);
    cache[key] = result;
    return result;
  };
}
const square = memoize((num) => num * num);
console.log(square(5));
console.log(square(5));

// 179. IMPLEMENT YOUR OWN Promise.all()

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
myPromiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  console.log
);

// 180. IMPLEMENT YOUR OWN EventEmitter

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  emit(event, data) {
    if (!this.events[event]) return;
    for (let callback of this.events[event]) {
      callback(data);
    }
  }
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }
}
const emitter = new EventEmitter();
emitter.on('message', (data) => {
  console.log(data);
});
emitter.emit('message', 'Hello');

// 181. IMPLEMENT YOUR OWN call()

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};
function greet(city) {
  return `${this.name} lives in ${city}`;
}
console.log(greet.myCall({ name: 'Nitin' }, 'Indore'));

// 182. IMPLEMENT YOUR OWN apply()

Function.prototype.myApply = function (context, args = []) {
  context = context || globalThis;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};
console.log(greet.myApply({ name: 'Nitin' }, ['Indore']));

// 183. IMPLEMENT YOUR OWN bind()

Function.prototype.myBind = function (context, ...args) {
  const callback = this;
  return function (...newArgs) {
    return callback.apply(context, [...args, ...newArgs]);
  };
};
const boundGreet = greet.myBind({ name: 'Nitin' }, 'Indore');
console.log(boundGreet());

// ─────────────────────────────────────────
// 15 — FINAL JAVASCRIPT INTERVIEW MIX
// ─────────────────────────────────────────

// 184. MAP()

let result = [1, 2, 3, 4].map((num) => num * 2);
console.log(result);

// 185. FILTER()

let result = [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);
console.log(result);

// 186. REDUCE()

let result = [1, 2, 3, 4].reduce((sum, num) => sum + num, 0);
console.log(result);

// 187. CLOSURE

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

// 188. RECURSION

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 189. PROMISE

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}
getData().then((data) => {
  console.log(data);
});

// 190. ASYNC/AWAIT

async function fetchData() {
  try {
    let result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// 191. EVENT LOOP

console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
Promise.resolve().then(() => {
  console.log('C');
});
console.log('D');

// 192. this

const user = {
  name: 'Nitin',
  greet() {
    console.log(this.name);
  },
};
user.greet();

// 193. call / apply / bind

function greet(city) {
  console.log(this.name, city);
}
const user = { name: 'Nitin' };
greet.call(user, 'Indore');
greet.apply(user, ['Indore']);
const boundGreet = greet.bind(user);
boundGreet('Indore');

// 194. DEBOUNCE

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
const search = debounce(() => {
  console.log('Search API');
}, 500);

// 195. THROTTLE

function throttle(callback, delay) {
  let waiting = false;
  return function (...args) {
    if (waiting) return;
    callback.apply(this, args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

// 196. OBJECT TRANSFORMATION

const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
];
const result = users.map((user) => ({ id: user.id, username: user.name }));
console.log(result);

// 197. NESTED ARRAYS

function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, [3, 4]]]));

// 198. NESTED OBJECTS

const user = {
  name: 'Nitin',
  address: { city: 'Indore', location: { pincode: 452001 } },
};
console.log(user.address.location.pincode);

// 199. ARRAY + OBJECT + map + filter + reduce

const employees = [
  { name: 'A', salary: 40000, dept: 'IT' },
  { name: 'B', salary: 70000, dept: 'HR' },
  { name: 'C', salary: 60000, dept: 'IT' },
];
const result = employees
  .filter((employee) => employee.salary > 50000)
  .map((employee) => employee.salary)
  .reduce((total, salary) => total + salary, 0);
console.log(result);

// 200. COMPLETE REAL-WORLD JAVASCRIPT PROBLEM

const employees = [
  { name: 'A', salary: 40000, dept: 'IT' },
  { name: 'B', salary: 70000, dept: 'HR' },
  { name: 'C', salary: 60000, dept: 'IT' },
  { name: 'D', salary: 80000, dept: 'HR' },
];
const result = employees
  .filter((employee) => employee.dept === 'IT' && employee.salary > 50000)
  .map((employee) => employee.name);
const totalSalary = employees
  .filter((employee) => employee.dept === 'IT' && employee.salary > 50000)
  .reduce((total, employee) => {
    return total + employee.salary;
  }, 0);
console.log(result);
console.log(totalSalary);
