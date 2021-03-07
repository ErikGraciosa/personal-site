import React from 'react';
import styles from './StaticData.css';

function StaticData() {
  return (
    <div>
      <p className={styles.whoami}>Erik Graciosa</p>
      <p className={styles.title}>Full Stack Software Engineer</p>
      <a 
        href="https://github.com/ErikGraciosa" 
        target="_blank"
        rel="noreferrer noopener">Visit my Github</a>
      <a 
        href="https://www.linkedin.com/in/erikgraciosa" 
        target="_blank"
        rel="noreferrer noopener">Visit my LinkedIn</a>
    </div>
  );
}

export default StaticData;
