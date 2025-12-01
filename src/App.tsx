import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import VivaAICanvas from './components/VivaAICanvas';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="pt-16">
              <Hero />
              <Projects />
              <Experience />
              <Contact />
            </main>
          } />
          <Route path="/viva-ai-canvas" element={
            <main className="pt-16">
              <VivaAICanvas />
            </main>
          } />
        </Routes>
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Jing Yu. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
