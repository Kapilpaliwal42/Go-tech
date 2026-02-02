"use client"
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BoltIcon from '@mui/icons-material/Bolt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';
import ScienceIcon from '@mui/icons-material/Science';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import BlueGrid from '@/components/blueGrid/BlueGrid';
import SavingsIcon from '@mui/icons-material/Savings';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TechStack from '@/components/TechStack/TechStack';
import ProcessTable from '@/components/processTable/processTable';
import HeroSection from '@/components/HeroSection/HeroSection';
import ShortTimerHeading from '@/components/ShortTimerHeading/ShortTimerHeading';






import pageData from '@/constants/services/startup-mvp-development.json';

const loadCounter = [
    {
        limit:10,
        label:"Mobile App Development Projects",
        suffix:"+"
    },
    {
        limit:100,
        label:"Web Applications",
        suffix:"+"
    },
    {
        limit:80,
        label:"Websites Designed",
        suffix:"+"
    },
    {
        limit:5,
        label:"Enterprise Software Solutions",
        suffix:"+"
    },

];

const bookCounttimerData = [
    {
        limit:100,
        label:"skilled developers and experts, at your service.",
        suffix:"+"
    },
    {
        limit:50,
        label:"positive Google reviews back our reliability.",
        suffix:"+"
    },
    {
        limit:90,
        label:"startups empowered with proper assistance & guidance.",
        suffix:"+"
    },
]

const methodologyData = pageData.methodologyData.map((item: any) => ({
  ...item,
  icon: item.title === 'EFFECTIVE COSTING' ? <SavingsIcon fontSize='large'/> :
        item.title === 'UI/UX DESIGN FOR APP SYSTEMS' ? <DesignServicesIcon fontSize='large'/> :
        item.title === 'TRUSTED AND SKILLED DEVELOPERS' ? <VerifiedUserIcon fontSize='large'/> : null,
}));

const approachesData = pageData.approachesData;


const UnleashPotentialData=[
    {
        title:"MARKET RESEARCH",
        description:"Comprehensive market analysis to gain an understanding of existing and upcoming trends, know your potential business rivals, and conduct a thorough analysis of them."
    },
    {
        title:"USER RESEARCH",
        description:"We identify your target users, their unique requirements, and the challenges posed in the industry, and enhance user experience using our SEO Services in Udaipur"
    },
    {
        title:"PRIORITIZED PRODUCT BACKLOG",
        description:"Ensuring the integrity of business and technical terms by incorporating functional requirements into clear user stories within the prioritized product backlog."
    },
    {
        title:"INTEGRATIONS RESEARCH",
        description:"We make use of integration research while also assessing your MVP’s core functionality, further incorporating additional features."
    },
    {
        title:"DESIGN VALIDATION",
        description:"We make sure that the designs we make use of are effective and functional through thorough testing, conducting surveys, and moving forward with a problem-solving approach."
    },
    {
        title:"NO-CODE MVP DEVELOPMENT",
        description:"We make use of no-code platforms for rapid prototyping and a functional application creation process for launching the basic versions of your product."
    },
];


