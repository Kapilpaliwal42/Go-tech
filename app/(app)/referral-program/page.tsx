"use client";
import React from "react";
import Marquee from "@/components/Marquee/Marquee";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";
import OurServices from "@/components/OurServices/ourServices";
import BlueGrid from "@/components/blueGrid/BlueGrid";


import {
  AppWindow,
  AppWindowMac,
  User,
  Flag,
  CloudSnow,
  Twitch,
  Table,
  Code,
  BookOpen,
  MessageSquare,
  Layout,
  ZoomIn
} from "lucide-react";

/* ---------------- SERVICES DATA ---------------- */

const servicesData = [
  {
     "title": "STAFF AUGMENTATION",
     "icon":Layout,
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Go-Infotech Solution Pvt Ltd is a custom 
    <a href="" style="border-1px"><b>
    
    Web Development Company in Udaipur</b> </a>aiming to provide seamless project execution by staff augmentation for optimal resource management
    IT STAFF AUGMENTATION

We are dedicated to providing you with highly skilled and experienced IT professionals who will help you focus on core aspects so that your business reaches new heights.

COMMITTED TEAM

Our team at Go Tech Solution is a living testament of expertise and knowledge who are committed to meeting your unique business needs.

ON-DEMAND CTO

We offer CTO services for strategic technological assistance so that your business reaches exponential heights without any overhead of hiring a full-time professional.
    .</p>
    
    `,
  },
  {
   "title": "IT CONSULTING",
    "icon":ZoomIn,
    "Desc_html": `
   
    <div class='p-4 text-inherit '>
    <p>Our IT Company in Udaipur is here to navigate you in the evolving tapestry of Technology while providing appropriate guidance from highly qualified professionals:

TECHNICAL DUE DILIGENCE

After conducting a thorough evaluation of your business while assessing the project feasibility, relevant risks, and growth ambition of your project, our team provides strategic insights for your project growth.

PROJECT MANAGEMENT AND COORDINATION

Our team ensures that your project delivery is timely and effective through proper management and streamlined communication with the development teams.

DATA ANALYTICS AND BUSINESS INTELLIGENCE

Ensure that you make data-driven decisions by thorough evaluation of your data and gain a competitive advantage over your rivals with our Data analytics and BI services.

.</p>
    
    `,
  },
  {
  
   "title": "CUSTOM SOFTWARE DEVELOPMENT",
   "icon":Code,
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our team is committed to delivering unique software solutions to your specific business requirements. Our end-to-end development service results in high-performance outcomes that are structured to your business needs.

WEB DEVELOPMENT

Aim to develop a user-centric web application that is adaptive, intuitive, visually engaging, and designed to meet the unique needs of your business.

MOBILE DEVELOPMENT

Crafting a mobile application that is user-friendly, visually appealing, and can be used on Android and iOS platforms to stay updated with the evolving tech.

DISCOVERY PHASE

We assist you in a thorough evaluation of your business for properly crafting the vision, goals, and intent of the business.

platforms
.</p>
    
    `,
  },
  {
  
   "title": "INTELLIGENT AUTOMATION",
   "icon":CloudSnow,
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>We are dedicated to serving you with the best services incorporating state-of-the-art technologies like AI, machine learning, blockchain, and IoT, while we transform your business to achieve new heights.

AI & ML SOLUTIONS

Empower your business to grow by incorporating Artificial Intelligence and Machine Learning to enhance the decision making process and robust growth of business.

BLOCKCHAIN SOLUTIONS

Secure and transparent blockchain solutions tailored to your unique needs and industry requirements, ranging from cryptocurrencies to decentralized applications (DApps).

IoT Solutions

A seamless interlinkage and data exchange using our IoT Solutions between devices, systems and individuals which will fuel the growth of the business..</p>
    
    `,
  },
  {
    "title": "MANAGED IT SERVICES",
    "icon":BookOpen,
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>At Go InfoTech Solution, a leading Web Development company in Udaipur we offer managed IT services to foster the growth of your business:

DATABASE DEVELOPMENT SERVICES

To ensure the effective storage, retrieval, and management of business data we design, develop and optimize database development services.

CLOUD & DEVOPS SOLUTIONS

We incorporate the best practices of DevOps and cloud solutions to expedite software delivery and collaborative space along with streamlining the entire development and deployment lifecycle.

SOLUTION ARCHITECTURE SERVICES

Our team is dedicated to designing and deploying adaptive, secure, and high-performance IT infrastructure that is crafted to align with your business objectives.    
    `,
  },
];

/* ---------------- PAGE DATA ---------------- */

