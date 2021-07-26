import { combineReducers } from 'redux'
import countriesReducer from './countries.reducer'
import activitiesReducer from './activities.reducer'
import regionsReducer from './regions.reducer'

const reducer = combineReducers({
    countriesReducer,
    activitiesReducer,
    regionsReducer
})

export default reducer;