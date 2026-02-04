"use client";
import TextBasic from "@/components/textBasic/TextBasic";
import HeroSection from "@/components/HeroSection/HeroSection";

import data from "@/data/data.json";

const HeroSectionData = {
    title:"EXPERIENCE EXCELLENCE WITH GO INFOTECH",
    description:"Excel Your Business with Custom Software Development Company in Udaipur"
}


function page() {
  return (
    <div className="my-10 md:my-20 text-black">
        <HeroSection
        title={HeroSectionData.title}
        description={HeroSectionData.description}
        />
        <TextBasic data={data} />
        
    </div>
  )
}

export default page