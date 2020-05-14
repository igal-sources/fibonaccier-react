export const findFibNumberByLocation = (pageNumber) => {
  let previous2 = 0,
    previous1 = 1,
    fibonacciNumber = 1;

  for (var i = 2; i <= pageNumber; i++) {
    fibonacciNumber = previous2 + previous1;
    previous2 = previous1;
    previous1 = fibonacciNumber;
  }
  return {
    previous1,
    previous2,
    fibonacciNumber,
  };
};
