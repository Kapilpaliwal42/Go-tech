"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import TechStack from "@/components/TechStack/TechStack";
import OurServices from "@/components/OurServices/ourServices";
import { Banknote, HeartPulse, Clapperboard, CarFront, GraduationCap, MapPinned } from 'lucide-react';
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import BlueGrid from "@/components/blueGrid/BlueGrid";
import ShortHeading from "@/components/shortHeading/shortHeading";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";

const loadCounter = [
  {
    limit: 40,
    suffix: "+",
    label: "team members",
  },
  {
    limit: 4.8,
    suffix: "/5 stars",
    label: "review rating based on 55+ reviews",
  },
  {
    limit: 300,
    suffix: "+",
    label: "Projects delivered successfully",
  },
  {
    limit: 8,
    suffix: " years",
    label: "of expertise in Cloud development",
  }
];

const techStackData = [
  {
    title: "CLOUD PLATFORMS & TOOLS",
    desc: "We take pride in ensuring that our team has expertise in ensuring a responsive and functional cloud service provider that is globally accessible.",
    points: [
      "Effortlessly deploy applications across AWS, Azure, Google Cloud, and other leading platforms.",
      "Harness the power of Kubernetes, Docker, and Terraform for streamlined containerization and orchestration.",
      "Build serverless architectures with AWS Lambda, Azure Functions, and other cutting-edge solutions."
    ],
    icons_path: [
      "/Amazon_Web_Services_Logo-1.png",
      "/digitalocean.png",
      "/firebase.png",
      "/google-cloud-seeklogo.com_.png",
      "/Microsoft_Azure.png"
    ]
  },
  {
    title: "BACK-END TECHNOLOGIES",
    desc: "We focus on the efficient utilization of back-end technologies to design, effective, scalable, and responsive cloud-based applications.",
    points: [
      "Designing applications while making use of Node.js, Python, Java, .NET, etc.",
      "Incorporate microservices architectures to enhance scalability and flexibility.",
      "Effortlessly integrate third-party APIs and services into your infrastructure."
    ],
    icons_path: [
      "/GOlang.png",
      "/С-1.svg",
      "/GOlang-1.png",
      "/Java.png",
      "/NodeJS-1.png",
      "/PHP-1.png",
      "/Python.png",
      "/Ruby-1.png",
      "/Rust-1.png"
    ]
  },
  {
    title: "DATABASES & STORAGE SOLUTIONS",
    desc: "Our team excels at incorporating and managing several databases, ensuring data integration, cybersecurity, and effective performance.",
    points: [
      "Deploy relational databases such as MySQL, PostgreSQL, and SQL Server with ease.",
      "Seamless incorporation of NoSQL databases like MongoDB, Cassandra, and DynamoDB.",
      "Efficient management of cloud storage solutions such as Amazon S3, Azure Blob Storage, and Google Cloud Storage."
    ],
    icons_path: [
      "/Cassandra_logo1-1.png",
      "/mongodb-icon1-1.png",
      "/mysql1-1.png",
      "/Postgresql1-1.png",
      "/redis-logo3.png",
      "/SQLite1-1.png"
    ]
  }
];

