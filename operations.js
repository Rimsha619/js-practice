

// // short-circuting operators
// let x = 5;
// let y = 0;

// // Short-circuit AND: The second part (y > 0) is not evaluated
// if (x > 0 && y > 0) {
//   console.log("Both x and y are positive");
// } else {
//   console.log("At least one is not positive"); // This will be printed
// }

// // Short-circuit OR: The second part (y > 0) is not evaluated
// if (x > 0 || y > 0) {
//   console.log("At least one is positive"); // This will be printed
// }

// pre-incrememnt or post-increment
// Pre-increment (e.g., ++x)
// // The variable is incremented before its value is used in the expression.
// // Example: If x is 5, y = ++x; will first increment x to 6, and then assign the value 6 to y.
// // Therefore, both x and y will be 6. 
// Post-increment (e.g., x++)
// // The variable is incremented after its value is used in the expression.
// // Example: If x is 5, y = x++; will first assign the current value of x (5) to y, and then increment x to 6.
// // Therefore, y will be 5, and x will be 6. 
// In summary:
// // Pre-increment: Increment first, then use.
// // Post-increment: Use first, then increment. 








// let c = 2;
// console.log(++c)
// console.log (c)
// console.log (c)

// let a = 5, b = 2;
// console.log((a + b) * (a - b));
            // a + b = 5 + 2 = 7
            // a - b = 5 - 2 = 3
            // 7 * 3 = 21


// let a = 5;
// let b = 2;
// let result = a ** b - a % b;
// console.log(result);
          // a ** b means 5 ** 2 = 25 (Exponentiation)
          // a % b means 5 % 2 = 1 (Remainder of division)
          // result = 25 - 1 = 24  


          let d = 10;
console.log((d += d -= 2));
// d= d-2