import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  background-color: #ffffff;
  color: #1a1a1a;
  min-height: 100vh;
`;

const MainContent = styled(motion.main)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
