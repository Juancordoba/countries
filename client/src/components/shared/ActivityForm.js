import React,{useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import {addActivities} from '../../redux/actions'

import "../../estilos.scss";

export default function ActivityForm() {
    const [activity, setActivity] = useState({id:0,name:"", difficulty:1,duration:"", seasson:"Verano"});
    const [selectedId, setSelectedId] = useState([]);
    const {allIdNames} = useSelector(state => state.countriesReducer)
    const {activities,seassons, difficulties } = useSelector(state => state.activitiesReducer)
    const dispatch = new useDispatch();
    
    const name = React.useRef();
    const duration = React.createRef();
    const difficulty = React.createRef();
    const seasson = React.createRef();
    const [errors, setErrors] = React.useState({});

    function handleSelect(e){
      let sel = selectedId
      const pos = sel.indexOf(e.target.value)
      if(pos===-1){
        sel.push(e.target.value)
      }else{
        sel.splice(pos,1);
      }    
      setSelectedId(sel)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(selectedId.length){
          const actividad = { name:name.current.value, duration: duration.current.value, difficulty: Number(difficulty.current.value), seasson:seasson.current.value, countries :JSON.stringify(selectedId)}
          axios.post("http://localhost:3001/activities", actividad )
          .then(result => {
              if(result.status===200){
                  axios.get('http://localhost:3001/activities')
                  .then(result => {
                    dispatch(addActivities(result.data.rows))
                    clearActivity();
                  })
              }
          })
          .catch(error => console.log('error'))
        }else{
          alert("you must select at least one country")
        }
    };
    
    const validate = () => {
        const act = activities.filter(activity => activity.name.toUpperCase() === name.current.value.toUpperCase())
        if(act.length>0){
          setErrors({name:'ya existe esa actividad'});
        }else{
          setErrors({name:''});
        }
      }

      function handleChange(e){
        switch(e.target.name){
          case "name":
            setActivity({...activity , name : e.target.value})
            validate();
            break;
          case "difficulty":
            setActivity({...activity , difficulty : e.target.value})
            break;
          case "duration":
            setActivity({...activity , duration : e.target.value})
            break;
          case "seasson":
            setActivity({...activity , seasson : e.target.value})
            break;
          default:
            break;
        }
      }

      function clearActivity(){
        setActivity({id:0,name:"", diffivulty:1,duration:"", seasson:"Verano"});
        const checkboxs = document.getElementsByName('chkCountries');
         for(let i=0; i<checkboxs.length; i++) {
            checkboxs[i].checked = false;
          }
        setSelectedId([]);   
      }

    return (
      <div>
	      <form className="card border" onSubmit={(e) => handleSubmit(e)}>

          <div className="form-group">
            <div className="lbl-form">
              <label htmlFor="nombre">Nombre</label>
            </div>
              <input ref={name} autoComplete="off" className={ `form-input ${errors.name && 'danger'}`} placeholder="Name *" name="name" type="text" required onChange={(e) => handleChange(e)} value={activity.name}/>
            {errors.name && (<p className="danger">{errors.name}</p>)}
          </div>

          <div className="form-group">
            <div className="lbl-form">
              <label htmlFor="difficulty">Dificultad</label>
            </div>

              <select ref={difficulty} name="difficulty" className="form-input" value={activity.difficulty} onChange={(e) => handleChange(e)}>
                  { difficulties.map(difficulty => <option key={difficulty} value={difficulty}>{difficulty}</option>) }
              </select>

          </div>

          <div className="form-group">
            <div className="lbl-form">
              <label htmlFor="nombre">Duración</label>
            </div>

              <input ref={duration} type="text" name="duration" className="form-input" value={activity.duracion} onChange={(e) => handleChange(e)}/>

        </div>

        <div className="form-group">
        <div className="lbl-form">
            <label htmlFor="nombre">Temporada</label>
          </div>

              <select ref={seasson} name="seasson" className="form-input" value={activity.temporada} onChange={(e) => handleChange(e)}>
                { seassons.map(seasson => <option key={seasson}  value={seasson}>{seasson}</option>)}
              </select>
 
          </div>

          <div className="form-group">
          <div className="lbl-form">
            <label htmlFor="nombre">Paises</label>
          </div>

            <div className="countries-container form-input">
            {
              allIdNames.map(idName => <div key={idName.id}><input type="checkbox" name="chkCountries" value={idName.ID} onChange={handleSelect}/>{idName.name}</div>)
            }
            </div>
          </div>

            <div className="form-group form-group-btn">
            { !errors.name && <button type="submit" className="btn-submit">Crear</button> }
            </div>

        </form>
      </div>
    )
}
