// Function to calculate BMI (Body Mass Index)
function calculateBMI(weightKg, heightM) {
  if (weightKg <= 0 || heightM <= 0) {
    return "Invalid input: Weight and height must be positive numbers.";
  }
  const bmi = weightKg / (heightM * heightM);
  return bmi;
}

// Function to interpret BMI
function interpretBMI(bmi) {
  if (typeof bmi === 'string') { // Check if it's an error message
      return bmi; // Return the error message
  }
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Function to calculate ideal weight (using the Devine formula - there are many others)
function calculateIdealWeight(heightM, gender) {
  if (heightM <= 0) {
    return "Invalid input: Height must be a positive number.";
  }
  let idealWeightKg;

  if (gender === 'male' || gender === 'm') {
    idealWeightKg = 50 + 2.3 * ((heightM * 100) - 152.4) / 2.54; // Convert meters to cm and inches
  } else if (gender === 'female' || gender === 'f') {
    idealWeightKg = 45.5 + 2.3 * ((heightM * 100) - 152.4) / 2.54;
  } else {
    return "Invalid input: Gender must be 'male' or 'female' (or 'm' or 'f').";
  }
  return idealWeightKg;
}


// Function to calculate weight difference from ideal
function weightDifference(actualWeight, idealWeight) {
    if (typeof idealWeight === 'string') {
        return idealWeight; // Return the error if ideal weight calculation failed
    }
    const difference = actualWeight - idealWeight;
    return difference;
}



// Example usage (for Node.js or browser console):

// BMI Calculation
const weight = 70; // kg
const height = 1.75; // meters
const bmi = calculateBMI(weight, height);
const bmiInterpretation = interpretBMI(bmi);

console.log(`Your BMI is: ${bmi.toFixed(2)}`); // toFixed(2) rounds to 2 decimal places
console.log(`BMI Interpretation: ${bmiInterpretation}`);

// Ideal Weight Calculation
const userHeight = 1.75; // meters
const userGender = 'male'; // 'male' or 'female'
const idealWeight = calculateIdealWeight(userHeight, userGender);

if (typeof idealWeight === 'number') { // Check if it's a number (not an error message)
    console.log(`Your ideal weight (Devine formula): ${idealWeight.toFixed(2)} kg`);

    const weightDiff = weightDifference(weight, idealWeight);
    console.log(`Weight difference from ideal: ${weightDiff.toFixed(2)} kg`);
} else {
    console.log(idealWeight); // Print the error message
}



// More examples or interactive input can be added as needed.