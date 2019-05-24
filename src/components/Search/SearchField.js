import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '50%',
    marginBottom: theme.spacing(3)
  },
}));

const SeachField = props => {
  const { submitSearch } = props
  const classes = useStyles()

  return (
    <TextField
    label="Enter a City Name"
    id="search-field"
    variant="outlined"
    placeholder="Search for a City"
    className={classes.textField}
    onKeyPress={submitSearch}
    InputProps={{
      startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
    }}
  />
  );
};

export default SeachField;
