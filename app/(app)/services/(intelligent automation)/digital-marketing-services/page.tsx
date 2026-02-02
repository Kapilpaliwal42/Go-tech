"use client";
import React from 'react'
import HeroSection from '@/components/HeroSection/HeroSection';
import { BadgeCheck, Cpu, Globe, LayoutGrid, ShieldCheck, UserCheck } from 'lucide-react';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import TechStack from '@/components/TechStack/TechStack';
import ProcessTable from '@/components/processTable/processTable';



const loadCounter = [
  {
    limit: 30,
    suffix: "+",
    label: "of expertise in business",
  },
  {
    limit: 8,
    suffix: " years",
    label: "of expertise in business",
  },
  {
    limit: 60,
    suffix: "+",
    label: "projects delivered successfully",
  },
  {
    limit: 4.8, // Assuming a standard 5-star scale based on your previous prompt
    suffix: "/5 stars",
    label: "review rating based on 55+ reviews",
  }
];

const whyChooseUsData = [
  {
    icon: <UserCheck size={32} />,
    title: "OUR CLIENT’S EXPERIENCE",
    description: "Our clients have said it too, Go InfoTech has proved to be an expert Custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development."
  },
  {
    icon: <BadgeCheck size={32} />,
    title: "TOP DIGITAL MARKETING SPECIALISTS",
    description: "Through our comprehensive procedures and tactics, we make sure that our digital marketing specialists deliver excellence in your crucial project. We are dedicated to driving sales for the success of your business."
  },
  {
    icon: <Cpu size={32} />,
    title: "PROPRIETARY TECHNOLOGY FOR EFFICIENCY",
    description: "We are a leading Digital Marketing Company in Udaipur to integrate cutting-edge, smart technology for your project’s success. Incorporating strong tools for lead generation, targeting the audience, content deployment, and running social media campaigns."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "GUARANTEED PROJECT CONSISTENCY:",
    description: "Benefit from the seamless and consistent delivery of excellence for uninterrupted success. Our team of professionals is dedicated to serving you with excellence in the field of digital marketing and social media solutions for the robust growth of your business."
  },
  {
    icon: <Globe size={32} style={{ transform: 'rotate(30deg)' }} />,
    title: "GLOBAL COVERAGE ACROSS TIME ZONES",
    description: "We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime."
  },
  {
    icon: <LayoutGrid size={32} />,
    title: "WIDE RANGE OF SERVICES",
    description: "As a leading Web Development company in Udaipur, we offer custom software development, mobile app development, social media marketing, software maintenance and support, SEO Services in Udaipur, and more while making use of cutting-edge technology."
  }
]

const techStackData = [
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    desc: "As a leading IT Company in Udaipur, our experienced social media marketing team will help you attract and retain your target audience with slick campaigns to build and grow your online presence. Our data analytics team observes traffic to your platforms to help optimize ongoing and future campaigns.",
    points: [
      "Social media strategy development",
      "Content creation and curation",
      "Social media management",
      "Paid social advertising",
      "Social media analytics and reporting"
    ],
    icons_path: ["/Python-1.png"]
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    desc: "We offer personalized SEO services in Udaipur to elevate the online presence and visibility of your businesses. Our team of SEO specialists considers several elements of search engine optimization, including intricate keyword analysis, when crafting a strategic plan for organic growth.",
    points: [
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "Content Optimization",
      "SEO Audits and Reporting"
    ],
    icons_path: ["/next.svg","/Angular-icon.png"]
  },
  {
    title: "E-MAIL MARKETING",
    desc: "Empower your business with the best practices, followed by the leading Software Development company in Udaipur. We incorporate strong e-mail marketing tools to ensure that you build stronger business relations with your customers and further enable you to drive sales.",
    points: [
      "Integration with CRM Systems",
      "A/B Testing and Optimization",
      "Compliance with Email Marketing Regulations (e.g., CAN-SPAM Act, GDPR)",
      "Measuring Email Marketing Performance (e.g., open rates, click-through rates)",
      "Email Marketing Strategy Development"
    ],
    icons_path: ["/Python-1.png"]
  },
  {
    title: "SOCIAL MEDIA CAMPAIGNS",
    desc: "At Go InfoTech Solution, we design Social Media Campaigns (SMC) which are strategic initiatives that will enable you to achieve unique marketing objectives through social media platforms. We focus on planning that outlines your goals and uses best practices to track metrics and measure performance.",
    points: [
      "Campaign strategy development",
      "Content calendar management",
      "Audience research and targeting",
      "Paid advertising management",
      "Campaign monitoring and adjustments"
    ],
    icons_path: ["/Python-1.png"]
  }
];

const industriesData = [
  {
    title: "FINANCE",
    description: "Empowering the financial sector by incorporating social media marketing tactics into several platform content that enhances security and elevates the user experience."
  },
  {
    title: "HEALTHCARE",
    description: "We offer cutting-edge solutions for the healthcare industry by designing awareness social media campaigns and digital marketing techniques to reach the target audience."
  },
  {
    title: "MEDIA & ENTERTAINMENT",
    description: "With robust social media marketing campaigns and similar digital solutions, the leading Digital Marketing Company in Udaipur offers content marketing for media and entertainment purposes."
  },
  {
    title: "AUTOMOTIVE",
    description: "Dedicated experts provide advanced social media solutions for the automotive industry, offering comprehensive services with customized solutions to grab the attention of the target audience."
  },
  {
    title: "EDUCATION",
    description: "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance using social media expertise and digital marketing solutions by our professionals."
  },
  {
    title: "E-COMMERCE",
    description: "Ensuring that the website generates enhanced customer engagement through the use of social media campaigns and email marketing techniques at the leading Digital Marketing Agency in Udaipur helps you generate higher sales."
  },
  {
    title: "GIS",
    description: "Content marketing and designing infographics for social media platforms for an elevated user experience in Geographic Information Systems using a trusted Web Development company in Udaipur."
  }
]

function page() {
  return (
    <div>
        <HeroSection
        title="Digital Marketing Services"
        loadCounter={loadCounter}
        description="Boost your online presence and drive business growth with our expert digital marketing services. From SEO to social media management, we tailor strategies to meet your unique needs."
        button={{text:"Get a Free Consultation", bgColor:"#f97316", onClick:()=>{}}}
        />

        <WhyChooseUs 
        title='WHY CHOOSE GO INFOTECH AS YOUR PARTNER FOR DIGITAL SOLUTIONS'
        whyChooseUsData={whyChooseUsData} />

        <TechStack 
        title="OUR DIGITAL MARKETING SERVICES"
        techStackData={techStackData} />

        <ProcessTable
        title="INDUSTRIES WE SERVE"
        description="Our expertise in the field of digital marketing is living proof of our expertise in digital marketing and social media solutions tailored for each industry’s nuances."
        approachesData={industriesData} 
        numbeering={true}
        />

    </div>
  )
}

export default page