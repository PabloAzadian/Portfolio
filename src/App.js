  import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import { ThemeProvider } from "./ThemeContext"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
      </div>
    </ThemeProvider>
  );
}

export default App;
