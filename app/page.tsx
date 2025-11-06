import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from 'react-icons/fa'

export default function Home() {
    return (
	<main className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
	    <div className="max-w-7xl w-full">
		{/* TODO - move nav items list to it's own file and import it here */}
		<FloatingNav 
		    navItems={[
			{name: 'Home', link: '/', icon: <FaHome />}
		    ]}
		/>
		
		<Hero />
	    </div>
	</main>
    )
}
