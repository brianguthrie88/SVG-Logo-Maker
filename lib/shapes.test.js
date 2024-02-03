//importing the shapes file in order to run tests on all of the shape constructors
const {Triangle, Circle, Square} = require('./shapes.js');

//this runs a test for a triangle with certain perameters, seeing if it matches what the constructor should do
describe('Triangle', () => {
    it('should return a triangle with text, text color, and shape color, that is chosen by user input', () => {
        const triangle = new Triangle('JBG', 'red', 'blue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,10 100,210 300,210" fill='blue'/>

        <text x="198" y="150" font-size="60" text-anchor="middle" fill="red">JBG</text>

        </svg>
        `
        );
    });
});

//this runs a test for a circle with certain perameters, seeing if it matches what the constructor should do
describe('Circle', () => {
    it('should return a circle with text, text color, and shape color, that is chosen by user input', () => {
        const circle = new Circle('JBG', 'red', 'blue');
        expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="200" cy="125" r="75" fill='blue'/>

        <text x="198" y="150" font-size="60" text-anchor="middle" fill="red">JBG</text>

        </svg>
        `
        );
    });
});

//this runs a test for a square with certain perameters, seeing if it matches what the constructor should do
describe('Square', () => {
    it('should return a square with text, text color, and shape color, that is chosen by user input', () => {
        const square = new Square('JBG', 'red', 'blue');
        expect(square.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="143" y="1" width="110" height="110" fill ='blue'/>

        <text x="198" y="75" font-size="50" text-anchor="middle" fill="red">JBG</text>

        </svg>
        `
        );
    });
});


