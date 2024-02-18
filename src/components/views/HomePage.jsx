import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import ProjectList from '../projectCard/ProjectList';
import TechStack from '../techStack/TechStack';

function HomePage() {
  return (
    <>
      <TechStack />
      <AboutMe />
    </>
  );
}

export default HomePage;
