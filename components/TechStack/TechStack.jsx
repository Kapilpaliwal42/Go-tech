import React from 'react'
import { useState } from 'react';
import { Tabs, Tab, useMediaQuery} from '@mui/material';
import { useTheme} from '@mui/material/styles';

const techData = [
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
    title: "UI/UX DESIGN",
    desc: "Through our user-centric approach we are successful in reaching the target audience via our  visually appealing UI/UX designs that are user-friendly and lead to an exceptional user experience on all platforms.",
    points: ["10+ Design specialists","8 years of experience","4.8 rating on Google"],
    icons_path:["/Adobe_XD-1.png","/FigJam-1.png","/Invision-1.png"],
  },
  
 
];



function TechStack({techStackData=[],title=""}) {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const [tabValue, setTabValue] = useState(0);

    techStackData = techStackData.length ? techStackData : techData;
    
    
  return (
    <section className='py-24 bg-white flex flex-col items-center justify-center w-full px-6'>
        <h2 className='font-bold text-4xl mb-16 text-center text-[#2b428c] uppercase'>{title || "Our Tech Stack"}</h2>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-8">
            <Tabs
              value={tabValue}
              onChange={(_, v) => setTabValue(v)}
              variant={isLarge ? 'fullWidth' : 'scrollable'}
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="tech stack tabs"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  flex: isLarge ? '1 1 0' : 'initial',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '0.85rem', sm: '0.95rem', lg: '1.05rem' },
                  color: '#2b428c',
                  py: 2,
                  minWidth: isLarge ? 'auto' : '140px',
                  whiteSpace: 'preserve',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#2b428c',
                  height: 3,
                },
                '& .MuiTabs-scrollButtons': {
                  color: '#2b428c',
                },
              }}
            >
              {techStackData.map((s, i) => (
                <Tab key={i} label={s.title} />
              ))}
            </Tabs>

            <div>
              {techStackData.map((s, i) => (
                <div key={i} role="tabpanel" hidden={tabValue !== i} className="animate-in fade-in duration-500">
                  {tabValue === i && (
                    <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
                      {/* Left side: Text content */}
                      <div className='p-4 text-[#2b428c] flex flex-col items-start justify-center text-left flex-1'>
                        <h1 className='text-2xl font-semibold mb-4'>{s.title}</h1>
                        <p className='font-light text-gray-500 text-xl leading-relaxed mb-6'>{s.desc}</p>
                        <h1 className='text-3xl font-semibold mb-4'>OUR {s.title} HAS:</h1>
                        <ul className='list-disc list-inside space-y-3 pl-4'>
                          {s.points.map((point, idx) => (
                            <li key={idx} className='text-lg text-gray-600'>{point}</li>
                          ))}
                        </ul>
                        <button className="mt-8 text-xl font-semibold bg-gray-700 text-white px-8 py-3 rounded-md hover:bg-gray-500 transition-all">Contact Us</button>
                      </div>

                      {/* Right side: Tech stack icons grid */}
                      <div className='relative flex items-center justify-center md:w-1/3 p-4'>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                          {s.icons_path.map((iconPath, idx) => (
                            <div key={idx} className='flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                              <img src={iconPath} alt={`Tech Icon ${idx}`} className='h-14 w-14 object-contain' />
                            </div>
                          ))}
                        </div>

                        {/* Dotted decorative background at bottom-right (wave-like shape) */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -right-6 -bottom-6 w-56 h-56 opacity-30"
                          style={{
                            backgroundImage: 'radial-gradient(#cfe0ff 3px, transparent 3px)',
                            backgroundSize: '18px 18px',
                            backgroundRepeat: 'repeat',
                            borderRadius: '50% 40% 60% 50% / 60% 50% 40% 50%',
                            transform: 'translate(8%, 8%) scaleX(1.6) scaleY(0.9) rotate(-12deg) ',
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%)',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%)',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
          
        </section>  
  )
}

export default TechStack