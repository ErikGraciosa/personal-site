import React from 'react';
import styles from './StaticData.css';
import resume from '../documents/ErikGraciosaResume.pdf';
import GithubLogo from '../../images/iconmonstr-github-1.svg';
import LinkedInLogo from '../../images/iconmonstr-linkedin-3.svg';
import TwitterLogo from '../../images/iconmonstr-twitter-3.svg';
import { render } from 'react-dom';

const StaticData = () => {
  return (
    <div className={styles.StaticData}>
      <p className={styles.whoami}>Erik Graciosa</p>
      <p className={styles.title}>Full Stack Software Engineer</p>
      <div className={styles.socialsBox}>
        <a 
          href="https://github.com/ErikGraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
            className={styles.socialSVGS}
            src={GithubLogo} />
        </a>
        <a 
          href="https://www.linkedin.com/in/erikgraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
            className={styles.socialSVGS}
            src={LinkedInLogo} />
        </a>
        <a 
          href="https://twitter.com/ErikGraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
            className={styles.socialSVGS}
            src={TwitterLogo} />
        </a>
      </div>
      <a 
        href={resume} 
        target="_blank"
        rel="noreferrer noopener">View my Resume</a>
    </div>
  );
  
};

export default StaticData;
