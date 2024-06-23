import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import FindMeSection from './components/FindMeSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/ProjectSection';

const App = () => {

  // for smooth transision 
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="bg-black min-h-screen">
        {/* Header Section */}
        <Header/>

        {/* Welcome Section */}
        <WelcomeSection/>

        {/* Find Me Section */}
        <FindMeSection/>

        {/* Education Section */}
        <EducationSection/>

        {/* Skills Section */}
        <SkillsSection/>

        {/* Project Section */}
        <ProjectSection/>

        {/* Contact Section */}
        <ContactSection/>
      </div>
    </ThemeProvider>
  );
};

export default App;
