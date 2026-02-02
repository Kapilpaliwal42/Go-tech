import { UserCheck,BadgeCheck,ShieldCheck,TrendingUp,Globe,LayoutGrid } from 'lucide-react';

interface WhyChooseUsProps {
  whyChooseUsData: {  title: string; description: string }[];
  title?: string;
  gridsize?: number;
}

const iconMap = {
  0: <UserCheck size={32} />,
  1: <BadgeCheck size={32} />,
  2: <ShieldCheck size={32} />,
  3: <TrendingUp size={32} />,
    4: <Globe size={32} />,
    5: <LayoutGrid size={32} />,
};



// icons will remain static



function WhyChooseUs({whyChooseUsData=[],title='Why Choose Us?', gridsize=3}: WhyChooseUsProps) {
  return (
     <section>
            <div className='bg-white text-[#2b428c] max-w-full mx-auto px-6 py-10 flex flex-col items-center'>
                <h1 className='font-bold text-4xl text-left px-5'>{title}</h1>
                <div className={`grid grid-cols-1 max-w-3/4 sm:grid-cols-${gridsize} gap-6 mt-10`}>
                    {whyChooseUsData.map((item, index) => (
                        <div key={index} className='bg-[#8495c929] rounded-xl  p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col  '>
                            <div className='flex items-start gap-4 mb-4'>
                                <div className='bg-white  text-[#2b428c] rounded p-3 flex-shrink-0'>
                                    {iconMap[index] }
                                </div>
                                <h3 className='text-xl font-semibold uppercase  pt-2'>{item.title}</h3>
                            </div>
                            <p className='text-md p-3 text-[#2b428c] mb-4 flex-grow' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        </div>
                    ))}
                </div>
            </div>
          </section>
  )
}

export default WhyChooseUs