//this is a new shape constructor that has parameters
function Shape(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
}

//this is a triangle constructor that inherits properties from the shape constructor and then also has a render method that
//returns the svg script with the correct dimensions for a triangle
function Triangle(text, textColor, shapeColor) {
    Shape.call(this, text, textColor, shapeColor);
    this.render = function () {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,10 100,210 300,210" fill='${shapeColor}'/>

        <text x="198" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `
    };
}

//this is a circle constructor that inherits properties from the shape constructor and then also has a render method that
//returns the svg script with the correct dimensions for a circle
function Circle(text, textColor, shapeColor) {
    Shape.call(this, text, textColor, shapeColor);
    this.render = function () {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="200" cy="125" r="75" fill='${shapeColor}'/>

        <text x="198" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `
    };
}

//this is a square constructor that inherits properties from the shape constructor and then also has a render method that
//returns the svg script with the correct dimensions for a square
function Square(text, textColor, shapeColor) {
    Shape.call(this, text, textColor, shapeColor);
    this.render = function () {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="143" y="1" width="110" height="110" fill ='${shapeColor}'/>

        <text x="198" y="75" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `
    };
}

module.exports = {Triangle, Circle, Square};