const fs = require('fs');
fs.readFile('Day1Data.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
    throw error;
  }
  const totalFuel = findTotalFuel(getMassesAsArrayOfNumbers(data));
  console.log(totalFuel);
});
const getMassesAsArrayOfNumbers = (stringOfMasses) => {
  const arrayOfStrings = stringOfMasses.split('\n');
  const arrayOfNumbers = arrayOfStrings.map((string) => {
    return Number(string);
  });
  return arrayOfNumbers;
}
const findFuelForEachModule = (mass) => {
  let totalFuel = 0;
  let fuelToAdd = mass;
  while(fuelToAdd > 0) {
    fuelToAdd = Math.floor(fuelToAdd/3) - 2;
    if (fuelToAdd > 0) {
      totalFuel += fuelToAdd;
    }
  }
  return totalFuel;
}
const findTotalFuel = (masses) => {
  let totalFuel = 0;
  masses.forEach((mass) => {
    totalFuel += findFuelForEachModule(mass);
  });
  return totalFuel;
}