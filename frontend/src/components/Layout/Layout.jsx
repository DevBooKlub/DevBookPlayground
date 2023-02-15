import React, { useContext, useState } from 'react'
import './Layout.scss'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import SignInPage from '../SignInPage/SignInPage'
import LeftSection from '../Main/LeftSection/LeftSection'
import RightSection from '../Main/RightSection/RightSection'
import { Outlet } from 'react-router-dom'
import '../../_reset.scss'
import '../../variables/variables.scss'
import { AuthContext } from '../../context/authContext'

function Layout() {
  const { state, dispatch } = useContext(AuthContext)
  const [theme, setTheme] = useState('dark')

  const LS_currentUser = JSON.parse(localStorage.getItem('currentUser'))

  if (!state.currentUser && LS_currentUser) {
    dispatch({ type: 'SETCURRENTUSER', payload: LS_currentUser })
  }

  return (
    <div className={theme}>
      <div className='main background box-shadow'>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className='main-layout-container'>
          <LeftSection theme={theme} setTheme={setTheme} />
          <Outlet context={[theme]} />
          <RightSection theme={theme} setTheme={setTheme} />
        </div>
        {/* <SignInPage/> */}
      </div>
    </div>
  )
}

export default Layout
