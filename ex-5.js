// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";
let numbers = 0;
// Start coding here
for (let letter of companyName) {
    if (numbers < companyName.length) {
        numbers++
        console.log(numbers)
    }
    console.log(`Number ${numbers} character is ${letter}`)
}