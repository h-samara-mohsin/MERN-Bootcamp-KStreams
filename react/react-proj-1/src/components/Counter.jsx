import React, { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  // let counterValue = 10

  // const x= useState(10);
  // console.log("X: ",x)

  const [counterValue, setCounterValue] = useState(10);

  const increamentHandler = () => {
    // console.log("before increament",counterValue)
    // counterValue +=1;
    // console.log("after increament",counterValue)
    setCounterValue(counterValue + 1);
  };

  const decreamentHandler = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  const getDecreamentButton = () => {
    if (counterValue > 0)
      return <button onClick={decreamentHandler}>decreament</button>;
  };

  // const deleteHandler = () => {
  //   console.log("Delete clicked");
  // };

  return (
    <div className="container">
      {/* My Counter      */}
      <h1>{props.itemName}</h1>
      <h1 className={counterValue === 0 ? "zero" : "nonZero"}>
        {counterValue === 0 ? "not present in cart" : counterValue}
      </h1>
      <button onClick={increamentHandler}>Increament</button>
      {/* {counterValue === 0 ? (<h1>Counter is zero</h1>) : (
      <button onClick={decreamentHandler}>decreament</button>                                                                                                                                                                                                                                          
      )}*/}

      {/* {
        counterValue !==0 &&
         <button onClick={decreamentHandler}>decreament</button>
      } */}

      {getDecreamentButton()}
      <button onClick={props.deleteHandler}>Delete</button>
    </div>
  );
};

export default Counter;
