import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav'


let App = () => {
  let name = 'Twilight'
  let obj = { name: "Truong", age: 19 }
  let link = 'https://www.facebook.com/Narutobu/'
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        {console.log("check obj", obj)}

        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(obj)}
        <h1>Hello world with {name} in {obj.age}!</h1>
        <a href={link} target='_blank' rel="noreferrer">Visit my profile</a>
      </header>
    </div>
  );
}

export default App;
