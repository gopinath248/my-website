import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export function ProjectsSection({ openProject, onToggleProject }) {
  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Expandable case studies"
        description="Each card starts with a tight summary and expands smoothly when you need the full context. Only one project stays open at a time to keep the grid calm and readable."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openProject === project.id}
            onToggle={() => onToggleProject(openProject === project.id ? null : project.id)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
