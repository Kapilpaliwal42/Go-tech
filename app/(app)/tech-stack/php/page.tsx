"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";
import TechStack from "@/components/TechStack/TechStack";
import {hero ,whyChooseUs,services,techStack}  from "@/constants/tech-stack/php.json";


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

      <WhiteBgMatrix
      title={services.title}
      bgColor="#2b428c"
      textColor="white"
      Data={services.data}
      />


      <TechStack
      title={techStack.title}
      techStackData={techStack.data}
      />

    </div>
  )
}

export default page