import { projects } from "@/data"
import { ProjectCard } from "./project-card"

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
	<h1 className="heading">
	    A small selection of {' '}
	    <span className="text-purple-300">recent projects</span>
	</h1>
	<div className="flex flex-wrap items-center justify-center p-4 gap-5">
	    {projects.map(({ id, title, des, img, iconLists, link }) => (
		<ProjectCard
		    key={id}
		    title={title}
		    des={des}
		    img={img}
		    iconLists={iconLists}
		    link={link}
		/>
	    ))}
	</div>
    </section>
  )
}

export default RecentProjects
