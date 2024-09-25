// var inputs = document.getElementById("inp");
// var text = document.querySelector(".text");
// var btn = document.getElementById("btn");

// btn.addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent default action if inside a form
//     Add();
// });

// function Add() {
//     // Trim whitespace from the input
//     var taskValue = inputs.value.trim();
    
//     // Debugging: log the value being checked
//     console.log(`Input value: '${taskValue}'`);

//     if (taskValue === "") {
//         alert("Please enter a task");
//     } else {
//         // Create a new list item
//         let newEle = document.createElement("ul");

//         // Get the current date and format it
//         let now = new Date();
//         let formattedDate = now.toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//         });

//         // Add task with the date
//         newEle.innerHTML = `${taskValue} <span class="date">(${formattedDate})</span> <i class="fa-solid fa-trash"></i>`;
        
//         text.appendChild(newEle); // Add the task to the text section
//         inputs.value = ""; // Clear the input

//         // Add functionality to remove the task
//         newEle.querySelector("i").addEventListener("click", function(){
//             newEle.remove(); // Remove the task
//         });
//     }
// }


var inputs = document.getElementById("inp");
var text = document.querySelector(".text");
var btn = document.getElementById("btn");

// Add click event listener to the button
btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action if inside a form
    Add(); // Call the Add function
});

function Add() {
    // Trim whitespace from the input
    var taskValue = inputs.value.trim();

    // Debugging: log the value being checked
    console.log(`Input value: '${taskValue}'`);

    // Check if the input is empty after trimming whitespace
    if (taskValue === "") {
        alert("Please enter a task"); // Show alert if empty
    } else {
        // Create a new list item
        let newEle = document.createElement("ul");

        // Get the current date and format it
        let now = new Date();
        let formattedDate = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        // Add task with the date
        newEle.innerHTML = `${taskValue} <span class="date">(${formattedDate})</span> <i class="fa-solid fa-trash"></i>`;
        
        text.appendChild(newEle); // Add the task to the text section
        inputs.value = ""; // Clear the input

        // Add functionality to remove the task
        newEle.querySelector("i").addEventListener("click", function() {
            newEle.remove(); // Remove the task
        });
    }
}
