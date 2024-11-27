    import { arrayFunction, objectFunction } from "./arrayAndObject.js";
import { GradeCalculator } from "./gradeCalculator.js";
    import { guessTheSecretNumber } from "./guessTheSecretNumber.js";
    import { printNumbers } from "./printNumbers.js";
        
    // Activity 2
    const grade = prompt("Enter your grade:");
    console.log("Calculated Grade: ", GradeCalculator(Number(grade)));


    // Activity 3
    const startingNumber = Number(prompt("Enter Starting Number"));
    const endingNumber = Number(prompt("Enter Ending Number"));
    printNumbers(startingNumber, endingNumber);


    // Activity 4
    guessTheSecretNumber();

    // Activity 5
 
    arrayFunction();
    objectFunction();