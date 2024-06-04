import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import EnglishIcon from '../assets/img/EN-language.svg'
import UzbekIcon from '../assets/img/UZ-language.svg'

function LanguageSelector() {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80 , boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
        <Select
          labelId="language-selector-label"
          defaultValue="en"
          inputProps={{
            name: 'language',
            id: 'Languages',
          }}
        >
          <MenuItem value="en">
            <img src={EnglishIcon} alt="English" style={{ width: 20, height: 20, marginRight: 10 }} />
            EN
          </MenuItem>
          <MenuItem value="es">
            <img src={UzbekIcon} alt="Spanish" style={{ width: 20, height: 20, marginRight: 10 }} />
            UZ
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default LanguageSelector;
