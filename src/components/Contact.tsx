import SectionWrapper from './SectionWrapper';

const Contact = () => {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="text-sm text-slate-700">
        <nav className="flex flex-wrap items-center gap-1">
          <a
            href="mailto:jingyyyu@outlook.com"
            className="text-primary-700 hover:text-primary-800"
          >
            Email
          </a>
          <span className="text-slate-400">/</span>
          <a
            href="https://x.com/j_yy09"
            className="text-primary-700 hover:text-primary-800"
          >
            Twitter
          </a>
          <span className="text-slate-400">/</span>
          <a
            href="https://www.linkedin.com/in/jingyu25/"
            className="text-primary-700 hover:text-primary-800"
          >
            LinkedIn
          </a>
          <span className="text-slate-400">/</span>
          <a
            href="https://github.com/yyyujing"
            className="text-primary-700 hover:text-primary-800"
          >
            GitHub
          </a>
        </nav>
      </div>
    </SectionWrapper>
  );
};

export default Contact;