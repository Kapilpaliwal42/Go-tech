import React from 'react'
import ResponsiveAppBar from '@/components/header';
import '../globals.css';
import Footer from '@/components/footer';
import BookingPopup from '@/components/BookingPopup/BookingPopup';

interface AppLayoutProps {
  children: React.ReactNode;
}

function Applayout({children}: AppLayoutProps) {
  return (
    <div className='overflow-x-hidden'>
        <ResponsiveAppBar />
        <main>{children}</main>
        <Footer />
        
    </div>
  )
}

export default Applayout

