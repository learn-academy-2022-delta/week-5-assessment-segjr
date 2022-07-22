// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("secretCode", () => {
    it("that takes in a string and returns a coded message", () => {
        expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function expression that takes a string as a parameter. (secretCode)
// Create a variable that invokes the split method on the string. (strArr)
// Have the function invoke the forEach method on the variable.
    // Nest if and else if statements into the forEach method, that will evaluate if the index value of the variable is equivalent to 'a', 'e', 'i' or 'o', respectively; and change the index value of the variable if the evaluation passes.
// Create a variable that invokes the join method on the first variable. (theString)
// Have the function return the second variable.
// Run the function with the provided variables.

let secretCode = (string) => {
    strArr = string.split("");
    strArr.forEach((value, index) => {
        if(strArr[index].toLowerCase() == 'a') {
            strArr[index] = 4
        } else if (strArr[index].toLowerCase() == 'e') {
            strArr[index] = 3
        } else if (strArr[index].toLowerCase() == 'i') {
            strArr[index] = 1
        } else if (strArr[index].toLowerCase() == 'o') {
            strArr[index] = 0
        }
    })
    theString = strArr.join("")
    return theString
}

console.log(secretCode(secretCodeWord1))

console.log(secretCode(secretCodeWord2))

console.log(secretCode(secretCodeWord3))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("sameLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(sameLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(sameLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function that takes an array of strings and a single string as parameters. (sameLetter)
// Create a variable that invokes the filter method on the array parameter. (letterSame)
    // Nest an if statement into the filter method that will use the toLowerCase and includes functions to pass elements, that match the single string parameter, to the filtered array.
// Have the function return the variable. 
// Run the function with the provided variables.

let sameLetter = (array, char) => {
    letterSame = array.filter(value => {
        if(value.toLowerCase().includes(char)) {
            return value
        }
    })
    return letterSame
}

console.log(sameLetter(fruitArray, letterA))

console.log(sameLetter(fruitArray, letterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function that takes an array of five numbers as a parameter. (fullHouse)
// Create a variable that invokes the sort method on the given parameter. (sortedHand)
    // Within sort, use two elements as parameters that will return the second element subtracted from the first; and this arrow function will serve as a way to compare each value and sort appropriately.
// Create if statement that will evaluate if the first two index values, the third and fourth index values, and the third and fifth index values of the variable are equivalent; and return the result. 
    // Within if, create an else if statement that will evaluate if the first two index values, the first and third index values, and the fourth and fifth index values of the variable are equivalent; and return the result.
    // Create an else statement that returns a false boolean
// Run the function with the provided variables.

let fullHouse = (hand) => {
    let sortedHand = hand.sort((elementA, elementB) => elementA - elementB);
    if(sortedHand[0] == sortedHand[1] && sortedHand[2] == sortedHand[3] && sortedHand[2] == sortedHand[4]) {
        return 1 == 1
    } else if(sortedHand[0] == sortedHand[1] && sortedHand[0] == sortedHand[2] && sortedHand[3] == sortedHand [4]) {
        return 1 == 1
    } else {
        return 1 == 2
    }
}

console.log(fullHouse(hand1))

console.log(fullHouse(hand2))

console.log(fullHouse(hand3))