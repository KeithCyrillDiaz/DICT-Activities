

const Acitivity1 = () => {
    // a. Calculate the square root of a given number.
    // b. Generate a random number between 1 and 10.
    // c. Convert a string representation of a number to an actual number.
    // d. Check if a value is not a number.
    // e. Convert a number to a string.
    console.log(`\nActivity 1: Exploring Common JS Built-in Methods`);

        console.log(`a. Calculate the square root of a given number. Given Number: 16, square root of 16 is ${Math.sqrt(16)}`)

        console.log(`b. Generate a random number between 1 and 10. Generated Number: ${Math.floor(Math.random() * 10) + 1}`);
    
        console.log(`c. Convert a string representation of a number to an actual number: \"17\" to ${parseInt("17")}`);
    
        console.log(`d. Check if a value is not a number: \"17\" to ${typeof("17") === 'number'}`);
        
        const number = 17;
        console.log(`e. Convert a number to a string: 17 to ${number.toString()} type = ${typeof(number.toString())}`);
}


const Acitivity2 = () => {

    // Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
    // Task 2: Use template literals to create a welcome message that includes the name and age of a person.
    // Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
    // Task 4: Use the spread operator to merge two arrays into a single array.
    // Task 5: Use default parameters to create a function that calculates the area of a rectangle.
    // Task 6: Create a class called "Person" with properties for name and age, and a method

    console.log(`\nActivity 2: Exploring ES6 Features\n\n`);
    const square= (number = 0) => {
        return Math.pow(number, 2);
    }
    
        console.log(`Task 1: Use arrow functions to calculate the square of a given number and log the result to the console: Given Number: 17 squared of 17 is ${square(17)}`)

        const name = "Keith Diaz"
        const age = 22
  
        console.log(`Task 2: Use template literals to create a welcome message that includes the name and age of a person: Hello my name is ${name} and I'm ${age} years old`);
    
        const person = {
            firstName: "Rexiela",
            lastName: "Baldomero",
        };

        const {firstName, lastName} = person;   

        
        console.log(`Task 3: Use destructuring to extract the first and last name from a person object and log them to the console: \nperson = ${JSON.stringify(person, null, 2)}\n Message: Happy Birthday ${firstName} ${lastName} crush po kita matagal na`);
    
        const numbers = [1, 2, 3, 4, 5];
        const letters = ['A', 'B', 'C', 'D', 'E']
    
        console.log(`Task 4: Use the spread operator to merge two arrays into a single array: Merging [${numbers}] and [${letters}] = [${[...numbers, ...letters]}]`);
    
    const calculateAreaOfRectangle = (length = 0, width = 0) => {
        return length * width;
    }
        
        console.log(`Task 5: Use default parameters to create a function that calculates the area of a rectangle: length is 14 and width is 17, area is ${calculateAreaOfRectangle(14, 17)}`);

    const boss = {
        firstName: "Rexiela",
        lastName: "Baldomero",
        playPiano: function () {
            return `${this.firstName} ${this.lastName} starts playing the piano`
        },
        
    }

    console.log(`Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method: \nperson = ${JSON.stringify(person, null, 2)}\n Message:  Hey ${firstName} kindly play the piano. Method: "${boss.playPiano()}'`);
}

// Acivity1
Acitivity1();
// Acivity2
console.log(`\n`);
Acitivity2();
