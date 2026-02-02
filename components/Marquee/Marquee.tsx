import React from 'react'

const images = [
    "/krishna-tours.png",
    "/PDS-Clicks.webp",
    "/MPS-Udaipur.png",
    "/ranjeet-septic.png",
    "/TRAVENEX.png",
    "/Weddings-for-u.png"
]

function Marquee() {
  return (
    <div className="overflow-hidden relative w-full mt-3 ml-4 z-20">
        <style jsx>{`
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
            
            .marquee__inner {
                animation: scroll 20s linear infinite;
            }
            
            .marquee__inner:hover {
                animation-play-state: paused;
            }
        `}</style>
        <div className="marquee">
            <div className="marquee__inner flex gap-8 w-max">
                {/* Duplicate the images twice for seamless loop */}
                {[...images, ...images].map((src, index) => (
                    <div className="marquee__item flex-shrink-0" key={index}>
                        <img className='h-20 w-auto rounded object-contain' src={src} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Marquee