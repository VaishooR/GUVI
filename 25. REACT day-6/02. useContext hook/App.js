import * as React from 'react';
import './style.css';
import{useState} from 'react';
import {Context} from './Context';
import App1 from './Counter';

export default function App() {
  const[value,setvalue]=useState(0)
  const handleIncrement=()=>{
    setvalue(value+1)
  }
  const handleDecrement=()=>{
    setvalue(value-1)
  }
  const handleReset=()=>{
    setvalue(0)
  }
  return (
    <div>
      <h3>App Component</h3>
      <p>Value: {value}</p>
      <button onClick={handleIncrement}>Increment</button>&nbsp;&nbsp;
      <button onClick={handleDecrement}>Decrement</button>&nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button>&nbsp;&nbsp;
      <Context.Provider
      value={{
        initialValue:value,
        appDecre: handleDecrement,
        appIncre: handleIncrement,
        appReset: handleReset
      }}
      >
        <App1/>
      </Context.Provider>
    </div>
  );
}













