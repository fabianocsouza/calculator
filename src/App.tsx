import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme/themes';
import './App.css';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <header className="App-container">
          <Calculator />
        </header>
      </div>
    </ThemeProvider >
  );
}

export default App;
