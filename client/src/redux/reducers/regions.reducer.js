import {CHECK_REGION} from '../actions'

const initialState = {
  regions : [
                  {name:'Asia',checked:false},
                  {name:'Oceania',checked:false},
                  {name:'Africa',checked:false},
                  {name:'Polar',checked:false},
                  {name:'Europe',checked:false},
                  {name:'Americas',checked:false}
                ],
};

function regionsReducer(state = initialState, action) {
  
    switch (action.type) {
      case CHECK_REGION:
        return {
          ...state, 
          regions : state.regions.map(region => region.name===action.payload.name? {...region,checked:!region.checked} : {...region}
          )
        }
      default:
        return state
        }
    }

export default regionsReducer;