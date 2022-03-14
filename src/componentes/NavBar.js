import React from 'react';


import { home, ropa, varitas, objetos,} from './strings.js';
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
        <a class="nav-link active" aria-current="page" href="#">magical buisness</a>
        <a class="nav-link" href="#"><span>{home}</span></a>
        <a class="nav-link" href="#"><span>{varitas}</span></a>
        <a class="nav-link disabled"><span>{objetos}</span></a>
        <a class="nav-link disabled"><span>{ropa}</span></a>
        </div>
        </div>
        </div>
        
    </nav>
    
        
    
    </div>
    
}
export default NavBar