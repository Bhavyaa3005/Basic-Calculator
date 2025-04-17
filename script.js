// Get the input box element where the result is displayed
let input = document.getElementById('inputBox');

// Select all the buttons in the calculator
let buttons = document.querySelectorAll('button');

// This variable stores the input expression as a string
let string = "";

// Convert the NodeList of buttons into an array for easier handling
let arr = Array.from(buttons);

// Add a click event listener to each button
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        
        // If the "=" button is clicked, evaluate the expression
        if (e.target.innerHTML == '=') {
            string = eval(string);         // Evaluate the string as a mathematical expression
            input.value = string;          // Display the result in the input box
        }

        // If the "AC" button is clicked, clear the input
        else if (e.target.innerHTML == 'AC') {
            string = "";                   // Reset the input string
            input.value = string;          // Clear the display
        }

        // If the "DEL" button is clicked, remove the last character
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);  // Remove last character
            input.value = string;          // Update the display
        }

        // For all other buttons (numbers/operators), add the value to the string
        else {
            string += e.target.innerHTML;  // Append the button value to the expression
            input.value = string;          // Display the updated expression
        }
    });
});
