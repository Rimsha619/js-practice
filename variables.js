function example() {
  var x = 10;
  let y = 20;
  const z = 30;

  if (true) {
    var x = 100; // Reassigns the existing 'x' (function scope)
    let y = 200; // Creates a new 'y' (block scope)
    // const z = 300; // Error: Cannot reassign z
    console.log("Inside if block: ", x, y, z); // Output: Inside if block:  100 200 30
  }

  console.log("Outside if block: ", x, y, z); // Output: Outside if block:  100 20 30
}

example();

console.log(typeof x); // undefined - because var x was declared within the function
console.log(typeof y); // ReferenceError: y is not defined - because let y is block scoped
console.log(typeof z); // ReferenceError: z is not defined - because const z is block scoped
