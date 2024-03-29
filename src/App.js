import React, { useContext } from "react";
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { AuthContext } from "./components/Context/AuthContext";
import Pnf from "./components/Default/Pnf";
import ResetPassword from "./components/Auth/ResetPassword";
import {ToastContainer} from 'react-toastify'
import GeneratePassword from "./components/Auth/GeneratePassword";
import Home from "./components/Default/Home";
import PrivateRoute from "./components/PrivateAuth/PrivateRoute";
import Header from './components/Default/Header';
import CallPatient from "./components/Default/CallPatient";
import Notification from "./components/Default/Notification";
 
const App = () => {
  const context = useContext(AuthContext)
  const isLogin = context.isLogin
  return(
    //  <BrowserRouter>
    //  <Header />
    //     <ToastContainer autoClose={4000} position={'top-right'}/>
    //     <Routes>
    //     <Route element={<PrivateRoute />}>
    //       <Route path='/' element={<Home/>}></Route>
    //     </Route>

    //     <Route exact path={`/password/reset`} element={isLogin? <Navigate to={`/`}/>: <ResetPassword/>} />
    //     <Route path='/login' element={isLogin ? <Navigate to={`/`}/> : <Login></Login>}></Route>
    //     <Route path='/generate/password' element={isLogin ? <Navigate to={`/`}/> : <GeneratePassword></GeneratePassword>}></Route>
    //     <Route path='/register' element={isLogin ? <Navigate to={`/`}/> : <Register></Register>}></Route>
    //     <Route path="/patient/:id" element={<CallPatient/>}/>
    //     <Route path='/*' element={<Pnf></Pnf>}></Route>
    //     </Routes>
    //  </BrowserRouter>
    <>
    <Notification/>
    </>
  )
}

export default App