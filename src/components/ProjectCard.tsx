import Image from 'next/image';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-cyan-100/20 bg-panel/80 shadow-glow">
      <div className="relative h-40 w-full">
        <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold text-cyan-50">{project.title}</h3>
        <p className="text-sm text-cyan-100/80">{project.logline}</p>
        <p className="text-xs uppercase tracking-wider text-cyan-300">Role: {project.role}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-cyan-100/30 px-2 py-1 text-xs text-cyan-100">
              {tool}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded border border-cyan-100/40 px-3 py-1.5 text-sm font-medium transition hover:bg-cyan-100/10"
        >
          Open project
        </a>
      </div>
    </article>
  );
}
