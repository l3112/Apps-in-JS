console.log('Hello world, nodejs');

const tut = require('./tut');  
// ./ is in the same path of this file
console.log(tut(2,45));
console.log(tut.PI);
console.log(new tut.Mathing());

// And now things are printed (see output)

//Events

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
//listener
eventEmitter.on('tut',()=>{
    console.log('Tutorial Event Has Occurred');
    //But we need a tutorial event to occur
});

eventEmitter.emit('tut');

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;

    }
}

let Mori = new Person('Mori');
//Person extends eventemitter class
// Mori is an instance of the event emitter class
Mori.on('name',()=>{
    console.log('Name is ' + Mori.name);
})


let Hanlon = new Person('Hanlon');
//Person extends eventemitter class
// Hanlon is an instance of the event emitter class
Hanlon.on('name',()=>{
    console.log('And I am ' + Hanlon.name);
})


Mori.emit('name');
Hanlon.emit('name');
// It works!

//Readline prompts the user

const readline = require ('readline');

//instance of interface 

const rl = readline.createInterface({input : process.stdin,
                        output: process.stdout});
//process is a global object

let num3 = Math.floor((Math.random() * 10) + 1);
let num4 = Math.floor((Math.random() * 10) + 1);
let answer = num3 + num4;

// Let's ask the user
// the \n puts the answer underneath
rl.question(`What is ${ num3 } + ${ num4 }?\n`,
(userInput)=>{
    if(userInput.trim() == answer ){
        rl.close();
    }

    else{
        rl.setPrompt('No try again\n');
        //the little new line bugger tripped me up
        rl.prompt();
        rl.on('line',(userInput)=>{ //this input will be tested
            if(userInput.trim() == answer)
            rl.close();
            else {
                rl.setPrompt(`${ userInput } is wrong \n
                Try again. You can do it!\n`)
                rl.prompt();
            }
            //it's a loop
        })
    }
    //trim to stop whitespace
    // the answer is correct so the application closed

});

rl.on('close',()=>{
    //will only execute when we close the readline interface
    console.log('Correct!');

});

//good job so far