const pageData = {
  hero: {
    title: "REFERRAL PROGRAM",
    description:
      "Join our Referral Program and help others find our world-class services while reaping the rewards.",
    button: { text: "JOIN PROGRAM", bgColor: "#f97316" },
    loadCounter: [
      { limit: 150, label: "successful projects", suffix: "+" },
      { limit: 7, label: "are satisfied with our services", suffix: "+ years" },
      { limit: 3, label: "in business", suffix: "+" },
      { limit: 70, label: "qualified employees", suffix: "+" },
    ],
  },

  suitableAudience: {
    title: "WHO MIGHT BE SUITABLE FOR THE PROGRAM",
    data: [
      { title: "CURRENT OR FORMER CLIENT", icon: <AppWindow size={24} /> },
      { title: "STARTUP CONSULTING FIRMS", icon: <AppWindowMac size={24} /> },
      { title: "INDIVIDUAL CONSULTANT", icon: <User size={24} /> },
      { title: "SALES PROFESSIONAL", icon: <Twitch size={24} /> },
      { title: "DESIGN STUDIO", icon: <Table size={24} /> },
      { title: "DEVELOPMENT COMPANY", icon: <Code size={24} /> },
      { title: "MARKETING AGENCY", icon: <MessageSquare size={24} /> },
      { title: "YOU’VE JUST FOUND OUR COMPANY!", icon: <Flag size={24} /> },
    ],
    bgColor: "#2b428c",
    textColor: "white",
    gridsize: 4,
  },

  offerings: {
    title: "WHAT WE OFFER TO YOU AS A REFERRAL PARTNER",
    data: [
      {
        title: "10% REFERRAL COMMISSION",
        description:
          "With an average project budget of around $150,000, your commission will be approximately $15,000.",
      },
      {
        title: "PAYMENT PROCESS",
        description:
          "You will receive your payment once we have collected it from the client.",
      },
      {
        title: "QUALITY ASSURANCE",
        description:
          "Our services are guaranteed to be of the highest quality.",
      },
      {
        title: "ZERO FINANCIAL RISK",
        description:
          "No financial investments or program fees are required.",
      },
    ],
    bgColor: "white",
    textColor: "#2b428c",
    gridsize: 2,
  },

  whomWeServe: {
    title: "INDUSTRIES GO INFOTECH SOLUTION SERVES",
    data: [
      { title: "FINANCE", description: "Empowering the financial sector by incorporating the expertise of Software Development company in Udaipur to enhance the security and efficiency of the services." },
      { title: "HEALTHCARE", description: "We offer cutting-edge solutions for healthcare by making use of managed IT services at web Development company in Udaipur and digital health technologies." },
      { title: "MEDIA & ENTERTAINMENT", description: "MRobust IT Solutions at Digital Marketing Company in Udaipur offering innovative solutions for digital platforms along with SEO Services in Udaipur" },
      { title: "AUTOMOTIVE", description: "Dedicated experts providing advanced IT Solutions by making use of innovative and effective solutions for the automotive industry offering operational efficiency." },
      { title: "EDUCATION", description: "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance by our professionals." },
      { title: "E-COMMERCE", description: "EEnsuring that the website generates enhanced customer engagement and optimizes user experience Digital Marketing Agency in Udaipur generating higher sales." },
      { title: "GIS", description: "Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a Web Development company in Udaipur." },
    ],
    bgColor: "#2b428c",
    textColor: "white",
    gridsize: 3,
  },
};

/* ---------------- PAGE COMPONENT ---------------- */

const Page = () => {
   

  return (
    <div className="w-full">

      <HeroSection
        title={pageData.hero.title}
        description={pageData.hero.description}
        button={pageData.hero.button}
        loadCounter={pageData.hero.loadCounter}
      >
        <Marquee />
      </HeroSection>

      {/* SUITABLE AUDIENCE */}
      <BlueGrid
        title={pageData.suitableAudience.title}
        industriesData={pageData.suitableAudience.data}
        gridsize={pageData.suitableAudience.gridsize}
        bgColor={pageData.suitableAudience.bgColor}
        textColor={pageData.suitableAudience.textColor}
        icons={true}
      />

      {/* OFFERINGS */}
      <WhiteBgMatrix
        title={pageData.offerings.title}
        Data={pageData.offerings.data}
        bgColor={pageData.offerings.bgColor}
        textColor={pageData.offerings.textColor}
        gridsize={pageData.offerings.gridsize}
      />

      {/* SERVICES */}
      <OurServices
        title="CROSS-PLATFORM DEVELOPMENT SERVICES"
        data={servicesData}
      />

      {/* WHO WE SERVE */}
      <BlueGrid
        title={pageData.whomWeServe.title}
        industriesData={pageData.whomWeServe.data}
        gridsize={pageData.whomWeServe.gridsize}
        bgColor={pageData.whomWeServe.bgColor}
        textColor={pageData.whomWeServe.textColor}
      />
      <section>
        
      </section>

    </div>
  );
};

export default Page;