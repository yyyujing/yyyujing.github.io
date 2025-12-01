import SectionWrapper from './SectionWrapper';
import { Link } from 'react-router-dom';

interface WorkItem {
  title: string;
  tags?: string[];
  content: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
}

const WORK_ITEMS: WorkItem[] = [
  {
    title: 'VIVA AI Canvas: AI-Enhanced Drawing Platform',
    content:
      "VIVA AI Canvas is an end-to-end, AI-enhanced drawing system that transforms children’s sketches into expressive artworks while extracting meaningful visual cues for emotional insight. The system incorporates image preprocessing, metadata extraction, and session-level interaction tracking designed alongside educators and psychologists. VIVA AI Canvas demonstrates how multimodal generative models can support creativity, emotional expression, and accessibility for young users, especially those with special needsin a safe, human-centered framework.",
    imageSrc: '/ai-canvas-thumb.jpeg',
    imageAlt: 'Screenshot of AI Canvas: AI-Enhanced Drawing Platform',
    link: '/viva-ai-canvas',
  },
  {
    title: 'SimpleFB: Improving the accessibility of social media for older adults',
    content:
      "We developed a prototype social networking platform aimed at strengthening social engagement among older adults. The system leverages human-centered design methods, including contextual interviews, iterative prototyping, and participatory design sessions, to identify barriers to digital participation and co-design interactions that promote autonomy, connectedness, and ease of use.",
    imageSrc: '/simplefb-thumb.jpeg',
    imageAlt: 'Diagram or visual representing McGill HCI thesis work',
    link: 'https://dl.acm.org/doi/10.1145/3615662',
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="space-y-8">
        {WORK_ITEMS.map((item) => (
          <article key={item.title} className="flex gap-6 sm:gap-8">
            <div className="mt-1 h-28 w-40 flex-none overflow-hidden rounded-lg sm:h-32 sm:w-48">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              {item.link ? (
                item.link.startsWith('http') ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 hover:underline cursor-pointer">
                      {item.title}
                    </h3>
                  </a>
                ) : (
                  <Link to={item.link}>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 hover:underline cursor-pointer">
                      {item.title}
                    </h3>
                  </Link>
                )
              ) : (
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.content}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
