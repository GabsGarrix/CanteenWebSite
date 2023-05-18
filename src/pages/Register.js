import React from 'react'

function Register() {
  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
       
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
       
      />
      <button>Register</button>
      <div className="google-signin">
        <button className="google-button" >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Register
