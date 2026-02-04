"use client"
import HeroSection from '@/components/HeroSection/HeroSection'
function page() {
 const contactdata=   {
  "title": "CONTACT US",
  "description": "Our talented team of experts is here to serve you with the excellence that you need for the exponential growth of your business. We custom-tailor digital solutions based on your unique needs and preferences for you to strive in the competitive digital landscape.",
  "button": {
    "text": "REQUEST CONSULTATION",
    "link": "#"
  },
  "loadCounter": [
    {
      "label": "specialist globally",
      "limit": 200,
      "suffix": "+"
    },
    {
      "label": "offices worldwide",
      "limit": 5,
      "suffix": ""
    },
    {
      "label": "different time-zones",
      "limit": 7,
      "suffix": ""
    },
    {
      "label": "of expertise in business",
      "limit": 8,
      "suffix": " years"
    }
  ]
}
  return (
    
    <div>
  <HeroSection title={contactdata.title} 
  description={contactdata.description}
  button={contactdata.button}
  loadCounter={contactdata.loadCounter}
  />
    </div>
  )
}

export default page