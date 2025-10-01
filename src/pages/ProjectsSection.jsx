import ProjectCard from "../components/ProjectCard.jsx";
import Projects from "../constants/Projects";

export default function ProjectsSection(){
  return (
    <>
      {Projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </>
  )
}
