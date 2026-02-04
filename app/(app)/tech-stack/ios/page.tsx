"use client";
import {hero,techStack,whyChooseUs,services} from "@/constants/tech-stack/ios.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import TechStack from "@/components/TechStack/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";


function ios() {
  return (
    <div>
            <HeroSection
        title={hero.title}
        loadCounter={hero.loadCounter}
        description={hero.description}
        button={hero.button}
      />
      <TechStack
        title={techStack.title}
        techStackData={techStack.techStackData}
        />
      <WhyChooseUs
      title={whyChooseUs.title}
      whyChooseUsData={whyChooseUs.data}
      />
      <OurServices
        title={services.title}
        data={services.data}
        bg="#2b428c"
        bgOdd="#ffffff"
        />


    </div>
  )
}

export default ios