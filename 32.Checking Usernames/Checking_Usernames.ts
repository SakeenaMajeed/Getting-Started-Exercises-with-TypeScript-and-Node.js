let current_users: string[] = ["sakeena", "hamza", "alishba", "Esha", "Majeed"];
let new_users: string[] = ["qirat", "mariyam", "fiza", "Eman", "maria"];

for (let new_user of new_users) {
    let is_duplicate: boolean = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_duplicate = true;
            break;
        }
    }

    if (is_duplicate) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
