import './App.css';

import DetailsCar from './components/DetailsCar';

function App() {
  return (
    <div className="App">
      <h1>Carros</h1>
      <div className="car-container">
        <DetailsCar brand="Ford" color="Preto" km={1800}/>
        <DetailsCar brand="Fiat" color="Branco" km={23800}/>
        <DetailsCar brand="Volkswagen" color="Prata" km={0}/>
      </div>
    </div>
  );
}

export default App;
