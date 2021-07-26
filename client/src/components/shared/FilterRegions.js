import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import "../../estilos.scss";

import {checkRegion,setPage} from '../../redux/actions'

export default function FilterContinents() {
    const {regions} = useSelector(state => state.regionsReducer)
    const dispatch = new useDispatch();

    function handleSelect(e){
        dispatch(setPage(0));
        dispatch(checkRegion({name:e.target.name,checked:e.target.checked}))
      }

    return (
        <div className="card border">
        <div className="card-header">
            Elegir continentes
        </div>
        <div className="card-body">
                {  regions.map((region,index) => <div key={index}><input type="checkbox" name={region.name} checked={region.checked} onChange={(e) => handleSelect(e)} />{region.name}</div>)}
        </div>
    </div>
    )
}
