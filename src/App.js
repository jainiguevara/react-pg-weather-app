import React from 'react';
import { Provider } from 'react-redux'

import store from './store'
import Main from './containers/Main';

const App = ({ children }) => {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}

export default App;
