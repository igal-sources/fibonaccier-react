import { useState } from "react";
import { findFibNumberByLocation } from "../services/utils";

const useCurrent = () => {
  const lastNumber = localStorage.getItem("lastNumber");

  const [state, setState] = useState({
    fibonacciNumber: lastNumber ? lastNumber : 1,
    previous1: lastNumber ? lastNumber - 1 : 1,
    previous2: lastNumber ? lastNumber - 2 : 0,
  });

  const toggleReset = () => {
    setState((state) => ({
      fibonacciNumber: 1,
      previous1: 1,
      previous2: 0,
    }));

    localStorage.setItem("lastNumber", 1);
  };

  const toggleNext = () => {
    const nextNumber = state.previous1 + state.previous2;
    setState((state) => ({
      fibonacciNumber: nextNumber,
      previous1: nextNumber,
      previous2: state.previous1,
    }));

    localStorage.setItem("lastNumber", nextNumber);
  };

  const fibonacciByPage = (num) => {
    setState(findFibNumberByLocation(num));
  };

  const fibonacciPreviousNumbers = (num) => {
    let prev1 = num / ((1 + Math.sqrt(5)) / 2.0);
    let prev2 = prev1 / ((1 + Math.sqrt(5)) / 2.0);

    setState((state) => ({
      previous1: prev1,
      previous2: prev2,
      fibonacciNumber: num,
    }));
  };

  const togglePrevious = () => {
    setState((state) => ({
      previous1: state.previous2,
      previous2: state.previous1 - state.previous2,
      fibonacciNumber: state.previous1 - state.previous2,
    }));

    localStorage.setItem("lastNumber", state.fibonacciNumber);
  };

  return {
    fibonacciNumber: state.fibonacciNumber,
    toggleReset,
    toggleNext,
    togglePrevious,
    fibonacciByPage,
    fibonacciPreviousNumbers,
  };
};

export default useCurrent;
