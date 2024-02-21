// Define the guest list
const guestList: string[] = ["Sukaina", "Mariyam", "Alishba"];

// Function to send dinner invitations
function sendInvitation(guest: string) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nBest regards,\n[Sakeena]`);
}

// Loop through the guest list and send invitations
guestList.forEach((guest) => {
    sendInvitation(guest);
});
