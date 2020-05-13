import { useContext } from "react";
import { StoreContext } from "./StoreContext";

const useCurrent = () => {
  const [state, setState] = useContext(StoreContext);

  const toggleNext = () => {
    const newIndex = state.currentIndex + 1;
    console.log("toggleNext: ", newIndex);
    setState((state) => ({ ...state, currentIndex: newIndex }));
    persistData(newIndex);
  };

  const togglePrevious = () => {
    const newIndex = state.currentIndex + -1;
    console.log("togglePrevious: ", newIndex);
    setState((state) => ({ ...state, currentIndex: newIndex }));
    persistData(newIndex);
  };

  const persistData = (index) => {
    localStorage.setItem("lastIndex", index);
  };

  return {
    lastIndex: state.currentIndex,
    toggleNext,
    togglePrevious,
  };
};

export default useCurrent;
