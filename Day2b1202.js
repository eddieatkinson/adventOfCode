const fs = require('fs');
fs.readFile('Day2Data.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
    throw error;
  }
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const newStartingArray = replacePositions(getStringAsArrayOfNumbers(data), 1, 2, noun, verb);
      const newCode = intcode(newStartingArray);
      if (newCode[0] === 19690720) {
        console.log(100 * noun + verb);
      }
    }
  }
});
const getStringAsArrayOfNumbers = (stringOfNumbers) => {
  const arrayOfStrings = stringOfNumbers.split(',');
  const arrayOfNumbers = arrayOfStrings.map((string) => {
    return Number(string);
  });
  return arrayOfNumbers;
}
const replacePositions = (arr, position1, position2, contents1, contents2) => {
  arr[position1] = contents1;
  arr[position2] = contents2;
  return arr;
}
const intcode = (arrayOfNumbers) => {
  let bool = true;
  let i = 0;
  while(bool) {
    const opcode = arrayOfNumbers[i];
    const value1 = arrayOfNumbers[arrayOfNumbers[i+1]];
    const value2 = arrayOfNumbers[arrayOfNumbers[i+2]];
    const positionForResult = arrayOfNumbers[i + 3];
    if (opcode === 1) {
      arrayOfNumbers[positionForResult] = value1 + value2;
    } else if (opcode === 2) {
      arrayOfNumbers[positionForResult] = value1 * value2;
    } else if (opcode === 99) {
      bool = false;
    }
    i = i + 4;
  }
  return arrayOfNumbers;
}