const industriesData = [
    {
       title:"Enterpreneurs on Budget",
       description:"Entrepreneurs seek expertise to launch their products without requiring a large sum of money upfront." 
    },
    {
       title:"Non-Tech Founders",
       description:"Empowering non-tech founders who are dedicated to boosting visions into reality but lack technical know-how." 
    },
    {
       title:"Market Penetration For Startups",
       description:"For startups that are aiming to enter the market, we equip them with the right technology and expertise to stay ahead of their rivals." 
    },
    {
       title:"Business Seeking Growth",
       description:"Equip the startups that are determined to bag a prominent position in the market and bring in new investment in the business." 
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

const techStackData = [
    {
    title: "FRONT-END DEVELOPMENT",
    desc: "Empower your business with our expert front-end solutions focusing fundamentally on the smooth user experience and effectively handle your needs and preferences and aligning it to the industry’s unique requirement.",
    points:["20+ Front-end developers","8 years of experience","4.8 rating on Google"],
    icons_path:["/AngularIcon.png","/Reacticon.png","Vueicon.png"]
  },
  {
    title: "BACK-END DEVELOPMENT",
    desc: "We help you build a strong foundation for your software and applications with scalable and secure back-end systems that will enable you to handle all your tasks seamlessly and result in the robust growth of your business. ",
    points:["20+ Back-end developers","8 years of experience","4.8 rating on Google"],
    icons_path:["/DotNet.png","/Golang.png","/java.png","/Laravel.png","/NodeJS.png","/PHP.png","/Python.png"],
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    desc: "Our team of dedicated experts and developers at the leading IT Company in Udaipur is here to skillfully craft captivating and functional mobile apps for Android and iOS platforms, crafted to meet your unique needs and reach out target audience.",
    points: ["10+ Mobile developers","8 years of experience","4.8 rating on Google"],
    
    icons_path:["/Flutter-1.png","/Ionic-1.png","/Kotlin-1.png","/React-Native-1.png"],
  },
  {
    title: "BLOCKCHAIN",
    desc: "Use our state-of-the-art approach to blockchain development to innovate your startup MVPs. We make use of cutting-edge instruments and technologies to guarantee reliable, scalable, and secure blockchain solutions. Our company uses a variety of platforms and programming languages, precisely customizing each project to match its specific needs.",
    points: ["Smart Contract Development","Decentralized Application (dApp) Creation","Cryptocurrency Wallet Integration","Blockchain Network Customization","NFT and Tokenization"],
    
    icons_path:["/Flutter-1.png","/Ionic-1.png","/Kotlin-1.png","/React-Native-1.png"],
  },
];


const WhyChooseUsData=[
    {
        icon:<AddBusinessIcon fontSize='medium'/>,
        title:"IT SOLUTIONS FOR STARTUPS",
        description:"Our team of experts at Go InfoTech Solution is committed to your service that suits best your requirements, from initial to market launch."
    },
    {
        icon:<BoltIcon fontSize='medium'/>,
        title:"RAPID DEVELOPMENT AND PROTOTYPING",
        description:"Our aim is to pay attention to rapid development and prototyping to transform your idea into reality using our expertise and knowledge."
    },
    {
        icon:<PsychologyIcon fontSize='medium'/>,
        title:"UNDERSTANDING THE STARTUPS",
        description:"Our team is dedicated to using their skills and expertise to design and develop functional solutions that are requirements of the startups."
    },
    {
        icon:<HubIcon fontSize='medium'/>,
        title:"INDUSTRY NETWORK ACCESS",
        description:"We ensure that startup owners gain proper insights, access to a vast network of industry experts, and the assistance of the right mentors."
    },
    {
        icon:<ScienceIcon fontSize='medium'/>,
        title:"AI R&D LAB",
        description:"Witness our team's commitment to digital innovation for the successful start of startups at AI Research and Development Lab."
    },
    {
        icon:<SentimentVerySatisfiedIcon fontSize='medium'/>,
        title:"HIGH SATISFACTION RATES",
        description:"Achieve business growth with GoTech, where we are determined to satisfy our clients and serve with expertise and knowledge."
    },
];

function page() {
  return (
    <div>
        <HeroSection 
        title={pageData.hero.title}
        description={pageData.hero.description}
        loadCounter={loadCounter}
        button={pageData.hero.button}
       />

    <WhyChooseUs whyChooseUsData={WhyChooseUsData}/>
  
    <BlueGrid title="WHO NEEDS STARTUP MVP DEVELOPMENT?" industriesData={industriesData} gridsize={2}/>



    <BlueGrid title="UNLEASH YOUR POTENTIAL: MVP MASTERY WITH Go-tech Solution" industriesData={UnleashPotentialData} gridsize={3}/>

    {/* book a call section */}
    <ShortTimerHeading
        loadCounter={bookCounttimerData}
        title="ARE YOU PREPARED TO EMBARK YOUR STARTUP JOURNEY WITH THE RIGHT EXPERTISE?"
        button={{text:"Book A Call",bgColor:"orange-400",onClick:()=>{}}}
    />

    <BlueGrid title="OUR METHODOLOGY FOR RAPID STARTUP MVP GROWTH:" industriesData={methodologyData} gridsize={3}/>

    {/* approach section */}
    <ProcessTable title='OUR APPROACH WHEN DEVELOPING A REMARKABLE STARTUP MVP APP' approachesData={approachesData}/>
    {/* tech stack section */}
    <TechStack techStackData={techStackData}/>

    {/* Industries section */}

    <BlueGrid title="INDUSTRIES Go InfoTech SOLUTION SERVES:" industriesData={industryData} gridsize={3}/>


    </div>
  )
}

export default page