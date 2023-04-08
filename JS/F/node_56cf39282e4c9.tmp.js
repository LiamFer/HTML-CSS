function fatorial(n) {
  for (copy = 1; copy < n; copy++) {
    n = n * copy;
  }
  return n;
}

console.log(fatorial(5));
