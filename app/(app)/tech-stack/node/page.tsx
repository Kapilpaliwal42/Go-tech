"use client";
import {hero,whyCooseUs,services,techtack} from "@/constants/tech-stack/node.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";
import TechStack from "@/components/TechStack/TechStack";

function page() {
  return (
    <div>
        <HeroSection
        title={hero.title}
        description={hero.description}
        button={hero.button}
        loadCounter={hero.loadCounter}
        />
        <WhyChooseUs
        title={whyCooseUs.title}
        whyChooseUsData={whyCooseUs.data}
        />
        <WhiteBgMatrix
        title={services.title}
        Data={services.data}
        bgColor="#2b428c"
        textColor="white"
        gridsize={2}
        />
        <TechStack
        title={techtack.title}
        techStackData={techtack.data}
        />

    </div>
  )
}

export default page