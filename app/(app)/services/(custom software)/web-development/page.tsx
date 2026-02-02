"use client";
import React from 'react';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HandymanIcon from '@mui/icons-material/Handyman';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PublicIcon from '@mui/icons-material/Public';
import { usePathname } from 'next/navigation';
import StatCounter from '@/components/StatCountDiv/StatCountDiv';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import WhiteBgMatrix from '@/components/WhiteBgMatrix/WhiteBgMatrix';
import TechStack from '@/components/TechStack/TechStack';
import OurServices from '@/components/OurServices/ourServices';
import BlueGrid from '@/components/blueGrid/BlueGrid';
import pageData from '@/constants/services/web-development.json';
import HeroSection from '@/components/HeroSection/HeroSection';
import ShortHeading from '@/components/shortHeading/shortHeading';

const muiIconMap = {
  CheckCircleIcon,
  HandymanIcon,
  BusinessCenterIcon,
  SentimentVerySatisfiedIcon,
  PublicIcon,
};

const loadCounter = pageData.loadCounter;

const WhyChooseUsData = pageData.whyChooseUsData.map((item: any) => ({
  ...item,
  icon: React.createElement(muiIconMap[item.icon as keyof typeof muiIconMap], { fontSize: 'medium' }),
}));

const webDevServicesData = pageData.webDevServicesData;
const industriesData = pageData.industriesData;
const techData = pageData.techStackData;
const ServicesData = pageData.servicesData;
const techInnovationData = pageData.techInnovationData;

function page() {
  return (
    <div>
      <HeroSection title='TOP WEB DEVELOPMENT COMPANY IN INDIA' 
      loadCounter={loadCounter}
      description='Exclusive web development services tailored to meet the specific needs of startups and global companies, available only at Go InfoTech.'
       />
      

      <WhyChooseUs whyChooseUsData={WhyChooseUsData} />
      <WhiteBgMatrix Data={webDevServicesData} title='WEB DEVELOPMENT SERVICES' />

      <BlueGrid
      title='WEB INDUSTRIES GO INFOTECH SOLUTION SERVES:'
      industriesData={industriesData}
      />

      <TechStack techStackData={techData} title="TECH STACK" />
      <OurServices data={ServicesData} />

      <ShortHeading
       title='FEELING LOST IN THE INTRICATE WORLD OF WEB DEVELOPMENT?'
       description='Our expert excellence is at your service, providing personalized web development solutions tailored to your unique business needs.'
       button={{text:"Request A Consultation",bgColor:"#f97316",onClick:()=>{}}}
       />
      <BlueGrid
        title={"TECH INNOVATIONS FOR YOUR WEB APP"}
        gridsize={2}
        description='As a premier Web Development Company in India, we are dedicated to addressing your distinct business needs through our cutting-edge technology and inventive solutions.'
        industriesData={techInnovationData}
      />
    </div>
  )
}

export default page
