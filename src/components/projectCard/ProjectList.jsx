import React from 'react';
import { projects } from '../../fixtures/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectList.css';

function ProjectList() {
  const allProjects = projects.map(project => 
    <ProjectCard 
      key={project.title}
      project={project}/>
  );
  return (
    <div className={styles.ProjectList}>
      <div className={styles.display}>
        <h1>Projects</h1>
        {allProjects}
      </div>
    </div>
  );
}

export default ProjectList;
