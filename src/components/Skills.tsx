import SectionWrapper from './SectionWrapper';

interface SkillGroup {
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'MongoDB'],
  },
  {
    title: 'AI / ML',
    skills: [
      'Large Language Models',
      'Prompt engineering',
      'Stable Diffusion',
      'Basic computer vision',
      'RAG concepts',
      'Knowledge graphs',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['Docker', 'Basic Kubernetes', 'IBM Cloud', 'AWS', 'CI/CD concepts', 'GPU-based deployment'],
  },
  {
    title: 'Human-Centered & Collaboration',
    skills: [
      'HCI research methods',
      'UX collaboration',
      'Technical documentation',
      'Cross-functional leadership',
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200"
          >
            <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
