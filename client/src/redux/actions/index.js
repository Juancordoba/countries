/* countries */
export const SET_COUNTRIES = 'SET_COUNTRIES'
export const ADD_ALLIDNAMES = 'ADD_ALLIDNAMES' /* para seleccionar en las actividades */
export const SET_COUNT_COUNTRIES = "SET_COUNT_COUNTRIES"
export const SET_LOGIN = 'SET_LOGIN'
export const FILTER_COUNTRY = 'FILTER_COUNTRY'
export const ADD_ACTIVITIES = 'GET_ACTIVITIES'
export const ADD_ACTIVITIES_FILTER = "ADD_ACTIVITIES_FILTER"
export const DEL_ACTIVITIES_FILTER = "DEL_ACTIVITIES_FILTER"
export const CHANGE_VISIBLE = "CHANGE_VISIBLE" //--------------
export const SET_ORDER = 'SET_ORDER'
export const SET_ORDERBY = 'SET_ORDERBY'
export const SET_VISIBILITY = 'SET_VISIBILITY' // para el modal
/* Navigation */
export const SET_PAGE = 'SET_PAGE'
/* continents */

export const CHECK_REGION = 'SELECT_REGION'

export const setCountries = (countries)  => ({
    type: SET_COUNTRIES , countries
});

export const setCountCountries = (count)  => ({
    type: SET_COUNT_COUNTRIES , count:count
});

export const filterCountry = (filter)  => ({
    type: FILTER_COUNTRY, filter 
});

/* activities */

export const addActivities = (activities)  => ({
    type: ADD_ACTIVITIES, activities 
});

export const addActivitiesFilter = (activityId) => ({
    type : ADD_ACTIVITIES_FILTER, id : activityId
})

export const delActivitiesFilter = (activityId) => ({
    type : DEL_ACTIVITIES_FILTER, id : activityId
})

export const changeVisible = (visible)  => ({
    type: CHANGE_VISIBLE, visible
});

/* continents */

export const checkRegion = (payload)  => ({
    type: CHECK_REGION , payload
});

export const setPage = (page)  => ({
    type: SET_PAGE , page
});

export const setLogin = ()  => ({
    type: SET_LOGIN 
});


export const setOrder = (order)  => ({
    type: SET_ORDER , order
});

export const setOrderBy = (orderby)  => ({
    type: SET_ORDERBY , orderby
});

export const setVisibility = () => ({
    type: SET_VISIBILITY
})

export const addIdNames = (payload) => ({
    type : ADD_ALLIDNAMES, payload
})