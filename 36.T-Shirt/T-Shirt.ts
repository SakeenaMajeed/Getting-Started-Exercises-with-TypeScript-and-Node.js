type Shirt = {
    size: string;
    message: string;
};

function make_shirt(size: string, message: string): Shirt {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
    return { size, message };
}

// Call the function
const myShirt: Shirt = make_shirt("medium", "Hello, World!");
console.log("My Shirt:", myShirt);
