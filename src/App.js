import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/appRoutes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-content">
          <Routes number={1} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
