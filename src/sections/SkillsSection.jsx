import { skillGroups } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Interactive capability cards"
        description="Hover each card to see the interface lift and glow. The set is grouped so the page stays readable on mobile while still feeling rich on desktop."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((skill, index) => (
          <SkillCard key={skill.title} {...skill} index={index} />
        ))}
      </div>
    </section>
  );
}
