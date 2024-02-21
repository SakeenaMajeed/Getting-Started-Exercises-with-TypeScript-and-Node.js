// Define types for the items
type Item = {
    name: string;
    quantity: number;
};

// Function to create a store inventory object
function createStoreInventory(items: Item[]): {[key: string]: number} {
    const inventory: {[key: string]: number} = {};

    items.forEach(item => {
        inventory[item.name] = item.quantity;
    });

    return inventory;
}

// Example items
const items: Item[] = [
    { name: "apple", quantity: 10 },
    { name: "banana", quantity: 5 },
    { name: "orange", quantity: 8 }
];

// Create store inventory
const storeInventory = createStoreInventory(items);

// Display the store inventory
console.log("Store Inventory:");
console.log(storeInventory);
