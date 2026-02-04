"use client"
import HeroSection from "@/components/HeroSection/HeroSection"
import OurServices from "@/components/OurServices/ourServices";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { Beaker, Lightbulb, Rocket, Smile, Users} from "lucide-react"
import TechStack from "@/components/TechStack/TechStack";
import BlueGrid from "@/components/blueGrid/BlueGrid";
import ProcessTable from "@/components/processTable/processTable";
import ShortHeading from "@/components/shortHeading/shortHeading";

const loadCounter= [
  {
    limit: 10,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    limit: 4.8,
    suffix: "/5 stars",
    label: "review rating based on 60+ reviews",
  },
  {
    limit: 8,
    suffix: " years",
    label: "Experience in business",
  },
  {
    limit: 20,
    suffix: "+",
    label: "ML projects successfully delivered",
  }
];

const whyChooseUsData = [
  {
    title: "IT SOLUTIONS FOR STARTUPS",
    icon: <Lightbulb size={32}  />,
    description: "Our team of specialists in Machine Learning at Go InfoTech Solution is committed to providing a service that best suits your requirements, from initial to market launch."
  },
  {
    title: "RAPID DEVELOPMENT AND PROTOTYPING",
    icon: <Rocket size={32}  />,
    description: "We aim to pay attention to the rapid development of Machine Learning and to transform your idea into reality using our expertise and knowledge."
  },
  {
    title: "UNDERSTANDING THE STARTUPS",
    icon: <Users size={32}  />,
    description: "Our team is dedicated to using their skills and expertise to design and develop functional solutions using Machine Learning that meet the requirements of startups."
  },
  {
    title: "INDUSTRY NETWORK ACCESS",
    icon: <Users size={32}  />,
    description: "We ensure that startup owners gain proper insights, access to a vast network of industry experts, and the assistance of our specialists in Machine Learning."
  },
  {
    title: "AI R&D LAB",
    icon: <Beaker size={32}  />,
    description: "Witness our team's commitment to digital innovation while utilizing Machine Learning for the successful start of startups at AI Research and Development Lab."
  },
  {
    title: "HIGH SATISFACTION RATES",
    icon: <Smile size={32}  />,
    description: "Achieve business growth with GoTech, where we are determined to satisfy our clients and serve with expertise and knowledge."
  }
];

const servicesData = [
  {
    "title": "STAFF AUGMENTATION FOR ML PROJECTS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our team is dedicated to providing you with highly skilled and experienced IT professionals who have expertise in Machine Learning and will enable you to focus on core aspects so that your business reaches new heights.</p>
    <h2 class="text-2xl font-semibold mt-4 ">APPLICATION:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Utilizing the expertise of our ML specialists to integrate with your team.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Assistance and use of optimal procedures for ML development.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Guidance for operations management and administration of the projects.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "DEEP LEARNING SOLUTIONS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Empower your business with deep-learning solutions to help you recognize patterns, images, and even audio from voluminous data, as cutting-edge technology can function like a human brain.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE EMPOWER YOUR PROJECTS:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Analyze visual and audio data for several entertainment companies.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Develop systems for image and voice recognition.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Predictive algorithms for e-commerce platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Trend-analysis based on former data.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "NATURAL LANGUAGE PROCESSING (NLP)",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Incorporate advanced algorithms to comprehend and generate human language. NLP enables and supports chatbots, sentiment analysis, and content recommendation systems for an elevated user experience.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE USER EXPERIENCE USING NLP:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Innovation of advanced chatbots for customer support.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Automate content condensing and organizing.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Search engine enhancement with interpretive understanding and real-time language translation.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "PREDICTIVE ANALYTICS",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Leverage AI to analyze former data and future trend prediction. This can be significant for industries such as finance, e-commerce, entertainment, and healthcare.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW WE SHAPE FUTURE OF YOUR BUSINESS:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Predict stock market analysis for the financial sector.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Trend predictions and market analysis for e-commerce platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Examine consumer behavior for strategic marketing and supply optimization.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "ML MODEL OPTIMIZATION AND MAINTENANCE",
    "Desc_html": `
    <div class='p-4 text-inherit '>
    <p>Our team of experts are dedicated to efficient, and optimal creation of ML solutions that provide consistent support to elevate your business’s success.</p>
    <h2 class="text-2xl font-semibold mt-4 ">HOW DO WE ASSIST YOU:</h2>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Develop authentic ML-driven simulations for optimal operations and training.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Examine user motions and performance for software solutions for issues arising.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Develop personalized solutions via ML algorithms and regular updates.</li>
        </ul>
    </div>
    `
  }
];

