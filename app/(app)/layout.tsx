import React from 'react'
import ResponsiveAppBar from '@/components/header';
import '../globals.css';
import Footer from '@/components/footer';
import BookingPopup from '@/components/BookingPopup/BookingPopup';
import { BookingProvider } from '@/context/BookingContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

function Applayout({children}: AppLayoutProps) {
  return (
    <div className='overflow-x-hidden'>
        <BookingProvider>
        <ResponsiveAppBar />
        <main>{children}</main>
        <Footer />
        </BookingProvider>
        
    </div>
  )
}

export default Applayout

