import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Tabs, Tab, useMediaQuery} from '@mui/material';
import { useTheme} from '@mui/material/styles';
import { IdCard, FileSearchCorner, FileCode, BrainCircuit ,ChevronsLeftRight } from 'lucide-react';

const ServicesData = [
  {
    title: "Staff Augmentation",
    icon: IdCard,
    Desc_html: `
      <div class='p-4 text-inherit'>
        <p class='font-light mt-6 text-xl leading-relaxed'>Go-Infotech Solution Pvt Ltd is a custom <span class='font-semibold underline-offset-1 underline'>Web Development Company in Udaipur</span> aiming to provide seamless project execution by staff augmentation for optimal resource management:</p>
        <h2 class="text-2xl font-semibold mt-4 underline-offset-1 underline">IT STAFF AUGMENTATION</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>We are dedicated to providing you with highly skilled and experienced IT professionals who will help you focus on core aspects so that your business reaches new heights.</p>
        <h2 class="text-2xl font-semibold mt-4">COMMITTED TEAM</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>Our team at Go Tech Solution is a living testament of expertise and knowledge who are committed to meeting your unique business needs.</p>
      </div>
    `
  },
  {
    title: "IT Consulting",
    icon: FileSearchCorner,
    Desc_html: `
      <div class='p-4 text-inherit'>
        <p class='font-light mt-6 text-xl leading-relaxed'>Our IT Company in Udaipur is here to navigate you in the evolving tapestry of Technology while providing appropriate guidance from highly qualified professionals:</p>
        <h2 class="text-2xl font-semibold mt-4">TECHNICAL DUE DILIGENCE</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>After conducting a thorough evaluation of your business while assessing the project feasibility, relevant risks, and growth ambition.</p>
        <h2 class="text-2xl font-semibold mt-4">PROJECT MANAGEMENT</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>Our team ensures that your project delivery is timely and effective through proper management.</p>
      </div>
    `
  },
  {
    title: "Custom Software Development",
    icon: FileCode,
    Desc_html: `
      <div class='p-4 text-inherit'>
        <p class='font-light mt-6 text-xl leading-relaxed'>Our team is committed to delivering unique software solutions to your specific business requirements.</p>
        <h2 class="text-2xl font-semibold mt-4 underline-offset-1 underline">WEB DEVELOPMENT</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>Aim to develop a user-centric web application that is adaptive, intuitive, and visually engaging.</p>
      </div>
    `
  },
  {
    title: "Intelligent Automation",
    icon: BrainCircuit,
    Desc_html: `
      <div class='p-4 text-inherit'>
        <p class='font-light mt-6 text-xl leading-relaxed'>We are dedicated to serving you with the best services incorporating state-of-the-art technologies like AI and ML.</p>
        <h2 class="text-2xl font-semibold mt-4 underline-offset-1 underline">AI & ML SOLUTIONS</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>Empower your business to grow by incorporating Artificial Intelligence to enhance decision making.</p>
      </div>
    `
  },
  {
    title: "Managed IT Services",
    icon: ChevronsLeftRight,
    Desc_html: `
      <div class='p-4 text-inherit'>
        <p class='font-light mt-6 text-xl leading-relaxed'>At Go InfoTech Solution, a leading <span class='font-semibold underline-offset-1 underline'>Web Development company in Udaipur</span> we offer managed IT services to foster the growth of your business:</p>
        <h2 class="text-2xl font-semibold mt-4">DATABASE DEVELOPMENT SERVICES</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>To ensure the effective storage, retrieval, and management of business data we design, develop and optimize database development services.</p>
        <h2 class="text-2xl font-semibold mt-4 underline-offset-1 underline">CLOUD AND DEVOPS SOLUTIONS</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>We incorporate the best practices of DevOps and cloud solutions to expedite software delivery and collaborative space along with streamlining the entire development and deployment lifecycle.</p>
        <h2 class="text-2xl font-semibold mt-4">SOLUTION ARCHITECTURE SERVICES</h2>
        <p class='font-light mt-4 text-xl leading-relaxed'>Our team is dedicated to designing and deploying adaptive, secure, and high-performance IT infrastructure that is crafted to align with your business objectives.</p>
      </div>
    `
  }

];



