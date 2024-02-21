"use strict";
// Original guest list
let guestList = ["Alishba", "Manahil", "Mariyam", "Eman"];
// Function to send invitation messages
function sendInvitations(guests) {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, please join us for dinner this Saturday.`);
    });
}
// Function to replace a guest who can't make it and print the name
function replaceGuest(oldGuest, newGuest, guestList) {
    const index = guestList.indexOf(oldGuest);
    if (index !== -1) {
        guestList[index] = newGuest;
        console.log(`${oldGuest} can't make it to dinner.`);
    }
    else {
        console.log(`${oldGuest} is not in the guest list.`);
    }
}
// Send invitations
console.log("Original guest list:");
sendInvitations(guestList);
// Modify the list and send second set of invitations
replaceGuest("Ali", "Manahil", guestList);
console.log("\nUpdated guest list:");
sendInvitations(guestList);
