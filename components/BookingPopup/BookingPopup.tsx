"use client";
import React, { useEffect } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactForm from '../ContactForm/ContactForm';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling on the background when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4">
      <div className="relative h-[90vh] w-full max-w-[1050px] overflow-y-auto overflow-x-hidden rounded-lg bg-white shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 z-10 p-1 text-xl font-bold transition-colors hover:text-accent md:text-white text-black"
        >
          X
        </button>

        <div className="grid h-full grid-cols-1 md:grid-cols-[1.5fr_1fr]">
          
          {/* Left Section (Form) */}
          <div className="p-5 md:p-10">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-primary mb-2">
              Booking a Call
            </h2>
            <p className="text-[17px] text-primary mb-4">
              Give us a call today to discuss how we can bring your vision to life with our expert solutions!
            </p>
            
            {/* Scoped Tailwind overrides for the nested ContactForm */}
            <div className="[&_form]:mt-5 [&_form]:bg-transparent [&_form]:p-0 [&_.scheduleCall]:hidden [&_input]:border-[#777771] [&_textarea]:border-[#777771] [&_input]:bg-transparent [&_textarea]:bg-transparent [&_input:focus]:border-accent [&_textarea:focus]:border-accent">
              <ContactForm />
            </div>
          </div>

          {/* Right Section (Contact Info) */}
          <div 
            className="p-5 md:p-10 bg-secondary bg-[url('/m-services-bg.webp')] bg-no-repeat bg-right-bottom bg-auto md:bg-cover"
          >
            <h2 className="text-[22px] font-bold leading-[30px] tracking-[0.9px] text-white uppercase">
              Tell us about your needs
            </h2>
            <p className="mt-2 text-[17px] text-lightBg">
              Just fill out the form or contact us via email or phone
            </p>
            
            <ul className="mt-6 flex flex-col gap-2">
              <li className="flex items-center gap-3 text-accent">
                <MailOutlineIcon fontSize="small" />
                <a href="mailto:projects@go-techsolution.com" className="text-white hover:underline transition-all">
                    projects@go-techsolution.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-accent">
                <MailOutlineIcon fontSize="small" />
                <a href="mailto:career@go-techsolution.com" className="text-white hover:underline transition-all">
                    career@go-techsolution.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-accent">
                <CallIcon fontSize="small" />
                <a href="tel:+91-8769365375" className="text-white hover:underline transition-all">
                    +91-8769365375
                </a>
              </li>
              <li className="flex items-start gap-3 text-accent">
                <LocationOnIcon fontSize="small" className="mt-1 flex-shrink-0" />
                <a href="#" className="text-white hover:underline transition-all">
                  515-517, 5th floor, Amrit Shree, University Road, Udaipur, Rajasthan 313001
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingPopup;