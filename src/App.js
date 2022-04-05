import logo from './logo.svg';
import './App.css';
import ItemsListColection from './componentes/ItemsListContainer';
import NavBar from './componentes/NavBar';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import ItemsListContainer from './componentes/ItemsListContainer' ;
import Brazales from './componentes/Brazales';
import Camisas from './componentes/Camisas';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from './componentes/ItemCount';
import ItemDetail from './componentes/ItemDetail';
import ItemDetailContainer from './componentes/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
     
      <Routes>
        <Route path='/Camisas/' element={<Camisas/>} />
        <Route path='/Brazales/'element ={<Brazales/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path="*" element = {<Navigate to="/"/>} />
        <Route path='/' element = {<ItemsListContainer/>}/>
        <Route path='/category/:categoryId' element = {<ItemsListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
export default App;

