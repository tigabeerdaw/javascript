// Basic Arithmetic Operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}


// More Advanced Calculations

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(number) {
    if (number < 0) {
        return "Cannot calculate square root of a negative number.";
    }
  return Math.sqrt(number);
}

function calculatePercentage(value, total) {
  return (value / total) * 100;
}

function circleArea(radius) {
  return Math.PI * radius * radius;
}



// Functions for Common Financial Calculations

function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

function compoundInterest(principal, rate, time, n) {
  return principal * Math.pow((1 + (rate / n)), (n * time)) - principal;
}



// Calculator Object

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  },
  power: (base, exponent) => Math.pow(base, exponent),
  sqrt: (number) => {
      if (number < 0) {
          return "Cannot calculate square root of a negative number.";
      }
      return Math.sqrt(number);
  },
  percentage: (value, total) => (value / total) * 100,
  circleArea: (radius) => Math.PI * radius * radius,
  simpleInterest: (principal, rate, time) => (principal * rate * time) / 100,
  compoundInterest: (principal, rate, time, n) => principal * Math.pow((1 + (rate / n)), (n * time)) - principal,
};



// Example usage (for Node.js):

// You can access command-line arguments using process.argv
const args = process.argv.slice(2); // Slice to remove the first two elements (node and script path)

if (args.length === 3 && args[0] === "add") {
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Invalid input: Numbers are required.");
    } else {
      console.log(calculator.add(num1, num2));
    }
} else if (args.length === 3 && args[0] === "subtract") {
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Invalid input: Numbers are required.");
    } else {
      console.log(calculator.subtract(num1, num2));
    }
} else if (args.length === 3 && args[0] === "multiply") {
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Invalid input: Numbers are required.");
    } else {
      console.log(calculator.multiply(num1, num2));
    }
} else if (args.length === 3 && args[0] === "divide") {
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Invalid input: Numbers are required.");
    } else {
      console.log(calculator.divide(num1, num2));
    }
} else if (args.length === 3 && args[0] === "power") {
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Invalid input: Numbers are required.");
    } else {
      console.log(calculator.power(num1, num2));
    }
} else if (args.length === 2 && args[0] === "sqrt") {
    const num1 = parseFloat(args[1]);
    if (isNaN(num1)) {
      console.error("Invalid input: Numbers are required.");
    } else {
      console.log(calculator.sqrt(num1));
    }
} else {
    console.log("Usage: node your_script.js <operation> <operand1> <operand2>");
    console.log("Supported operations: add, subtract, multiply, divide, power, sqrt");
}

//To run in terminal: node your_script.js add 5 3
//To run in terminal: node your_script.js sqrt 25