import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';

import { clearState } from './../store/weather';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    backgroundColor: '#DDD',
    padding: 15,
    justifyContent: 'center',
    marginBottom: 20,
  }
};

const Header = ({ weather, headerText, clearState }) => {
  const { header, root } = styles
  const { consolidated_weather: data } = weather.forecast;
  return (
    <div style={root}>
      <div style={header}>
        <Typography variant="h5">{headerText}</Typography>
      </div>
      {data && data.length > 0 &&
        <div>
          <Button
            color="primary"
            onClick={clearState}
          >
            <BackIcon />
            Back
          </Button>
        </div>
      }
    </div>
  );
};

export default connect(null, {
  clearState,
})(Header);
