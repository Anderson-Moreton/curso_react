import './App.css';

import { useState } from 'react'

import MyComponent from './components/MyComponent';
import Title from './components/Title'


function App() {
  const n = 15;
  const [name] = useState("Anderson");
  const redTitle = true;
  return (
    <div className="App">
      {/* Css Global*/}
      <h1>React com CSS</h1>
      {/* Css de Componente*/}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/* Inline CSS*/}
      <p style={{color: "magente=a", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/* CSS Inline dinâmico*/}
      <h2 style={n < 10 ? { color: "purple"} : { color: "pink"}}>
      CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple"} : { color: "pink"}}>
      CSS Dinâmico
      </h2>
      <h3 style={name==="Anderson" ? { color: "green", backgroundColor: "yellow"} : null}>
        Teste nome
      </h3>
      {/* Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      
      <Title />
    </div>
  );
}

export default App;
