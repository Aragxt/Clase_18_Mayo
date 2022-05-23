import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Tabla} from './Tabla';


import {navbarfooter} from './navbarfooter';

export function Aplicacion(){
    return(
        <React.Fragment>
            <navbarfooter/>
            <Tabla/>
        </React.Fragment>
    )
}