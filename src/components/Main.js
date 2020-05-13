import React, { useContext } from "react";
import { StoreContext } from "../services/StoreContext";

const Main = () => {
  const currentNumber = useContext(StoreContext);
  console.log("store: ", currentNumber);
  return <div>Fibonaccier</div>;
};

export default Main;
