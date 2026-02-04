"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import {hero,whyChooseUs,services,techStack} from "@/constants/tech-stack/java.json";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import TechStack from "@/components/TechStack/TechStack";
import BlueGrid from "@/components/blueGrid/BlueGrid";
import Image from "next/image";

const techCapabilities = {
  "title": "DIVERSE TECH CAPABILITIES",
  "description": "Our Java development services are enriched with proficiency in key front-end technologies such as React, Angular, and Vue. This synergy enables us to provide comprehensive full-stack development solutions, ensuring seamless integration between robust Java back-ends and dynamic front-ends.",
  "data": [
    {
      "title": "Angular",
      icon: <Image src="/AngularIcon.png" alt="Angular Icon" width={50} height={50} />,
      "description": "Combining Angular with Java to develop enterprise-grade applications. Angular's extensive framework, when coupled with Java's robust backend capabilities, delivers potent and scalable web solutions, particularly tailored for intricate business needs."
    },
    {
      "title": "Vue",
      icon: <Image src="/Vue.png" alt="Vue Icon" width={50} height={50} />,
      "description": "Employing Vue alongside Java for its simplicity and adaptability, especially fitting for projects requiring a lightweight yet dynamic front-end. Vue's progressive framework harmonizes seamlessly with Java's server-side technologies, enabling swift development and effortless maintenance of web applications."
    },
    {
      "title": "React",
      icon: <Image src="/React-JS.png" alt="React Icon" width={50} height={50} />,
      "description": "Integrating React with Java backends to craft interactive and responsive user interfaces. This fusion is optimal for building web applications that demand a fluid user experience with real-time data updates."
    }
  ]
}

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
        bgOdd="#ffffff"
        />
        <TechStack
        title={techStack.title}
        techStackData={techStack.data}
        
        />
        <BlueGrid
        title={techCapabilities.title}
        description={techCapabilities.description}
        industriesData={techCapabilities.data}
        gridsize={3}
        bgColor="white"
        textColor="#2b428c"
        icons={true}
        />

    </div>
  )
}

export default page