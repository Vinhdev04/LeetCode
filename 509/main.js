// Solution 01:

let fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  // console.log(arr);
  return arr[n];
};

console.log(fib(10)); // Output: 55

// Solution 02: Recursive

let fibo = function (x) {
  if (x <= 1) return x;
  return fibo(x - 1) + fibo(x - 2);

  //return x <= 1 ? x : fibo(x - 1) + fibo(x - 2);
};
console.log(fibo(10)); // Output:
