import logo from './logo.svg';
import './App.css';

function App() {
  var name = 'blank';
  var id = 'blank';
  fetch('/api/temp').then( (response) => response.json()).then( (resJson) => {
    name = resJson.name;
    id = resJson.id;
    console.log(name);
    console.log(id);
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
        Hardcoded query, anime name: {name} with id: {id}
      </p>
    </div>
  );
}

export default App;
