import React, { useState } from "react";

function App() {
  const [output, setOutput] = useState("");

  const str = "5+5";

  const a = "4";
  const b = "-";
  const c = "2";
  const res = a + b + c;
  console.log(res);

  const nmb = eval(str);
  console.log(nmb);

  /* Here we creating a string which has previous data*/
  const addToStr5 = () => {
    setOutput((prevOutput) => {
      return "5" + prevOutput;
    });
  };

  console.log(output);

  return (
    <div className="container">
      <button onClick={addToStr5}>5</button>
    </div>
  );
}

export default App;
