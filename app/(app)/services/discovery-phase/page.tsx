"use client"
import HeroSection from "@/components/HeroSection/HeroSection"
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs"
import {hero,whyChooseUs,discoveryPhase,getToKnow,services,additionalServices} from "@/constants/services/discovery-phase.json"
import BlueGrid from "@/components/blueGrid/BlueGrid"
import ProcessTable from "@/components/processTable/processTable"
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix"






function page() {
  return (
    <div>
        <HeroSection {...hero} />
        <WhyChooseUs 
        title={whyChooseUs.title}
        whyChooseUsData={whyChooseUs.data}
        />
        <BlueGrid 
        title={discoveryPhase.title}
        industriesData={discoveryPhase.data}
        gridsize={2}
        />
        
        <WhyChooseUs 
        title={getToKnow.title}
        whyChooseUsData={getToKnow.data}
        gridsize={2}
        />

        <ProcessTable 
        title={services.title}
        approachesData={services.data}
        />
        <WhiteBgMatrix 
        title={additionalServices.title}
        Data={additionalServices.data}
        gridsize={2}
        />
    </div>
  )
}

export default page