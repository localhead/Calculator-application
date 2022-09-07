import React, { useState } from "react";

import "./styles.css";

function App() {
  const [upperOutput, setUpperOutput] = useState("0");
  const [mainOutput, setMainOutput] = useState("0");
  const [opFlag, setOpFlag] = useState(0);
  const [resFound, setResFound] = useState(0);
  const [dotFlag, setDotFlag] = useState(0);

  /* Here we creating a string which has previous data*/
  const addNumber = (event) => {
    setDotFlag(0);

    if (resFound === 1) {
      setUpperOutput("0");
      setMainOutput("0");
      setResFound(0);
    } else {
      if (mainOutput === "0") {
        setMainOutput("");
      }
      setMainOutput((prevOutput) => {
        /* Check if operation flag is on, if its clear the prevOutput */
        if (opFlag === 1) {
          prevOutput = "";
          setOpFlag(0);
        }

        return prevOutput + event.target.innerHTML;
      });
    }
  };

  const addOperation = (event) => {
    if (dotFlag === 1) {
      setMainOutput(mainOutput.slice(0, -1));
    }

    if (resFound === 1) {
      setUpperOutput("0");
      setMainOutput("0");
      setResFound(0);
    } else {
      if (upperOutput === "0") {
        setUpperOutput("");
      }
      setOpFlag(1);

      if (upperOutput.slice(0, -1) === mainOutput) {
        setUpperOutput((prevOutput) => {
          return prevOutput.slice(0, -1) + event.target.innerHTML;
        });
      } else {
        setUpperOutput((prevOutput) => {
          const res = Math.round(eval(prevOutput + mainOutput) * 100) / 100;
          console.log("adsasda" + String(res));
          setMainOutput(String(res));
          return String(res) + event.target.innerHTML;
        });
      }
    }
  };

  const timeToShowRes = (event) => {
    if (upperOutput !== "0" && mainOutput !== "0" && resFound !== 1) {
      setResFound(1);
      setUpperOutput(upperOutput + mainOutput + "=");

      setMainOutput(Math.round(eval(upperOutput + mainOutput) * 100) / 100);
    }
  };

  const ClearAll = () => {
    setMainOutput("0");
    setUpperOutput("0");
  };

  const makeNegative = () => {
    if (resFound !== 1) {
      if (eval(mainOutput) > 0) {
        setMainOutput("-" + mainOutput);
      } else if (eval(mainOutput) < 0) {
        setMainOutput(String(eval(mainOutput * -1)));
      }
    }
  };

  const addDot = () => {
    setDotFlag(1);

    if (resFound !== 1) setMainOutput(mainOutput + ".");
  };

  const deleteSymbol = () => {
    if (resFound !== 1 && mainOutput.length !== 1) {
      setMainOutput(mainOutput.slice(0, -1));
    }
  };

  /*   console.log(output); */

  return (
    <div className="container">
      <div className="content">
        <div className="output-row">
          {" "}
          <div className="show-result-output">{upperOutput}</div>
          <div className="screen-output">{mainOutput}</div>
        </div>
        <div className="first-row">
          <button className="fr-styling" onClick={ClearAll}>
            AC
          </button>
          <button className="fr-styling" onClick={makeNegative}>
            -/+
          </button>
          <button className="fr-styling" onClick={addOperation}>
            %
          </button>
          <button className="column-styling" onClick={addOperation}>
            /
          </button>
        </div>
        <div className="second-row">
          <button onClick={addNumber}>7</button>
          <button onClick={addNumber}>8</button>
          <button onClick={addNumber}>9</button>
          <button className="column-styling" onClick={addOperation}>
            *
          </button>
        </div>
        <div className="third-row">
          <button onClick={addNumber}>4</button>
          <button onClick={addNumber}>5</button>
          <button onClick={addNumber}>6</button>
          <button className="column-styling" onClick={addOperation}>
            -
          </button>
        </div>
        <div className="forth-row">
          {" "}
          <button onClick={addNumber}>3</button>
          <button onClick={addNumber}>2</button>
          <button onClick={addNumber}>1</button>
          <button className="column-styling" onClick={addOperation}>
            +
          </button>
        </div>
        <div className="last-row">
          {" "}
          <button onClick={addNumber} className="zero-edit">
            0
          </button>
          <button onClick={addDot}>.</button>
          <button onClick={deleteSymbol}>←</button>
          <button className="show-result results-edit" onClick={timeToShowRes}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
