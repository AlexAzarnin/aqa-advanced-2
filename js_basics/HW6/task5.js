// Create an array of user objects
let users = [
    { name: "Ім'я1", email: "email1@example.com", age: 25 },
    { name: "Ім'я2", email: "email2@example.com", age: 28 },
    { name: "Ім'я3", email: "email3@example.com", age: 32 }
];

// Iterate over the array of users and log their properties
for (let user of users) {
    // Destructure properties of the user object
    let { name, email, age } = user;
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
