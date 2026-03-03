import type { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-[#b8b8b8] bg-white p-2 text-xs">
      <div className="h-20 w-full bg-[#d2e8ff] p-1">
        <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-2 text-sm font-bold">{project.title}</h3>
      <p className="truncate">{project.logline}</p>
      <p className="mt-1 text-[11px]">Role: {project.role}</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {project.tools.map((tool) => (
          <span key={tool} className="border border-[#9f9f9f] bg-[#e4e4e4] px-1 py-0.5 text-[10px]">
            {tool}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#0000ee] underline">
        Open link
      </a>
    </article>
  );
}
