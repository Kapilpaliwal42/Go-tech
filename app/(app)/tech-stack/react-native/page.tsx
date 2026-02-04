"use client";
import {hero,whyChooseUs,services,advantages,techStack} from "@/constants/tech-stack/react-native.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";
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
        bgOdd="#fff"
        />
        <WhiteBgMatrix
        title={advantages.title}
        Data={advantages.data}
        />
        <TechStack
        techStackData={techStack}
        />
        

    </div>
  )
}

export default page