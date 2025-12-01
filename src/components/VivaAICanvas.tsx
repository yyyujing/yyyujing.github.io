import SectionWrapper from './SectionWrapper';

const VivaAICanvas = () => {
  return (
    <div className="min-h-screen bg-white">
      <SectionWrapper id="viva-ai-canvas">
        <div className="max-w-4xl mx-auto space-y-12 py-8">
          {/* Back to Projects Link */}
          <div className="pb-4">
            <a
              href="/#projects"
              className="text-blue-600 hover:text-blue-700 hover:underline text-base sm:text-lg"
            >
              ← Back to Projects
            </a>
          </div>

          {/* Page Title */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              VIVA AI Canvas: AI-Enhanced Drawing Platform
            </h1>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              1. From a Global Art Movement to a Technical Challenge
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>
                <a 
                  href="https://www.vivalavida.today/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  VIVA
                </a>{' '}
                began as a global initiative to help people explore life's meaning through art. 
                Originating from a street experiment in Mexico City, the project has since collected 
                tens of thousands of drawings across 60+ countries, revealing universal patterns in 
                how people express identity, memory, and emotion through simple visual sketches.
              </p>
              <p>
                Transforming this worldwide creative dataset into a usable, expressive AI system posed 
                a unique challenge:
              </p>
              <p className="italic font-medium text-slate-800">
                How can generative models amplify human imagination without overriding it?
              </p>
              <p>
                That question led to the creation of VIVA AI Canvas.
              </p>
            </div>
            
            {/* Image Placeholder 1 */}
            <div className="mt-6 w-full">
              <img
                src="/viva-section1.jpeg"
                alt="VIVA global art movement"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              2. Overview of VIVA AI Canvas
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>
                VIVA AI Canvas is a multimodal generative AI platform that enhances user sketches 
                while preserving personal intention, composition, and emotional meaning.
              </p>
              <p>
                Unlike text-to-image pipelines, which often replace user intent with model priors, 
                the AI Canvas is built around sketch-conditioned generation, enabling a collaborative 
                human–AI creation process.
              </p>
              <p>
                The platform is grounded in four design principles drawn from VIVA's global drawing corpus:
              </p>
              <ul className="list-none space-y-2 pl-4">
                <li className="flex gap-3">
                  <span className="font-semibold text-slate-900">Inspiration</span>
                  <span>– capture the user's narrative intent</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-slate-900">Elements</span>
                  <span>– preserve shapes, structural cues, and symbolic motifs</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-slate-900">Composition</span>
                  <span>– maintain original spatial layout</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-slate-900">Color</span>
                  <span>– enhance tone and emotion without altering meaning</span>
                </li>
              </ul>
              <p>
                This creates a system where the AI acts less like a generator and more like an 
                interpretive partner.
              </p>
            </div>
            
            {/* Image Placeholder 2a */}
            <div className="mt-6 w-full">
              <img
                src="/viva-section2a.jpeg"
                alt="VIVA AI Canvas overview - image 1"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Image Placeholder 2b */}
            <div className="mt-6 w-full">
              <img
                src="/viva-section2b.jpeg"
                alt="VIVA AI Canvas overview - image 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              3. Technical Architecture
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>The system integrates:</p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  Sketch-based Conditioning Pipeline
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>User sketches are preprocessed to extract contours, regions, and salient shapes.</li>
                  <li>A conditioning mask is generated to guide downstream image synthesis.</li>
                  <li>The pipeline preserves line structure and layout to anchor the generative process.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  Generative Model Integration
                </h3>
                <p>
                  The platform uses a containerized Stable Diffusion backend (AUTOMATIC1111) with 
                  custom settings optimized for sketch-guided enhancement.
                </p>
                <p>The generation process incorporates:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>control over structure retention</li>
                  <li>targeted enhancement of local regions</li>
                  <li>iterative refinement stages</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  End-to-End Platform
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>A Python/FastAPI service manages inference, preprocessing, and model routing.</li>
                  <li>The system is fully containerized for reproducible deployment across GPU environments.</li>
                  <li>A web interface enables real-time interaction, allowing users to upload drawings, tune creative parameters, and instantly generate enhanced output.</li>
                </ul>
              </div>

              <p>
                This architecture emphasizes alignment between human intent and model behavior, which 
                closely reflects ongoing research directions in human-centered AI and multimodal alignment.
              </p>
            </div>
            
            {/* Image Placeholder 3 */}
            <div className="mt-6 w-full">
              <img
                src="/viva-section3.jpeg"
                alt="VIVA AI Canvas technical architecture"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

        </div>
      </SectionWrapper>
    </div>
  );
};

export default VivaAICanvas;
