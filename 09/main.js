let isPalindrome = function (x) {
  // 123 -> "123" -> ["1","2","3"] -> ["3","2","1"]   +x => ["1","2","3"] -> [1,2,3]
  return x < 0 ? false : x === +x.toString().split("").reverse().join(""); // Perfomance: 85%
  // return x === Number(x.toString().split("").reverse().join(""));
  // return (
  //   x === Math.floor(parseFloat(x.toString().split("").reverse().join("")))
  // );

  // return x === parseInt(x.toString().split("").reverse().join(""));
};

let res = isPalindrome(121);
console.log(res); // true
console.log(isPalindrome(10)); // false
