import React from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  // console.log('Hello!')
  console.log('props', props.name)


  return (
    <div>
      <h1>Hello, {props.name || 'Nima'}</h1>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Hello />
      <Hello name="Janelle" />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <div>
        <h1>Hello, Janelle</h1>
      </div>

    </div>
  );
}

export default App;
