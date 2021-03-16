/* eslint-disable*/
import React from 'react';
import styles from './ProjectCard.css';

function ProjectCard({project}) {
  const {
    title,
    image,
    livesite,
    githubFE,
    githubBE,
    stack,
    keyLibraries,
    description,
    contributions
  } = project;

  return (
    <div className={styles.ProjectCard}>
      <section>
        <hr/>
        <h1>{title}</h1>
        <p><span className={styles.bigger} >Description: </span>{description}</p>
        <a href={livesite}>{livesite}</a>
        {githubFE
          ? <p><span className={styles.bigger} >Front End Repo: </span><a href={githubFE}> {githubFE}</a></p> 
          : null}
        {githubBE
          ? <p><span className={styles.bigger} >Back End Repo: </span><a href={githubFE}>{githubBE}</a></p>
          : null}
        <p><span className={styles.bigger} >STACK: </span>{stack.map(el => ` ${el} |`)}</p>
        <p><span className={styles.bigger} >Key Libraries: </span>{keyLibraries.map(el => ` ${el} |`)}</p>
        <ul><span className={styles.bigger} >Key Contributions:</span></ul>
        {contributions.map(el => <li key={el}>{el}</li>)}
      </section>
      <img className={styles.projectImage} src={image}/>
    </div>
  );
}

export default ProjectCard;
