// Média

const media = (...numbers) => {
  let size = numbers.length;
  let sum = numbers.reduce((charge, element) => {
    return charge + element;
  }, 0);

  return sum / size;
};

// Média Aritmética Ponderada

const mediaPonderada = (...number) => {
  let weight = number.reduce((charge, element) => {
    return charge + element[1];
  }, 0);

  let sum = number.reduce((charge, element) => {
    return charge + element[0] * element[1];
  }, 0);

  return sum / weight;
};

// Os valores tem que ser passados assim console.log(mediaPonderada([10,2],[5,1]))

// Mediana

const mediana = (...numbers) => {
  let orderedNumbers = numbers.sort((a, b) => a - b);
  let half;
  if (numbers.length % 2 === 0) {
    half = numbers.length / 2;
    return `A mediana é ${
      (orderedNumbers[half] + orderedNumbers[half - 1]) / 2
    }`;
  } else {
    half = (numbers.length - 1) / 2;
    return `A mediana é ${orderedNumbers[half]}`;
  }
};

// Moda

const moda = (...numbers) => {
  let copy = [];

  numbers.forEach((element) => copy.push(0));

  numbers.forEach((element, index) => {
    for (let i = 0; i < numbers.length; i++) {
      if (element === numbers[i]) {
        copy[index] += 1;
      }
    }
  });

  let maxNumber = Math.max(...copy);
  return numbers[copy.indexOf(maxNumber)];
};


