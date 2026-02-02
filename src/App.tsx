import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { Partners } from './pages/Partners';
import { Documents } from './pages/Documents';
import { LegalMentions } from './pages/LegalMentions';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/projets/:id" element={<ProjectDetail />} />
              <Route path="/evenements" element={<Events />} />
              <Route path="/evenements/:id" element={<EventDetail />} />
              <Route path="/partenaires" element={<Partners />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/mentions-legales" element={<LegalMentions />} />
              <Route path="/contact" element={<div className="pt-32 text-center text-2xl font-bold">Page Contact (En construction)</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
