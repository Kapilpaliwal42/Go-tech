"use client"
import React from 'react'
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StatCounter from '@/components/StatCountDiv/StatCountDiv';
import { usePathname } from 'next/dist/client/components/navigation';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import { UserCheck, BadgeCheck, ShieldCheck, TrendingUp, Globe, LayoutGrid } from 'lucide-react';
import OurServices from '@/components/OurServices/ourServices';
import TechStack from '@/components/TechStack/TechStack';
import BlueGrid from '@/components/blueGrid/BlueGrid';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupsIcon from '@mui/icons-material/Groups';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import pageData from '@/constants/services/android-app-development.json';

// Icon mapping for Lucide icons
const iconMap = {
  UserCheck,
  BadgeCheck,
  ShieldCheck,
  TrendingUp,
  Globe,
  LayoutGrid
};

// Icon mapping for Material-UI icons
const muiIconMap = {
  TipsAndUpdatesIcon: <TipsAndUpdatesIcon />,
  DeveloperModeIcon: <DeveloperModeIcon />,
  GroupsIcon: <GroupsIcon />,
  DevicesIcon: <DevicesIcon />
};

const loadCounter = pageData.loadCounter;

const whyChooseUsData = pageData.whyChooseUsData.map(item => ({
  ...item,
  icon: React.createElement(iconMap[item.icon as keyof typeof iconMap], { size: 32 })
}));

const servicesData = pageData.servicesData;
const techStackData = pageData.techStackData;
const industryData = pageData.industryData;
const innovationsData = pageData.innovationsData;

const WhomWeServeData = pageData.whomWeServeData.map(item => ({
  ...item,
  Title: item.title,
  icon: muiIconMap[item.icon as keyof typeof muiIconMap]
}));

function page() {
  return (
    <div>
        <div className="relative bg-gray-50 min-h-screen overflow-hidden"> 

    <Breadcrumbs aria-label="breadcrumb" className="p-4">
      <Link href="/" className="text-blue-200 hover:underline text-sm hover:text-gray-500">
        Home
      </Link>
      <Link href="/services" className="text-blue-200 hover:underline hover:text-gray-500">
        Services
      </Link>
      <span className="text-gray-500">{usePathname().split('/')[2].toUpperCase()}</span>
    </Breadcrumbs>
      
      {/* 1. DOTTED PATTERN - Positioned relative to the HERO section */}
      <div className="absolute left-0 top-[50%] w-64 h-96 pointer-events-none z-0">
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle, #2b428c 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
            maskImage: 'radial-gradient(circle at 0% 50%, black 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at 0% 50%, black 50%, transparent 80%)',
            opacity: 0.2
          }}
        />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-[#2b428c] text-5xl font-bold leading-tight">
              {pageData.hero.title}
            </h1>
            <p className="text-[#2b428c] text-xl max-w-md">
{pageData.hero.subtitle}            </p>
            <button className="flex items-center gap-2 p-4 rounded-lg bg-orange-400 w-3xs justify-around">{pageData.hero.ctaButton} <ArrowRight /></button>
          </div>

          {/* RIGHT STATS */}
          <div className="lg:w-1/2 w-2/3">
            <div className="grid  sm:grid-cols-2 gap-6 items-start">
              <div className="space-y-6">
                <StatCounter {...loadCounter[0]} uppercase={true} />
                <StatCounter {...loadCounter[2]} uppercase={true} />
              </div>
              <div className="space-y-6 sm:mt-12">
                <StatCounter {...loadCounter[1]} uppercase={true} />
                <StatCounter {...loadCounter[3]} uppercase={true} />
              </div>
            </div>
          </div>
        </div>

       
       
      </section>
    </div>

    <WhyChooseUs whyChooseUsData={whyChooseUsData} />

    <OurServices  data={servicesData} />

    <TechStack techStackData={techStackData} />

    <section>
  <div className="max-w-full bg-white text-[#2b428c] mx-7 px-6 py-20 space-y-5">
            <div className='flex items-center justify-between flex-col w-full mb-10'>
            <h1 className='text-4xl font-semibold uppercase text-left ' >{pageData.industrySection.title}</h1>
            <p className='p-3 m-4 text-2xl'>{pageData.industrySection.subtitle}</p>
            </div>
    {/* Upper row with 3 columns */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {industryData.slice(0, 3).map((industry, index) => (
        <div
          key={index}
          className="bg-white text-[#2b428c] rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-shadow duration-300 hover:bg-gray-100"
        >
          <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
          <p className="p-4">{industry.description}</p>
        </div>
      ))}
    </div>

    {/* Lower row with 4 columns */}
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 ">
      {industryData.slice(3).map((industry, index) => (
        <div
          key={index}
          className="bg-white text-[#2b428c] rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-shadow duration-300 hover:bg-gray-100"
        >
          <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
          <p className="p-4">{industry.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    <BlueGrid title={pageData.innovationsSection.title}
  description={pageData.innovationsSection.description}
  industriesData={innovationsData}
  gridsize={2}/>

    <BlueGrid title={pageData.whomWeServeSection.title}
   industriesData={WhomWeServeData} 
   gridsize={2}
   bgColor='white'
    textColor='#2b428c'
    />

    <section>
        <div className="bg-[#2b428c] text-white max-w-full mx-auto px-6 py-20 flex items-center justify-between flex-col sm:flex-row space-y-5 ">
            <h1 className="font-bold text-4xl text-center px-5">{pageData.footer.title}</h1>
            <button className='bg-orange-500 hover:bg-orange-600  text-white font-semibold rounded mx-7 min-w-xs h-12'>{pageData.footer.ctaButton}</button>

        </div>
    </section>




    </div>
  )
}

export default page
