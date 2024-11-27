

    export function GradeCalculator(grade) {
        if(grade > 100 || grade < 0) {
            console.log("input a valid number between 1-100");
            return;
        }
        if (grade >= 90) return 'A';
        else if (grade >= 80) return 'B';
        else if (grade >= 70) return 'C';
        else if (grade >= 60) return 'D';
        else  return 'F';
    }