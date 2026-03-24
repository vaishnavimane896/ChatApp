import React, { useContext } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import{
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
const {currentuser} = useContext(AuthContext)

const ProtectRoute = ({children}) =>{
  if(!currentuser){
    return <Navigate  to="/login"/>
  }
}


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'>
       <Route index element ={ <ProtectRoute>
        <Home />
        </ProtectRoute>} />
        <Route path='login' element ={<Login />} />
        <Route path='register' element ={<Register />} />

    </Route>
   </Routes>
   </BrowserRouter>

  )
}

export default App