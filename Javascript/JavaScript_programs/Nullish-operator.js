
// Example 1 — Basic usage

// let name=null;
// let defaultName="guest"
// let user=name ?? defaultName;
// console.log(user)
// let admin=name || defaultName
// console.log(admin)


// Example 2 — With undefined




// let age;
// let defaultAge=18;
// let userAge= age?? defaultAge;
// console.log(userAge)



// Example 3 — Difference between ?? and ||


// let score=0;
// console.log(score || 10);
// console.log(score ?? 10);



// Example 4 — Chaining

// let username=null;
// let nickname=undefined;
// let defaultName="Anonymous";
// let displayName= username ?? nickname ?? defaultName;
// console.log(displayName)

// Comparison Example


let value1=0
let value2=""
let value3=false;
console.log(value1 || 100)
console.log(value1 ?? 100)
console.log(value2 || "Default")
console.log(value2 || "Default")
console.log( value3 || true)




// console.log(false || "Hello");     // "Hello"  (false is falsy)
// console.log( 0 || 100);             // 100      (0 is falsy)
// console.log("" || "Default");      // "Default" (empty string is falsy)
// console.log(NaN || "Not a Number");// "Not a Number" (NaN is falsy)
// console.log(null || "Guest");      // "Guest"
// console.log("akhil" || "Guest"); // "Guest"


