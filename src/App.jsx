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
    // Select all anchor elements with href starting with '#'
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add event listener to each anchor element
    links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default navigation behavior
            e.preventDefault();
            
            // Find the target element to scroll to based on href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Scroll to the target element with smooth animation
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
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
