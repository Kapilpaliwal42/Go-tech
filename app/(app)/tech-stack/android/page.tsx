"use client";
import {hero,whyChooseUs,services,solution,innovation,whomWeServe} from "@/constants/tech-stack/android.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import BlueGrid from "@/components/blueGrid/BlueGrid";


export default function page() {
  return (
    <div>
         <HeroSection
        title={hero.title}
        loadCounter={hero.loadCounter}
        description={hero.description}
        button={hero.button}
      />
        <WhyChooseUs
        title={whyChooseUs.title}
        whyChooseUsData={whyChooseUs.data}
        />
        <OurServices
        title={services.title}
        servicesData={services.data}
        />
        <BlueGrid
        title={solution.title}
        industriesData={solution.data}
        gridsize={3}
        bgColor="white"
        textColor="#2b428c"
        description={solution.description}
        />
        <BlueGrid
        title={innovation.title}
        industriesData={innovation.data}
        gridsize={2}
        />
        <BlueGrid
        title={whomWeServe.title}
        industriesData={whomWeServe.data}
        gridsize={2}
        bgColor="white"
        textColor="#2b428c"
        icons={true}
        />
        
    </div>
  )
}