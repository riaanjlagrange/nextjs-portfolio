import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./globe";
import { GlobeDemo } from "./grid-globe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 relative overflow-hidden flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
	backgroundColor: "rgb(4,7,29)",
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={cn(id === 6 && 'flex justify-center h-full')}>
	 <div className="w-full h-full absolute">
	    {img && (
		<img
		    src={img}
		    alt={img}
		    className={cn(imgClassName, 'object-cover object-center')}
		/>
	    )}
	 </div>
	 <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
	    {spareImg && (
		<img
		    src={spareImg}
		    alt={spareImg}
		    className='object-cover object-center w-full h-full'
		/>
	    )}
	 </div>
	 {id === 6 && (
	    <BackgroundGradientAnimation>
		<div className="absolute z-50 flex items-center justify-center text-white font-bold" />
	    </BackgroundGradientAnimation>
	 )}
	
	<div className={cn(
	    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
	)}>
	  <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
	    {description}
	  </div>
	  <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
	    {title}
	  </div>
	</div>
	{id === 2 && <GlobeDemo />}
      </div>
    </div>
  );
};
