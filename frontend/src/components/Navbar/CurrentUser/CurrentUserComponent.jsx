import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext';
import "./CurrentUser.scss"

function CurrentUserComponent() {
  const {state} = useContext(AuthContext);

  return (
    <>
    <img className="user-img-nav " src={state.currentUser.userPic} alt="" />
      <p className="user-name text">{state.currentUser.username}</p>
    </>
  )
}

export default CurrentUserComponent