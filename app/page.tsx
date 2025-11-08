import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/grid";
import { navItems } from "@/data";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
    return (
	<main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
	    <div className="w-full">
		<FloatingNav 
		    navItems={navItems}
		/>
		
		<Hero />

		{/* components that need x padding */}
		<div className="sm:px-10 px-5">
		    <Grid />
		    <RecentProjects />
		</div>
	    </div>
	</main>
    )
}
