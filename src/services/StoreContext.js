import React, { useState } from "react";

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const [currentNumber, setCurrentNumber] = useState(11);

  const store = {
    currentNumber,
    setCurrentNumber,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
