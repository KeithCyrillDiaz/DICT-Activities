export function printNumbers(num1, num2) {
    if(num1 >= num2) {
        console.log("Starting number should be less than or equal to the ending number.");
        return 0 ;
    }
    const arr = []
    for(let i = num1; i <= num2; i++){
        arr.push(i);
    }
    
    console.log(`Numbers between ${num1} and ${num2}: [${arr}]`);
}