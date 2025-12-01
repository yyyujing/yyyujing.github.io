import SectionWrapper from './SectionWrapper';

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="space-y-4 text-slate-700">
        <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">
            McGill University – Master of Information Studies (Human-Computer Interaction)
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary-400" />
              <span>Research focus on social computing and technologies for older adults.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary-400" />
              <span>
                Developed skills in user research, prototyping, and human-centered system design.
              </span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">Bachelor’s Degree</h3>
          <p className="mt-2 text-sm">
            Bachelor’s degree in a computing-related field (placeholder – customizable based on
            final application materials).
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
