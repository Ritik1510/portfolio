export default function ProjectCard({ project }) {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-image-box">
          <img src={project.image} alt={project.title} className="card-image" />
        </div>
        <div className="card-title">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-title-text"
          ></a>
        </div>
        <div className="card-link-box">
          <span className="relative inline-flex">
            <span className="text-base">{project.timeline}</span>
            {project.timeline.includes("now") && (
              <span className="flex absolute h-3 w-3 top-1/2 right-0 -mt-1.5 -mr-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
            )}
          </span>
        </div>
        <div className="flex gap-4 items-center ml-1.5">
            {(project.repository
              ? [repositoryLink, ...project.otherLinks]
              : project.otherLinks
            ).map((link) => (
              <a
                key={link.url}
                className="group flex text-xl gap-2 transition-all ease-out hover:text-white"
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
          <div className="card-description-box">
            <p>{project.Description}</p>
          </div>
          <div className="card-tags-box mt-4 flex flex-wrap gap-2 text-zinc-400 cursor-default">
          {project.tags.map((tag) => (
            <a
              key={tag.name}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1 bg-zinc-900 hover:bg-white hover:text-zinc-900 py-1 px-2 rounded-full transition-all ease-in-out"
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