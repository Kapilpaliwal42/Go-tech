'use client';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StatCounter from '@/components/StatCountDiv/StatCountDiv';
import { usePathname } from 'next/dist/client/components/navigation';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import { UserCheck, BadgeCheck, ShieldCheck, TrendingUp, Globe, LayoutGrid } from 'lucide-react';
import WhiteBgMatrix from '@/components/WhiteBgMatrix/WhiteBgMatrix';
import OurServices from '@/components/OurServices/ourServices';
import TechStack from '@/components/TechStack/TechStack';
import BlueGrid from '@/components/blueGrid/BlueGrid';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GroupsIcon from '@mui/icons-material/Groups';
import DevicesIcon from '@mui/icons-material/Devices';
import shortHeading from '@/components/shortHeading/shortHeading';
import ShortHeading from '@/components/shortHeading/shortHeading';
import { text } from 'stream/consumers';

const loadCounter = [
    {
        limit:30,
        label:"mobile development experts",
        suffix:"+"
    },
    {
        limit:60,
        label:"successful projects delivered",
        suffix:"+"
    },
    {
        limit:8,
        label:"of expertize",
        suffix:" years"
    },
    {
        limit:4.8,
        label:"overall review rating based on 55+ reviews",
        suffix:"/5 stars"
    },

];

const whyChooseUsData = [
    {
        icon: <UserCheck size={32} />,
        title:"Trusted and renowned",
        description:"We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur."
    },
    {
        icon: <BadgeCheck size={32} />,
        title:"Expertise at your service",
        description:"Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner."
    },
    {
        icon: <ShieldCheck size={32} />,
        title:"Industries's Expertise",
        description:"We are a trusted Software Development company in Udaipur, with expertise from different industries all around the world using innovation, knowledge, and skills."
    },
    {
        icon: <TrendingUp size={32} />,
        title:"High Satisfaction Rates",
        description:"Empower your business with promising results and IT solutions by professionals who are dedicated to serving you right."
    },
    {
        icon: <Globe size={32} rotate={"30deg"} />,
        title:"High Satisfaction Rates",
        description:"We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime."
    },
    {
        icon: <LayoutGrid size={32} />,
        title:"Wide Range of Services",
        description:"Offering software development services, including custom software development, mobile app development, web application development, software maintenance and support, and more."
    },
]

const crossPlatformAdvantages = [
    {
        title:"COST-EFFECTIVE DEVELOPMENT",
        description:"Developing a cross-platform app at Go InfoTech Solution will be a more economical affair than crafting separate native apps for every single platform"
    },
    {
        title:"FLEXIBILITY AND SCALABILITY",
        description:"Cross-platform development infrastructures are curated so that they are highly scalable and flexible, which facilitates the expansion of businesses & supports additional platforms"
    },
    {
        title:"CONSISTENT USER EXPERIENCE",
        description:"Cross-platform frameworks allow the app to provide an enhanced user experience, uniformity, and feel across several different devices and platforms. This uniformity leads to an enhanced user experience and brand recognition."
    },
    {
        title:"EASIER MAINTENANCE AND UPDATES",
        description:"A single codebase can be easily and more efficiently managed, maintained, and updated. By syncing the updates across all the platforms, one can ensure that the user has access to improved technology and features."
    },
    {
        title:"FASTER TIME TO MARKET",
        description:"Cross-platform apps developed on a single codebase will help you develop, test, and launch faster, which will facilitate reaching out to the target audience on multiple platforms in no time."
    },
    {
        title:"WIDER REACH",
        description:"Cross-platform apps are more compatible as they can be operated on multiple devices, enabling businesses to reach a wider range of audiences. With the interactive platform, user engagement also increases and generates more revenue."
    }
];

