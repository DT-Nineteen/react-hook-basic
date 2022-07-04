import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav'
import { useState } from 'react';

let App = () => {
  let [name, setName] = useState('Twilight')
  let [input, setInput] = useState('')
  let [hobbies, setHobies] = useState([
    { id: 'hb1', title: 'Playing video game' },
    { id: 'hb2', title: 'Listen to music' },

  ])

  const handleOnClick = (event) => {
    if (!input) {
      alert('Import your hobby')
      return;
    }
    let newHobby = { id: 'hb' + Math.floor(Math.random() * (1000 - 1 + 1)) + 1, title: input }
    setHobies([...hobbies, newHobby])
    console.log('check hobbies', newHobby)
    setInput('')

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
        <div className='hobby-container'>
          {hobbies.map(hobby => {
            return (
              <div key={hobby.id}>{hobby.title}</div>
            )
          })
          }
        </div>
        <input type='text' value={input} onChange={(event) => handleOnChange(event)}></input>
        <button type='button' onClick={(event) => handleOnClick(event)}> Click me</button>
      </header>
    </div>
  );
}

export default App;
