"use client";
import {hero,whyChooseUs,services,techStack,shortHeading} from "@/constants/tech-stack/angular.json"
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";
import TechStack from "@/components/TechStack/TechStack";
import ShortHeading from "@/components/shortHeading/shortHeading";

function page() {
  return (
    <div>
        <HeroSection
        title={hero.title}
        description={hero.description}
        loadCounter={hero.loadCounter}
        button={{text:"GET INFO"}}
        />
        <WhyChooseUs
        title={whyChooseUs.title}
        whyChooseUsData={whyChooseUs.data}
        />
        <WhiteBgMatrix
        title={services.title}
        Data={services.data}
        bgColor="#2b428c"
        textColor="white"
        gridsize={2}
        />4
        <TechStack
        title={techStack.title}
        techStackData={techStack.data}
        />
        <ShortHeading
        title={shortHeading.title}
        description={shortHeading.description}
        button={shortHeading.button}
        bgColor="#2b428c"
        textColor="white"
        />

    </div>
  )
}

export default page