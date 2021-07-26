import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import "../../estilos.scss";
import {setLogin} from '../../redux/actions'

export default function Home() {
    const dispatch = new useDispatch();
    function handleClick(){
        dispatch(setLogin());
    }

    return (
        <div className="Home">
            <div className="login-container">
        		<h1 className="text-white">Countries App</h1>
                <p>
                    Esta página le permitirá, utilizando diferentes filtros y criterios de ordenamiento, obtener la información de las actividades turísticas de cualquier pais, ademas podrá crear nuevas actividades.
                </p>
                <Link to="countries" className="login-button"  onClick={() => handleClick()}>Ingresar</Link>
            </div>

        </div>
    )
}
