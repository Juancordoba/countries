import React from 'react'
import { useDispatch} from 'react-redux'

import '../../estilos.scss'

import {filterCountry,setPage} from '../../redux/actions'

export default function FilterCountries() {
    const filter = React.useRef();

    const dispatch = new useDispatch();
    function handleChange(){
        dispatch(setPage(0));
        dispatch(filterCountry(filter.current.value));
    }

    return (
        <div className="card border">
            <div className="card-header">
                Filtrar por nombre de Pais:
            </div>
            <div className="card-body">
                <input ref={filter} type="text" placeholder="País" className="form-input" onChange={handleChange}/>
            </div>
        </div>
    )
}
