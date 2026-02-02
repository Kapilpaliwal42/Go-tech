

function ProcessTable({approachesData=[],title="",description="",numbeering=true}) {
  return (
    <section>
        <div className='w-3/4 flex flex-col items-center justify-center text-[#2b428c] bg-white px-6 py-10 mx-auto'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-4xl text-center px-5'>{title}</h1>
            <p className='text-lg m-5 font-light text-center px-5 max-w-4xl'>{description}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
            {approachesData.map((item, index) => 
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:min-w-full gap-6  mt-5 border-b-2 border-b-gray-200' key={index}>
                <div className='flex  text-left mx-4 items-center'>
                    <h2 className='text-2xl font-semibold'>{numbeering ? `${index+1}. ` : ""} {item.title}</h2>
                </div>
                <div className='flex justify-center items-center  my-4'>
                    <div className='text-lg' dangerouslySetInnerHTML={{__html: item.description}} />
                </div>
            </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default ProcessTable