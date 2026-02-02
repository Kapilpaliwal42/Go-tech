import React from 'react'


function WhiteBgMatrix({Data=[],title="",description="",bgColor='white',textColor='#2b428c',gridsize=3}) {
  // Determine if colors are hex or Tailwind classes
  const isBgHex = bgColor.startsWith('#');
  const isTextHex = textColor.startsWith('#');
  
  // Function to detect if string contains HTML
  const isHTML = (str) => {
    const htmlRegex = /<[^>]*>/;
    return htmlRegex.test(str);
  };
  
  return (
    <div>
      <section>
        <div 
          className="max-w-full mx-auto px-6 py-10 flex flex-col items-center"
          style={{
            backgroundColor: isBgHex ? bgColor : undefined,
            color: isTextHex ? textColor : undefined
          }}
          {...(!isBgHex && { className: `max-w-full mx-auto px-6 py-10 flex flex-col items-center ${bgColor}` })}
        >
          <h1 
            className='font-semibold text-4xl text-left px-5 pt-6' 
            style={isTextHex ? { color: textColor } : {}}
          >
            {title.toUpperCase()}
          </h1>
          <p className='text-lg m-5 max-w-7/8 font-light text-left px-5' style={isTextHex ? { color: textColor } : {}}>{description}</p>
          <div className={`grid grid-cols-1 max-w-3/4 sm:grid-cols-2 lg:grid-cols-${gridsize} gap-6 mt-10`}>
            {Data.map((item, index) => (
              <div 
                key={index} 
                className='p-6 h-full flex items-center flex-col border-b-gray-500 hover:border-b-[#2b428c] hover:border-b-2 border-b transition-all duration-300'
                style={isBgHex ? { backgroundColor: bgColor } : {}}
              >
                <div className='flex flex-col items-start gap-4 mb-4'>
                  <div 
                    className='rounded p-3 flex-shrink-0'
                    style={{
                      backgroundColor: isBgHex ? bgColor : undefined,
                      color: isTextHex ? textColor : undefined
                    }}
                  >
                    <h3 className='text-2xl font-semibold uppercase'>{item.title}</h3>
                  </div>
                  {isHTML(item.description) ? (
                    <div 
                      className='text-lg flex-grow'
                      style={{ color: textColor }}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  ) : (
                    <p 
                      className='text-lg flex-grow' 
                      style={{ color: textColor }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhiteBgMatrix