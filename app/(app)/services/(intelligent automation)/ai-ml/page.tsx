"use client"
import HeroSection from "@/components/HeroSection/HeroSection"
import { UserCheck, BadgeCheck, Cpu, ShieldCheck, Globe, LayoutGrid } from 'lucide-react';
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import OurServices from "@/components/OurServices/ourServices";
import TechStack from "@/components/TechStack/TechStack";
import BlueGrid from "@/components/blueGrid/BlueGrid";
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix";

const loadCounter = [
    {
      limit:15,
        suffix: "+",
        label:"AI/ML Experts",
    },
    {
      limit:8,
        suffix: "+",
        label:"AI/ML Projects",
    },
    {
      limit:4.8,
        suffix: "stars",
        label:"AI/ML Rating",
    },
    {
      limit:20,
        suffix: "+",
        label:"Industries Served",
    },
    
]

const whyChooseUsData = [
  {
    icon: <UserCheck size={32} />,
    title: "OUR CLIENT’S EXPERIENCE",
    description: "Our clients have said it too, Go InfoTech has proved to be an expert custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development."
  },
  {
    icon: <BadgeCheck size={32} />,
    title: "TOP AI & ML SPECIALISTS",
    description: "Through our comprehensive procedure, we make sure that our AI & ML specialists are engaged in your crucial project. We are dedicated to the seamless success of your project."
  },
  {
    icon: <Cpu size={32} />,
    title: "PROPRIETARY TECHNOLOGY FOR EFFICIENCY",
    description: "We utilize our ‘Smart Outsourcing Automation Paradigm’ to integrate cutting-edge, smart technology for your project’s success. Automating crucial procedures and operations like project management, talent acquisition, and retention for effective performance."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "GUARANTEED PROJECT CONSISTENCY",
    description: "Benefit from the seamless and consistent delivery of excellence for uninterrupted success."
  },
  {
    icon: <Globe size={32} style={{ transform: 'rotate(30deg)' }} />,
    title: "GLOBAL COVERAGE ACROSS TIME ZONES",
    description: "We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime."
  },
  {
    icon: <LayoutGrid size={32} />,
    title: "WIDE RANGE OF SERVICES",
    description: "As a leading Web Development company in Udaipur, we offer custom software development, mobile app development, web application development, software maintenance and support, and more while making use of AI and ML technology."
  }
]

const servicesData = [
  {
    "title": "STAFF AUGMENTATION FOR AI & ML IT PRODUCTS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Augment our top AI and ML specialists in your team for seamless integration into your projects, building the seamless entry of your products into the market and market penetration for existing ones.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE ENHANCE YOUR TEAM’S EXPERTISE:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Amplify product’s success via effective development and deployment</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Proficient team to enhance the expertise of the in-house team</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Meticulously strategizing the use of advanced technology and best practices</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Scale up the existing team as per the project’s need</li>
        </ul>
    <button class='flex items-center gap-2 p-4 text-2xl text-white m-3 rounded-lg bg-orange-400 w-3xs justify-around'>READ MORE > <ArrowRight /></button>
    </div>
    `
  },
  {
    "title": "CHATBOT DEVELOPMENT SERVICES",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Enhanced user experience via seamless customer interactions with our chatbot expertise. We ensure a user-centric approach through AI-driven conversations.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE ELEVATE YOUR CUSTOMER EXPERIENCE:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Prompt customer support with our intelligent chatbots.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Boost sales with prediction analysis for personalized recommendations.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Automate daily operations, allocating humans for complex tasks.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Seamless integration of CRM, ERP, and other services.</li>
        </ul>
    <button class='flex items-center gap-2 p-4 text-2xl text-white m-3 rounded-lg bg-orange-400 w-3xs justify-around'>READ MORE > <ArrowRight /></button>
    </div>
    `
  },
  {
    "title": "GENERATIVE AI",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Augment our top AI and ML specialists in your team for seamless integration into your projects, building the seamless entry of your products into the market and market penetration for existing ones.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE ENHANCE YOUR TEAM’S EXPERTISE:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Amplify product’s success via effective development and deployment</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Proficient team to enhance the expertise of the in-house team</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Meticulously strategizing the use of advanced technology and best practices</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Incorporating AI/ML expertise for project growth.</li>
        </ul>
    <button class='flex items-center gap-2 p-4 text-2xl text-white m-3 rounded-lg bg-orange-400 w-3xs justify-around'>READ MORE > <ArrowRight /></button>
    </div>
    `
  },
  {
    "title": "DEEP LEARNING SOLUTIONS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Empower your business with deep-learning solutions to help you recognize patterns, images, and even audio from voluminous data as cutting-edge technology can function like a human brain.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE EMPOWER YOUR PROJECTS:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Analyze visual and audio data for entertainment companies.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Develop systems for image and voice recognition.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Predictive algorithms for e-commerce platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Implement automated content moderation and filtering.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "NATURAL LANGUAGE PROCESSING (NLP)",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Incorporate advanced algorithms to comprehend and generate human language. NLP enables support for sentiment analysis and content recommendation systems.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE IMPROVE USER EXPERIENCE:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Innovation of advanced chatbots for customer support.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Analyze customer feedback for product refinement.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Automate content condensing and organizing.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Real-time language translation for global platforms.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "PREDICTIVE ANALYTICS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Leverage AI to analyze former data and future trend prediction. Significant for industries such as finance, e-commerce, entertainment, and healthcare.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE SHAPE THE FUTURE:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Predict stock market analysis for the financial sector.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Trend predictions and market analysis for e-commerce.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Evaluate patient health risks in healthcare.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Examine consumer behavior for strategic marketing.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "AR/VR ENHANCED AI SOLUTIONS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Integration of Augmented Reality and Virtual Reality for elevated user experience and automated AI/VR solutions for real-time data visualization.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE ASSIST YOUR EXPERIENCES:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Develop authentic AI-driven simulations for training.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Collaborate AI data in AR for effective operations.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Crafting personalized experiences via ML algorithms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Incorporate AI for intuitive gesture controls in VR.</li>
        </ul>
    </div>
    `
  }
]

