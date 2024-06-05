import * as React from 'react';
import { Box, TextField, Autocomplete, Rating } from '@mui/material';

export default function FilterByLocation() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={places}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`./icon_location-outline.png 2X`}
            src={`./icon_location-outline.png`}
            alt=""
          />

          {option.title} ({option.subtitle})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          variant='filled'
          color='warning'
          sx={{background: 'white', borderRadius: '8px'}}
          {...params}
          label={
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <img style={{height: '25px', marginRight: '15px'}} src="./Search.svg" alt="search icon" />
              Enter  a destination  or property 
            </Box>
          }
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
}

const places = [
  {
    title: 'Bishkek',
    subtitle: 'Bishkek'
  },
  {
    title: 'Karakol', 
    subtitle: 'Kyrgyzstan'
  },
  {
    title: 'Cholpon -Ata',
    subtitle: 'Kyrgyzstan'
  },
  {
    title: 'Osh ',
    subtitle: 'Kyrgyzstan'
  }
];