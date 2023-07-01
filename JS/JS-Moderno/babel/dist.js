"use strict";

// Média

var media = function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var size = numbers.length;
  var sum = numbers.reduce(function (charge, element) {
    return charge + element;
  }, 0);
  return sum / size;
};

// Média Aritmética Ponderada

var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var weight = numbers.reduce(function (charge, element) {
    return charge + element.p;
  }, 0);
  var sum = numbers.reduce(function (charge, element) {
    return charge + element.n * element.p;
  }, 0);
  return sum / weight;
};

// Os valores tem que ser passados assim console.log(mediaPonderada([10,2],[5,1]))

// Mediana

var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = numbers.sort(function (a, b) {
    return a - b;
  });
  var half;
  if (numbers.length % 2 === 0) {
    half = numbers.length / 2;
    return "A mediana \xE9 ".concat((orderedNumbers[half] + orderedNumbers[half - 1]) / 2);
  } else {
    half = (numbers.length - 1) / 2;
    return "A mediana \xE9 ".concat(orderedNumbers[half]);
  }
};

// Moda
// Forma de pegar a moda usando um array

var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var copy = [];
  numbers.forEach(function (element) {
    return copy.push(0);
  });
  numbers.forEach(function (element, index) {
    for (var i = 0; i < numbers.length; i++) {
      if (element === numbers[i]) {
        copy[index] += 1;
      }
    }
  });
  var maxNumber = Math.max.apply(Math, copy);
  return numbers[copy.indexOf(maxNumber)];
};
