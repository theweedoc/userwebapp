import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function DropDownC(props) {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth mt={4}>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={city}
    label={props.label}
    onChange={handleChange}
  >

          <MenuItem value={10}>Test</MenuItem>
          <MenuItem value={20}>Test</MenuItem>
          <MenuItem value={30}>Test</MenuItem>
          <MenuItem value={30}>Test</MenuItem>
          <MenuItem value={30}>Test</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
