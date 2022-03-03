import './App.css';

function App() {

  async function testFront() {
    let res = await fetch('http://localhost:5000/api/users')
    console.log(res)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={testFront}>test backend</button>
      </header>
    </div>
  );
}

export default App;
