import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/authContext'
import './ProfileLargeComponent.scss'
import { Outlet } from 'react-router-dom'
import banerImgLight from '../../assets/img/banerLight.jpg'
import banerImgDark from '../../assets/img/darkBanner.jpg'
import defaultUserPic from '../../assets/img/pepeUserPic.jpg'

function ProfileLargeComponent({ theme }) {
  const { state } = useContext(AuthContext)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  )
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
    setCurrentUser(state.currentUser)
  }, [state])

  return (
    <div className='ProfileLargeComponent-container backgroundInner '>
      <div className='banner-container'>
        <img
          className='banner-img '
          src={
            currentUser.userBanner
              ? currentUser.userBanner
              : theme === 'dark'
              ? banerImgDark
              : banerImgLight
          }
          alt=''
        />

        <img
          className='profile-img borderImg'
          src={currentUser.userPic ? currentUser.userPic : defaultUserPic}
          alt=''
        />
      </div>
      <div className='user-details-container'>
        <div className='user-name-conatiner'>
          <h3 className='user-name text'>{currentUser.username}</h3>
        </div>
        <div className='user-nickname-conatiner text'>
          <h3 className='user-nickname text'>
            {currentUser.nickname ? (
              currentUser.nickname
            ) : (
              <h3>Edit your Nickname</h3>
            )}
          </h3>
        </div>
        <div className='user-quote-conatiner'>
          <h3 className='user-quote text'>
            {currentUser.quote ? currentUser.quote : <h3>Edit your Quote</h3>}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ProfileLargeComponent
