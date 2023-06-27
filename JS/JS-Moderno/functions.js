// Média

const media = (...numbers) => {
  let size = numbers.length;
  let sum = numbers.reduce((charge, element) => {
    return charge + element;
  }, 0);

  return sum / size;
};

// Média Aritmética Ponderada

const mediaPonderada = (...numbers) => {
  let weight = numbers.reduce((charge, element) => {
    return charge + element.p;
  }, 0);

  let sum = numbers.reduce((charge, element) => {
    return charge + element.n * element.p;
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
// Forma de pegar a moda usando um array

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

// Forma de pegar a moda usando um objeto

const moda2 = (...numbers) => {
  let obj = {};
  numbers.forEach((numbers) => (obj[numbers] = 0));
  let objArr = Object.keys(obj);
  numbers.forEach((number) => {
    for (let i = 0; i < numbers.length; i++) {
      if (number == objArr[i]) {
        obj[String(number)] += 1;
      }
    }
  });
  let moda = 0;
  let key = 0;
  for (let i in obj) {
    if (obj[i] > moda) {
      moda = obj[i];
      key = i;
    }
  }
  let index = objArr.indexOf(key);
  return console.log(objArr[index]);
};


// Jeito de resolver fazendo com object.entries
const moda3 = (...numbers) => {
  let obj = {};
  numbers.forEach((numbers) => (obj[numbers] = 0));
  let objArr = Object.entries(obj);
  objArr.forEach((number, index) => {
    for (let i = 0; i < numbers.length; i++) {
      if (objArr[index][0] == numbers[i]) {
        objArr[index][1] += 1;
      }
    }
  });
  let moda = 0;
  let i = 0;
  objArr.forEach((element, index) => {
    if (element[1] > moda) {
      moda = element[1];
      i = index;
    }
  });
  return console.log(objArr[i][0]);
};

console.log(moda3(3, 3, 5, 9, 3, 2, 1, 3, 3, 5, 15, 18));
