import StatCounter from '../StatCountDiv/StatCountDiv'

function ShortTimerHeading({loadCounter=[],title="",description="",button={text:"Book A Call",bgColor:"#f97316",onClick:()=>{}}}) {
  return (
    <section>
        <div className=' bg-gray-50 text-[#2b428c] max-w-full mx-auto px-6 py-10 flex flex-col items-center'>
            <h1 className='font-semibold text-4xl text-left px-5'>{title}</h1>
            <p className='text-lg text-left max-w-3/4 my-4 px-5'>{description}</p>
            <div className='grid grid-cols-1 max-w-3/4 sm:grid-cols-4 my-10 gap-6 '>
            {loadCounter.map((item, index) => (
                <StatCounter key={index} {...item} uppercase={true} className="!bg-gray-50 !shadow-none !rounded-lg !border-none border-gray-200 " textclass='!text-gray-700' dotted={false}/>
            ))}

            <button className={` bg-${button.bgColor} w-4xs max-h-[60px] font-semibold text-white px-6 py-3 rounded-lg hidden sm:block`} onClick={button.onClick}>{button.text}</button>
        </div>
        </div>
    </section>
  )
}

export default ShortTimerHeading