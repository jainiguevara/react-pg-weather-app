import React from 'react';
import { List, ListItem } from '@material-ui/core';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  listContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  listStyle: {
    display: 'flex',
    width: '100%',
  },
  listItemStyle: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 50,
  },
  headerText: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
  }
}

const WeatherForecast = ({ weather }) => {
  const { consolidated_weather: data } = weather.forecast;
  const {
    listContainer,
    listItemStyle,
    listStyle,
    root,
    headerText
  } = styles;
  
  return (
    <div style={root}>
      <div style={headerText}><strong>5-Day Forecast for {weather.forecast.title}</strong></div>
      <List style={listContainer} component="nav">
        {data.map(d => (
        <ListItem
          key={d.woeid}
          style={listStyle}
          button
        >
          <div style={listItemStyle}>
            <div>{d.applicable_date}</div>
            <div>{d.weather_state_name}</div>
          </div>
          <div style={{ ...listItemStyle, textAlign: 'center' }}>
            <div>{Number.parseFloat(d.min_temp).toFixed(1)} °C</div>
            <div>Min</div>
          </div>
          <div style={{ ...listItemStyle, textAlign: 'center' }}>
            <div>{Number.parseFloat(d.max_temp).toFixed(1)} °C</div>
            <div>Max</div>
          </div>
        </ListItem>
        ))}
      </List>
    </div>
  );
};

export default WeatherForecast;
