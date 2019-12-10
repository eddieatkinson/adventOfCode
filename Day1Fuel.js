const fs = require('fs');
fs.readFile('Day1Data.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
    throw error;
  }
  const totalFuel = findFuel(getMassesAsArrayOfNumbers(data));
  console.log(totalFuel);
});
const getMassesAsArrayOfNumbers = (stringOfMasses) => {
  const arrayOfStrings = stringOfMasses.split('\n');
  const arrayOfNumbers = arrayOfStrings.map((string) => {
    return Number(string);
  });
  return arrayOfNumbers;
}
const findFuel = (masses) => {
  let totalFuel = 0;
  masses.forEach((mass, i) => {
    const fuel = Math.floor(mass/3) - 2;
    totalFuel += fuel;
  });
  return totalFuel;
}