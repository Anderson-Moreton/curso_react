import './App.css';

import City from "./assets/city.jpg";

import { useState } from 'react';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction';
import MessageState from './components/MessageState';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Jeep", color: "Prata", newCar: false, km: 1100 },
    { id: 1, brand: "Fiat", color: "Vermelho", newCar: false,  km: 120 }
  ];

  const people = [
    {id: 1, name: "Anderson", age: 34, profession: "Programador"},
    {id: 2, name: "Priscila", age: 34, profession: "Cabeleireira"},
    {id: 3, name: "Otávio", age: 2, profession: "Bebê"}
  ];

  function showMessage () {
    console.log("Evento do componente pai!")
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React!</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem com por do sol" />
      </div>
      {/* Imaghem em Asset (Pasta) */}
      <div>
        <img src={City} alt="Imagem de uma cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name="Anderson" age="34" hobby="Video Game" />
      {/* Destructuring*/}
      <CarDetails brand="Mercedes Benz" km={20000} color="Black"/>
      {/* Reaproveitando*/}
      <CarDetails brand="Jeep" km={0} color="Gray" />
      <CarDetails brand="Audi" km={4500} color="White" />
      {/*Loop em array de objetos*/}
      {cars.map((car) => (
      <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))};
      {/* Fragment*/}
      <Fragment />
      {/* Children*/}
      <Container>
        <p>E este é o conteúdo</p>
      </Container>
      {/* Executar Função*/}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}
      <MessageState msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio */}
      {people.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession}/>
      ))}
      
    </div>
  );
}

export default App;
