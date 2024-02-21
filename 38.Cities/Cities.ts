function describe_city(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("Los Angeles");
