function fatorial(n) {
  charger = 1
  for (var doppelganger = n; doppelganger > 1; doppelganger--) {
    charger *= doppelganger
  }
  return charger;
}

console.log(fatorial(4));
