import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Dropdown = ({ menuTitle, href, description, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState('center');
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current && triggerRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (dropdownRect.right > windowWidth) {
        setPosition('right');
      } else if (dropdownRect.left < 0) {
        setPosition('left');
      } else {
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
      {/* TRIGGER */}
      <button className={`flex items-center gap-1 font-semibold text-sm uppercase tracking-wider transition-colors py-4 ${isOpen ? 'text-blue-600' : 'text-slate-700'}`}>
        {menuTitle}
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* DROPDOWN PANEL */}
      <div 
        ref={dropdownRef}
        className={`
        absolute top-full w-screen max-w-5xl z-50
        transition-all duration-300 ease-in-out px-7
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        ${position === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
        ${position === 'right' ? 'right-0' : ''}
        ${position === 'left' ? 'left-0' : ''}
      `}>
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-100 flex min-h-[400px]">
          
          {/* Left Side: Description Panel */}
          <div className="w-1/3 bg-slate-50 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase">
              {menuTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* Right Side: Grid Links */}
          <div className="w-2/3 p-10 flex flex-col justify-between">
            {data && data.length > 0 ? (
              <div className="grid grid-cols-3 gap-x-6 gap-y-8">
                {data.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest border-b border-slate-100 pb-2">
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <Link 
                            href={link.href} 
                            className="text-blue-900 hover:text-blue-600 text-sm font-medium transition-colors block py-1"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-slate-500 italic">More information coming soon</p>
              </div>
            )}
            
            {/* Footer Link */}
            {href && (
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link href={href} className="text-blue-900 font-bold text-sm uppercase hover:underline flex items-center gap-2">
                  All {menuTitle} <span className="text-lg">→</span>
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dropdown;