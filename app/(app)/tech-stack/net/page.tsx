"use client";
import {hero,whyChooseUs,services,techStack,innovationSection} from "@/constants/tech-stack/net.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import TechStack from "@/components/TechStack/TechStack";
import BlueGrid from "@/components/blueGrid/BlueGrid";



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
      data={services.data}
      bg="#2b428c"
      bgOdd="#fff"
      />
        <TechStack
      title={techStack.title}
      techStackData={techStack.data}
      />

        <BlueGrid
      title={innovationSection.title}
      description={innovationSection.description}
      industriesData={innovationSection.data}
      bgColor="white"
      textColor="#2b428c"
      gridsize={2}
      />
      

    </div>
  )
}

export default page