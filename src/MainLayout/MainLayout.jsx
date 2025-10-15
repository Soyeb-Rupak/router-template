import React from 'react'
import Nav from './../components/Nav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
        <Nav />
        <main className='min-h-[calc(100vh-285px)]'>
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default MainLayout

    