import React from 'react'
import { Navigate,Outlet, useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import { useAuthStatus } from './hooks/useAuthStatus'
const PrivetRoute = () => {
    const {loggedIn,isLoading}=useAuthStatus()
    if(isLoading){
        return <Spinner/>
    }
    return loggedIn?<Outlet/>:<Navigate to='/sign-in'/>
}

export default PrivetRoute