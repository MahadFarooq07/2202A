// birthYear is a positive whole number up to 2026
// Can also be a string of digits like "2006"
function printAgeIn2026(birthYear) {
    let age = 2026 - birthYear;
    console.log("This person will turn " + age + " in 2026.")
    return age;
}

// age is a positive whole number
// Can be a number or a string like "19"
function printAgeIn10Years(age) {
    let newAge = +age + 10;
    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

// age is an integer, either as a number or a string
function checkIfAdult(age) {
    let isAdult = age >= 18;
    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}

function checkIfZero(number) {
    let isZero = number === 0;
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// First input is a string that isnt empty
// Second input is a number and cant be NaN
function checkIfEquivalent(string, number) {
    let isEquivalent = string == number;
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

// unreadCount is a whole number thats 0 or higher
// Could also be null or undefined
function unreadAlert(unreadCount) {
    unreadCount && console.log("You have " + unreadCount + " messages.")
}

function unreadAlertValidated(unreadCount) {
    typeof unreadCount === "number" &&
        unreadCount > 0 &&
        console.log("You have " + unreadCount + " messages.")
}

// unreadCount can be a string, number, null or undefined
function unreadAlertStringInput(unreadCount) {
    unreadCount &&
        Number(unreadCount) > 0 &&
        console.log("You have " + unreadCount + " messages.")
}

// score can be a number, null or undefined
// The number can be negative or have decimals too
function showScore(score) {
    let correctedScore = score ?? "N/A";
    console.log("The score is:" + score)
    return correctedScore;
}

// username is a string or undefined
// An empty string is allowed too
function printWelcomeMessage(username) {
    let userOrPlaceholder = username || "Mustang";
    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}