"use client";
import OurServices from '@/components/OurServices/ourServices';
import TechStack from '@/components/TechStack/TechStack';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Marquee from '@/components/Marquee/Marquee';
import HeroSection from '@/components/HeroSection/HeroSection';
import BlueGrid from '@/components/blueGrid/BlueGrid';
import {hero,industriesData,whyChooseUs} from '@/constants/services/index.json';







function Page() {
    

    return (
  <div className="overflow-x-hidden"> {/* Prevent horizontal scroll from dots */}
    {/* 1. HERO SECTION */}
    <HeroSection 
      title={hero.title}
      description={hero.description}
      button={{text:hero.button.text,bgColor:hero.button.bgColor}}
      loadCounter={hero.loadCounter}
      children={<Marquee/>}
    />
    

    {/* SEPARATE SECTIONS */}
    <OurServices />
    <TechStack />
   {/* Why Choose Us Section */}
    <WhyChooseUs 
          title={whyChooseUs.title}
          whyChooseUsData={whyChooseUs.data} />

          {/* industries Section */}

         <BlueGrid 
         
          industriesData={industriesData.data}
          title={industriesData.title}
          description={industriesData.description}
          gridsize={3}
          bgColor="#2b428c"
          textColor="white"
         />
  </div>
);
}

export default Page;