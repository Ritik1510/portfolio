import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard.jsx";
import Projects from "../constants/Projects";
import { bottomToTop } from "../Animations/bottomToTop.js";

export default function ProjectsSection() {
  useGSAP(() => {
    bottomToTop({
      targets: "#id-tab-tracker-heading"
    })
  }, []);
  
  return (<>
    <div className="projects-section-wrapper 
    relative grid gap-4 grid-cols-1
    md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
    lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
      {Projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </>
  )
}
