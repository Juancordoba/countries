import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {setCountries, setCountCountries} from '../../redux/actions'

import "../../estilos.scss";


import FilterCountries from '../shared/FilterCountries'
import FilterRegions from '../shared/FilterRegions'
import FilterActivities from '../shared/FilterActivities'
import ListCountries from '../shared/ListCountries'

import Navigation from '../shared/Navigation'

export default function Countries() {
    const {regions} = useSelector(state => state.regionsReducer)
    const {filter,page,limit, order,orderBy} = useSelector(state => state.countriesReducer)
    const {activities_filter} = useSelector(state => state.activitiesReducer)
    const dispatch = new useDispatch();
    let nameContinents = [];

    useEffect(() => {
        regions.forEach(element => {if(element.checked) nameContinents.push(element.name)})
        axios.get('http://localhost:3001/countries',{ params: {page,limit, regions: JSON.stringify(nameContinents), filter, order, orderBy, activities_filter : JSON.stringify(activities_filter)}})
        .then(result => 
            dispatch(setCountries(result.data.rows),
            dispatch(setCountCountries(result.data.count)) 
        ))
    },[activities_filter,regions, filter,page,order, orderBy,limit])

    return (
        <div>
            <Navigation />
            <div className="page-header">Countries</div>
                <div className="container">
                    <div className="col-20">
                        <FilterCountries />
                        <FilterRegions />
                        <FilterActivities />
                    </div>
                    <div className="col-80">
                        <ListCountries />
                       
                    </div>
                </div>
        </div>
    )
}
