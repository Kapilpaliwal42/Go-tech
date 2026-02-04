"use client";
import HeroSection from "@/components/HeroSection/HeroSection"
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";
import OurServices from "@/components/OurServices/ourServices";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ProcessTable from "@/components/processTable/processTable";
import ShortHeading from "@/components/shortHeading/shortHeading";
import {hero,advantagesData,services,whyChooseUs,collabSteps,shortHeading} from "@/constants/services/staff-augmentation.json"
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DevicesIcon from '@mui/icons-material/Devices';
import BlueGrid from "@/components/blueGrid/BlueGrid";
import TechStack from "@/components/TechStack/TechStack";


const whoWeWorkWithData = [
  {
    icon: <AddBusinessIcon fontSize='large' />,
    title: "Startups",
    description:"We empower our startups with digital excellence, by essentially aiding your journey from inception and further regularly updating it regularly."
  },
  {
    icon: <StorefrontIcon fontSize='large' />,
    title: "SMALL TO MEDIUM SIZED ENTERPRISES(SMEs)",
    description:"e are also a trusted IT Company in Udaipur with cost-effective digital solutions to your unique needs for SMEs by focusing on their robust growth in the competitive environment."
  },
  {
    icon: <CorporateFareIcon fontSize='large' />,
    title: "BIG CORPORATIONS",
    description:"We provide tailored IT Solutions for large corporations by equipping them for their persistent success in the ever-evolving digital tapestry."
  },
  {
    icon: <DevicesIcon fontSize='large' />,
    title: "ORGANIZATIONS TRANSITIONING TO REMOTE WORK",
    description:"We enable businesses to transition to a remote work model in an effortless manner by making use of cutting-edge technology."

  },

];

const whatWeOfferData = {
  "title": "WHAT WE OFFER",
  "description": "",
  "data": [
    {
      "title": "PROJECT ASSESSMENT",
      "description": "Ensuring that your project is assessed with the relevant expertise and knowledge to enable you to optimize your operations. We make available software developers who will help accelerate the growth of your business."
    },
    {
      "title": "KNOWLEDGE BASE",
      "description": "At Go InfoTech, we operate within a highly conducive learning environment, ensuring that each individual grows and builds their own core competencies. Making it easier for our clients to reach out to us with their specific requirements."
    },
    {
      "title": "TECH EXPERTISE",
      "description": "Our tech experts specialize in providing you with technical assistance for the exponential business growth of your platform."
    },
    {
      "title": "DIRECT COMMUNICATION",
      "description": "Schedule an interview with the potential employees or the candidates we recommend. Connect with our professionals and augment them with your existing team to optimize your operations."
    },
    {
      "title": "OUR RESPONSIBILITY",
      "description": "At Go InfoTech, we take care of crucial tasks like managing remunerations, adhering to legal compliances, human resource management, and more, helping you to focus on core areas."
    },
    {
      "title": "TRIAL PERIOD",
      "description": "We offer a one-week trial period for the potential candidate. So that you hire the candidate who suits the best to your project’s requirements."
    }
  ]
};

const techStackData = [
  {
    "title": "FRONT-END DEVELOPMENT",
    "desc": "Empower your business with our expert front-end solutions, focusing fundamentally on a smooth user experience, effectively handling your needs and preferences, and aligning them to the industry’s unique requirements.",
    "points": [
      "20+ Front-end developers",
      "8 years of experience",
      "4.8 rating on Google"
    ],
    "icons_path": [
      "/Angular-icon.png",
      "/React-Native-1.png",
      "/Vue.png"
    ]
  },
  {
    "title": "BACK-END DEVELOPMENT",
    "desc": "We help you build a strong foundation for your software and applications with scalable and secure back-end systems that will enable you to handle all your tasks seamlessly and result in the robust growth of your business.",
    "points": [
      "20+ Back-end developers",
      "8 years of experience",
      "4.8 rating on Google"
    ],
    "icons_path": [
      "/Amazon_Web_Services_Logo.png",
      "/GOlang-1.png",
      "/Java-1.png",
      "/Laravel.png",
      "/NodeJS-1.png",
      "/PHP-1.png",
      "/Python-1.png",
      "/Ruby-1.png",
      "/Rust-1.png",
      "/Scala-1.png"
    ]
  },
  {
    "title": "MOBILE APP DEVELOPMENT",
    "desc": "Our team of dedicated experts and developers at the leading IT Company in Udaipur is here to skillfully craft captivating and functional mobile apps for Android and iOS platforms, crafted to meet your unique needs and reach our target audience.",
    "points": [
      "10+ Mobile developers",
      "8 years of experience",
      "4.8 rating on Google"
    ],
    "icons_path": [
      "/Flutter-1.png",
      "/Ionic-1.png",
      "/React-Native.png",
      "/Swift-1.png"
    ]
  },
  {
    "title": "UI/UX DESIGN",
    "desc": "Through our user-centric approach, we are successful in reaching the target audience via our visually appealing UI/UX designs that are user-friendly and lead to an exceptional user experience on all platforms.",
    "points": [
      "10+ Design specialists",
      "8 years of experience",
      "4.8 rating on Google"
    ],
    "icons_path": [
      "/Adobe_XD-1.png",
      "/FigJam-1.png",
      "/Figma-1.png",
      "/Invision-1.png",
      "/Maze-1.png",
      "/Miro-1.png",
      "/Protopie-1.png",
      "/Sketch-1.png",
      "/Zeplin-1.png"
    ]
  }
];

function page() {
  return (
    <div>
      <HeroSection 
        title={hero.title}
        description={hero.description}
        loadCounter={hero.loadCounter}
        button={hero.button}
       />
        <WhiteBgMatrix 
        title={advantagesData.title}
        description={advantagesData.description}
        Data={advantagesData.data}
        gridsize={2}
        />
      <OurServices
      title={services.title}
      data={services.serviceData}
      />
      <WhyChooseUs
      title={whyChooseUs.title}
      description={whyChooseUs.description}
      whyChooseUsData={whyChooseUs.data}
      />
      <ProcessTable
      title={collabSteps.title}
      approachesData={collabSteps.data}
      />
      <ShortHeading
      title={shortHeading.title}
      description={shortHeading.description}
      button={shortHeading.button}
      
      />
      <BlueGrid
      title="WHO WE WORK WITH"
      industriesData={whoWeWorkWithData}
      gridsize={2}
      icons={true}
      />

      <WhyChooseUs
      title={whatWeOfferData.title}
      description={whatWeOfferData.description}
      whyChooseUsData={whatWeOfferData.data}
      />
      <TechStack
      techStackData={techStackData}
      />

    </div>
  )
}

export default page