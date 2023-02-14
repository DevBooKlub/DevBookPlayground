import React from 'react'
import { useOutletContext } from 'react-router';
import "./ProfileLarge.scss"
import ProfileLargeComponent from './ProfileLargeComponent'

function ProfileLarge() {
  const [theme] = useOutletContext();

  return (
    <div className='profile-section-container'>
      <ProfileLargeComponent theme={theme}/>
    </div>
  )
}

export default ProfileLarge