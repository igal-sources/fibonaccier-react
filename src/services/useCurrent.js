import { useContext } from "react";
import { StoreContext } from "./StoreContext";

const useCurrent = () => {
  const [state, setState] = useContext(StoreContext);

  const toggleNext = () => {
    const nextNumber = state.previous1 + state.previous2;
    setState((state) => ({
      fibonacciNumber: nextNumber,
      previous1: nextNumber,
      previous2: state.previous1,
    }));
    persistData(nextNumber);
    console.log("toggleNext: ", nextNumber);
  };

  const togglePrevious = () => {
    const prevNumber = state.previous1 - state.previous2;
    setState((state) => ({
      fibonacciNumber: prevNumber,
      previous1: state.previous2,
      previous2: prevNumber,
    }));
    persistData(prevNumber);
    console.log("togglePrevious: ", prevNumber);
  };

  const persistData = (num) => {
    localStorage.setItem("lastNumber", num);
  };

  // const calcFibonacciNumber = (num) => {
  //   console.log("calcFibonacciNumber: ", num);
  //   let newNumber;

  //   if (num <= 1) {
  //     newNumber = num;
  //   } else {
  //     newNumber = num - 1 + (num - 2);
  //   }
  //   setState((state) => ({ ...state, fibonacciNumber: newNumber }));
  //   console.log("newNumber: ", newNumber);
  // };

  return {
    fibonacciNumber: state.fibonacciNumber,
    toggleNext,
    togglePrevious,
  };
};

export default useCurrent;
