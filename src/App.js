import './App.css';
import Sample from './components/Sample'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Sample />
      </header>
      <footer>
      <About />
      </footer>
    </div>
  );
}

export default App;
