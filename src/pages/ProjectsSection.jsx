import ProjectCard from "../components/ProjectCard.jsx";
import Projects from "../constants/Projects";
``
export default function ProjectsSection(){
  // const [showAll, setShowAll] = useState(false);
  // const projects = showAll ? Projects : Projects.slice(0, 3);
  return (
    <>
      {Projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </>
  )
}
