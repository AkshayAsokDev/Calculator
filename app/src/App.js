import { useState } from "react";



function Button({value, handleInput}){


  return (
    <button 
        onClick={(e) => {
          // console.log("val >>", e.target.innerText);
          handleInput(e.target.innerText)
        }}
        style={{
          width : "50px",
          height : "50px",
          margin : "10px"
        }}
        >{value}</button>
  )
}


function App() {

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (val) => {
    setExpression(expression + val);
  }

  const calculate = () => {
    // console.log("expression >>", expression);
    const res = Function('"use strict"; return (' + expression + ')')();
    // console.log("result >> ", res);
    setResult(res);
  }


  return (
    <div className="App"
    style={{
      padding : "10px",
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center"
    }}
    >
      <div style={{ textAlign : "center"}} >
        <h1>React Calculator</h1>
        <input type="text" value={expression} />
      </div>

      {
        (result != null && (<div style={{fontWeight : "400", color : "grey"}} >{`${result}`}</div>))
      }

      <div >
        <Button value="7" handleInput={handleInput} />
        <Button value="8" handleInput={handleInput} />
        <Button value="9" handleInput={handleInput} />
        <Button value="+" handleInput={handleInput} />
        <br />
        <Button value="4" handleInput={handleInput} />
        <Button value="5" handleInput={handleInput} />
        <Button value="6" handleInput={handleInput} />
        <Button value="-" handleInput={handleInput} />
        <br />
        <Button value="1" handleInput={handleInput} />
        <Button value="2" handleInput={handleInput} />
        <Button value="3" handleInput={handleInput} />
        <Button value="*" handleInput={handleInput} />
        <br />
        <button 
        onClick={() => {
          setExpression("");
          setResult(null);
        }}
        style={{
          width : "50px",
          height : "50px",
          margin : "10px"
        }}
        >C</button>
        <Button value="0" handleInput={handleInput} />
        <button 
        onClick={() => {
          if (expression){
            calculate();
          }
          else {
            setResult("Error");
          }
        }}
        style={{
          width : "50px",
          height : "50px",
          margin : "10px"
        }}
        >=</button>
        <Button value="/" handleInput={handleInput} />
      </div>
    </div>
  );
}

export default App;
