"use strict";
// Function to create a store inventory object
function createStoreInventory(items) {
    const inventory = {};
    items.forEach(item => {
        inventory[item.name] = item.quantity;
    });
    return inventory;
}
// Example items
const items = [
    { name: "apple", quantity: 10 },
    { name: "banana", quantity: 5 },
    { name: "orange", quantity: 8 }
];
// Create store inventory
const storeInventory = createStoreInventory(items);
// Display the store inventory
console.log("Store Inventory:");
console.log(storeInventory);
