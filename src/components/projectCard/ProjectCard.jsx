/* eslint-disable */
import React from 'react';
import styles from './ProjectCard.css';

function ProjectCard({ project }) {
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
        <a className={styles.title} href={livesite}>{title}</a>
        <p><span className={styles.bigger} >Description: </span>{description}</p>
        {githubFE
          ? <p><a href={githubFE}><span className={styles.bigger}>Front End Github Repo </span></a></p> 
          : null}
        {githubBE
          ? <p><a href={githubBE}><span className={styles.bigger}>Back End Github Repo </span></a></p>
          : null}
        <p><span className={styles.bigger}>STACK: </span>{stack.map((el, i) => {
          if(i === stack.length - 1) {
            return ` ${el} `;
          } else {
            return ` ${el} |` 
          }
        })}</p>
        <p><span className={styles.bigger}>Key Libraries: </span>{keyLibraries.map((el, i) => {
          if(i === keyLibraries.length - 1) {
            return ` ${el} `;
          } else {
            return ` ${el} |` 
          }
        })}</p>
        <ul><span className={styles.bigger}>Key Contributions:</span></ul>
        {contributions.map(el => {
          if(el.substring(0, 4) === 'http') {
            return (<li>
              <a key={el} href={el}>Link to New Relic hackathon blog post.</a>
            </li>)
          } else {
            return <li key={el}>{el}</li>
          }
        }
      )}
      </section>
      <a href={livesite}><img className={styles.projectImage} src={image}/></a>
    </div>
  );
}

export default ProjectCard;
