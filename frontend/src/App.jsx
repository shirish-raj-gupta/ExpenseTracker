import React from 'react'
import './index.css'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router'
import Login from './pages/Auth/Login'
import { SignUp } from './pages/Auth/SignUp'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'

const App = () => {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Root />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/signUp' element={<SignUp />}/>
           <Route path='/dashboard' element={<Home />}/>
           <Route path='/income' element={<Income />}/>
           <Route path='/expense' element={<Expense />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = ()=>{
  const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? (
      <Navigate to='/dashboard'/>
    ):
  (
    <Navigate to =  '/login'/>
  )
  
}