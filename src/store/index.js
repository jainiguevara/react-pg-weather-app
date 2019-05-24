import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import weather from './weather';

// Combined Reducer/s
const reducers = combineReducers({
  weather,
});

// Create Actual Store
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
