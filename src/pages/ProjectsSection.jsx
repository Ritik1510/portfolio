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
    <div className="center projects-section-wrapper relative">
      {Projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </>
  )
}
