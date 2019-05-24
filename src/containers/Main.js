import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Search from '../components/Search';
import WeatherForecast from '../components/WeatherForecast';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '90vh',
    padding: 15,
    marginTop: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderStyle: 'solid',
  }
}

const Main = props => {
  const { root, container } = styles
  const { weather: { forecast } } = props
  return (
    <div style={root}>
      <div style={container}>
        <Header {...props} headerText={'Simple Weather Application'} />
        {forecast && forecast.length === 0 ?
          <Search {...props}/> :
          <WeatherForecast {...props} />}
      </div>
    </div>
  );
};

export default connect(
  state => ({
    weather: state.weather,
  })
)(Main);
