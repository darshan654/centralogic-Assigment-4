import React, { useEffect } from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import FindMeSection from './components/FindMeSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/ProjectSection';


const App = () => {
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

      {/*ProjectSection*/}
      <ProjectSection/>

      {/* Contact Section */}
      <ContactSection/>


    </div>
  );
};

export default App;
