import React from 'react'
import { Box, Typography } from '@mui/material'
import CardsInFilterSection from './CardsInFilterSection'

function Hotels() {
  return (
    <>
      <Box sx={{ margin: '20px 100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3" sx={{ width: '900px', textAlign: 'center' }}>
          Rating of the most popular <br />
          hotels in Bishkek that deserve attention.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 100px' }}>
        <Box>
          <CardsInFilterSection />
          <CardsInFilterSection />
          <CardsInFilterSection />
        </Box>

        <Box>
          <CardsInFilterSection />
          <CardsInFilterSection />
          <CardsInFilterSection />
        </Box>

        <Box>
          <CardsInFilterSection />
          <CardsInFilterSection />
          <CardsInFilterSection />
        </Box>
      </Box>
    </>
  )
}

export default Hotels