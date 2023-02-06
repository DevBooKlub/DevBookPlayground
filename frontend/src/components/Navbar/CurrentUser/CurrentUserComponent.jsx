import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext';
import "./CurrentUser.scss"

function CurrentUserComponent() {
  const {currentUser} = useContext(AuthContext);

  return (
    <>
    <img className="user-img-nav " src={currentUser.profilePic} alt="" />
      <p className="user-name text">{currentUser.name}</p>
    </>
  )
}

export default CurrentUserComponent