const servicesData = [
  {
    "title": "STAFF AUGMENTATION FOR CLOUD & DEVOPS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Augment our top Cloud and DevOps specialists in your team for seamless integration of expertise into your projects and their success.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Offering ad interim expertise for your projects.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Scaling teams according to your project requirements.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Delivering high-performance skills in Cloud architecture and DevOps methodologies.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "CLOUD MIGRATION & STRATEGY",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>We guide your business to seamlessly transition to a cloud server while also ensuring the incorporation of a strategic approach personalized as per your unique needs.</p>
    

[Image of Cloud Migration Process Diagram]

    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Facilitating legacy systems transition to cloud platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cloud-first strategy personalized for startups and enterprises.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Selecting cloud service providers based on unique business requirements.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "DEVOPS CONSULTING & IMPLEMENTATION",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our DevOps specialists incorporate optimal practices, procedures, and methodologies to catalyze software delivery while ensuring operational efficiency.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Optimizing CI/CD pipelines for efficiency.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Incorporating infrastructure as code (IaC) solutions.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Managing effective synergy between development and operations teams.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "CLOUD SECURITY & COMPLIANCE",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>We prioritize the security of your cloud infrastructure, ensuring data protection, adherence to regulations, and minimizing potential risks.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Incorporation of vigorous security protocols.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Ensuring compliance with GDPR, HIPAA, and other regulatory standards.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Conducting routine security audits and vulnerability assessments.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "INFRASTRUCTURE AUTOMATION & MANAGEMENT",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>We rationalize infrastructure deployment and regulation through automation, maintaining scalability, resilience, and efficient resource utilization.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Infrastructure provisioning and scaling operations automation.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Regulating and overseeing cloud resources.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Deploying load balancing and auto-scaling solutions.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "CONTINUOUS INTEGRATION & CONTINUOUS DEPLOYMENT (CI/CD)",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our team establishes and oversees CI/CD pipelines, guaranteeing swift, dependable, and uniform software delivery.</p>
    

[Image of CI/CD pipeline workflow diagram]

    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Code integration and deployment procedures automation.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Maintaining high code quality and enabling prompt feedback loops.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Enabling frequent and dependable releases.</li>
        </ul>
    </div>
    `
  }
];

const whyChooseUsData = [
  {
    icon: <Banknote size={32} />,
    title: "FINANCE",
    description: "Empowering the financial sector by incorporating social media marketing tactics into several platform content that enhances security and elevates the user experience."
  },
  {
    icon: <HeartPulse size={32} />,
    title: "HEALTHCARE",
    description: "We offer cutting-edge solutions for the healthcare industry by designing awareness social media campaigns and digital marketing techniques to reach the target audience."
  },
  {
    icon: <Clapperboard size={32} />,
    title: "MEDIA & ENTERTAINMENT",
    description: "With robust social media marketing campaigns and similar digital solutions, the leading SEO Company in Udaipur offers content marketing for media and entertainment purposes."
  },
  {
    icon: <CarFront size={32} />,
    title: "AUTOMOTIVE",
    description: "Dedicated experts provide advanced social media solutions for the automotive industry, offering comprehensive services with customized solutions to grab the target audience’s attention."
  },
  {
    icon: <GraduationCap size={32} />,
    title: "EDUCATION",
    description: "Leveraging the excellence of our SEO Services to empower educational institutions with digital assistance using social media expertise and digital marketing solutions by our professionals to reach out to your target audience."
  },
  {
    icon: <MapPinned size={32} />,
    title: "GIS",
    description: "Content marketing and designing infographics for social media platforms for an elevated user experience in Geographic Information Systems using the best SEO agency in Udaipur."
  }
]

const industriesData = [
  {
    "title": "HEALTHCARE",
    "description": `
    <div class='p-4 text-inherit '>
    <p>We specialize in developing cloud-based solutions that prioritize data privacy, streamline patient management, and elevate telehealth functionalities.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Incorporation of Electronic Health Records (EHR) on the cloud server.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Creating telemedicine platforms with real-time data management.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Secure storage and retrieval of patients’ health-related (SPD) data.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "E-COMMERCE",
    "description": `
    <div class='p-4 text-inherit '>
    <p>We enable effective optimization of online retail operations via our cloud solutions for elevated user experiences, and ensure seamless scalability and responsiveness.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Implementing cloud-based inventory and order management.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Providing customer analytics and personalization.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Scalable e-commerce platforms with worldwide accessibility.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "FINTECH",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Offering secure and efficient cloud solutions customized for the financial sector, spanning from banking institutions to fintech startups, while adhering to regulatory requirements.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cloud-deployed transaction processing infrastructure.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Ensuring secure storage of sensitive financial data and credentials.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Market analysis and predictions via real-time analytics.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "EDUCATION",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Harnessing seamless e-learning on educational institutions and platforms, offering functional, globally accessible study material for elevated study experiences.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Virtual e-learning platforms on the cloud for elevated study experience.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Flexible and responsive student sessions for live counseling.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Real-time feedback and collaboration tools for students and teachers.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "MEDIA & ENTERTAINMENT",
    "description": `
    <div class='p-4 text-inherit '>
    <p>We harness the cloud to deliver high-quality streaming, content recommendations, and real-time algorithms tailored for media institutions.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cloud-deployed streaming platforms with global accessibility.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Content distribution for several channels and platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Real-time audience algorithms and feedback.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "GIS",
    "description": `
    <div class='p-4 text-inherit '>
    <p>We leverage cloud solutions customized for GIS for an enhanced user experience, improving data storage, processing, and real-time mapping functionalities.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cloud-deployed spatial data storage and retrieval systems.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Real-time geospatial analytics and cognizance.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Adaptable platforms for cartography and geolocation services.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "AUTOMOTIVE",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Empowering the automobile industry through innovation and utilizing cloud-powered services, from connected vehicles to predictive maintenance.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cloud-based platforms for processing connected vehicle data.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Real-time evaluation and monitoring of the health of vehicles.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Adaptable solutions for the data from autonomous vehicles.</li>
        </ul>
    </div>
    `
  }
];

