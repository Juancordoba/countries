import React from 'react';
import { useSelector } from 'react-redux';
import CardActivity from './CardActivity'
import '../../estilos.scss'

export default function ListActivities() {
    const {activities} = useSelector(state => state.activitiesReducer)
    return (
            <div className="contenedor">
                { activities.map(activity => <CardActivity key={activity.id} activity={activity}/>) }
            </div>
    )
}