const techStackData = [
  {
    title: "DEEP LEARNING",
    desc: "We leverage the power of deep learning frameworks to harness cutting-edge technology in favor of the growth of your business. Empower your business with deep-learning solutions to help you recognize patterns, images, and even audio from voluminous data as cutting-edge technology can function like a human brain.",
    points: [
      "Developing comprehensive neural networks for several applications",
      "Incorporating audio, and visual recognition solutions",
      "Functional predictive analysis for systems of diverse platforms"
    ],
    icons_path: [
      "/caffe-1.png",
      "/mxnet-1.svg",
      "/OpenAI-3.png",
      "/PyTorch-2.png",
      "/Tensorflow-2.png",
      "/Theano.svg"
    ]
  },
  {
    title: "MACHINE LEARNING (ML)",
    desc: "At Go InfoTech, we leverage our excellence in ML, NLP, computer vision, and predictive analytics, we develop custom AI solutions tailored to your specific requirements. From responsive chatbots and virtual assistants to recommendation algorithms and predictive models, we develop powerful AI applications that drive business growth.",
    points: [
      "Crafting predictive analysis for finance, healthcare, e-commerce, and other sectors",
      "Data-driven automation of decision-making process",
      "Personalize products via user behavior understanding"
    ],
    icons_path: [
      "/fastai-1.png",
      "/h2o.png",
      "/lightGBM.png",
      "/scikit.png"
    ]
  },
  {
    title: "NATURAL LANGUAGE PROCESSING (NLP)",
    desc: "Incorporate advanced algorithms to comprehend and generate human language. NLP enables and supports chatbots, sentiment analysis, and content recommendation systems for elevated user experience.",
    points: [
      "Innovation of advanced chatbots for customer support",
      "Analyze customer feedback for product refinement",
      "Automate content condensing and organizing"
    ],
    icons_path: [
      "/BERT.png",
      "/CoreNLP.png",
      "/gensim.png",
      "/OpenAI-1.png",
      "/openNLP.png",
      "/SpaCy.png"
    ]
  }
];

