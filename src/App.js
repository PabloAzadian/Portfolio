  import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero"
import { ThemeProvider } from "./ThemeContext"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar/>
        <Hero/>
      </div>
    </ThemeProvider>
  );
}

export default App;
