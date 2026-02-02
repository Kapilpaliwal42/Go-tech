"use client";
import React, { createContext, useContext, useState } from 'react';
import BookingPopup from '@/components/BookingPopup/BookingPopup'; 

interface BookingContextType {
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      {/* The Popup stays here, at the root of your app */}
      <BookingPopup isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};