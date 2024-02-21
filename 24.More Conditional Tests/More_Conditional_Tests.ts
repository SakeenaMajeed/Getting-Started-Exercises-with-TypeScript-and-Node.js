// Test for item not in array

let colors: string[] = ["red", "green", "blue"];
let colorToCheck: string = "yellow";
if (!colors.includes(colorToCheck)) {
    console.log(`${colorToCheck} is not in the array.`);
} else {
    console.log(`${colorToCheck} is in the array.`);
}
