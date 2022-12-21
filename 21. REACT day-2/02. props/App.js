import * as React from 'react';
import './style.css';

function Person(props) {
  return (
    <div>
      <h1>First App</h1>
      <p>
        Hi {props.name} from {props.city}, Start editing to see some magic
        happen :)
      </p>
    </div>
  );
}
export default Person;
