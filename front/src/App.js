import './App.css';

function App() {

  async function testFront() {
    let res = await fetch('https://backend-test-heroku-yml-rs.herokuapp.com/api/users')
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
