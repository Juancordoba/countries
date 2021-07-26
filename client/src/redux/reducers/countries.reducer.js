import { SET_COUNTRIES, SET_COUNT_COUNTRIES,FILTER_COUNTRY, SET_PAGE, SET_LOGIN, SET_ORDER, SET_ORDERBY, SET_VISIBILITY, ADD_ALLIDNAMES } from '../actions'  //LOGIN,

const initialState = {
  filter : "",
  countries : [],
  allIdNames : [],
  count : 0,
  page : 0,
  limit : 10,
  isLogedIn : false,
  order : "asc",
  orderBy : "name",
  visibility: false
};

function countriesReducer(state = initialState, action) {

    switch (action.type) {
      case SET_COUNTRIES:
            return {
            ...state,
            countries : action.countries,
            }
            case SET_COUNT_COUNTRIES:
            return {
              ...state,
              count : action.count
            }
      case FILTER_COUNTRY:
            return {
              ...state,
              filter: action.filter
            }
      case SET_LOGIN:
            return {
              ...state,
              isLogedIn : !state.isLogedIn
            }
      case SET_PAGE:
              return {
              ...state,
              page : action.page
              }
      case SET_ORDER:
              return {
              ...state,
              order : action.order
              }
      case SET_ORDERBY:
              return {
              ...state,
              orderBy : action.orderby
              }
      case SET_VISIBILITY:
              return {
                ...state,
                visibility : !state.visibility
              }
      case ADD_ALLIDNAMES:
      return {
        ...state,
        allIdNames : action.payload
      }
      default:
        return state
        }
    }

export default countriesReducer;