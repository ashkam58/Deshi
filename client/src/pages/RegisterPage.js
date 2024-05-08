import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function register(ev){
    ev.preventDefault();
    fetch('http://localhost:4000')
  }

  return (
    
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="Passoword" value={password} onChange={ev => setPassword(ev.target.value)} />
        <button>Register</button>
      </form>
    
  );
};

export default RegisterPage;
