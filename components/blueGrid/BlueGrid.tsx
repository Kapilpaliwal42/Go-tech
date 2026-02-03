import { UserCheck,BadgeCheck,ShieldCheck,TrendingUp,Globe,LayoutGrid } from 'lucide-react';

interface BlueGridProps {
  title: string;
  industriesData: { title: string; description: string; icon?: any }[];
  gridsize?: number;
  description?: string;
  bgColor?: string;
  textColor?: string;
  button?: { text: string; onClick: () => void; bgColor?: string };
  icons?: boolean;
};

const iconMap = {
  0: <UserCheck size={32}  />,
  1: <BadgeCheck size={32}  />,
  2: <ShieldCheck size={32}  />,
  3: <TrendingUp size={32}  />,
  4: <Globe size={32}  />,
  5: <LayoutGrid size={32}  />,
}

function BlueGrid({ title, industriesData = [], gridsize = 3, description = '', bgColor = "#2b428c", textColor = "white", button = { text: "", onClick: () => { }, bgColor: "orange-500" },icons=false }: BlueGridProps) {
  
  const isHTML = (str: string) => /<[^>]*>/.test(str);

  const totalItems = industriesData.length;
  const remainder = totalItems % gridsize;
  const lastRowItemCount = remainder > 0 ? remainder + gridsize : gridsize;
  const fullRowsLastIndex = totalItems - lastRowItemCount;

  // Determine border color based on background
  const getBorderColor = () => {
    if (bgColor === "white" || bgColor === "#ffffff" || bgColor === "#fff") {
      return 'rgba(43, 66, 140, 0.2)'; // Use textColor for border on light bg
    }
    return 'rgba(255, 255, 255, 0.2)'; // Use white for border on dark bg
  };

  // Convert hex to RGB and create a lighter version
  const getLighterBgColor = (color: string) => {
    // Handle hex colors
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, 0.2)`;
    }
    // Handle rgb/rgba colors - return with reduced opacity
    if (color.startsWith('rgb')) {
      return color.replace(/[\d.]+\)$/g, '0.2)');
    }
    return color;
  };

  return (
    <section style={{ backgroundColor: bgColor, color: textColor }} >
      <div className="max-w-9/10 mx-auto px-6 py-20 flex  flex-col ">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-10 sm:flex-row sm:justify-between sm:items-center w-full">
          <div>
            <h1 className='text-4xl font-semibold uppercase text-left mx-8'>{title}</h1>
            {description.length > 0 && <p className='text-lg  font-light max-w-3/4 p-2 mx-6'>{description}</p>}
          </div>
          {button.text && (
            <button
              onClick={button.onClick}
              className="mt-4 mx-10 sm:mt-0 min-w-[250px] h-12 px-6 py-3 rounded text-white font-semibold "
              style={{ backgroundColor: button.bgColor || 'orange' }}
            >
              {button.text}
            </button>
          )}
        </div>

        {/* The Adaptive Grid */}
        <div className="flex flex-wrap gap-6 mx-6">
          {industriesData.map((industry, index) => {
            // Check if this item belongs to the "leftover" last row
            const isLastRow = index >= fullRowsLastIndex;
            
            return (
              <div
                key={index}
                className="rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
                style={{ 
                  backgroundColor: bgColor, 
                  color: textColor, 
                  borderColor: getBorderColor(),
                  flex: isLastRow 
                    ? `0 0 calc(${100 / lastRowItemCount}% - 1.5rem)` 
                    : `0 0 calc(${100 / gridsize}% - 1.5rem)`,
                  minWidth: '300px' 
                }}
              >
                {icons && industry.icon !== undefined ? (                  
                  <div className="m-4 p-5 max-w-20 rounded" style={{ backgroundColor: 'rgba(80, 109, 201, 0.7)' }}>
                      {industry.icon}
                  </div>

                ) :  (
                  <div className="m-4 p-5 max-w-20 rounded" style={{ backgroundColor: 'rgba(80, 109, 201, 0.72)' }}>
                    {iconMap[index]}
                  </div>
                )}
                <h3 className="text-xl font-semibold m-4">{industry.title}</h3>
                {isHTML(industry.description) ? (
                  <div className="p-4" dangerouslySetInnerHTML={{ __html: industry.description }} />
                ) : (
                  <p className="p-4">{industry.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlueGrid;