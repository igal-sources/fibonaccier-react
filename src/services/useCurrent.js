import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import { findFibNumberByLocation } from "../services/utils";

const useCurrent = () => {
  const [state, setState] = useContext(StoreContext);

  const toggleNext = () => {
    const nextNumber = state.previous1 + state.previous2;
    setState((state) => ({
      fibonacciNumber: nextNumber,
      previous1: nextNumber,
      previous2: state.previous1,
    }));

    localStorage.setItem("lastNumber", nextNumber);
    console.log("toggleNext: ", nextNumber);
  };

  const fibonacciByPage = (num) => {
    setState(findFibNumberByLocation(num));
  };

  const togglePrevious = () => {
    setState((state) => ({
      previous1: state.previous2,
      previous2: state.previous1 - state.previous2,
      fibonacciNumber: state.previous2,
    }));

    localStorage.setItem("lastNumber", state.fibonacciNumber);
    console.log("togglePrevious: ", state.fibonacciNumber);
  };

  return {
    fibonacciNumber: state.fibonacciNumber,
    toggleNext,
    togglePrevious,
    fibonacciByPage,
  };
};

export default useCurrent;
