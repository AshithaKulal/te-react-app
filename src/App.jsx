import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Component/Navbar';
//FuncComp - alias - start with an Uppercase
import FuncComp from './Component/Functionalcomponent';
import ClassComp from './Component/Classcomponent';
//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar/>
     <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
   
     </Routes>
    </div>
  );
}

export default App;
