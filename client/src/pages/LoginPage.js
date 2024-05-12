import React, { useState } from 'react';
import {Navigate} from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect]= useState('')


  async function login(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method:'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    if(response.ok){
      setRedirect(true);
    } else{
      alert('Wrong credential')
    }
  }

  if(redirect){
    return <Navigate to = {'/'}/>
  }
  return (
    <div>
        <form className="login" onSubmit={login}>
        <h1>Login</h1>
            <input type="text" placeholder='Username' value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="password" placeholder='Passoword' value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginPage