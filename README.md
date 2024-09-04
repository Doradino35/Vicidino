function calculate(number1, number2, operation) {
  if (operation === 'add') {
    return number1 + number2;
  } else if (operation === 'subtract') {
    return number1 - number2;
  } else if (operation === 'multiply') {
    return number1 * number2;
  } else if (operation === 'divide') {
    if (number2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return number1 / number2;
  }

  // Perform operation using switch case
  switch (operation) {
    case 'add':
      return number1 + number2;
    case 'subtract':
      return number1 - number2;
    case 'multiply':
      return number1 * number2;
    case 'divide':
      if (number2 === 0) {
        throw new Error("Cannot divide by zero");
      }
      return number1 / number2;
  }

  // Validate input numbers
  if (number1 === null || number1 === undefined || number2 === null || number2 === undefined) {
    throw new Error("Input numbers cannot be null or undefined");
  }

  // Validate operation string
  const allowedOperations = ['add', 'subtract', 'multiply', 'divide'];
  if (!allowedOperations.includes(operation)) {
    throw new Error(`Invalid operation. Allowed operations are: ${allowedOperations.join(', ')}`);
  }

}
console.log(calculate(5, 3, 'add')); // 8
console.log(calculate(10, 2, 'divide')); // 5
console.log(calculate(7, 3, 'multiply')); // 21
console.log(calculate(10, 5, 'subtract')); // 5


