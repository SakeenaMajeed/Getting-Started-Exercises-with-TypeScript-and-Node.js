let usernames: string[] = ['sakeena', 'Esha', 'sana', 'Alishba', 'rafia'];

for (let username of usernames) {
    if (username.toLowerCase() === 'sakeena') {
        console.log('Hello sakeena, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again in TypeScript.`);
    }
}