const techStackData = [
  {
    title: "PROGRAMMING LANGUAGES",
    desc: "Programming languages are fundamental for the development of Machine Learning and are essential for the purposes of creating algorithms, handling data processing, and model training, and facilitating the implementation of complex machine learning techniques and applications.",
    points: [
      "Developing functional and responsive Machine Learning applications",
      "Data analysis and transformation, Exploratory Data Analysis (EDA) & data visualization",
      "Developing and deploying machine learning models"
    ],
    icons_path: [
      "/С-1.svg",
      "/Java-1.png",
      "/Python-1.png",
      "/Scala-1.png"
    ]
  },
  {
    title: "TECHNOLOGIES & FRAMEWORKS",
    desc: "Utilizing these technological infrastructures for developing tailored tools and libraries, spanning from data preprocessing to model deployment, simplifies the machine learning development process.",
    points: [
      "Developing, training, and deploying deep learning models",
      "Crafting and designing prototypes of neural network architectures.",
      "Conducting research using dynamic computational graphs"
    ],
    icons_path: [
      "/caffe.png",
      "/Keras_logo-2.svg",
      "/mxnet-1.svg",
      "/PyTorch.png",
      "/scikit.png",
      "/Tensorflow.png"
    ]
  },
  {
    title: "CLOUD PLATFORMS",
    desc: "Ensuring the cloud platforms deliver responsive, functional, and globally accessible database services for the purpose of effective operations management and maintaining high performance.",
    points: [
      "Leveraging cloud resources to train models on large datasets without hardware limitations",
      "Hosting models in the cloud for global accessibility and high availability",
      "Storing vast amounts of data securely and cost-effectively in the cloud",
      "Working on machine learning projects collaboratively and maintaining versions of models and data"
    ],
    icons_path: [
      "/Amazon_Web_Services_Logo-1.png",
      "/firebase.png",
      "/google-cloud-seeklogo.com_.png",
      "/ibm-watson.png",
      "/Microsoft_Azure.png"
    ]
  }
];

const expertizeData = [
  {
    "title": "MEDIA & ENTERTAINMENT",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Predictive Analysis:</b> Recommending content that is relevant to the user based on their individual habits, elevating the user experience.</p>
    <p><b>Content Recommendation:</b> Gaining insights about the preferences of the user and their online behavior and patterns and further suggesting content as per their likes.</p>
    <p><b>Automated Content Tagging:</b> Incorporating ML for redefining content and its organization using automation.</p>
    </div>
    `
  },
  {
    "title": "AUTOMOTIVE",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Predictive Maintenance:</b> Regular updates regarding machine downtimes and maintenance requirements.</p>
    <p><b>Driver Assistance:</b> Integrate functionalities such as lane detection and collision avoidance.</p>
    <p><b>Voice-Activated Systems:</b> Improve in-vehicle systems with voice recognition for hands-free commands.</p>
    </div>
    `
  },
  {
    "title": "EDUCATION",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Personalized Learning:</b> Personalized study materials suit the student's needs.</p>
    <p><b>Automated Assessment:</b> Incorporate ML to automate the assessment process for performance evaluation.</p>
    <p><b>Predictive Analytics:</b> Identifying the student's needs and requirements for support.</p>
    </div>
    `
  },
  {
    "title": "E-COMMERCE",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Predictive Analysis:</b> Suggests products based on the likes and dislikes of the user.</p>
    <p><b>Inventory Forecasting:</b> Anticipate inventory requirements by analyzing sales patterns.</p>
    <p><b>Chatbots:</b> Elevated user experience via AI-driven chatbot services for prompt response.</p>
    </div>
    `
  },
  {
    "title": "FINTECH",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Fraud Identification:</b> Use ML analytics to identify and prevent skeptical transactions.</p>
    <p><b>Credit Assessment:</b> Improve loan approval procedures through predictive credit risk models.</p>
    <p><b>Automated Trading:</b> Utilize ML models for instantaneous trading choices.</p>
    </div>
    `
  },
  {
    "title": "GIS",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Satellite Imagery Analysis:</b> Derive insights for land utilization classification.</p>
    <p><b>Route Planning:</b> Forecast traffic flow for optimization of logistics and transportation.</p>
    <p><b>Catastrophe Forecasting:</b> Utilize environmental data analysis to anticipate natural calamities.</p>
    </div>
    `
  },
  {
    "title": "HEALTHCARE",
    "description": `
    <div class='p-4 text-inherit '>
    <p><b>Predictive Analysis:</b> Evaluation of patient data for disease identification and prevention measures.</p>
    <p><b>Medical Image Analysis:</b> Employ ML to enhance image recognition in diagnostic processes.</p>
    <p><b>Personalized Treatment:</b> Specific treatment options based on the unique needs of the patient via data and predictions.</p>
    </div>
    `
  }
];

