import React from 'react'; 
// import { useState} from 'react';
import { Box} from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercices from '../Components/SearchExercices';
import Exercices from '../Components/Exercices';
function Home() {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercices/>
      <Exercices/>
    </Box>
  )
}

export default Home