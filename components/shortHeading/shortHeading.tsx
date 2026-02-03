import React from "react";

type ButtonProps = {
  text?: string;
  bgColor?: string;
  onClick?: () => void;
};

type ShortHeadingProps = {
  title: string;
  description: string;
  button?: ButtonProps;
  textCenter?: boolean;
  bgColor?: string;
  textColor?: string;
};

function ShortHeading({
  title,
  description="",
  button,
  textCenter = false,
  bgColor = "white",
  textColor = "#2b428c",
}: ShortHeadingProps) {
  const buttonStyle = {
    backgroundColor: button?.bgColor || "#f97316"
  };
  
  return (
    <section style={{ backgroundColor: bgColor, color: textColor }}>
      <div className={`flex flex-col ${textCenter ? "text-center" : ""} md:flex-row max-w-7xl mx-auto px-6 py-20 gap-10 items-center justify-between`}> 
        <div className="flex flex-col max-w-4xl">
          <h1 className='text-4xl font-semibold mx-3'>{title}</h1>
          <p className='text-lg font-light p-2 m-5'>{description}</p>
        </div>
        {button?.text && (
        <button 
          style={buttonStyle}
          className="justify-self-center  sm:justify-self-end uppercase max-w-[350px] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:opacity-90"
          onClick={button.onClick}
        >
          {button.text}
        </button>
        )}

      </div>
    </section>
  );
}

export default ShortHeading;