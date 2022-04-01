import React from 'react';
import WidgetMarket from './WidgetMarket'
import ItemsListColection from './ItemsListContainer'
import { Link } from 'react-router-dom';

import { home, ropa, varitas, brazales, camisas, botas, collares,} from './strings.js';
const NavBar = () => {
    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <Link to='/' class="nav-link active" aria-current="page" href="#">magical buisness</Link>
        <Link to='/category/Brazales'class="nav-link" href="#"><span>{brazales}</span></Link>
        <Link to='/category/Camisas'class="nav-link" href="#"><span>{camisas}</span></Link>
        <Link to=''class="nav-link disabled"><span>{botas}</span></Link>
        <Link to=''class="nav-link disabled"><span>{collares}</span></Link>
        </div>
        </div>
        </div>

        <li>
        <a class="nav-link" href="#"><span><WidgetMarket/></span></a>
        </li>
        
    </nav>
    
        
    
    </div>
    
}
export default NavBar