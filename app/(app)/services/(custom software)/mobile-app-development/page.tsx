"use client"
import React from 'react'
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StatCounter from '@/components/StatCountDiv/StatCountDiv';
import { usePathname } from 'next/dist/client/components/navigation';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import { UserCheck,BadgeCheck,ShieldCheck,TrendingUp,Globe,LayoutGrid } from 'lucide-react';
import BlueGrid from '@/components/blueGrid/BlueGrid';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DevicesIcon from '@mui/icons-material/Devices';
import OurServices from '@/components/OurServices/ourServices';
import TechStack from '@/components/TechStack/TechStack';



const loadCounter = [
    {
        limit:30,
        label:"mobile development experts",
        suffix:"+"
    },
    {
        limit:8,
        label:"of expertize",
        suffix:"+"
    },
    {
        limit:60,
        label:"successful projects delivered",
        suffix:"+"
    },
    {
        limit:4.8,
        label:"overall review rating based on 55+ reviews",
        suffix:"stars"
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

const industryData = [
    {
        title: "Finance",
        description: "Empowering the financial sector by incorporating the expertise of Software Development company in Udaipur to enhance the security and efficiency of the services."
    },
    {
        title: "Healthcare",
        description:"We offer cutting-edge solutions for healthcare by making use of managed IT services at web Development company in Udaipur and digital health technologies."
    },
    {
        title: "Media & Entertainment",
        description:"Robust IT Solutions at Digital Marketing Company in Udaipur offering innovative solutions for digital platforms along with SEO Services in Udaipur."
    },
    {
        title: "Automotive",
        description:"Dedicated experts providing advanced IT Solutions by making use of innovative and effective solutions for the automotive industry offering operational efficiency."
    },
    {
        title: "Education",
        description:"Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance by our professionals."
    },
    {
        title: "E-commerce",
        description:"Ensuring that the website generates enhanced customer engagement and optimizes user experience Digital Marketing Agency in Udaipur generating higher sales."
    },
    {
        title: "GIS",
        description:"Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a Web Development company in Udaipur."
    },

];

const servicesData = [
  {
    title:"TEAM AUGMENTED FOR MOBILE PRODUCTS",
    Desc_html:`
    <div class='p-4 text-inherit '>
    <p>At Go-Infotech Solution, <B>the Best Development Company</B> , we offer top-tier team augmentation services to boost your mobile product development. Our skilled professionals seamlessly integrate with your team, providing expertise in the latest mobile technologies. Whether you need developers, designers, testers, or project managers, we provide flexible solutions to meet your project demands. Focus on your core business while we handle recruitment, training, and management, ensuring your product is delivered on time and within budget. Enhance your team’s capabilities and accelerate your mobile projects with Go-Infotech Solution.</p>  <button class='flex items-center gap-2 p-4 text-2xl text-white m-3 rounded-lg bg-orange-400 w-3xs justify-around'>READ MORE > <ArrowRight /></button>
    </div>
    `
  },
  {
    title:"TEAM AUGMENTED FOR MOBILE PRODUCTS",
    Desc_html:`
    <div class='p-4 text-inherit '>
    <p>At Go-Infotech Solution, the<b> Best Development Company</b>, we specialize in cross-platform app development to ensure your app reaches the widest possible audience. Our expert team uses the latest technologies to create seamless and high-performing apps for both iOS and Android platforms. By leveraging a single codebase, we streamline the development process, reducing costs and time-to-market while maintaining top-notch quality and performance. Partner with Go-Infotech Solution to bring your app vision to life efficiently and effectively, ensuring a consistent user experience across all devices.</p>  
    <h2 class="text-2xl font-semibold mt-4 ">PARTNER WITH GO INFOTECH FOR:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Optimized code reuse quickens time-to-market.</li>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Improved scalability across platforms for applications. </li>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Cross-platform Solutions Maintenance & Support.</li>
        </ul>
    </div>
    `
  },
  {
    title:"NATIVE MOBILE APP DEVELOPMENT",
    Desc_html:`
    <div class='p-4 text-inherit '>
    <p>The Best Software Development Company, Go-Infotech Solution, specializes in native mobile app development and builds powerful applications for the iOS and Android operating systems. Our committed development team makes the most of native technology to create apps that are faster, more useful, and offer a better user experience. Through the use of best practices and platform-specific functionality, we guarantee that your app stands out in the crowded market. Put your trust in Go-Infotech Solution to deliver unparalleled native mobile development quality and efficiency to realize your app vision.</p>  
    <h2 class="text-2xl font-semibold mt-4 ">Select Go InfoTech for:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Features-rich Mobile App Development for iOS and Android;</li>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Scalable, Interactive & High-performing Mobile Apps; </li>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Platform Specific & Custom UX/UI Design.</li>
        </ul>
    </div>
    `
  },
  {
    title:"CONSULTING AND PRTOTYPING",
    Desc_html:`
    <div class='p-4 text-inherit '>
    <p class='font-light mt-6 text-xl leading-relaxed'>The IT Company, Go-Infotech Solution, provides thorough consulting and prototyping services to assist you in honing your concepts and realizing your vision. To guarantee that your project is in line with market trends and industry best practices, our knowledgeable consultants offer strategic advice. We build interactive models of your application with our prototype services so you can see and test your ideas before moving forward with full-scale development. Join together with Go-Infotech Solution to reduce risks, maximize the potential of your product, and quicken the process of taking your idea from paper to market.</p>  
    <h2 class="text-2xl font-semibold mt-4 ">CONNECT WITH GO INFOTECH FOR:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Proper Consultation & guidance for mobile app</li>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Scalable, Seamless Prototyping of Your Ideas
  </li>
          <li class="mb-2 border-b-2 h-auto  border-gray-300 pb-4">Regular updates with feedback & product-market fit.</li>
        </ul>
    </div>
    `
  },
  
];

const innovationsData = [
  {
    title:"ARTIFICIAL INTELLIGENCE",
    description:"Empower your business with the unique capabilities of AI by partnering with Go InfoTech Solution where we make sure to incorporate more intuitive and responsive results with the use of predictive analytics and chatbots."
  },
  {
    title:"CLOUD INTEGRATION",
    description:"Ensuring seamless integration of cloud services will improve your app’s scalability, effectiveness, and functionality by making sure that the data is integrated and accessible from anywhere."
  },
  {
    title:"AUGMENTED REALITY",
    description:"As a leading Software Development company in Udaipur we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app."
  },
  {
    title:"INTERNET OF THINGS (IoT)",
    description:"Harmonizing the use of sensors and smart devices to integrate real-time data while increasing its functionality and user experience. Incorporating IoT in the business can generate expanded opportunities for user engagement."
  },
];

const techStackData = [
  {
    title: "IOS APP DEVELOPMENT",
    desc: "Developing a useful and responsive iOS App for a functional and comprehensive mobile development solution for the effectiveness of business. We specialize in:",
    points:["iPhone App Development","iPad App Development","Apple Watch App Development","Apple TV App Development"],
    icons_path:["/TypeHealthKit-themeMobile-StateHover.svg","/rxjs-1.png","/Swift-1.png"]
  },
  {
    title: "ANDROID APP DEVELOPMENT",
    desc: "We develop scalable, interactive, and secure mobile apps for Android that are feature-rich, and visually appealing. We have expertise in:",
    points:["Tailored Android App Development","Android TV App Development","Android Wear App Development","Android Auto App Development"],
    icons_path:["/java.png","/Kotlin-1.png"]
  },
  {
    title: "CROSS-PLATFORM APP DEVELOPMENT",
    desc: "We are effective in crafting budget-friendly mobile application solutions by incorporating cutting-edge technology and quality features for a better user experience across cross-platforms. We deliver excellence in:",
    points:["React Native Development","Flutter App Development"],
    icons_path:["/Flutter-1.png","/React-Native-1.png"]
  },
];

const MlServicesData = [
  {
    "title": "STAFF AUGMENTATION",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Go Tech Solution is a custom Software Development Company in Udaipur aiming to provide seamless project execution by staff augmentation for optimal resource management. We are dedicated to providing you with highly skilled and experienced IT professionals who will help you focus on core aspects so that your business reaches new heights.</p>
    <button class='flex items-center gap-2 p-4 text-2xl text-white m-3 rounded-lg bg-orange-400 w-3xs justify-around'>READ MORE > <ArrowRight /></button>
    </div>
    `
  },
  {
    "title": "IT CONSULTING",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our IT Company in Udaipur is here to navigate you in the evolving tapestry of Technology while providing appropriate guidance from highly qualified professionals. We conduct thorough evaluations to provide strategic insights for your project growth and ensure timely delivery through streamlined communication.</p>
    <h2 class="text-2xl font-semibold mt-4 ">PARTNER WITH GO TECH FOR:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Technical Due Diligence: Assessing feasibility and risks.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Project Management: Timely and effective delivery.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Strategic insights for project growth and ambition.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "CUSTOM SOFTWARE DEVELOPMENT",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our team is committed to delivering unique software solutions to your specific business requirements. Our end-to-end development service results in high-performance outcomes that are structured to your business needs, ensuring a competitive edge in the digital landscape.</p>
    <h2 class="text-2xl font-semibold mt-4 ">Select Go Tech for:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">User-centric, adaptive, and intuitive Web Development.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cross-platform Mobile Development (Android & iOS).</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Structured, high-performance end-to-end solutions.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "INTELLIGENT AUTOMATION",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>We are dedicated to serving you with the best services incorporating state-of-the-art technologies like AI, machine learning, blockchain, and IoT. We transform your business to achieve new heights by enhancing decision-making and ensuring secure, transparent operations.</p>
    <h2 class="text-2xl font-semibold mt-4 ">CONNECT WITH GO TECH FOR:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">AI & ML Solutions for enhanced decision making.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Secure & transparent Blockchain (DApps, Crypto).</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Transformation through IoT and robust tech growth.</li>
        </ul>
    </div>
    `
  }
]


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
            <h1 className="text-[#2b428c] text-5xl font-bold leading-tight">
              MOBILE APPLICATION DEVELOPMENT BY EXPERTS
            </h1>
            <p className="text-gray-500 text-xl max-w-md">
              Dedicated to empowering startups, we craft MVP (Minimum Viable Products) that enable you to evaluate your business concepts in typical market conditions while also mitigating the related risk.
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
    <BlueGrid title={"WHO WE WORK WITH"} gridsize={2} industriesData={whoWeWorkWithData} />
    <OurServices title='OUR MOBILE SERVICES:' data={servicesData} />

    <section>
  <div className="max-w-full bg-white text-[#2b428c] mx-7 px-6 py-20 space-y-5">
            <div className='flex items-center justify-between w-full mb-10'>
            <h1 className='text-4xl font-semibold uppercase text-left ' >INDUSTRIES Go InfoTech SOLUTION SERVES:</h1>
            <button className="bg-orange-400 text-white hidden sm:block p-4 rounded-lg w-[200px]">ALL INDUSTRIES</button>
            </div>
    {/* Upper row with 3 columns */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {industryData.slice(0, 3).map((industry, index) => (
        <div
          key={index}
          className="bg-white text-[#2b428c] rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-shadow duration-300 hover:bg-gray-100"
        >
          <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
          <p className="p-4">{industry.description}</p>
        </div>
      ))}
    </div>

    {/* Lower row with 4 columns */}
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 ">
      {industryData.slice(3).map((industry, index) => (
        <div
          key={index}
          className="bg-white text-[#2b428c] rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-shadow duration-300 hover:bg-gray-100"
        >
          <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
          <p className="p-4">{industry.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<BlueGrid title={"TECH INNOVATIONS FOR YOUR MOBILE APP"}
 description='Utilizing cutting-edge technology and innovation to design and deploy functional mobile apps will revolutionize your business growth. Our experts believe in crafting a remarkable user experience to captivate the audience.'
  industriesData={innovationsData}
  gridsize={2}

  />
    <TechStack techStackData={techStackData} />

    <OurServices data={MlServicesData} bg='#2b428c' bgOdd="#ffffff"/>


    </div>
  )
}

export default page