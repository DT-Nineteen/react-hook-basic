import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav'
import { useState } from 'react';


let App = () => {
  let [name, setName] = useState('Twilight')
  let [input, setInput] = useState('')

  const handleOnClick = (event) => {
    setName(input)
  }

  const handleOnChange = (event) => {
    setInput(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with {name} !</h1>
        <input type='text' value={input} onChange={(event) => handleOnChange(event)}></input>
        <button type='button' onClick={(event) => handleOnClick(event)}> Click me</button>
      </header>
    </div>
  );
}

export default App;
