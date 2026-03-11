//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


function calculateAverage(num1, num2, num3, num4, num5) {
    var sum = num1 + num2 + num3 + num4 + num5;
    var average = sum / 5;
    return average.toFixed(1);
}


console.log(calculateAverage(5, 10, 15, 20, 25)); 


var webDevelopment = 5;
var BackEns = 8;
var FrontEnd = 9;
var InteractionDesign = 0;
var gaming = 95;



var averageGrade = calculateAverage(webDevelopment, BackEns, FrontEnd, InteractionDesign, gaming);
if (averageGrade >= 70) {
    alert("Success! Your average grade is " + averageGrade + ".");
} else {
    alert("Review required! Your average grade is " + averageGrade + ".");
}

