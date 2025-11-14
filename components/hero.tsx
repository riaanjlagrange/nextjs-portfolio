import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow, FaMobile } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen overflow-hidden pb-20 pt-36">
      {/* Spotlights */}
      <div className="pointer-events-none absolute inset-0">
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="absolute top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="absolute top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Grid background */}
      <div className="w-full pointer-events-none absolute inset-0 dark:bg-black bg-white dark:bg-grid-white/30 bg-grid-black/20">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Hero Content (this is now centered) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl lg:max-w-4xl px-6">
        <h2 className="uppercase tracking-widest text-xs text-blue-100">
          My Portfolio
        </h2>

        <TextGenerateEffect
          className="text-[40px] md:text-4xl lg:text-5xl font-semibold leading-tight"
          words="Full Stack Software Developer"
        />

        <p className="md:tracking-wider mt-4 mb-6 text-sm md:text-lg lg:text-2xl">
          Hi, I&apos;m Riaan, a Full Stack Developer based in Cape Town, South Africa.
        </p>

	<div className="flex gap-5 items-center justify-center">
	  <a href="#projects">
	    <MagicButton
	      title="Show my work"
	      icon={<FaLocationArrow />}
	      position="right"
	    />
	  </a>
	  <a href="#contact">
	    <MagicButton
	      title="Contact Me"
	      icon={<FaMobile />}
	      position="right"
	    />
	  </a>
	</div>
	{/* TODO: add cv to download */}
	<p className="mt-5">or <a href="" className="font-bold text-purple-300 hover:text-white transition-colors">Download My CV</a></p>
      </div>
    </section>
  );
};

export default Hero;

