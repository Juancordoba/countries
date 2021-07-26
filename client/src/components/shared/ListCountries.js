import React, {useState} from 'react'
import { Route, Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Country from '../pages/Country'
import Paginate from '../shared/Paginate'
import '../../estilos.scss'

import {setOrder, setOrderBy,setPage, setVisibility} from '../../redux/actions'

export default function ListCountries() {
    const {countries, order, orderBy} = useSelector(state => state.countriesReducer)
    const [code, setCode] = useState('')
    const [click, setClick] = useState(false)
    const dispatch = new useDispatch();
    
    function handleClick(value){
        setClick(false)
        dispatch(setPage(0));
        if(orderBy===value){
            if(order==="asc"){
                dispatch(setOrder('desc'));
            }else{
                dispatch(setOrder('asc'));
            }
        }
        else{
            dispatch(setOrderBy(value))
            dispatch(setOrder('asc'));           
        }
    }

    function handleModal(code){
        setClick(true);
        setCode(code);
        dispatch(setVisibility());
       // setClick(false)
    }

    return (
        <div>
        <div className="card card-100">
            <table className="table">
            <thead className="table-head">
                <tr>
                    <th className="col-left" width="50%"><div className="link-header" onClick={() => handleClick('name')}>Nombre</div></th>
                    <th className="col-left" width="15%"><div className="link-header" onClick={() => handleClick('region')}>Continente</div></th>
                    <th className="col-right" width="15%"><div className="link-header" onClick={() => handleClick('population')}>Poblacion</div></th>
                    <th width="10%">Bandera</th>
                    <th width="10%">Detalles</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(country => 
                    <tr key={country.ID}>
                        <td className="col-left" >{country.name}</td>
                        <td className="col-left" >{country.region}</td>
                        <td className="col-right">{new Intl.NumberFormat().format(country.population)}</td>
                        <td className="col-center"><img src={country.flag} height="20em" alt=""/></td>
                        <td className="col-center"><div className="link-row" onClick={() => handleModal(country.ID)}>Detalles</div></td>
                    </tr>
                )}

            </tbody>
        </table>
      

        
        </div>
        
        { click? <Country code={code}/> : null }

        <div className="card card-100">
            <Paginate />
        </div>

    </div>
    )
}
