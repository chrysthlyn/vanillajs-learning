// function foo(x = 0) {
//   return x + 1;
// }

// console.log(foo());

// (function (x = 0) {
//   console.log(x + 1);
// })();

// const foo = (x = 0) => {
//   return x + 1;
// };

// console.log(foo(1));

// function addSquares(a, b) {
//   function squares(x) {
//     return x * x;
//   }
//   return squares(a) + squares(b);
// }

// console.log(addSquares(1, 2));

function loop(x) {
  if (x >= 10) return;
  console.log(x);
  loop(x + 1);
}

loop(1);
