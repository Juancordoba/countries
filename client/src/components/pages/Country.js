import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import "../../estilos.scss";
import { setVisibility } from '../../redux/actions'

export default function Country({code}) {
  const { visibility } = useSelector(state => state.countriesReducer) 
  const [country, setCountry] = useState(undefined)
  const dispatch = new useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://localhost:3001/countries/${code}`)
      setCountry(result.data)
    }
    fetchData();
  },[code])

  function closeModal(code){
    dispatch(setVisibility());
  }

  if(!country) return null

  if(!visibility) return(null)
        return(<div className="modal">

            <div className="card-modal">


              <div className="card-country">
              
              
                <div className="flag">
                  <img className="img-flag" src={country.flag} alt=""/>
                </div>
                <div className="details">
                  <div className="card-country-item">
                      <div className="label-left small">
                        Código: 
                      </div>
                      <div className="label-right">
                        {code}
                      </div>
                  </div>  
                  <div className="card-country-item">
                    <div className="label-left small">
                      Nombre:
                    </div> 
                    <div className="label-right">
                      <span>{country.name}</span>
                    </div>
                  </div>
                  <div className="card-country-item">
                    <div className="label-left small">
                      Capital:
                    </div>
                    <div className="label-right">
                      <span>{country.capital}</span>
                    </div>
                  </div> 

                  <div className="card-country-item">
                    <div className="label-left small">
                      Continente:
                    </div>
                    <div className="label-right">
                      <span>{country.region}</span>
                    </div>
                  </div> 

                  <div className="card-country-item">
                    <div className="label-left small">
                      Sub región:
                    </div>
                    <div className="label-right">
                      <span>{country.subregion}</span>
                    </div>
                  </div> 

                  <div className="card-country-item">
                    <div className="label-left small">
                      Area (KM):
                    </div>
                    <div className="label-right">
                    <span>{new Intl.NumberFormat().format(country.area)}</span>
                    </div>
                  </div> 

                  <div className="card-country-item">
                    <div className="label-left small">
                      Población:
                    </div>
                    <div className="label-right">
                      <span>{new Intl.NumberFormat().format(country.population)}</span>
                    </div>
                  </div> 

                </div>

              </div>





              <div className="card-country-activities">

                <div className="card-country-item">
                
                  <table className="table border">
                    <thead className="table-head">
                      <tr>
                        <th style={{textAlign : "left"}}>Nombre</th>
                        <th>Dificultad</th>
                        <th>Duración</th>
                        <th>Temporada</th>
                      </tr>
                    </thead>
                    <tbody>
                    { country.activities.map(activity => <tr>
                        <td style={{textAlign : "left"}}>{activity.name}</td>
                        <td>{activity.difficulty}</td>
                        <td>{activity.duration}</td>
                        <td>{activity.seasson}</td>
                    </tr>)}
                    </tbody>
                  </table>

                  </div>

              </div>

              <div className="btn-modal" onClick={() => closeModal({code})}>close</div>

            </div>

            <div>
              
            </div>
        </div>)

}

