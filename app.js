console.log("Hello World!\n==========\n");

// Exercise 1 Section

// function printOdds (count) {
//     for (let i = 1; i <= count; i++) {
        
//         if (i % 2 != 0) {
            
//             console.log (i);
//         }
//     }
// }

// printOdds(10);
// printOdds(100);

// Exercise 2 Section

function checkAge (name, age) {
    
    let aboveSixteen = `Congrats ${name}, you can drive!` 
    let belowSixteen = `Sorry ${name}, but you need to wait until you are 16.`
        
        if (age > 16) {
            
            console.log (aboveSixteen)
        }
        else {
            
            console.log (belowSixteen)
        
        }
}

checkAge('isaac', 17);

// Exercise 3 Section

function checkQuadrant (x,y){
    if (x > 0 &&  y > 0 ) {
        return "Quadrant 1";
    }
    else if (x < 0 &&  y > 0){
        return  "Quadrant 2";
    }
    else if (x < 0 &&  y < 0){
        return "Quadrant 3";
    }
    else if (x > 0 &&  y < 0){
        return "Quadrant 4";
    }
    else if (x == 0 && y != 0) {
        return "X Axis";
    }
    else if (x != 0 && y == 0) {
        return "Y Axis";
    }
    else {
        return "Origin"
    }
}

console.log(checkQuadrant (1,1));
console.log(checkQuadrant (-1,1));
console.log(checkQuadrant (-1,-1));
console.log(checkQuadrant (1,-4));
console.log(checkQuadrant (0,1));
console.log(checkQuadrant (1,0));
console.log(checkQuadrant (0,0));

// Exercise 4 Section

function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle (a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        }else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    }else {
        return `Not a valid triangle`;
    }
}

console.log(checkTriangle (1,2,2));
console.log(checkTriangle (1,1,2));
console.log(checkTriangle (2,3,4));
console.log(checkTriangle (2,2,2));