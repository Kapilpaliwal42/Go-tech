"use client";
import {hero,advantages,services,shortHeading,techStack} from "@/constants/tech-stack/react.json";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import ShortHeading from "@/components/shortHeading/shortHeading";
import TechStack from "@/components/TechStack/TechStack";
import Image from "next/image";
import BlueGrid from "@/components/blueGrid/BlueGrid";

const techStackData = {
  "title": "OUR TECH STACK",
  "description": "",
  "data": [
    {
      "title": "NODE",
      icon:<Image src="/NodeJS.png" alt="Node.js" width={45} height={32} />,
      "description": "Ideal for real-time applications, Node offers high performance and scalability. Its event-driven architecture makes it perfect for data-intensive, real-time applications across networked devices."
    },
    {
      "title": "JAVA",
      icon:<Image src="/java.png" alt="Java" width={45} height={40} />,
      "description": "Java is renowned for its resilience and cross-platform capabilities, Java is widely chosen for enterprise-level applications. It specializes in scalability, security, and dependability, rendering it a dependable option for resourceful business solutions."
    },
    {
      "title": "SCALA",
      icon:<Image src="/Scala-1.png" alt="Scala" width={45} height={32} />,
      "description": "Scala seamlessly integrates object-oriented and functional programming paradigms, providing a robust framework for multifaceted applications. It efficiently works with concurrent and networked systems and with large data applications."
    },
    {
      "title": "PHP",
      icon:<Image src="/PHP-1.png" alt="PHP" width={45} height={32} />,
      "description": "PHP is the stepping stone of web development, well-known for its minimalism and effectiveness. It plays a pivotal role as it helps in designing dynamic web pages and collaborating with several databases."
    },
    {
      "title": "PYTHON",
      icon:<Image src="/Python-1.png" alt="Python" width={45} height={32} />,
      "description": "Well-known for its directness and clarity in understanding it, Python offers a variety of application options. It specifically focuses on handling data analysis, Machine Learning (ML), and numerical analysis."
    },
    {
      "title": "RUBY ON RAILS",
      icon:<Image src="/Ruby-1.png" alt="Ruby" width={45} height={32} />,
      "description": "Ruby on Rails is well-known for its functionalities, such as rapid development capabilities. It provides built-in features for handling tasks like database management, routing, and templating, making it a powerful tool for rapidly developing web applications."
    }
  ],
  "bgColor": "#191970",
  "textColor": "white"
}

const shortHeadingData = {
  "title": "EXPLORE THE POTENTIAL OF YOUR REACT PROJECT",
  "description":"Experience the excellence of our experts and specialist team in this intricate realm of digitalization. We offer tailored assistance that is suited to your unique needs. Consult with us now.",
  "button": { "text": "GET EXPERT ADVICE", "onClick": () => { }, "bgColor": "orange" },
  "bgColor": "#191970",
  "textColor": "white"
}

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
      title={advantages.title}
      whyChooseUsData={advantages.data}
      />
      <OurServices
      title={services.title}
      data={services.data}
      bg="#2b428c"
      bgOdd="#fff"
      />
      <ShortHeading
      title={shortHeading.title}
      description={shortHeading.description}
      button={shortHeading.button}
      />
      <TechStack
      title="REACT DEVELOPMENT TECH-STACK"
      techStackData={techStack}
      />
      <ShortHeading
      title={shortHeadingData.title}
      description={shortHeadingData.description}
      button={shortHeadingData.button}
      bgColor={shortHeadingData.bgColor}
      textColor={shortHeadingData.textColor}
      />
      <BlueGrid
      title={techStackData.title}
      industriesData={techStackData.data}
      bgColor={techStackData.bgColor}
      textColor={techStackData.textColor}
      icons={true}
      />
      </div>
  )
}

export default page