import React, {useState, useEffect} from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'

const SearchExercices = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {lg: '28px', xs: '18px'}
      }} mb="50px" textAlign="center" >
        Exercices You should Know 
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input: { fontWeight: '500px', border: 'none', borderRadius: '4px' },
          width: { lg: '800px', xs: '250px' }, backgroundColor: '#fff', borderRadius: '0px' 
        }}
        height="76px" value="" onChange={(e)=>  {}} 
        placeholder ="Search Exercices"
        type="text"
        />
         <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
      </Box>

    </Stack>
  )
}

export default SearchExercices