"use client";
import {hero,whyChooseUs,services,advantages} from "@/constants/tech-stack/flutter.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";

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
        bg="#2b428c"
        bgOdd="#fff"
        />
        <WhiteBgMatrix
        title={advantages.title}
        Data={advantages.data}
        gridsize={2}
        />
    </div>
  )
}