const servicesData = [
  {
    "title": "STAFF AUGMENTATION",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Amplify your in-house staff with the expertise of Go InfoTech Solution for our seasoned cross-platform developers. Be it a short-run project or a long-term collaborative endeavor. We provide flexible solutions to scale your team based on specific project demands.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR INVALUABLE CONTRIBUTION VIA:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Connection with specialized cross-platform developers.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Rapid onboarding to integrate your operations seamlessly.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Flexibility to scale up or down based on project needs.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Expertise in leading cross-platform tools and functionalities.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "FULL-SCALE DEVELOPMENT",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>We are dedicated to turning your vision into reality, administering every aspect of your cross-platform app development, and making sure that there is uniformity and high performance across all devices.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR END-TO-END APPROACH:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Extensive analysis and planning.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Designed to maintain uniformity across iOS, Android, and other platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Thorough testing for performance & user experience.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Deployment & audit trails post-launch.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "POC/MVP APP DEVELOPMENT",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>After quickly validating your app ideas, we develop a Proof of Concept (PoC) or Minimum Viable Product (MVP) to assist you in exploring the possibilities without committing to a full-scale investment.</p>
    <h2 class="text-2xl font-semibold mt-4 ">BRINGING YOUR IDEA TO LIFE:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Robust development to showcase your vision.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Feedback-driven updates of functionalities.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Scalable solutions for full-scale development.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cost-effective approach to evaluating market viability.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "UI/UX DESIGN SERVICES",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Designing a uniform user experience across all platforms. Our UI/UX designers are committed to crafting an interactive, user-friendly, and visually appealing app following a user-centric approach.</p>
    <h2 class="text-2xl font-semibold mt-4 ">CRAFTING AN ELEVATED USER EXPERIENCE:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">User-centric designs for better engagement.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Uniformity of designs across all platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Interactive prototypes based on feedback.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Compliance with platform-specific design protocols.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "CROSS-PLATFORM DEVELOPMENT CONSULTING",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our professionals are dedicated to navigating your digital journey by meticulously strategizing your cross-platform development, properly selecting the right tools, and keeping your business needs in mind.</p>
    <h2 class="text-2xl font-semibold mt-4 ">NAVIGATING CROSS-PLATFORM DEVELOPMENT:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Meticulously plan based on your business objectives.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Suggestions on optimal frameworks and tools.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Streamlining effectiveness & Safety protocols.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Continual upkeep, assistance, & alignment by trend-tracking.</li>
        </ul>
    </div>
    `
  }
];

const techStackData = [
  {
    "title": "CROSS-PLATFORM FRAMEWORKS",
    "desc": "Making a prominent appearance on the leading platforms through our cross-platform development through maintenance of high performance and scalability.",
    "points": [
      "Uniform user experience across all platforms",
      "Utilizing the strengths of the organization for project success",
      "Testing, Prototyping & MVP development by iteration & feedback"
    ],
    "icons_path": [
      "https://go-techsolution.com/wp-content/uploads/2024/01/Angular-icon.png",
      "https://go-techsolution.com/wp-content/uploads/2024/01/React-JS.png",
      "https://go-techsolution.com/wp-content/uploads/2024/01/Vue.png"
    ]
  },
  {
    "title": "BACKEND TECHNOLOGIES",
    "desc": "Expertise in quick backend solutions for seamless and quality performance by ensuring backend support for your cross-platform apps.",
    "points": [
      "Constructing resilient server-side logic to aid app functionality",
      "Collaborating databases, third-party services, & secure data transfer",
      "Scaling backend infrastructure to enable the growth of your business."
    ],
    "icons_path": [
      "https://go-techsolution.com/wp-content/uploads/2024/01/Angular-icon.png",
      "https://go-techsolution.com/wp-content/uploads/2024/01/React-JS.png",
      "https://go-techsolution.com/wp-content/uploads/2024/01/Vue.png"
    ]
  },
  {
    "title": "CLOUD PLATFORMS",
    "desc": "We meticulously deploy your cross-platform apps on a cloud server to ensure anytime accessibility and elevated performance.",
    "points": [
      "Developing cross-platform apps for global user experience",
      "Enhanced scalability with elevated demand",
      "Security standards & consistent deployment in the cloud."
    ],
    "icons_path": [
      "https://go-techsolution.com/wp-content/uploads/2024/01/Angular-icon.png",
      "https://go-techsolution.com/wp-content/uploads/2024/01/React-JS.png",
      "https://go-techsolution.com/wp-content/uploads/2024/01/Vue.png"
    ]
  }
];
//remove html tags from description in expertiseData manually

const expertiseData = [
  {
    "title": "FINANCE",
    "description": `Empowering the financial sector by incorporating the expertise of a Software Development company in Udaipur and cross-platform services that enhance the security and reach of the services.
    `
  },
  {
    "title": "HEALTHCARE",
    "description": `
    We offer cutting-edge solutions for healthcare by making use of managed IT services at a Web Development company in Udaipur and digital health technologies through cross-platform services.
    `
  },
  {
    "title": "MEDIA & ENTERTAINMENT",
    "description": `
    Robust IT Solutions at Digital Marketing Company in Udaipur offers cross-platform solutions for digital platforms along with SEO Services in Udaipur.
    `
  },
  {
    "title": "AUTOMOTIVE",
    "description": `
    Dedicated experts provide advanced IT solutions by making use of innovative and effective solutions for the automotive industry, offering operational efficiency and cross-platform services.
    `
  },
  {
    "title": "EDUCATION",
    "description": `
    Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance using cross-platform services by our professionals.
    `
  },
  {
    "title": "E-COMMERCE",
    "description": `
    Ensuring that the website generates enhanced customer engagement through cross-platform services by the leading Digital Marketing Agency in Udaipur generating higher sales.
    `
  },
  {
    "title": "GIS",
    "description": `
    Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a Web Development company in Udaipur.
    `
  }
]

const crossPlatformTechInnovationData = [
  {
    "title": "ARTIFICIAL INTELLIGENCE",
    "description": `
    Empower your business with the unique capabilities of AI by partnering with Go InfoTech Solution, where we make sure to incorporate more intuitive and responsive results with the use of predictive analytics and chatbots.
    `
  },
  {
    "title": "CLOUD INTEGRATION",
    "description": `
    Ensuring seamless integration of cloud services to improve your app’s scalability, effectiveness, and functionality by making sure that the data is integrated and accessible from anywhere.
    `
  },
  {
    "title": "AUGMENTED REALITY",
    "description": `
    As a leading Software Development company in Udaipur we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.
    `
  },
  {
    "title": "INTERNET OF THINGS",
    "description": `
    Harmonizing the use of sensors and smart devices to integrate real-time data while increasing its functionality and user experience. Incorporating IoT into the business can generate expanded opportunities for user engagement.
    `
  }
]

const WhomWeServeData = [
    {
        Title:"LAUNCHING A NEW",
        description:"Trusted partners for businesses that are stepping into the mobile world for the first time, especially startups, for a responsive, interactive, and feature-rich Android application tailored to the unique needs of your business.",
        icon:<TipsAndUpdatesIcon />
    },
    {
        Title:"MIGRATING FROM MVP TO NATIVE DEVELOPMENT",
        description:"Organizations that initially incorporated a low code/no code MVP and are now migrating to a native product to enhance their ROI and offer an improved user experience.",
        icon:<DeveloperModeIcon />
    },
    {
        Title:"IN-HOUSE TEAM AUGMENTATION",
        description:"Companies are planning on expanding with Android experts within their existing teams. We integrate productivity and knowledge into your organizational operations.",
        icon:<GroupsIcon />
    },
    {
        Title:"SIMULTANEOUS ANDROID & iOS DEVELOPMENT",
        description:"Businesses that are aiming for expansion on the Android and iOS platforms simultaneously. We specialize in providing a unified mobile app experience to users of different devices by complementing the existing in-house teams.",
        icon:<DevicesIcon />
    },
];

function page() {
  return (
    <div>
        <div className="relative bg-gray-50 min-h-screen overflow-hidden"> 

    <Breadcrumbs aria-label="breadcrumb" className="p-4">
      <Link href="/" className="text-blue-200 hover:underline text-sm hover:text-gray-500">
        Home
      </Link>
      <Link href="/services" className="text-blue-200 hover:underline hover:text-gray-500">
        Services
      </Link>
      <span className="text-gray-500">{usePathname().split('/')[2].toUpperCase()}</span>
    </Breadcrumbs>
      
      {/* 1. DOTTED PATTERN - Positioned relative to the HERO section */}
      <div className="absolute left-0 top-[50%] w-64 h-96 pointer-events-none z-0">
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle, #2b428c 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
            maskImage: 'radial-gradient(circle at 0% 50%, black 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at 0% 50%, black 50%, transparent 80%)',
            opacity: 0.2
          }}
        />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-[#2b428c] text-5xl font-bold py-3 leading-tight">
             CROSS-PLATFORM MOBILE APP DEVELOPMENT SERVICES
            </h1>
            <p className="text-[#2b428c] text-xl max-w-md">
Delivering an exceptional user experience in the Android tapestry: Customize solutions that align with your unique business needs.
 </p>
            <button className="flex items-center gap-2 p-4 rounded-lg bg-orange-400 w-3xs justify-around">GET INFO <ArrowRight /></button>
          </div>

          {/* RIGHT STATS */}
          <div className="lg:w-1/2 w-2/3">
            <div className="grid  sm:grid-cols-2 gap-6 items-start">
              <div className="space-y-6">
                <StatCounter {...loadCounter[0]} uppercase={true} />
                <StatCounter {...loadCounter[2]} uppercase={true} />
              </div>
              <div className="space-y-6 sm:mt-12">
                <StatCounter {...loadCounter[1]} uppercase={true} />
                <StatCounter {...loadCounter[3]} uppercase={true} />
              </div>
            </div>
          </div>
        </div>

       
      </section>
    </div>
    <WhyChooseUs whyChooseUsData={whyChooseUsData} />
       <WhiteBgMatrix Data={crossPlatformAdvantages} title="ADVANTAGES OF CROSS-PLATFORM APP DEVELOPMENT" bgColor="#2b428c" textColor="white" gridsize={2} />
       <OurServices title='CROSS-PLATFORM DEVELOPMENT SERVICES' data={servicesData}/>
        <TechStack techStackData={techStackData} title="TECH STACK FOR CROSS-PLATFORM APP DEVELOPMENT" />

        <BlueGrid title="CROSS-PLATFORM EXPERTISE ACROSS INDUSTRIES GO INFOTECH SOLUTION SERVES:" industriesData={expertiseData} gridsize={3}  bgColor="#2b428c" textColor="white" button={{text:"ALL INDUSTRIES >", }} />

        <BlueGrid title="TECH INNOVATIONS FOR YOUR WEB APP" 
        industriesData={crossPlatformTechInnovationData}
          description='We are a renowned IT Company in Udaipur, dedicated to serving you and your unique business needs using our cutting-edge technology and innovation, while also ensuring that it is functional. We craft interactive and scalable web solutions to create captivating and visually appealing web applications.'
         gridsize={2}  
         bgColor="white" 
         textColor="#2b428c" />

        <BlueGrid industriesData={WhomWeServeData} title="WHO WE SERVE" bgColor="#2b428c" textColor="white" gridsize={2} />
        <ShortHeading
        title="EMBARK ON CROSS-PLATFORM JOURNEY"
        description='We specialize in cross-platform development for big corporations and startups that are planning on scaling up to match your unique needs. Launch your MVP on several platforms in just 3-6 months and explore endless opportunities!'
        button={{text:"BOOK A CONSULTATION"}}
        
        />

        


    </div>
  )
}

export default page