import React from "react";
import { Link, useLocation } from "react-router-dom";
import useCurrent from "../services/useCurrent";
import classNames from "classnames";
import "./main.scss";

const Main = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/").pop();

  const {
    toggleNext,
    togglePrevious,
    fibonacciNumber,
    fibonacciByPage,
    toggleReset,
  } = useCurrent();

  const setNewPage = () => {
    const pageNumber = prompt("Please enter page number");
    pageNumber && fibonacciByPage(pageNumber);
  };

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
      <div>
        <div className="Main-content">
          <div className="Main-nav-prev">
            <Link to="/" className={previousClassName} onClick={togglePrevious}>
              {"<< Previous"}
            </Link>
          </div>
          <div className="square">{fibonacciNumber}</div>
          <div className="Main-nav-next">
            <Link to="/" className={nextClassName} onClick={toggleNext}>
              {"Next >>"}
            </Link>
          </div>
        </div>
        <div className="Main-nav-jump">
          <Link to="/" className={jumpClassName} onClick={setNewPage}>
            {"Jump to..."}
          </Link>
        </div>
        <div className="Main-nav-reset">
          <Link to="/" onClick={toggleReset}>
            {"Reset"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
