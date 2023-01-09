import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function ChipAutoComplete() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={Genre}
        getOptionLabel={(option) => option.type}
        placeholder="Genre"

        renderInput={(params) => (
          <TextField
            {...params}
          />
        )}
      />
    </Stack>
  );
}

const Genre = [
  { type: 'Action'},
  { type: 'Thriller' },
  { type: 'Romance'},
  { type: 'SuperHero'},
  { type: 'Art' },
  { type: "Comedy"},
  { type: 'Science Friction'},
  { type: 'Tamil'},
  { type: 'English'},


 ,
];