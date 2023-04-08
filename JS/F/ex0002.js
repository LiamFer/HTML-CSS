function fatorial(n) {
  for (loop = 0; loop < n; loop++) {
    n = n * loop;
  }
  return n;
}

console.log(fatorial(5));
