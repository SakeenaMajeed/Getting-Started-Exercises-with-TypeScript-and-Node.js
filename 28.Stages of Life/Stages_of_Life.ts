function determineStageOfLife(age: number): string {
    if (age < 0) {
        return "Please provide a valid age greater than or equal to 0.";
    } else if (age < 2) {
        return "baby";
    } else if (age < 4) {
        return "toddler";
    } else if (age < 13) {
        return "kid";
    } else if (age < 20) {
        return "teenager";
    } else if (age < 65) {
        return "adult";
    } else {
        return "elder";
    }
}

let age: number = 75; // You can change the age value to test different cases
let stage: string = determineStageOfLife(age);
if (stage === "Please provide a valid age greater than or equal to 0.") {
    console.log(stage);
} else {
    console.log(`The person is a ${stage}.`);
}
