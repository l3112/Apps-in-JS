const sum = (num1,num2) => num1 + num2;

// next part exposes function to the outside world

module.exports = sum; 

//export more than one thing
//first make things

const PI = 3.14;
class Mathing{
    constructor(){
        console.log('Created')
    }
}

//then export
module.exports.PI = PI;
module.exports.Mathing = Mathing;

// Seems messy
