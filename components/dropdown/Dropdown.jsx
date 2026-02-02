import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Dropdown = ({ menuTitle, href, description, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState("center");
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      if (rect.right > window.innerWidth) setPosition("right");
      else if (rect.left < 0) setPosition("left");
      else setPosition("center");
    }
  }, [isOpen]);

  const lower = menuTitle.toLowerCase();
  const isProjects = lower === "projects";
  const isIndustries = lower === "industries";
  const isTechStack = lower === "tech stack" || lower === "techstack" || lower === "tech";
  const isCompany = lower === "company";

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* TRIGGER */}
      <button
        className={`flex items-center gap-1 font-semibold text-sm uppercase transition-colors
        ${isOpen ? "text-blue-600" : "text-slate-700"}`}
      >
        {menuTitle}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN CONTAINER */}
      <div
        ref={dropdownRef}
        className={`
          absolute top-full pt-4 w-screen max-w-6xl z-50 px-6
          transition-all duration-300 ease-out
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
          ${position === "center" ? "left-1/2 -translate-x-1/2" : ""}
          ${position === "right" ? "right-0" : ""}
          ${position === "left" ? "left-0" : ""}
        `}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex min-h-[400px]">
          
          {/* SPECIALIZED LAYOUT: PROJECTS */}
          {isProjects && (
            <div className="grid grid-cols-3 w-full">
              <div className="p-10 bg-slate-50">
                <h3 className="text-xl font-bold text-blue-900">{data.featured?.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{data.featured?.subtitle}</p>
                {data.featured?.image && <img src={data.featured.image} className="mt-6 rounded-lg shadow-md" alt="Featured" />}
              </div>
              <div className="p-10">
                <h4 className="text-sm font-bold text-slate-400 uppercase mb-6">All Industries</h4>
                <ul className="space-y-4">
                  {data.industries?.map((item, i) => (
                    <li key={i} className="flex gap-3 font-medium text-blue-900">
                      <span>{item.icon}</span> {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 flex items-center justify-center bg-slate-50">
                <img src={data.previewImage} className="rounded-xl shadow-lg max-h-[300px]" alt="Preview" />
              </div>
            </div>
          )}

          {/* SPECIALIZED LAYOUT: TECH STACK */}
          {isTechStack && (
            <div className="flex w-full">
              <div className="w-1/3 bg-slate-50 p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-blue-900 uppercase">{menuTitle}</h2>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
              <div className="w-2/3 p-10">
                <div className="grid grid-cols-3 gap-8">
                  {['frontend', 'backend', 'mobile'].map((key) => (
                    <div key={key}>
                      <h4 className="text-xs font-bold uppercase text-slate-400 mb-3">{key.replace('-', ' ')}</h4>
                      <ul className="space-y-3">
                        {(data[key] || []).map((t, i) => (
                          <li key={i} className="text-blue-900 font-medium text-sm">{t}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DEFAULT / DYNAMIC GRID LAYOUT (Covers Industries, Company, and General Services) */}
          {!isProjects && !isTechStack && (
            <div className="flex w-full">
              <div className="w-1/3 bg-slate-50 p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-blue-900 uppercase">{menuTitle}</h2>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
              <div className="w-2/3 p-10">
                {Array.isArray(data) && data.length > 0 ? (
                  <div className="grid grid-cols-3 gap-x-6 gap-y-8">
                    {data.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest border-b border-slate-100 pb-2">
                          {section.category}
                        </h3>
                        <ul className="space-y-2">
                          {section.links?.map((link, lIdx) => (
                            <li key={lIdx}>
                              <Link href={link.href} className="text-blue-900 hover:text-blue-600 text-sm font-medium transition-colors block py-1">
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
                    <p className="text-slate-500 italic">No items available</p>
                  </div>
                )}
                {href && (
                  <div className="mt-12 pt-6 border-t border-slate-100">
                    <Link href={href} className="text-blue-900 font-bold text-sm uppercase hover:underline flex items-center gap-2">
                      All {menuTitle} <span>→</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;