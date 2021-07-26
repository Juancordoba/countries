import { ADD_ACTIVITIES, ADD_ACTIVITIES_FILTER,DEL_ACTIVITIES_FILTER } from '../actions'
//,CHANGE_VISIBLE
const initialState = {
  activities : [],
  activities_filter : [],
  difficulties : [1,2,3,4,5],
  seassons : ["Verano","Otoño","Invierno","Primavera"],
};

function activitiesReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_ACTIVITIES:
        return {
        ...state,
        activities : action.activities,
        }
      case ADD_ACTIVITIES_FILTER:
        return {
          ...state,
          activities_filter : state.activities_filter.concat(action.id)
        //   continents : state.continents.map(continent => continent.name===action.payload.name? {...continent,checked:!continent.checked} : {...continent}
        }
      case DEL_ACTIVITIES_FILTER:
        return {
          ...state,
          activities_filter : state.activities_filter.filter(activity => activity !== action.id)
        }
      default:
        return state
        }
    }

export default activitiesReducer;