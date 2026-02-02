"use client";
import React from 'react'
import HeroSection from '@/components/HeroSection/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import {  Cpu, Globe, LayoutGrid, ShieldCheck, Search, UserCheck } from 'lucide-react';
import ProcessTable from '@/components/processTable/processTable';



const loadCounter = [
    {
        limit:14,
        suffix:"+",
        label:"members of experts in team"
    },  
    {
        limit:4.8,
        suffix:"/5 stars",
        label:"rating based on 55+ reviews"
    },
    {
        limit:50,
        suffix:"+",
        label:"projects delivered successfully"
    },
    {
        limit:8,
        suffix:" years",
        label:"of expertise in business"
    }
]

const whyChooseUsData = [
  {
    icon: <UserCheck size={32} />,
    title: "OUR CLIENT’S EXPERIENCE",
    description: "Our clients have said it too, Go InfoTech has proved to be the Best SEO Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in driving organic crowd to your website."
  },
  {
    icon: <Search size={32} />,
    title: "TOP SEO SPECIALISTS",
    description: "Through our comprehensive procedures and tactics, we make sure that our SEO specialists deliver excellence in your crucial project. We are dedicated to driving sales for the success of your business with our meticulously planned SEO Services in Udaipur."
  },
  {
    icon: <Cpu size={32} />,
    title: "PROPRIETARY TECHNOLOGY FOR EFFICIENCY",
    description: "We are a leading Digital Marketing Company in Udaipur to integrate cutting-edge, smart technology for your project’s success. Incorporating strong tools for lead generation, targeting the audience, content deployment, and running social media campaigns."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "GUARANTEED PROJECT CONSISTENCY",
    description: "Benefit from the seamless and consistent delivery of excellence for uninterrupted success. Our team of professionals is dedicated to serving you with excellence in the field of digital marketing and social media solutions for the robust growth of your business."
  },
  {
    icon: <Globe size={32} />,
    title: "GLOBAL COVERAGE ACROSS TIME ZONES",
    description: "We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime."
  },
  {
    icon: <LayoutGrid size={32} />,
    title: "WIDE RANGE OF SERVICES",
    description: "As a leading Web Development company in Udaipur, we offer custom software development, mobile app development, social media marketing, software maintenance and support, SEO Services, and more while making use of cutting-edge technology."
  }
]

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
    description: "With robust social media marketing campaigns and similar digital solutions, the leading SEO Company in Udaipur offers content marketing for media and entertainment purposes."
  },
  {
    title: "AUTOMOTIVE",
    description: "Dedicated experts provide advanced social media solutions for the automotive industry, offering comprehensive services with customized solutions to grab the target audience’s attention."
  },
  {
    title: "EDUCATION",
    description: "Leveraging the excellence of our SEO Services to empower educational institutions with digital assistance using social media expertise and digital marketing solutions by our professionals to reach out to your target audience."
  },
  {
    title: "GIS",
    description: "Content marketing and designing infographics for social media platforms for an elevated user experience in Geographic Information Systems using the best SEO agency in Udaipur."
  }
]

function page() {
  return (
    <div>
        <HeroSection 
        title="SEARCH ENGINE OPTIMIZATION"
        description="Optimize your website using our meticulously planned SEO Services in Udaipur at  Go-InfoTech to elevate your business's growth to exponential heights."
       button={{text:"GET INFO"}}
         loadCounter={loadCounter}
        />

        <WhyChooseUs
        title='WHY CHOOSE GO INFOTECH AS YOUR PARTNER FOR DIGITAL SOLUTIONS'
        whyChooseUsData={whyChooseUsData}
        />
        <ProcessTable
        title="INDUSTRIES WE SERVE"
        description="The exponential growth of our client’s businesses is living proof of our expertise in digital marketing and social media solutions tailored to each industry’s nuances."
        approachesData={industriesData} 
        numbeering={true}
        />
        


    </div>
  )
}

export default page