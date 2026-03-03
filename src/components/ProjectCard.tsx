import Image from 'next/image';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-[#7a7a7a] bg-white p-2">
      <div className="relative h-24 w-full overflow-hidden border border-black">
        <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
      </div>
      <h3 className="mt-2 text-sm font-bold">{project.title}</h3>
      <p className="text-xs">{project.logline}</p>
      <p className="mt-1 text-[11px]"><strong>Role:</strong> {project.role}</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {project.tools.map((tool) => (
          <span key={tool} className="border border-[#969696] bg-[#e6e6e6] px-1 text-[10px]">
            {tool}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-[#0a3aa9] underline">
        Open project ↗
      </a>
    </article>
  );
}
