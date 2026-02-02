"use client"
import HeroSection from "@/components/HeroSection/HeroSection"
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs"
import { Beaker, Lightbulb, Rocket, Smile, Users, Zap } from "lucide-react"
import OurServices from "@/components/OurServices/ourServices"
import WhiteBgMatrix from "@/components/WhiteBgMatrix/WhiteBgMatrix"
import TechStack from "@/components/TechStack/TechStack"
import BlueGrid from "@/components/blueGrid/BlueGrid"



const loadCounter = [
    {
        limit:80,
        suffix:"+",
        label:"members in team"
    },
    {
        limit:4.8,
        suffix:"/5 stars",
        label:"review rating based on 55+ reviews"
    },
    {
        limit:8,
        suffix:" years",
        label:"Experience in business"
    },
    {
        limit:300,
        suffix:"+",
        label:"Successful projects delivery"
    },
]

const whyChooseUsData = [
  {
    icon: <Rocket size={32} />,
    title: "IT SOLUTIONS FOR STARTUPS",
    description: "Our team of experts at Go InfoTech Solution is committed to your service that suits best your requirements, from initial to market launch."
  },
  {
    icon: <Zap size={32} />,
    title: "RAPID DEVELOPMENT AND PROTOTYPING",
    description: "Our aim is to pay attention to rapid development and prototyping to transform your idea into reality using our expertise and knowledge."
  },
  {
    icon: <Lightbulb size={32} />,
    title: "UNDERSTANDING THE STARTUPS",
    description: "Our team is dedicated to using their skills and expertise to design and develop functional solutions that are requirements of the startups."
  },
  {
    icon: <Users size={32} />,
    title: "INDUSTRY NETWORK ACCESS",
    description: "We ensure that startup owners gain proper insights, access to a vast network of industry experts, and the assistance of the right mentors."
  },
  {
    icon: <Beaker size={32} />,
    title: "AI R&D LAB",
    description: "Witness our team's commitment to digital innovation for the successful start of startups at AI Research and Development Lab."
  },
  {
    icon: <Smile size={32} />,
    title: "HIGH SATISFACTION RATES",
    description: "Achieve business growth with GoTech, where we are determined to satisfy our clients and serve with expertise and knowledge."
  }
]

