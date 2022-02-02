import React,{useState} from 'react'
import Header from './Components/Header/header'
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'
import LoginForm from './Components/LoginForm/LoginForm';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
    return(
      <BrowserRouter>
      <Routes>

      <Route path='/Register' element={
        <RegistrationForm/>
      }/>

      <Route path='/Login' element={
        <LoginForm/>
      }/>

      </Routes>
      
        </BrowserRouter>
   

    );
 
  
}


