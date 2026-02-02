"use client";
import {hero,whyChooseUs,services,techStack,advantages,roadmap,whoWeServe} from "@/constants/industries/healthcare.json"
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import TechStack from "@/components/TechStack/TechStack";
import BlueGrid from "@/components/blueGrid/BlueGrid";
import ProcessTable from "@/components/processTable/processTable";



function page() {
  return (
    <div>
        <HeroSection
        title={hero.title}
        description={hero.description}
        loadCounter={hero.loadCounter}
        button={hero.button}
        />
        <WhyChooseUs
        whyChooseUsData={whyChooseUs.data}
        title={whyChooseUs.title}
        />
        <OurServices
        data={services.data}
        title={services.title}
        bg="#2b428c"
        bgOdd="#ffffff"
        />
        <TechStack
        title={techStack.title}
        techStackData={techStack.data}
        />
        <BlueGrid
        title={advantages.title}
        description={advantages.description}
        industriesData={advantages.data}
        button={advantages.button}
        bgColor="white"
        textColor="#2b428c"
        />
        <ProcessTable
        title={roadmap.title}
        approachesData={roadmap.data}
        />
        <BlueGrid
        title={whoWeServe.title}
        industriesData={whoWeServe.data}
        gridsize={2}
        icons={true}
        />
        
        
    </div>
  )
}

export default page