import React from 'react'

const NewUser = ({ firstName, lastName, email, password, passwordConfirm }) => {
  return (
    <>
      <h2>Your Form Data</h2>
      <p>First Name: { firstName }</p>
      <p>Last Name: { lastName }</p>
      <p>Email: { email }</p>
      <p>Password: { password }</p>
      <p>Confirm Password: { passwordConfirm }</p>
    </>
  )
}

export default NewUser;