import React, { useState } from 'react'
import { useOutletContext, Outlet } from 'react-router-dom'
import './Home.scss'
import LeftSection from '../Main/LeftSection/LeftSection'
import RightSection from '../Main/RightSection/RightSection'
import Post from '../Posts/Posts'
import SendPost from '../SendPost/SendPost'

function Home() {
  const [theme] = useOutletContext()

  return (
    <div className='home-section-container'>
      <SendPost theme={theme} />
      <Post theme={theme} />
    </div>
  )
}

export default Home
