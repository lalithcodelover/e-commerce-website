import React, { useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../store/auth-context'


import './Login.css'

const Login = () => {
const emailInputRef = useRef('')
const passwordInputRef = useRef('')
const [isLogin,setIsLogin] = useState(true)
const authCtx = useContext(AuthContext)

const switchHandler=()=>{
  setIsLogin(prevState=>!prevState)
}
const history= useHistory()
    const submitHandler =(e)=>{
        e.preventDefault()
        let url;
        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6Ar0WTa6mlSE2gOUaGla4m1gizPpIMpo'
        }
        else{
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6Ar0WTa6mlSE2gOUaGla4m1gizPpIMpo'

        }
     fetch(url,{
method:'POST',
body:JSON.stringify({
    email:emailInputRef.current.value,
    password:passwordInputRef.current.value,
    returnSecureToken:true
}),
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
        authCtx.email(emailInputRef.current.value)
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
        <button className='login-btn'>{isLogin ? 'Login':'Create new account'}</button>
        <button type='button' className='switch-btn' onClick={switchHandler}>{isLogin?'Create new account':'Login with existing account'}</button>
      </form>
    </div>
  )
}

export default Login
