import logo from './logo.svg';
import './App.css';
import ItemsListColection from './componentes/ItemsListContainer';
import NavBar from './componentes/NavBar';
import Cart from './componentes/ItemCount';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <ItemsListColection/>
      
        
      </header>
    </div>

    
  );
}



export default App;