const masteryData = [
  {
    title: "FINANCE",
    description: "Empowering the financial sector by incorporating the expertise of AI/ML in cross-platform services that enhance security and elevate user experience."
  },
  {
    title: "HEALTHCARE",
    description: "We offer cutting-edge solutions for healthcare by making use of AI/ML technology at a Web Development company in Udaipur and digital health technologies for predictive health risk analysis."
  },
  {
    title: "MEDIA & ENTERTAINMENT",
    description: "Robust IT Solutions at the leading Digital Marketing Company in Udaipur offering AI/ML solutions like trend recognition, market analysis, etc. for media and entertainment purposes."
  },
  {
    title: "AUTOMOTIVE",
    description: "Dedicated experts provide advanced IT solutions by making use of AI/ML for the automotive industry, offering operational efficiency and cross-platform services."
  },
  {
    title: "EDUCATION",
    description: "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance using AI/ML technology by our professionals."
  },
  {
    title: "E-COMMERCE",
    description: "Ensuring that the website generates enhanced customer engagement through the use of Augmented and Virtual Reality via AI/ML technology at the leading Digital Marketing Agency in Udaipur helps you generate higher sales."
  },
  {
    title: "GIS",
    description: "Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems using AI/ML at the trusted Web Development company in Udaipur."
  }
]

const solutionsOfferedData = [
  {
    "title": "DATA ANALYSIS",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Using ML algorithms, we ensure that the raw data is converted into actionable insights, helping businesses make informed, data-driven decisions.</p>
    <h2 class="text-2xl font-semibold mt-4 ">APPLICATION:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Trend forecast for e-commerce platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Customer behavior analysis for app development.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Predictive analysis for optimizing operations.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "INTELLIGENT AUTOMATION",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Effective utilization of AI-driven bots and systems for the elimination of redundant operations, allowing teams to focus on high-value tasks.</p>
    <h2 class="text-2xl font-semibold mt-4 ">APPLICATION:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Responsive chatbots for customer support.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Advanced technology for document processing for financial institutions.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Use of AI/ML mastery for inventory management in businesses.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "IMAGE & VIDEO ANALYSIS",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Revolutionize data interpretation and insight extraction from visual content through advanced computer vision technology.</p>
    <h2 class="text-2xl font-semibold mt-4 ">APPLICATION:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Facial identification used across several industries.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Quality inspection and automated product defect detection.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Generative content creation based on visual inputs.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "VOICE & SPEECH RECOGNITION",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Voice-activated commands, audio transcription, and much more to elevate the user experience through natural interaction.</p>
    <h2 class="text-2xl font-semibold mt-4 ">APPLICATION:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Smart audio recognition for voice-enabled commands.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Audio transcription for media and entertainment.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Voice-enabled search engines for e-commerce platforms.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "GENERATIVE CONTENT CREATION",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Design personalized content tailored to user preferences using Generative AI models to drive engagement and creativity.</p>
    <h2 class="text-2xl font-semibold mt-4 ">APPLICATION:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Generation of digital art for running ad campaigns.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Dynamic narrative tailored to gaming platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">AI-powered audio composition for media and entertainment.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "PREDICTIVE MODELING",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Forecasting outcomes and trend analysis using former data analysis and algorithms to mitigate risk and identify opportunities.</p>
    <h2 class="text-2xl font-semibold mt-4 ">APPLICATION:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Predicting future sales and market trend forecasts.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Risk assessment and projections for insurance concerns.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Forecasting health results for medical institutions.</li>
        </ul>
    </div>
    `
  }
]

function page() {
  return (
    <div>
      <HeroSection
        title="AI ML DEVELOPMENT SERVICES"
        description="Navigating you through the intricate tapestry of the digital world by incorporating AI and ML into your projects for success. "
        loadCounter={loadCounter}
        />
      <WhyChooseUs 
        whyChooseUsData={whyChooseUsData}
        title="WHY CHOOSE GO INFOTECH AS YOUR PARTNER FOR AI & ML DEVELOPMENT FOR YOUR PROJECTS"
      />
      <OurServices data={servicesData} title="AI & ML DEVELOPMENT SERVICES" />
      <TechStack techStackData={techStackData} />
      <BlueGrid 
      industriesData={masteryData}
      title={"INDUSTRY-SPECIFIC AI & ML MASTERY"}
      description="our deep understanding and application of AI & ML technologies tailored for each industry’s nuances."
      button={{text: "ALL INDUSTRIES >" }}
      />
      <WhiteBgMatrix
        title="AI & ML SOLUTIONS WE OFFER"
        description="With a well-equipped team that is dedicated to delivering excellence by incorporating AI/ML solutions and making sure that your project achieves the necessary success "
       Data={solutionsOfferedData}
       bgColor="gray-100"
        />
    </div>
  )
}

export default page