const advantagesData = [
  {
    title: "SCALABILITY & FLEXIBILITY",
    description: "Cloud development enables seamless business transition and scale-up or down according to operational requirements, ensuring efficient resource allocation and cost-effectiveness."
  },
  {
    title: "COST-EFFICIENCY",
    description: "Transitioning to Cloud will help businesses avoid the elevated costs of purchasing and maintaining hardware solutions, resulting in substantial cost reductions."
  },
  {
    title: "ENHANCED COLLABORATION",
    description: "Cloud platforms enable teams to collaborate in real-time, irrespective of their geographic location, enhancing operating effectiveness and expediting decision-making processes."
  },
  {
    title: "HIGH AVAILABILITY & DISASTER RECOVERY",
    description: "Cloud services typically include built-in backup solutions, guaranteeing the availability of applications and data security even in the event of hardware failures or other disasters."
  },
  {
    title: "SECURITY & COMPLIANCE",
    description: "Major cloud providers prioritize security, investing significantly in measures such as encryption, multifactor authentication, and compliance certifications, thereby ensuring data security and adherence to regulatory protocols."
  },
  {
    title: "RAPID DEPLOYMENT & TIME-TO-MARKET",
    description: "Cloud development platforms come equipped with pre-built tools and frameworks that catalyze the development process, allowing businesses to launch their applications quicker and respond promptly to market shifts."
  }
]

function page() {
  return (
    <div>
        <HeroSection
        title="CLOUD & DEVOPS DEVELOPMENT CONSULTING"
        loadCounter={loadCounter}
        description="Unlock the power of Cloud and DevOps collaboration, customized to strengthen your business."
        button={{text:"GET INFO"}}
        />
        <TechStack
         techStackData={techStackData} 
         title=""
        />
        <OurServices
         data={servicesData}
         title="OUR CLOUD & DEVOPS SERVICES"
        />
        <WhyChooseUs
         whyChooseUsData={whyChooseUsData}
         title="WHY CHOOSE GO INFOTECH"
        />
        <BlueGrid
         industriesData={industriesData}
         title="EXPERTISE ACROSS DIFFERENT INDUSTRIES"
            button={{text:"All Industries"}}
            gridsize={2}
        />
        <ShortHeading
        title="OUR CLOUD-BASED SOLUTIONS CAN ENHANCE USER EXPERIENCE AND BOOST THE SCALABILITY OF YOUR SERVICES."
        description="CONSULT OUR EXPERTS TODAY <br/>Personalize IT solutions for your unique requirements and help transition to the Cloud or into DevOp services for the enhancement of your business and its exponential growth."
        button={{text:"Request A Consultation"}}
        />

        <WhiteBgMatrix
         Data={advantagesData}
         title="ADVANTAGES OF OUR CLOUD DEVELOPMENT & CONSULTING SERVICES"
         bgColor="#2b428c"
         textColor="white"
        />

    </div>
  )
}

export default page