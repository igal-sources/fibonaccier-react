import React, { useState } from "react";

const StoreContext = React.createContext([{}, () => {}]);

const StoreProvider = (props) => {
  const lastNumber = localStorage.getItem("lastNumber");

  const [state, setState] = useState({
    fibonacciNumber: lastNumber ? lastNumber : 1,
    previous1: 1,
    previous2: 0,
  });

  return <StoreContext.Provider value={[state, setState]}>{props.children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
