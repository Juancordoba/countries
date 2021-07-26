import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setPage} from '../../redux/actions'
import '../../estilos.scss'

export default function Paginate() {
    const {count, page, limit} = useSelector(state => state.countriesReducer)
    const dispatch = new useDispatch()

    function handleClickNext(){
        if(count%limit===0) {
            if(Math.floor(count/limit)>(page+1)) dispatch(setPage(page+1))
        }else{
            if(Math.floor(count/limit)>(page)) dispatch(setPage(page+1))
        }

    }

    function handleClickPrev(){
        if(page>0) dispatch(setPage(page-1))
    }
    return (
        <div className="paginate">
            { count? 
            <div className="">total de paises filtrados: <b>{count}</b></div> : <div className="small">No results</div>}
                <span className="input-paginate">Página {page + 1} de {Math.ceil(count/limit) } </span>
            <span className="btn-group">
                <div className="btn-paginate" onClick={handleClickPrev}>prev</div>
                <div className="btn-paginate" onClick={handleClickNext}>next</div>
            </span>
        </div>
    )
}
