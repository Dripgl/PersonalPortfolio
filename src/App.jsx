import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import ParticlesContainer from "./component/ParticlesContainer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParticlesContainer/>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
