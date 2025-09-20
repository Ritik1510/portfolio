import ProjectCard from "../components/ProjectCard.jsx";
import Projects from "../constants/Projects";
``
export default function ProjectsSection(){
  // const [showAll, setShowAll] = useState(false);
  // const projects = showAll ? Projects : Projects.slice(0, 3);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-16 p-8">
      {Projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
    </>
  )
}
