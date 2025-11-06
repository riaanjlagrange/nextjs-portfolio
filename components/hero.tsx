import { Spotlight } from "./ui/spotlight"
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
  return (
    <div className="pb-20 pt-36 flex items-center justify-center w-full">
	{/* spotlight / flare effects to make hero stand out more */}
	<div>
	   <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" /> 
	   <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" /> 
	   <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" /> 
	</div>

	{/* grid background */}
	<div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
	  <div
	    className={cn(
	      "absolute inset-0",
	      "bg-size-[40px_40px]",
	      "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
	      "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
	    )}
	  />
	  {/* Radial gradient for the container to give a faded look */}
	  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
	</div>

	{/* hero main content */}
	<div className="absolute flex justify-center">
	    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

		{/* sub title */}
		<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
		    Create seamless solutions
		</h2>

		{/* main effect title */}
		<TextGenerateEffect
		    className="text-center text-[40px] md:text-4xl lg:text-5xl"
		    words="Full Stack Mobile & Web Developer"
		/>


		{/* hero info */}
		<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
		    Hi, I&apos;m Riaan, a Full Stack Developer based in Cape Town, South Africa.
		</p>


		<a href="#">
		    <MagicButton
			title="Show my work"
			icon={<FaLocationArrow />}
			position="right"
		    />
		</a>
	
	    </div>
	</div>
    </div>
  )
}

export default Hero
