import SectionWrapper from './SectionWrapper';

interface ExperienceItem {
  organization: string;
  role: string;
  location: string;
  dates?: string;
  logoSrc: string;
  logoAlt: string;
  link?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    organization: 'DataVisor',
    role: 'Technical Project Manager',
    location: 'Vancouver, Canada',
    dates: 'Jan 2024 – Jun 2025',
    logoSrc: '/datavisor-logo.jpeg',
    logoAlt: 'DataVisor logo',
  },
  {
    organization: 'KPMG',
    role: 'Senior Consultant',
    location: 'Vancouver, Canada',
    dates: 'Aug 2021 – Jan 2024',
    logoSrc: '/kpmg-logo.jpeg',
    logoAlt: 'KPMG logo',
  },
  {
    organization: 'Bell Canada',
    role: 'Software Engineer',
    location: 'Montreal, Canada',
    dates: 'Jun 2020 – Aug 2021',
    logoSrc: '/bell-logo.jpeg',
    logoAlt: 'Bell Canada logo',
  },
  {
    organization: 'McGill ACT Lab',
    role: 'Research Assistant',
    location: 'Montreal, Canada',
    dates: 'Oct 2018 – Jun 2020',
    logoSrc: '/actlab-logo.jpeg',
    logoAlt: 'ACT Lab, McGill University logo',
    link: 'https://act-lab.github.io/',
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {EXPERIENCES.map((exp) => (
          <article key={`${exp.organization}-${exp.role}`} className="p-1">
            <div className="flex items-start gap-3">
              <img
                src={exp.logoSrc}
                alt={exp.logoAlt}
                className="mt-1 h-12 w-12 flex-none rounded-md bg-white object-contain"
              />
              <div className="space-y-1 text-sm sm:text-base">
                {exp.link ? (
                  <a 
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 hover:underline cursor-pointer">
                      {exp.organization}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    {exp.organization}
                  </h3>
                )}
                {exp.dates && (
                  <p className="text-xs sm:text-sm text-slate-500">{exp.dates}</p>
                )}
                <p className="text-xs sm:text-sm text-slate-500">{exp.location}</p>
                <p className="text-xs sm:text-sm font-medium text-slate-800">{exp.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
