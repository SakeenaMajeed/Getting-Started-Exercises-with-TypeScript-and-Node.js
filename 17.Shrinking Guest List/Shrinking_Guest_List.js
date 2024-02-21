"use strict";
let guests = ["Mariyam", "Manahil", "Eman", "Noor", "Alishba"];
console.log("Unfortunately, the dinner table won't arrive in time. You can only invite two people for dinner.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, but I can't invite you to dinner.`);
    }
}
for (const remainingGuest of guests) {
    console.log(`Hey ${remainingGuest}, you're still invited to dinner!`);
}
guests.pop();
guests.pop();
console.log("Final guest list:", guests);
