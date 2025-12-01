import SectionWrapper from './SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col items-start gap-8 pt-4 pb-6 md:pt-10 md:pb-12">
        <div className="w-full">
          <div className="flex items-start gap-6 sm:gap-8">
            <div className="shrink-0">
              <img
                src="/headshot.jpeg"
                alt="Portrait of Jing Yu"
                className="h-24 w-24 rounded-full object-cover border border-slate-200 shadow-sm sm:h-28 sm:w-28"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Jing Yu
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                Hello! I am Jing, an engineer and technical project manager with a strong foundation in software
                development and a deep interest in AI systems. My work bridges engineering execution,
                user-centered design, and real-world social impact.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                I started my career as a software engineer before moving into technical project management, 
                where I led teams and initiatives across a cloud-based SaaS environment.
                I also hold a Master’s degree in Information Studies from McGill University, advised by{' '}
                <a 
                  href="https://www.mcgill.ca/sis/karyn-moffatt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Prof. Karyn Moffatt
                </a>, with research focused on how thoughtfully designed digital experiences can strengthen social connection among older adults. 
                Most recently, I played a foundational role in{' '}
                <a 
                  href="https://www.vivalavida.today/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  VIVA
                </a>'s AI initiative, helping shape an art-driven creative platform used by workshops, charities, and schools, especially those with special needs, to express themselves more freely. 
                Across these experiences, I’ve consistently gravitated toward work that sits at the intersection of people, design, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
;

export default Hero;
