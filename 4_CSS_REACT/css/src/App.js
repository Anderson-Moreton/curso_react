import './App.css';

import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* Css Global*/}
      <h1>React com CSS</h1>
      {/* Css de Componente*/}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/* Inline CSS*/}
      <p style={{color: "magente=a", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
    </div>
  );
}

export default App;
