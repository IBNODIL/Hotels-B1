import React from 'react'
import { Rating, Box } from '@mui/material';

function FilterByStar() {

  const [value, setValue] = React.useState(5);

  return (
    <Box sx={{height: '56px', display: 'flex', alignItems: 'center', background: 'white', padding: '0 25px', borderRadius: '8px'}}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  )
}

export default FilterByStar
