import React, { useState } from "react";

const StoreContext = React.createContext([{}, () => {}]);

const StoreProvider = (props) => {
  const [state, setState] = useState({
    currentIndex: localStorage.getItem("lastIndex"),
  });

  return <StoreContext.Provider value={[state, setState]}>{props.children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
