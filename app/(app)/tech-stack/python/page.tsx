"use client";
import {hero,whyChooseUs,services,techStack} from "@/constants/tech-stack/python.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import TechStack from "@/components/TechStack/TechStack";

function page() {
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
        bgOdd="#ffffff"
        />
        <TechStack
        title={techStack.title}
        techStackData={techStack.data}
        />

      
    </div>
  )
}

export default page