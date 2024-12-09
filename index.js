// Step 1: Declare a global variable age
let age = 25; // Global Execution Context

// Step 2: Create a function displayAge
function displayAge() {
    console.log(`The current age is: ${age}`);
}

// Step 3: Create a function changeAge
function changeAge(newAge) {
    age = newAge; // Updates the global variable
    console.log(`The age has been updated to: ${age}`);
}

// Step 4: Call the functions to demonstrate behavior
displayAge(); // Output: The current age is: 25
changeAge(30); // Output: The age has been updated to: 30
displayAge(); // Output: The current age is: 30
