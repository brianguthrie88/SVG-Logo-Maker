//importing the shapes file to use all of the shape constructors
const {Triangle, Circle, Square} = require('./lib/shapes.js');
//importing inquirer to be able to prompt users with questions
const inquirer = require('inquirer');
//importing fs to be able to write an svg file with all of the user input to create the logo
const fs = require('fs');

//this is a function that runs an svg script based on what shape the user picks
const generateSVG = (answers) => {
    if (answers.shape === 'Triangle') {
        let newShape = new Triangle(answers.text, answers.textColor, answers.shapeColor)
         return newShape.render();
    } else if (answers.shape === 'Circle') {
        let newShape = new Circle(answers.text, answers.textColor, answers.shapeColor)
        return newShape.render();
    } else {
        let newShape = new Square(answers.text, answers.textColor, answers.shapeColor)
        return newShape.render();
    }
}

//this function asks questions of the user and then creates the svg file with all of those answers making the users logo
function questions() {
    inquirer
      .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color.',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Enter a shape for the logo.',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color.',
        },
      ])
      .then((answers) => {
        if (answers.text.length < 3 || answers.text.length > 3) {
            console.log('Text for logo must not be more than 3 characters.');
            questions();
        } else {
            const readmePageContent = generateSVG(answers);
            fs.writeFile('./examples/generateSVG.svg', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created generateSVG.svg!'));
        }
    });
}

//running the questions function
questions();
    