import React, { useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import CartContext from '../store/cart-context'

import './Login.css'

const Login = () => {
const emailInputRef = useRef('')
const passwordInputRef = useRef('')
const authCtx = useContext(CartContext)
const history= useHistory()
    const submitHandler =(e)=>{
        e.preventDefault()
     fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvx6z96P8JnB_mk0ZYh5cQRSRtkgwnANc',{
method:'POST',
body:{
    email:emailInputRef.current.value,
    password:passwordInputRef.current.value,
    returnSecureToken:true
},
headers:{
    'Content-Type':'application/json'
}
     }).then(res=>{
        if(res.ok){
        return res.json()
        }
        else {
            return res.json().then(data=>{
                let errormessage = 'Authentication Failed'
                throw new Error(errormessage)
                
            })
            
        }
     })
     .then(data=>{
        console.log(data.idToken);
        authCtx.login(data.idToken)
        history.replace('/store')
     })
     .catch((err)=>{
        alert(err.message)
     })
    }

  return (
    <div className='login-box'>
      
      <form onSubmit={submitHandler} className='login-form'>
        <h1>User Login</h1>
        <label htmlFor="email">Email ID</label>
        <input id='email' type="email" ref={emailInputRef}/>
        <label htmlFor="password">Password</label>
        <input id='password' type="password" ref={passwordInputRef}/>
        <button className='login-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login
