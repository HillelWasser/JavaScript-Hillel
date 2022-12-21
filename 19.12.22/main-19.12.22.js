//Write a JavaScript function to print (console.log()) the “Hello World” message
function greeting() {
    console.log('Hello World')
}
greeting()

//Write a function that returns the square of a number
function square(x) {
return x*x
}
console.log(square(10))

//Write a function to convert Celsius to Fahrenheit and return the conversion
function convertCelsius(Celsius) {
    let Fahrenheit = Celsius*9/5+32
    return Fahrenheit;
}
console.log(convertCelsius(30))

// Write a function to print a random number. Check out Math.random()
function getRandom() {
console.log(Math.random())
}
getRandom()

//Write a function named tellFortune that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//Alert your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

function tellFortune(children,partner,location,job) {
   alert(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`)
}
(tellFortune(10,'Dana','Tel-Aviv','Agent'));
(tellFortune(3,'Roni','USA','Policeman'));
(tellFortune(6,'Gal','jerusalem','Banker'));

//Write a function that takes in a 7 digits number and returns the number as a string with commas as thousand separators. For example, the number 1234567 should be returned as "1,234,567"
function numToString(num) {
    return num.toLocaleString();
}
console.log(numToString(3456789))



// Write a function that takes in a string and returns the string with all (a, e, i, o, u) removed. For example, the string "Hello, World!" should be returned as "Hll, Wrd!".

function novowels (text) {
    return text.replace(/[eiua]/ig, " ");
}
console.log(novowels("hey my name"))

//Write a function that takes in a number and returns the number rounded to the nearest integer. For example, the number 4.6 should be returned as 5, and the number 4.4 should be returned as 4. (check out Math methods and properties)
function roundMyNumber (myNumber) {
    return Math.round(myNumber);
}
console.log(roundMyNumber(9.9))

//Write a function that:
// Save the hostname of the current URL as a variable (check location.hostname)  
// Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”
// function saveUrl (hostName) {
    // let hostNameLocation = location.hostName;
    // return hostNameLocation;
// }
// console.log(saveUrl(hostName))

