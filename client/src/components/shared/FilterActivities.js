import React from 'react'
import { useSelector, useDispatch} from 'react-redux' 
import {addActivitiesFilter, delActivitiesFilter, setPage} from '../../redux/actions'

export default function FilterActivities() {
    const {activities} = useSelector(state => state.activitiesReducer);
    const dispatch = new useDispatch();

    function handleSelect(e) {
        if(e.target.checked) {
            dispatch(setPage(0));
            dispatch(addActivitiesFilter(e.target.value))
        }else{
            dispatch(setPage(0));
            dispatch(delActivitiesFilter(e.target.value))
        }
    }


    return (
        <div className="card border">
            <div className="card-header">
                Elegir actividades
            </div>
            <div className="card-body">
            {  activities.map(activity => <div key={activity.id}><input type="checkbox" name={activity.name} value={activity.id} onChange={handleSelect}/>{activity.name}</div>) }
            </div>
        </div>
    )
}

