import React, { useState } from 'react'
import NewUser from './NewUser';
import './style.css';

const UserForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const createNewUser = (e) =>{
    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }

    console.log("Se creo el usuario:");
    alert(`Se creo a ${user.firstName} ${user.lastName}, con correo ${user.email}`);
  }

  return (
    <>
      <form onSubmit={createNewUser}>
        <div className='formGroup'>
          <label>First Name:</label>
          <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className='formGroup'>
          <label>Last Name:</label>
          <input type="text" onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className='formGroup'>
          <label>Email:</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='formGroup'>
          <label>Password:</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='formGroup'>
          <label>Confirm Password:</label>
          <input type="password" onChange={(e)=>setPasswordConfirm(e.target.value)}/>
        </div>
        <input className='submit' type="submit" value="Create User" />
      </form>
      <NewUser 
        firstName={ firstName }
        lastName={ lastName }
        email={ email }
        password={ password }
        passwordConfirm={ passwordConfirm }
      />
    </>
  )
}

export default UserForm;