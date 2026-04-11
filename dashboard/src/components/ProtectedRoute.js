import React from 'react'

const ProtectedRoute = ({
    children
}) => {
    const token = localStorage.getItem('token')
   console.log(token)
    if (!token) {
        return window.location.href = "http://localhost:3001/login" 
    }
    return children
}

export default ProtectedRoute
