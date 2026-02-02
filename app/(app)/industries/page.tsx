"use client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import {hero,showcaseItems,whyChooseUs,solutions,ourServices} from "@/constants/industries/index.json"
import Link from "next/link";
import OurServices from "@/components/OurServices/ourServices";




function page() {
  return (
    <div>
        <HeroSection
        title={hero.title}
        description={hero.description}
        button={{text:hero.button.text,bgColor:hero.button.bgColor}}
        loadCounter={hero.loadCounter}
        />


    {/* showcase section */}
    <section className="bg-[#2f4a84]">
        <div className="w-full max-w-6xl mx-auto px-6 py-20 space-y-12">
          {showcaseItems.map((item, index) => (
            <div
              key={item.title}
              className=" rounded-2xl p-8 lg:p-10"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="w-full  lg:w-1/2">
                  <div className="rounded-2xl bg-[#3a5797] overflow-hidden shadow-lg">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={720}
                      height={480}
                      className="w-full h-auto object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 text-white space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wider">Our Milestones:</p>
                    <ul className="space-y-1 text-sm text-white/90">
                      {item.milestones.map((milestone) => (
                        <li key={milestone} className="leading-relaxed">{milestone}</li>
                      ))}
                    </ul>
                  </div>
                      <Link href={item.button.href}>
                  <button  className={`mt-4 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-8 py-3 rounded-md text-sm tracking-wider`}>
                    {item.button.text}
                  </button>
                        </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>

    <OurServices 
    data={solutions}
    />
    <WhyChooseUs
    title={whyChooseUs.title}
    whyChooseUsData={whyChooseUs.data}
    />

    <OurServices
    title="OUR Services"
    data={ourServices.data}
    />

    </div>
  )
}

export default page