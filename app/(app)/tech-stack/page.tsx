"use client";
import {hero,techStack,whyChooseUs,services,shortHeading} from "@/constants/tech-stack/index.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import Marquee from "@/components/Marquee/Marquee";
import TechStack from "@/components/TechStack/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import ShortHeading from "@/components/shortHeading/shortHeading";

function page() {
  return (
    <div>
        <HeroSection
        title={hero.title}
        description={hero.description}
        loadCounter={hero.loadCounter}
        children={<Marquee />}
        button={{text:"GET INFO"}}
        />
        <TechStack
        title={techStack.title}
        description={techStack.description}
        />
        <WhyChooseUs
        title={whyChooseUs.title}
        description={whyChooseUs.description}
        whyChooseUsData={whyChooseUs.data}
        />
        <OurServices
        title={services.title}
        data={services.data}
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