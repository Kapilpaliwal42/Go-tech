import  { useState, useEffect, useRef } from 'react';

const StatCounter = ({ limit, label, suffix = "" , uppercase = false,className='',dotted=true ,textclass=''}) => {
        const [count, setCount] = useState(0);
        const [hasStarted, setHasStarted] = useState(false);
        const countRef = useRef(null);


        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => { 
                if (entry.isIntersecting) setHasStarted(true); 
            }, { threshold: 0.3 });
            if (countRef.current) observer.observe(countRef.current);
            return () => { if (countRef.current) observer.unobserve(countRef.current); };
        }, []);

        useEffect(() => {
            if (!hasStarted || count >= limit) return;
            const duration = 2000;
            const increment = Math.ceil(limit / (duration / 16));
            const timer = setInterval(() => {
                setCount((prev) => {
                    const next =  prev + increment;
                    if (next >= limit) { clearInterval(timer); return limit; }
                    return next;
                });
            }, 16);
            return () => clearInterval(timer);
        }, [hasStarted, limit, count]);
        return (
            <div 
                ref={countRef} 
                className={`relative flex flex-col items-start justify-center w-full h-44 bg-[#2b428c] rounded-2xl shadow-xl p-8 overflow-hidden transition-transform hover:scale-[1.02] ${className}`}
            >
                {/* THE DOTTED EFFECT STRUCTURE */}
                {dotted && (
                <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
                        backgroundSize: '12px 12px',
                        maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)'
                    }}
                />
                )}
                <h2 className='text-4xl font-bold text-[#f97316] z-10'>
                    {hasStarted ? count : 0}{suffix}
                </h2>
                <p className={`font-normal ${textclass ? textclass : 'text-white'} text-lg mt-1 leading-tight z-10 ${uppercase ? 'uppercase' : ''}`}>
                    {label}
                </p>
            </div>
        );
    };

    export default StatCounter;