// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}


console.log(fib(0));
console.log(fib(1));
console.log(fib(4));
console.log(fib(10)); 


module.exports = fib;
