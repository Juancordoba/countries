import React,{useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import "../../estilos.scss";

import {addActivities} from '../../redux/actions'



export default function CardActivity({activity}) {

    const dispatch = new useDispatch();

    function handleClick(){
        axios.delete('http://localhost:3001/activities',{data : {activityId : activity.id}})
        .then(result => {
            if(result.status===204){
                axios.get('http://localhost:3001/activities')
                .then(result => {
                    console.log(result.data.rows)
                  dispatch(addActivities(result.data.rows))
                })
            }
        })
        .catch(err => console.log(err))
    }




    return (
        <div className="card-activity">
            <div className="card-activity-header">
                <span className="btn-title"><b>{activity.name}</b></span>
                <button className="btn1" onClick={() => handleClick({activity})}>X</button>
            </div>
            <div className="card-activity-body">
                <div className="lbl-left">Name :</div><div className="lbl-right">{activity.name}</div> 
            </div>
            <div className="card-activity-body">
                <div className="lbl-left">Difficulty :</div><div className="lbl-right">{activity.difficulty}</div>
            </div>
            <div className="card-activity-body">
                <div className="lbl-left">Duration :</div><div className="lbl-right">{activity.duration}</div>
            </div>
            <div className="card-activity-body">
            <div className="lbl-left">Seasson :</div><div className="lbl-right">{activity.seasson}</div>
            </div>
            <div className="lbl-countries">
                <ul className="ul-country"> 
                {
                        activity.countries.map(country => <li key={country.ID} className="li-country">{country.name}</li> )
                }
                </ul>
            </div>
        </div>
    )
    
}
