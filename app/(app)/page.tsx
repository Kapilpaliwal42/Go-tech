"use client";
import  { useState, useEffect } from 'react';
import { 
  IdCard, 
  FileSearchCorner, 
  FileCode, 
  BrainCircuit, 
  ArrowRight,
  UserCheck,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import OurServices from '@/components/OurServices/ourServices';
import StatCounter from '@/components/StatCountDiv/StatCountDiv';
import TechStack from '@/components/TechStack/TechStack';
import pageData from '@/constants/root.json';


// Icon mapping
const iconMap = {
  UserCheck,
  Globe,
  ShieldCheck,
  IdCard,
  FileSearchCorner,
  FileCode,
  BrainCircuit
};

// Map icon strings to actual components
const AboutUsTimerDivs = pageData.aboutUsTimerDivs;
const whyChooseUsData = pageData.whyChooseUsData.map(item => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap]
}));
const ServicesData = pageData.servicesData.map(item => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap]
}));
const topIncreaseNumbers = pageData.topIncreaseNumbers;

// Simple hero counter that animates on mount (starts immediately)
const HeroCounter = ({ limit, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (limit <= 0) return;
    const duration = 1500; // ms
    const stepTime = 16;
    const increments = Math.max(1, Math.ceil(limit / (duration / stepTime)));
    const t = setInterval(() => {
      setCount((prev) => {
        const next = prev + increments;
        if (next >= limit) { clearInterval(t); return limit; }
        return next;
      });
    }, stepTime);
    return () => clearInterval(t);
  }, [limit]);

  return (
    <div className='bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center'>
      <div className='text-2xl md:text-3xl font-bold text-[#2b428c]'>{count}{suffix}</div>
      <div className='text-sm text-gray-500 mt-1  text-center'>{label}</div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-10 overflow-hidden">
        {/* Decorative white blocks in hero (muted + placed behind content) */}
        <div aria-hidden className="absolute left-12 top-20 w-20 h-12 bg-white/10 rounded-lg rotate-3 transform z-0 pointer-events-none" />
        <div aria-hidden className="absolute right-16 top-28 w-32 h-16 bg-white/10 rounded-xl -rotate-6 transform z-0 pointer-events-none" />
        <div aria-hidden className="absolute right-24 bottom-40 w-20 h-10 bg-white/10 rounded-md rotate-12 transform z-0 pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-16 z-20">
          <div className="max-w-[500px] text-center lg:text-left">
            <h1 className='text-[#2b428c] font-bold text-5xl md:text-6xl leading-tight uppercase'>{pageData.hero.title}</h1>
            <p className='font-light mt-6 text-xl text-[#2b428c] leading-relaxed'>{pageData.hero.subtitle}</p>
            <button  className='bg-orange-500  hover:bg-orange-600 transition-all transform hover:scale-105 py-4 px-10 rounded text-white mt-8 shadow-xl font-bold uppercase'>{pageData.hero.ctaButton}</button>

            {/* counters from topIncreaseNumbers */}
            <div className="mt-8 grid grid-cols-1  text-[#2b428c] sm:grid-cols-3 gap-4">
              {topIncreaseNumbers.map((n, idx) => (
                <HeroCounter key={idx} limit={n.limit} label={n.label} />
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full max-w-2xl min-h-[500px]">
            <div className="absolute w-[500px] h-[500px] md:w-[850px] md:h-[850px] opacity-20 animate-[spin_80s_linear_infinite] rounded-full"
              style={{ backgroundImage: 'radial-gradient(#2b428c 4px, transparent 4px)', backgroundSize: '45px 45px', maskImage: 'radial-gradient(circle, transparent 30%, black 50%, transparent 75%)', WebkitMaskImage: 'radial-gradient(circle, transparent 30%, black 50%, transparent 75%)' }} />
            <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] opacity-40 animate-[spin_50s_linear_reverse_infinite] rounded-full"
              style={{ backgroundImage: 'radial-gradient(#2b428c 5px, transparent 5px)', backgroundSize: '35px 35px', maskImage: 'radial-gradient(circle, transparent 20%, black 50%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, transparent 20%, black 50%, transparent 70%)' }} />
            <img src="/HomePageTop.png" alt="Hero" className="relative z-10 mx-auto w-full max-w-[300px] md:max-w-lg drop-shadow-2xl" />
          </div>

        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <OurServices />

      {/* 4. CTA SECTION */}
      <section className="w-full bg-gray-100 py-16 text-[#2b428c] text-center px-6">
        <h2 className='text-3xl md:text-4xl font-bold uppercase'>{pageData.cta.title}</h2>
        <button className='bg-orange-500 hover:bg-orange-600 transition-all py-4 px-10 rounded text-white mt-8 shadow-xl font-bold inline-flex items-center gap-3'>{pageData.cta.buttonText} <ArrowRight size={20} /></button>
      </section>

      {/* 3. WHY CHOOSE US SECTION  */}
      <section className='bg-[#2b428c] text-white py-24 px-6'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-6">
            <h2 className='text-5xl font-bold uppercase'>{pageData.whyChooseUsSection.title}</h2>
            <div className="w-20 h-1 bg-orange-500 mb-8"></div>
            
            <div className="space-y-4">
              {whyChooseUsData.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#3d56a6] rounded-lg flex items-center justify-center shadow-inner">
                      <item.icon  size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 tracking-wide uppercase">{item.title}</h3>
                    <p className="text-blue-100/80 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-[#1b295a] p-8 rounded-2xl border border-blue-400/20 shadow-2xl">
               <h3 className="text-2xl font-bold mb-4 uppercase text-orange-400 tracking-wider">{pageData.whyChooseUsSection.expertiseBox.title}</h3>
               <p className="text-blue-100 leading-relaxed text-lg">{pageData.whyChooseUsSection.expertiseBox.description}</p>
            </div>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {AboutUsTimerDivs.map((item, index) => (
                <StatCounter key={index} limit={item.limit} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 5. TECH STACK SECTION */}
      <TechStack />
      
      
    </div>
  );
}