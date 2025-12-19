import { BsGithub } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ProjectCard({ project, highlight = false }) {
  const repositoryLink = {
    label: highlight ? "Repository" : "",
    icon: <BsGithub />,
    url: project.repository,
  };

  return (
    <>
      <div className="card-wrapper card-settings card-padding 
      gap-[0.8563px] flex flex-col items-start justify-between">
        {/* image */}
        <div className="card-image-box">
          <img src={project.image} alt={project.title} className="card-image" />
        </div>

        <div className="card-heading bg-blur rounded-sm w-full">
          <span className="text-lg leading-tight">{project.title}</span>
        </div>
        
        {/* timeline */}
        <div className="card-link-box">
          <span className="relative inline-flex">
            <span className="text-sm">{project.timeline}</span>
            {project.timeline.includes("now") && (
              <span className="flex absolute h-3 w-3 top-1/2 right-0 -mt-1.5 -mr-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
            )}
          </span>
        </div>

        {/* optional links */}
        <div className="card-optional-links-wrapper flex">
          {(project.repository
            ? [repositoryLink, ...project.otherLinks]
            : project.otherLinks
          ).map((link) => (
            <a
              key={link.url}
              className="flex text-xl gap-2 transition-all ease-out hover:text-[rgba(233,154,102,0.957)]"
              href={link.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              {link.label && (
                <span className="uppercase hidden lg:block text-sm transition-all ease-out tracking-wider">
                  {link.label}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Description */}
        <div className="card-description-box overflow-auto">
          <p className="leading-relaxed text-sm">{project.Description}</p>
        </div>

        {/* tags */}
        <div className="tags-link-btn-wrapper">
          {project.tags.map((tag) => (
            <a
              key={tag.name}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tags-link-btn"
            >
              {tag.icon}
              <span className="text-xs tracking-wide">{tag.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}