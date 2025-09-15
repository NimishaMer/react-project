import React, { useState } from "react";
import "./App.css";
function CalculatorApp() {
  const [display, setDisplay] = useState("");

  return (
    <div className="calculator">
      <input type="text" value={display} className="display" />

      <div className="buttons">
        <input type="button" value="AC" onClick={() => setDisplay("")} className="green" />
        <input
          type="button"
          value="DEL"
          onClick={() =>
            setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : ""))
          }
          className="green"
        />
        <input type="button" value="%" onClick={() => setDisplay(display + "%")} className="green" />
        <input type="button" value="÷" onClick={() => setDisplay(display + "/")} className="green" />

        <input type="button" value="7" onClick={() => setDisplay(display + "7")} />
        <input type="button" value="8" onClick={() => setDisplay(display + "8")} />
        <input type="button" value="9" onClick={() => setDisplay(display + "9")} />
        <input type="button" value="×" onClick={() => setDisplay(display + "*")} className="green" />

        <input type="button" value="4" onClick={() => setDisplay(display + "4")} />
        <input type="button" value="5" onClick={() => setDisplay(display + "5")} />
        <input type="button" value="6" onClick={() => setDisplay(display + "6")} />
        <input type="button" value="-" onClick={() => setDisplay(display + "-")} className="green" />

        <input type="button" value="1" onClick={() => setDisplay(display + "1")} />
        <input type="button" value="2" onClick={() => setDisplay(display + "2")} />
        <input type="button" value="3" onClick={() => setDisplay(display + "3")} />
        <input type="button" value="+" onClick={() => setDisplay(display + "+")} className="green" />

        <input type="button" value="00" onClick={() => setDisplay(display + "00")} />
        <input type="button" value="0" onClick={() => setDisplay(display + "0")} />
        <input type="button" value="." onClick={() => setDisplay(display + ".")} />
        <input
          type="button"
          value="="
          className="equal"
          onClick={() => {
            try {
              setDisplay(eval(display).toString());
            } catch {
              setDisplay("Error");
              setTimeout(() => setDisplay(""), 1000);
            }
          }}
        />
      </div>
    </div>
  );
}

export default CalculatorApp;