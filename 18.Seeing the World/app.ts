// Define the array of locations
let placesToVisit: string[] = [
    "Saudi Arabia, France",
    "Europe, Germany",
    "korea, Singapore",
 ];
  
  // Print the array in its original order
  console.log("Original order:");
  console.log(placesToVisit);
  
  // Print the array in alphabetical order without modifying the actual list
  console.log("\nAlphabetical order:");
  console.log([...placesToVisit].sort());
  
  // Show that the original order is still intact
  console.log("\nOriginal order after alphabetical sorting:");
  console.log(placesToVisit);
  
  // Print the array in reverse alphabetical order without changing the original list
  console.log("\nReverse alphabetical order:");
  console.log([...placesToVisit].sort().reverse());
  
  // Show that the original order is still intact
  console.log("\nOriginal order after reverse alphabetical sorting:");
  console.log(placesToVisit);
  
  // Reverse the order of the list
  placesToVisit.reverse();
  console.log("\nReversed order:");
  console.log(placesToVisit);
  
  // Reverse the order of the list again to bring it back to its original order
  placesToVisit.reverse();
  console.log("\nBack to original order after double reversal:");
  console.log(placesToVisit);
  
  // Sort the array in alphabetical order
  placesToVisit.sort();
  console.log("\nSorted in alphabetical order:");
  console.log(placesToVisit);
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort((a, b) => b.localeCompare(a));
  console.log("\nSorted in reverse alphabetical order:");
  console.log(placesToVisit);
  