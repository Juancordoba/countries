import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' //useParams
import './App.css';
import './estilos.scss';
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { addActivities} from './redux/actions'
import { addIdNames} from './redux/actions'

import Countries from './components/pages/Countries'
import Activities from './components/pages/Activities'
import Home from './components/pages/Home'
//import Navigation from './components/shared/Navigation'
import Country from './components/pages/Country'
//import Footer from './components/shared/Footer'

function App() {
  //const {isLogedIn} = useSelector(state => state.countriesReducer)
  const dispatch = new useDispatch();

  useEffect(() => {
      axios.get('http://localhost:3001/activities')
      .then(result => {
        dispatch(addActivities(result.data.rows))
      })
      .catch(error => console.log(error));

      axios.get('http://localhost:3001/countries/names')
      .then(result => {
        dispatch(addIdNames(result.data))
      })
      .catch(error => console.log(error));
    })

  return (
    <Router>
      <Switch>
        <Route path="/countries/:id"><Country /></Route>
        <Route path="/countries" component={Countries}></Route>
        <Route path="/activities" component={Activities}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>

  );
}

export default App;
