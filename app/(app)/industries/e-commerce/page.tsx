"use client";
import {hero,whyChooseUs,services,techStack,advantages,roadmap,whoWeServe} from "@/constants/industries/e-commerce.json";
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
            id={1}
        />
        <WhyChooseUs
            title={whyChooseUs.title}
            whyChooseUsData={whyChooseUs.data}
            gridsize={3}
        />
        <OurServices
            title={services.title}
            data={services.data}
            bg="#2b428c"
            bgOdd="#ffffff"
            />
        <TechStack
            title={techStack.title}
            techStackData={techStack.data}
        />
        <BlueGrid
            title={advantages.title}
            industriesData={advantages.data}
            gridsize={3}
            description={advantages.description}
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
            description={whoWeServe.description}
            bgColor="#2b428c"
            textColor="white"
            icons={true}
        />

    </div>
  )
}

export default page