import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Barr } from './Barr';
import { Alerta } from './Alerta';
import { Piepag } from './Piepag';
import {Registro} from './Registro';
export function Aplicacion(){
    return(
        <React.Fragment>
            <Barr/>
            <Alerta/>
            <Alerta/>
            <Alerta/>
            <Alerta/>
            <Alerta/>
            <Alerta/>
            <Registro/>
            <Piepag/>
        </React.Fragment>
    )
}
