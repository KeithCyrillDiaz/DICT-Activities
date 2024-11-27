
function Activity1() {
    const displayResult = function(functionName, arg1, arg2, ans) {

        const varName = functionName === "add" ? "sum" 
        : functionName === "multiply" ? "product"
        : functionName === "isEven" ? "even"
        : functionName === "square" ? "squaredValue"
        : functionName === "fullName" ? "name"
        : functionName === "capitalize" ? "capitalizedString"
        : undefined;
        if(!varName) {
            console.log("Improper Function Name");
            return
        }

        if(functionName === "isEven" || functionName === "capitalize" || functionName === "square") {
            console.log(`${functionName} function with the argument ${arg1}, ${varName} = ${ans}`);
        } else {
            console.log(`${functionName} function with the arguments ${arg1} and ${arg2}, ${varName} = ${ans}`);
        }
     
    }

    const greet = function() {
        console.log("Greetings User");
    };
        greet();

    const add = function(num1, num2) {
        return num1 + num2;
    };
        const sum = add(5,3);
        displayResult("add", 5, 3, sum);

    const multiply = function(num1, num2) {
        return num1 * num2;
    };
        const product = multiply(4,2);
        displayResult("multiply", 4, 2, product);

    
    const isEven = function(num) {
        return num % 2 === 0;
    }
        const even = isEven(6);
        displayResult("isEven", 6, null, even);


    const square = function(num) {
        return num * num;
    }
        const squaredValue = square(3);
        displayResult("square", 3, null, squaredValue);

    const fullName = function(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }
        const name = fullName("John", "Doe");
        displayResult("fullName", "John", "Doe", name);

    const capitalize = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
        const capitalizedString = capitalize("javascript");
        displayResult("capitalize", "javascript", null, capitalizedString);
};


function Activity2() {

    function isEven (num) {
        return num % 2 === 0;
    }

        for(let i = 0; i<= 10; i++){
            const boolean = isEven(i);
            console.log(`${i} is even? ${boolean}`);
        }

    function multiply (num1, num2) {
        return num1 * num2;
    };

        function getPositiveNumber (message) {
            const number = Number(prompt(message));
            if(!number) {
                console.log("You entered an invalid input. Exiting the program...")
                return -1
            }
            if(number < 0 ) {
                console.log("You entered a negative number. Exiting the program...");
            }
            return number
        }

        while(true) {
            const num1 = getPositiveNumber("Enter your first number")
            if(num1 < 0) break;
            const num2 = getPositiveNumber("Enter your second number")
            if(num2 < 0) break;
           
            const product = multiply(num1, num2)
            
            console.log(`Multiplying first number: ${num1} and second number: ${num2}, product is equal to ${product}`)

        }



    function reverseString (string) {
        //simplified approach return string.split('').reverse().join('');

       if(typeof(string) !== 'string') {
         console.log("Parameter should be a string");
         return;
       }

       const arrayOfLetters = string.toLowerCase().split('');
       let left = 0;
       let right = arrayOfLetters.length - 1;

       while(left < right) {
        [arrayOfLetters[left], arrayOfLetters[right]] = [arrayOfLetters[right], arrayOfLetters[left]];
            left ++;
            right --;
       }    

       return arrayOfLetters.join('');
    
    }

        console.log(`hello in reversed is ${reverseString("hello")}`)


    function countVowels (string) {
        const vowels = ["a", "e", "i", "o", "u"];
        let vowelCount = 0;

        for(const letter of string) {
            if(vowels.includes(letter.toLowerCase())){
                vowelCount++;
            }
        }

        return vowelCount;
    }

        console.log(`The number of vowels in JavaScript is ${countVowels("JavaScript")}`);

    function findMax (arrayOfNumbers) {
        if(!Array.isArray(arrayOfNumbers)){
            console.log("Parameter is not an array");
            return;
        }
        if(arrayOfNumbers.length === 0) {
            console.log("Array cannot be empty");
            return;
        }

        let maxIndex = 0;

        for(let i = 0; i < arrayOfNumbers.length; i++){
            if(arrayOfNumbers[i] > arrayOfNumbers[maxIndex]){
                maxIndex = i;
            } 
        }
        return {
            maxValue: arrayOfNumbers[maxIndex], 
            index: maxIndex
        };
    }

        const value = findMax([4, 9, 2, 7, 5]);
        console.log(`the highest number in [4, 9, 2, 7, 5] is ${value.maxValue} in index ${value.index}`)
    

    function calculateFactorial(num) {
        if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
            console.log("Input must be a non-negative integer");
            return;
        }
        if (num === 0 || num === 1) {
            return 1;  
        }

        let value = 1;
        for(let i = num; i > 0; i--) {
            value = value * i;
        }

        return value;
    }

        console.log(`factorial of 5 is ${calculateFactorial(5)}`);

    function isPalindrome(string) {
    //    simplified approach  return string.toLowerCase().split('').reverse().join('') === string.toLowerCase();
        if(typeof(string) !== 'string') {
            console.log("Parameter should be a string");
            return;
        }

        const arrayOfLetters = string.toLowerCase().split('');
        let left = 0;
        let right = arrayOfLetters.length-1;

        while (left < right) {
            if(arrayOfLetters[left] !== arrayOfLetters[right]){
                return false
            }
            left ++;
            right --;
        }

        return true
    }

        console.log(`is level a Palindrome? ${isPalindrome("Level")}`)


    function sumArray (arrayOfNumbers) {
        if(!Array.isArray(arrayOfNumbers)){
            console.log("Parameter is not an array");
            return;
        }
        if(arrayOfNumbers.length === 0) {
            console.log("Array cannot be empty");
            return;
        }
        let sum = 0;
        for(const number of arrayOfNumbers) {
            sum = number + sum;
        }
        return sum;
    }

        console.log(`the sum of [1, 2, 3, 4, 5] is ${sumArray([1, 2, 3, 4, 5])}`);

    function capitalizeFirstLetter (string) {
        return string[0].toUpperCase() + string.slice(1);
    }

        console.log(`Capitalize javascript = ${capitalizeFirstLetter("javascript")}`);

    
    function filterEvenNumbers (arrayOfNumbers) {
        if(!Array.isArray(arrayOfNumbers)){
            console.log("Parameter is not an array");
            return;
        }
        if(arrayOfNumbers.length === 0) {
            console.log("Array cannot be empty");
            return;
        }

        return [...arrayOfNumbers].filter(number => number % 2 === 0);
    }

        console.log(`the even number in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] are [${filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}]`)

};




console.log("Activity 1")
Activity1();
console.log("\nActivity 2")
Activity2();