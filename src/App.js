import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/appRoutes";
import { StoreProvider } from "./services/StoreContext";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <div className="App">
          <div className="App-content">
            <Routes />
          </div>
        </div>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
