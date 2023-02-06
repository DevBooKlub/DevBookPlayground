import React from 'react'
import "./CurrentUser.scss"

function CurrentUserComponent({currentUser}) {
  return (
    <>
    <img className="user-img-nav " src={currentUser.profilePic} alt="" />
      <p className="user-name text">{currentUser.name}</p>
    </>
  )
}

export default CurrentUserComponent