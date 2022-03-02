import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => { fetch('http://localhost:5000/api/users') }}>test backend</button>
      </header>
    </div>
  );
}

export default App;
