import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
