import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import '../../estilos.scss';

import {setLogin} from '../../redux/actions'

export default function Navigation() {
    const {isLogedIn} = useSelector(state => state.countriesReducer)
    const dispatch = new useDispatch();

    function handleClick(){
        dispatch(setLogin());
    }

    return (
        <div className="nav">
            
            <div className="brand">
                <Link to="/" className="link-brand text-white" >Soy Henry - Countries</Link>
                
            </div>

            <div className="menu">
                <div className="menu-item">
                    <Link to="/countries" className="link">Countries</Link>
                </div>
                <div className="menu-item">
                    <Link to="/activities" className="link">Activities</Link>
                </div>
            </div> 

        </div>
    )
}
