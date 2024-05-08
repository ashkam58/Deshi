import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <form className="login">
        <h1>Login</h1>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Passoword' />
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginPage