 function sqrt(number) {
  return sqrt_recursive(number, 0)
}


  function sqrt_recursive(k, n) {
    // write your code her
    if (k === 0 ) {
      return n;
    } else {
      return sqrt_recursive(k - (2 * n + 1), n + 1);
    }
  }

  module.exports =sqrt;
console.log(sqrt(25))
console.log(sqrt(7056))
