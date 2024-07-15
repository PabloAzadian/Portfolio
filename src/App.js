  import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider } from "./ThemeContext"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