const servicesData = [
  {
    "title": "CUSTOM CHATBOT DESIGN",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our bespoke chatbots can streamline and simplify your business processes. Go-Tech’s NLP/deep learning-driven chatbots conduct in-depth conversations with users and deliver a significant return on investment.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR SPECIALISTS ARE EXPERTS AT:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Personalized alert messages and pop-ups.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Elevated user experience with custom chatbot designs.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Crafting contextualized responses using a user-centric approach.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "MULTI-PLATFORM INTEGRATION",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our experts are dedicated to delivering excellence by developing custom chatbot designs for several platforms, making sure that the user experience is uniform and responsive as well.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR SPECIALISTS ARE EXPERTS AT:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Developing solutions compatible with platforms like Facebook, Slack, and WhatsApp.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Custom design chatbots, responsive on both mobile and desktop.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Uniform touchpoints for an elevated user experience.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "NATURAL LANGUAGE PROCESSING (NLP)",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Incorporate advanced algorithms to comprehend and generate human language. NLP enables and supports chatbots, sentiment analysis, and content recommendation systems for an elevated user experience.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR SPECIALISTS ARE EXPERTS AT:</h2>
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
    "title": "E-COMMERCE CHATBOTS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>We specialize in transforming your e-commerce journey by developing custom chatbot solutions, which will boost your sales and provide quality customer support for a seamless shopping experience.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR SPECIALISTS ARE EXPERTS AT:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Predictive analysis for product recommendations to users.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Prompt customer support and immediate resolutions of queries.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Collaborations with several e-commerce platforms.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "ANALYSIS & REPORTING",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Go InfoTech developers unleash the power of AI & ML algorithms to help identify patterns and implement proactive business solutions. Our predictive analytics tools use your data to help you forecast and devise optimum business strategies.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR SPECIALISTS ARE EXPERTS AT:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Continuous, Real-time monitoring of chatbot interactions.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Comprehensive report generation based on user engagement and feedback.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Actionable insights for holistic chatbot improvement.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "VOICE-ACTIVATED CHATBOTS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Quality automated audio recognition lets your organization quickly identify voice commands from users, allowing an advanced shopping experience. Our solutions allow you to auto-annotate dynamic informational inputs.</p>
    <h2 class="text-2xl font-semibold mt-4 ">OUR SPECIALISTS ARE EXPERTS AT:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Voice-enabled assistance similar to Alexa and Google Assistant.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Audio transcription functionalities incorporated in projects.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Globally accessible solutions for a diverse customer base.</li>
        </ul>
    </div>
    `
  }
]

const customChatbotSolData = [
  {
    title: "MACHINE LEARNING-ENHANCED CHATBOTS",
    description: "Incorporating AI/ML solutions for custom-curating chatbots allows users to experience elevated customer support services and smart interaction technology for human-like interaction."
  },
  {
    title: "CONVERSATIONAL AI CHATBOTS",
    description: "Beyond monotonous responses, our chatbots are developed for seamless and easy interaction for an elevated user experience, driving user satisfaction."
  },
  {
    title: "SOCIAL MEDIA CHATBOT INTEGRATION",
    description: "Interactive space for the user with social media chatbot integration to reach a larger audience. We specialize in collaborating chatbots with platforms with a wider audience reach for seamless interaction."
  },
  {
    title: "E-LEARNING CHATBOT SOLUTIONS",
    description: "Elevated e-learning chatbot solution for enabling digital education with the excellence of the Go InfoTech solution. We offer personalized learning options with live chatbots, recording options, and round-the-clock assistance to students."
  },
  {
    title: "VOICE-ACTIVATED CHATBOT SYSTEMS",
    description: "Quality automated audio recognition lets your organization quickly identify voice commands from users, allowing an advanced shopping experience for users. Go InfoTech solutions allow you to auto-annotate dynamic informational inputs, facilitating the generation of relevant content."
  },
  {
    title: "MULTILINGUAL CHATBOT SOLUTIONS",
    description: "Our multiple-language chatbot solution helps grasp the attention of audiences around the globe with a seamless interaction platform, and enhanced engagement with the brand."
  }
]

const techStackData = [
  {
    title: "PROGRAMMING LANGUAGES",
    desc: "At Go InfoTech, our team of developers makes use of cutting-edge technology for custom chatbot development. Empowering operations through seamless collaboration and the enhanced efficiency of our chatbots makes it more interactive.",
    points: [
      "Platform Integration: We enable seamless platform and website integration using various programming languages.",
      "Natural Language Processing (NLP): Incorporate advanced algorithms to comprehend and generate human language for an elevated customer support system.",
      "Performance Optimization: We ensure rapid response and facilitate interaction with the optimal outcomes for performance optimization."
    ],
    icons_path: [
      "/GOlang.png",
      "/Java-1.png",
      "/js_logo-1-2.svg",
      "/NodeJS-1.png",
      "/Python-1.png",
      "/Ruby-1.png"
    ]
  },
  {
    title: "CHATBOT FRAMEWORKS",
    desc: "Leveraging our expertise to optimize the chatbot infrastructure for seamless interaction between users and customer support. We specialize in smart and responsive chatbots compatible with several platforms.",
    points: [
      "Multi-Platform Deployment: We specialize in developing and deploying chatbot solutions that are compatible with various platforms, responsive, and interactive offering smart solutions.",
      "Advanced Chatbot Management: Capable of handling complex directions effectively by offering real-time responses to queries.",
      "Machine Learning Integration: Through these frameworks, we incorporate machine learning for effective communication and response."
    ],
    icons_path: [
      "/botpress.png",
      "/dialogflow-1.png",
      "/microsoft-bot-framework.png",
      "/rasa.png",
      "/wit.png"
    ]
  },
  {
    title: "CHATBOT TOOLS & SERVICES",
    desc: "Our team believes in delivering excellence. While incorporating a toolbox offering several service options and functionalities for custom chatbot development, including the collaboration of third-party services.",
    points: [
      "Intent Recognition: Identifying user intent with the use of specialized tools to ensure a real-time and apt response.",
      "Integration Services: Collaboration of chatbots with CRM, databases, or third-party services by making use of certain tools.",
      "Analytics and Reporting: We make use of analytic tools for evaluating the performance and areas for improvement in chatbot development."
    ],
    icons_path: [
      "/botsify.png",
      "/ibm-watson.png",
      "/Manychat-logo-1.png",
      "/MobileMonkey.png",
      "/OpenAI-1.png",
      "/telegram-bot-api.png"
    ]
  }
];

const Application = [
  {
    "title": "AUTOMOTIVE",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Vehicle Information Assistant:</b></p>
    <p>Transforming the automotive experience by offering comprehensive insights and aiding prospective buyers in comparing various models.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Offering comprehensive insights on vehicle specifications and features.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Aiding prospective buyers in comparing various models.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Regular maintenance reminders and service bookings.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Addressing queries relating to vehicle finance and insurance.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "EDUCATION",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>E-Learning Bot:</b></p>
    <p>Enhancing the learning journey by offering immediate assistance to students and personalized study material suggestions.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Offering assistance to students via online courses and lessons.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Rapid response to quizzes and assignments.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Suggest study materials based on student-specific progress.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Monitors class discussions and responses to common queries.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "MEDIA & ENTERTAINMENT",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Content Recommendation Bot:</b></p>
    <p>Elevating user engagement through personalized content discovery and interactive platform navigation.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Content recommendation based on the user’s preferences.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Guiding users through the navigation of streaming platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Regular updates on future launches and upcoming events.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Elevated user engagement using surveys, quizzes, and polls.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "E-COMMERCE",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Shopping Assistant Bot:</b></p>
    <p>Streamlining the e-commerce journey from product discovery to the final checkout process.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">User assistance via product catalogs and suggestions.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Personalized product suggestions and checkout assistance.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Response to payment-related queries and tracking info.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Order status updates and real-time tracking information.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "GIS",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Location Query Assistant:</b></p>
    <p>Providing accurate geographical insights and real-time environmental data for advanced navigation.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Query-related response about specific geographical locations.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">User assistance via navigation and interactive maps.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Real-time weather forecasts and traffic updates.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Appropriate insights on demographic or environmental data.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "FINTECH",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Financial Advisory Bot:</b></p>
    <p>Empowering users with personalized financial advice and real-time banking service assistance.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Offering personalized financial recommendations and advice.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">User assistance in managing expenses and savings.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Real-time updates of stock market trends.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Query response related to transactions and banking services.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "HEALTHCARE",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Healthcare Virtual Assistant:</b></p>
    <p>Improving patient care through medication reminders, appointment guidance, and first-aid support.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Response to general health queries.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Guidance related to appointments with healthcare experts.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Updates on medication reminders to patients.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Offering first-aid information during emergencies.</li>
        </ul>
    </div>
    `
  }
]