const MLSolutions = [
  {
    "title": "PREDICTIVE ANALYTICS",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Empowering businesses with AI-driven forecasts of data and future trends, behaviors, and events.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Anticipating sales and trend analysis.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Forecasting Equipment Maintenance Requirements.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Identifying customer behaviors.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "NATURAL LANGUAGE PROCESSING (NLP)",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Identify and generate human language interactions, elevating the user experience.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Chatbots and digital assistants.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">User feedback sentimental analysis.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Text condensation and sorting.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "IMAGE RECOGNITION",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Visual data interpretation from around the globe to enhance security and diagnostic precision.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Security Facial Identification.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Medical Image Analysis.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Quality control automation.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "RECOMMENDATION SYSTEMS",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Recommendation of content based on the specific needs of the user to drive higher engagement.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">E-commerce Product Suggestions.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Content recommendation on platforms.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Tailored advertising for businesses.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "ANOMALY DETECTION",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Detection of Anomalies in Non-Conforming Patterns to protect assets and ensure integrity.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Fraud identification in bank transactions.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Cybersecurity and Intrusion Detection.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Industrial Anomaly Detection.</li>
        </ul>
    </div>
    `
  },
  {
    "title": "OPTIMIZATION ALGORITHMS",
    "description": `
    <div class='p-4 text-inherit '>
    <p>Optimizing operations and providing assistance in decision-making for effective business solutions.</p>
    <ul class='list-disc list-inside font-light mt-4 text-xl leading-relaxed mb-4 '>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Supply chain management.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Project Resource Management.</li>
          <li class="mb-2 border-b-2 h-auto border-gray-300 pb-4">Logistics Route Optimization.</li>
        </ul>
    </div>
    `
  }
];

const MLprocessData = [
  {
    title: "1. CONNECT WITH US",
    description: "Connect with Go InfoTech solution to experience excellence. We understand your unique vision, goals, and objectives by having a detailed discussion."
  },
  {
    title: "2. THOROUGH ANALYSIS",
    description: "We will explore your data sources, analyze historical data patterns, and review existing strategies to create a solution plan, ensuring alignment between our visions. Formalities such as a Non-Disclosure Agreement (NDA) are handled here."
  },
  {
    title: "3. DATA BLUEPRINTING",
    description: "After a thorough understanding of your vision and the formulation of strategies, we focus on predictive data analysis and design a prototype that aligns with your objectives."
  },
  {
    title: "4. TEST & REFINE",
    description: "We focus on delivering a functional prototype along with insights on data utilization. This phase enables us to validate our approach and make any necessary refinements."
  },
  {
    title: "5. FULL-SCALE DEVELOPMENT",
    description: "Post-validation of the prototype, we move forward to full-scale development. During this phase, we integrate the model into your existing systems, ensuring smooth data flow and offering real-time insights."
  },
  {
    title: "6. DEPLOYING & ON-GOING MONITORING",
    description: "After development, we deploy the solution on the required platform. We consistently monitor the model and conduct performance evaluations to ensure sustained accuracy and relevance."
  },
  {
    title: "7. ITERATE & ENHANCE",
    description: "As your business advances, we partner with you to iterate and enhance the model, adapting to dynamic shifts in business landscapes and evolving data patterns."
  }
];

function page() {
  return (
    <div>
        <HeroSection
        title="MACHINE LEARNING CONSULTING"
        description="Embark on the journey of technological enchantment with our specialists in Machine Learning for the exponential growth of your business with Go InfoTech Solution."
        button={{text:"GET INFO"}}
        loadCounter={loadCounter}
        />
        <WhyChooseUs whyChooseUsData={whyChooseUsData} />
        <OurServices
        title="OUR MACHINE LEARNING CONSULTING SERVICES"
        servicesData={servicesData}
        bg="#2b428c"
        bgOdd="#ffffff"
        />
        <TechStack
        title="TECH STACK WE USE FOR MACHINE LEARNING DEVELOPMENT"
        techStackData={techStackData}
        />
        <BlueGrid
        title="CROSS-INDUSTRY EXPERTISE IN ML DEVELOPMENT"
        industriesData={expertizeData}
        gridsize={2}
        bgColor="white"
        textColor="#2b428c"
        description="Utilizing the revolutionary capabilities of Machine Learning, we customize solutions to address the distinctive hurdles encountered within various industries. Whether it involves enriching user interactions within media or employing predictive analytics within healthcare, our proficiency fuels advancement and expansion across a wide array of sectors."
        button={{text:"ALL INDUSTRIES >"}}
        />
        <BlueGrid
        title="EVERYDAY PROBLEM-SOLVING WITH ML SOLUTIONS"
        industriesData={MLSolutions}
        gridsize={2}
        bgColor="#2b428c"
        textColor="white"
        />
        
        <ProcessTable
        title="OUR MACHINE LEARNING CONSULTING PROCESS"
        approachesData={MLprocessData}
        numbeering={false}
        />

        


    </div>
  )
}

export default page