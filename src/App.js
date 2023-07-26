import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
 

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Bienvenido a React, Primeros pasos.
        </p>
          <PrimerComponente/>
          <hr/>
          
      </header>
    </div>
  );
}

export default App;
