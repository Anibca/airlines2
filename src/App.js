import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Routes ,Router , Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import axios from "axios";
// import Table from "./Table";
// import 'semantic-ui-css/semantic.min.css'
import  { useState, useEffect } from "react";
import Flights from './pages/Flights';
import Header from './pages/Header';
import Airline from './pages/Header';


function App () {
  return (<>
   < Header />
   <Routes>
   {/* <Route exact path='/airline' element={ <Airline /> }></Route> */}
    <Route  path='/flights' element={< Flights /> } ></Route>
         </Routes>
   </>
  );
}

export default App;