function OurServices({
  data=ServicesData,
  title="Our Services",
  bg="#ffffff",
  bgOdd="#2b428c",
  activeBg,
  activeText,
  panelBg,
  panelBorder
}) {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const isHex = (value) => value && /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);
  const hexToRgb = (value) => {
    let hex = value.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }
    const num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  };
  const withAlpha = (value, alpha) => {
    if (!isHex(value)) return undefined;
    const { r, g, b } = hexToRgb(value);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Smart defaults for active states based on bg and bgOdd
  const finalActiveBg = activeBg || bgOdd;
  const finalActiveText = activeText || bg;

  const sectionStyle = isHex(bg) ? { backgroundColor: bg } : undefined;
  const headingStyle = isHex(bgOdd) ? { color: bgOdd } : undefined;
  const tabTextColor = isHex(bgOdd) ? bgOdd : undefined;
  const tabActiveBg = isHex(finalActiveBg) ? finalActiveBg : undefined;
  const tabActiveText = isHex(finalActiveText) ? finalActiveText : undefined;
  const tabInactiveBg = isHex(bgOdd) ? withAlpha(bgOdd, 0.15) : undefined;

  const panelBgStyle = panelBg
    ? (isHex(panelBg) ? { backgroundColor: panelBg } : undefined)
    : (isHex(bgOdd) ? { backgroundColor: withAlpha(bgOdd, 0.08) } : undefined);
  const panelBorderStyle = panelBorder
    ? (isHex(panelBorder) ? { borderColor: panelBorder } : undefined)
    : (isHex(bgOdd) ? { borderColor: withAlpha(bgOdd, 0.18) } : undefined);

  return (
    <section className={`py-24 max-w-full mx-auto relative overflow-hidden ${!isHex(bg) ? bg : ''}`} style={sectionStyle}>
        <h2 className={`font-bold text-4xl mb-16 text-center uppercase ${!isHex(bgOdd) ? bgOdd : ''}`} style={headingStyle}>{title}</h2>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex ${isLarge ? 'flex-row' : 'flex-col'} gap-10 rounded`}>
            <Tabs orientation={isLarge ? 'vertical' : 'horizontal'} value={tabValue} onChange={(_, v) => setTabValue(v)} variant="scrollable" sx={{ borderRight: isLarge ? 1 : 0,textAlign: 'left', borderBottom: isLarge ? 0 : 1, borderColor: 'divider',minWidth: isLarge ? 350 : '100%', '& .MuiTab-root': { justifyContent: 'flex-start', textTransform: 'none', fontWeight: 700, fontSize: '1.1rem', color: tabTextColor, py: 3, bgcolor: tabInactiveBg, borderRadius: '12px', mx: 1, my: 0.3, '&.Mui-selected': { bgcolor: tabActiveBg, color: tabActiveText, borderRadius: '12px' } } }}>
              {data.map((s, i) => <Tab key={i} label={s.title}  icon={s.icon ? <s.icon size={22} /> : null} iconPosition="start" />)}
            </Tabs>
            <div className="flex-1">
              {data.map((s, i) => (
                <div key={i} role="tabpanel" hidden={tabValue !== i} className="animate-in fade-in duration-500">
                  {tabValue === i && (
                    <div
                      className="p-4 md:p-10 rounded-3xl shadow-sm"
                      style={{
                        color: isHex(bgOdd) ? bgOdd : undefined,
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        ...(panelBgStyle || {}),
                        ...(panelBorderStyle || {})
                      }}
                      dangerouslySetInnerHTML={{ __html: s.Desc_html }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
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
      </section>
  )
}

export default OurServices;