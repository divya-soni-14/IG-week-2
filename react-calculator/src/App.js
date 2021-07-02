import React, { useState } from "react";
import "./App.css";

var x = 0;
const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (x === 1) {
      setResult("");
      x = 0;
    } else setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };

  const backSpace = () => {
    if (x === 1) {
      setResult("");
      x = 0;
    } else setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    if (x === 1) {
      setResult("");
      x = 0;
    } else {
      try {
        setResult(eval(result).toString());
        x = 0;
      } catch (err) {
        setResult("ERROR");
        x = 1;
      }
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result}></input>
        </form>

        <div className="keyPad">
          <button className="" id="clear" onClick={clear}>
            Clear
          </button>
          <button id="backSpace" onClick={backSpace}>
            C
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>{" "}
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            &ndash;
          </button>{" "}
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button id="result" className="highlight" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
