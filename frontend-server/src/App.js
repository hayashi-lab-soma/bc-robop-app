import './App.css';
import logo from './bc-robop-logo.svg'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Beach Clean Cloud</h1>
      </header>
    </div>
  );
}

export default App;
