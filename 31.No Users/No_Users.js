"use strict";
let users = ["sakeena", "sana", "Alishba", "mariyam"];
// Function to print users or the message if the list is empty
function printUsersOrMessage(users) {
    if (users.length > 0) {
        console.log("Current users:");
        for (let user of users) {
            console.log(user);
        }
    }
    else {
        console.log("We need to find some users!");
    }
}
// Print users or message for the initial list
printUsersOrMessage(users);
// Remove all usernames from the array
users = [];
// Print users or message after removal
printUsersOrMessage(users);
