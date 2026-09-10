// Function for student's grade
function getGrade(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            return "A";

        case (score >= 80 && score < 90):
            return "B";

        case (score >= 70 && score < 80):
            return "C";

        case (score >= 60 && score < 70):
            return "D";

        default:
            return "F";
    }
}

let studentScore = 25;

console.log("Grade:", getGrade(studentScore));