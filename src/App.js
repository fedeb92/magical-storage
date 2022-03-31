import logo from './logo.svg';
import './App.css';
import ItemsListColection from './componentes/ItemsListContainer';
import NavBar from './componentes/NavBar';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import ItemsListContainer from './componentes/ItemsListContainer' ;


import Cart from './componentes/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="*" element = {<Navigate to="/"/>} />
      <Route path='/' element = {<ItemsListContainer/>}/>
      <Route path='/category/:categoryId' element = {<ItemsListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;

