const averageGrade = 85;
let result;

switch (true) {
    case averageGrade < 60:
        result = "Unsatisfactory";
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        result = "Satisfactory";
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        result = "Good";
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        result = "Very Good";
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        result = "Excellent";
        break;
    default:
        result = "Invalid average grade";
        break;
}

console.log(result);