import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Anderson", email: "anderson.moreton@gmail.com", bio:"Sou um programador", role:"admin" }}/>
    </div>
  );
}

export default App;
