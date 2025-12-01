import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="space-y-6 text-slate-700">
        <p>
          I began my career as a software developer, building Python systems that processed
          real-time alert data through Kafka- and Camunda-style pipelines. Later, I moved into
          technical project management at a cloud-based SaaS startup, where I coordinated backend,
          frontend, and data teams to deliver complex engineering initiatives.
        </p>
        <p>
          My interest in AI comes from both curiosity and lived experience. During my Master&apos;s
          research at McGill University in Human-Computer Interaction, I designed social
          technologies to support older adults&apos; social engagement. Later, as a founding contributor
          to Viva La Vida&apos;s AI initiative, I helped build an AI-powered creative platform that
          enables children, including those with special needs, to express themselves through
          AI-enhanced drawings. These experiences shaped how I think about human-centered AI
          systems.
        </p>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
            Areas I&apos;m Passionate About
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              'AI engineering and ML systems',
              'Human-AI interaction',
              'Computer vision and multimodal systems',
              'Social impact and under-resourced communities',
              'End-to-end product building (backend, frontend, infra, AI)',
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
