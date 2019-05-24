import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderStyle: 'solid',
  },
  list: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    backgroundColor: '#fff',
  }
}

const ResultsTable = props => {
  const { data, getForecast } = props
  const { container, row, list } = styles
  if (data && data.length > 0) {
    return (
      <div style={container}>
          <div style={list}>
            <List component="nav">
              {data.map((d, i) => (
              <ListItem
                key={d.woeid}
                style={{...row }}
                onClick={() => getForecast(d.woeid)}
                button
              >
                <ListItemText primary={d.title} />
              </ListItem>
              ))}
            </List>
          </div>
      </div>
    );
  }
  return null;
};

export default ResultsTable;
