import React from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Box } from "@mui/material";
import "./App.css";
import ExerciceDetail from "./Pages/ExerciceDetail";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



const App = () => {
  return (
    <Router>
    <Box width="400px" sx={{ width: {xl:'1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/exercice/:id" element={ExerciceDetail} />
      </Routes>

      <Footer />
    </Box>
    </Router>
  );
};

export default App;
