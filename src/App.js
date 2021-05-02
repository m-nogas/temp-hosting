import logo from './logo.svg';
import './App.css';
import './Components/VideoPlayer/ResponsivePlayer.jsx'
import ResponsivePlayer from './Components/VideoPlayer/ResponsivePlayer.jsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anshay rocks and rudfwelezzz da world!!!
        </a>
      </header> */}
      <ResponsivePlayer />
    </div>
  );
}

export default App;
