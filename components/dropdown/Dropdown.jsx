import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({ menuTitle, description, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState('center');
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current && triggerRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      // Check if dropdown goes outside right edge
      if (dropdownRect.right > windowWidth) {
        setPosition('right');
      }
      // Check if dropdown goes outside left edge
      else if (dropdownRect.left < 0) {
        setPosition('left');
      }
      // Otherwise center it
      else {
        setPosition('center');
      }
    }
  }, [isOpen]);

  return (
    <div 
      ref={triggerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Link */}
      <button className={`flex items-center gap-1 font-semibold text-sm uppercase tracking-wider transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-700'}`}>
        {menuTitle}
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Panel */}
      <div 
        ref={dropdownRef}
        className={`
        absolute top-full pt-4 w-screen max-w-5xl z-50
        transition-all duration-300 ease-in-out px-7
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        ${position === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
        ${position === 'right' ? 'right-0' : ''}
        ${position === 'left' ? 'left-0' : ''}
      `}>
        <div className="bg-white shadow-2xl rounded-xl px-4 overflow-hidden border border-slate-100 flex min-h-[400px]">
          
          {/* Left Side: Description (Matching Image 3) */}
          <div className="w-1/3 bg-slate-50 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase">
              {menuTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* Right Side: Grid Links */}
          <div className="w-2/3 p-10">
            <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              {data.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest border-b border-slate-100 pb-2">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a 
                          href={link.href} 
                          className="text-blue-900 hover:text-blue-600 text-sm font-medium transition-colors block py-1"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* "All Services" Link at bottom */}
            <div className="mt-12 pt-6 border-t border-slate-100">
              <a href={`/${menuTitle.toLowerCase()}`} className="text-blue-900 font-bold text-sm uppercase hover:underline flex items-center gap-2">
                All {menuTitle}
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dropdown;