function page() {
  return (
    <div>
        <HeroSection
         title="AI CHATBOT DEVELOPMENT SERVICES"
         description="Our bespoke chatbots can streamline and simplify your business processes. Go-InfoTech’s NLP/deep learning-driven chatbots execute human-like conversations with users and deliver a substantial ROI.  "
         loadCounter={loadCounter}
            button={{text: `GET INFO`, bgColor: "#f97316", onClick: () => {}}}
         />

         <WhyChooseUs whyChooseUsData={whyChooseUsData} />
            <OurServices
        title="AI CHATBOT DEVELOPMENT SERVICES WE PROVIDE"
        description="Our team is dedicated to delivering excellence by incorporating AI chatbot solutions and making sure that your project achieves the necessary success "
        servicesData={servicesData}
        button={{text: "ALL SERVICES >", bgColor: "#f97316", onClick: () => {}}}
      />

      <WhiteBgMatrix
      Data={customChatbotSolData}
      title="CUSTOM CHATBOT SOLUTIONS TAILORED TO YOUR BUSINESS NEEDS"
      description="At Go InfoTech Solutions, we specialize in crafting custom chatbot solutions that align perfectly with your unique business requirements. Our team of experts is dedicated to delivering tailored chatbot designs that enhance user engagement and streamline operations."
      bgColor="#2b428c"
      textColor="white"
      gridsize={2}
      />

      <TechStack
      title="TECH STACK WE USE FOR AI CHATBOT DEVELOPMENT"
      description="Our team of developers makes use of cutting-edge technology for custom chatbot development. Empowering operations through seamless collaboration and the enhanced efficiency of our chatbots makes it more interactive."
      techStackData={techStackData}
      />

      <BlueGrid
      title="APPLICATION IN DIFFERENT INDUSTRIES"
      description="Customize the development of chatbot solutions based on your specific needs and preferences. With a customer-centric approach, we aim to transform your business and assist you in reaching new heights."
      industriesData={Application}
      bgColor="white"
      textColor="#2b428c"
      gridsize={2}
      />


        

    </div>
  )
}

export default page