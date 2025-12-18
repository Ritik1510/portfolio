import ProjectCard from "../components/ProjectCard.jsx";
import Projects from "../constants/Projects";

export default function ProjectsSection() {
  return (<>
    <div
      className="tab-tracker-heading mb-2 md:mb-2.5
      rounded-(--borderRadius-medium) w-full bg-blur card-padding">
      <p className="">Projects</p>
    </div>
    <div className="center projects-section-wrapper relative">
      {Projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </>
  )
}
