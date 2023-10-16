import logo from './logo.svg';
import './App.css';
//import Component  from './Component';
//import FileUpload from './FileUpload';
import FileLoadAndUpload from './FileLoadAndUpload';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hola React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <FileLoadAndUpload/>
      </header>
    </div>
  );
}

export default App;
