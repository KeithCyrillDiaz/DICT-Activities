


export function arrayFunction() {
    const students = [
         {
            name: "Keith Diaz",
            age: 20,
            grade: "B"
        },
        {
            name: "Joshua Matthew",
            age: 21,
            grade: "B"
        },
        {
            name: "Bronny James",
            age: 23,
            grade: "C"
        },
    ];

    console.log(" Access the name of the second student in the 'students' array and log it to the console: ", students[1].name);
    students.push({
        name: "Justin Blake",
        age: 24,
        grade: "D"
    });

    for(const student of students){
        console.log(JSON.stringify(student, null, 1));
    };

}


export function objectFunction() {
    const book = {
        title: "Noli Me Tangere",
        author: "RIzal",
        year: 2002,
        getSummary: () => {  
            return `The title of the book is ${book.title} written by ${book.author} in the year ${book.year}`;
        }
    };


 

    console.log("Access the title of the 'book' object and log it to the console: ", book.title);
    book.year=1930;


    console.log("Call the 'getSummary' method of the 'book' object and log the result to the console: ", book.getSummary());

    
    const library = [];

    library.push(book);
    console.log("Log the 'library' array to the console to verify the book is stored in the array.", library);

    const car = {
        brand: "honda",
        model: "civic",
        year: 2017,

        startEngine: function() {
           console.log("Call the 'startEngine' method of the 'car' object: Car is starting")
        }
    }
    
    car.year = 2023;
    car.startEngine();

    const garage = [];
    garage.push(car);

    console.log("Garage: ", JSON.stringify(garage, null ,1))

    const person = {
        name: "Keith Diaz",
        age: 22,
        city: "Las Pinas City",
    }

    console.log("Access the 'age' property of the 'person' object and log it to the console.", person.age)

}