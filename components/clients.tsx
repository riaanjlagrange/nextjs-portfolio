import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
	<h1 className="heading">
	    Kind words from {' '}
	    <span className="text-purple-300">satisfied clients</span>
	</h1>
	<div className="flex flex-col items-center">
	  <InfiniteMovingCards
	    items={testimonials} 
	    direction="right"
	    speed="slow"
	  />
	</div>
    </section>
  )
}

export default Clients
