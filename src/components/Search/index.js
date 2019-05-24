import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { searchCity, getForecast } from './../../store/weather';
import SearchField from './SearchField'
import ResultsTable from './ResultsTable';

const Search = props => {
  const { weather, searchCity } = props;
  const [data, setData] = useState(undefined);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      alignItems: 'center',
    }
  }
  
  useEffect(() => {
    setData(weather.cities)
  }, [weather.cities])


  const submitSearch = e => {
    if (e.key === 'Enter') {
      const { value } = e.target
      if (value && value !== '' && value.length >= 2) {
        searchCity(value);
      } else {
        setData([])
      }
    }
  }

  return (
    <div style={styles.container}>
      <SearchField {...props} submitSearch={submitSearch} />
      <ResultsTable {...props} data={data} />
    </div>
  );
};

export default connect(
  null,
  { // map dispatch to props
    searchCity,
    getForecast,
  }
)(Search);
