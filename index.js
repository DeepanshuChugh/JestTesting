function sum(...args) {
  if (arguments.length === 0) return "sum invoked without arguments";
  if (arguments.length === 1) return "sum needs atleast 2 arguments";
  //   a = +a;
  //   b = +b;
  //   let result = Number((a + b).toFixed(1));
  //     return result;
  const sumValue = [...args].reduce((a, c) => a + Number(c), 0);
  return Number(sumValue.toFixed(1));
}
module.exports = sum;
