import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function SearchBarAutoComplete() {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Movie" />
      )}
    />
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },

    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },

    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },
    { title: 'Movie Name', year: 2022 },

  
  
];