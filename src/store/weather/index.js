// actions
const SEARCH_CITY = 'SEARCH_CITY';
const GET_FORECAST = 'GET_FORECAST';
const CLEAR_STATE = 'CLEAR_STATE';

// action creators
export const searchCity = city => dispatch => {
  fetch(`/api/location/search/?query=${city}`)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      dispatch({ type: SEARCH_CITY, payload: err })
    })
    .then(res => {
      dispatch({ type: SEARCH_CITY, payload: res })
    })
};

export const getForecast = woeid => dispatch => {
  fetch(`/api/location/${woeid}/`)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      dispatch({ type: GET_FORECAST, payload: err })
    })
    .then(res => {
      dispatch({ type: GET_FORECAST, payload: res })
    })
};

export const clearState = () => dispatch => {
  dispatch({ type: CLEAR_STATE })
}

//reducer
const initialState = {
  cities: [],
  forecast: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SEARCH_CITY:
      return { ...state, cities: payload };
    case GET_FORECAST:
      return { ...state, forecast: payload };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  };
}

export default reducer;

