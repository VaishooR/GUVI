import React from 'react';
import {Context} from './Context';
import {useContext} from 'react';

export default function App1() {
  const providerVal=useContext(Context)
  return (<div>
    <h3>App-1 Comp:</h3>
    <p>Value from App: {providerVal.initialValue}</p>
    <button onClick={providerVal.appIncre}>Increment</button>&nbsp;&nbsp;
      <button onClick={providerVal.appDecre}>Decrement</button>&nbsp;&nbsp;
      <button onClick={providerVal.appReset}>Reset</button>&nbsp;&nbsp;
  </div>)
}
