import React from "react";
import { Link, useLocation } from "react-router-dom";
import useCurrent from "../services/useCurrent";
import classNames from "classnames";
import "./main.css";

const Main = () => {
  const { toggleNext, togglePrevious, fibonacciNumber } = useCurrent();
  console.log("fibonacciNumber: ", fibonacciNumber);

  const setNewIndex = () => {};

  const previousClassName = classNames({
    "nav-link": true,
    active: fibonacciNumber > 0,
    "disabled-link": fibonacciNumber === 1,
  });

  const nextClassName = classNames({
    "nav-link": true,
    active: fibonacciNumber > 0,
  });

  const jumpClassName = classNames({
    "nav-link": true,
    active: fibonacciNumber > 0,
  });

  return (
    <div className="Main-container">
      <div className="Main-header">The Fibonaccier</div>
      <div className="square">{fibonacciNumber}</div>
      <div className="Main-nav-buttons">
        <Link to="/" className={previousClassName} onClick={togglePrevious}>
          {"<< Previous"}
        </Link>
        <Link to="/" className={nextClassName} onClick={toggleNext}>
          {"Next >>"}
        </Link>
        <Link to="/" className={jumpClassName} onClick={setNewIndex}>
          {"Jump to..."}
        </Link>
      </div>
    </div>
  );
};

export default Main;
