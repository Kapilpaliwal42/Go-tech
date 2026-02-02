"use client";
import OurServices from '@/components/OurServices/ourServices';
import TechStack from '@/components/TechStack/TechStack';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Marquee from '@/components/Marquee/Marquee';
import HeroSection from '@/components/HeroSection/HeroSection';
import BlueGrid from '@/components/blueGrid/BlueGrid';
import { UserCheck,BadgeCheck,ShieldCheck,TrendingUp,Globe,LayoutGrid } from 'lucide-react';
import {hero,loadCounter,industriesData,whyChooseUsData} from '@/constants/services/index.json';







function Page() {
    

    return (
  <div className="overflow-x-hidden"> {/* Prevent horizontal scroll from dots */}
    {/* 1. HERO SECTION */}
    <HeroSection 
      title={hero.title}
      description={hero.description}
      button={{text:hero.ctaButton,bgColor:"#f97316",onClick:()=>{}}}
      loadCounter={loadCounter}
      children={<Marquee/>}
    />
    

    {/* SEPARATE SECTIONS */}
    <OurServices />
    <TechStack />
   {/* Why Choose Us Section */}
    <WhyChooseUs whyChooseUsData={whyChooseUsData.points} />

          {/* industries Section */}

         <BlueGrid 
         
          industriesData={industriesData.points}
          title={industriesData.title}
          description={industriesData.description}
          button={{text:industriesData.ctaButton,bgColor:"#f97316",onClick:()=>{}}}
          gridsize={3}
          bgColor="#2b428c"
          textColor="white"
         />
  </div>
);
}

export default Page;