import logo from './logo.svg';
import './App.css';

function App() {
  const name = process.env.REACT_APP_NAME
  const city = process.env.REACT_APP_CITY
  const language = process.env.REACT_APP_LANGUAGE
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         I am {name}, wilder in {city}, and I love {language} .
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
    </div>
  );
}

export default App;
