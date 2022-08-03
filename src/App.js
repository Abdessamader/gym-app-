import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import ExerciceDetail from "./Pages/ExerciceDetail";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercices/:id" element={ExerciceDetail} />
      </Routes>






      <Footer />
    </Box>
  );
};

export default App;
