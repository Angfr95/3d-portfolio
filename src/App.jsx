import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact, CVSection, Experience, Hero, Navbar, Portfolio, ProjectDetail } from "./components";

const HomePage = ({ wrapperRef }) => (
  <>
    <Navbar />
    <div className='wrapper' ref={wrapperRef}>
      <div id="hero" className='z-10'>
        <Hero scrollContainer={wrapperRef} />
      </div>
      <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
        <Portfolio />
      </div>
      <div id="experience" className='relative z-30 bg-primary'>
        <Experience />
      </div>
      <div id="cv" className='relative z-30 bg-primary'>
        <CVSection />
      </div>
      <div id="contact" className='relative z-30 bg-primary'>
        <Contact />
      </div>
    </div>
  </>
);

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Routes>
          <Route path="/" element={<HomePage wrapperRef={wrapperRef} />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;