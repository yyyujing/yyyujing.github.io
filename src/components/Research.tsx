import SectionWrapper from './SectionWrapper';

const Research = () => {
  return (
    <SectionWrapper id="research" title="Research">
      <div className="space-y-3 text-slate-700">
        <h3 className="text-sm font-semibold text-slate-900">
          Master’s Thesis – McGill University (Human-Computer Interaction)
        </h3>
        <p>
          During my Master’s at McGill University, I conducted research on designing a social
          networking platform to support older adults’ social engagement. I used qualitative
          methods, prototyping, and iterative design to understand how technology can help reduce
          isolation while respecting users’ autonomy and preferences. This work shaped my long-term
          interest in human-centered AI and designing systems that support, rather than replace,
          human relationships.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Research;
