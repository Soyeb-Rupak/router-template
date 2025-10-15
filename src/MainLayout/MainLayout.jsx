import React from 'react'
import Nav from './../components/Nav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import Logout from '../components/Logout';
import UserAuthState from '../components/UserAuthState';

const MainLayout = () => {
  return (
    <div>
        <Nav />
        <div className='flex justify-between'><UserAuthState />   <Logout /></div>
      
        <main className='min-h-[calc(100vh-285px)]'>
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default MainLayout

    