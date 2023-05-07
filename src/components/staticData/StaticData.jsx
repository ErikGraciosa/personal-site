import React from 'react';
import styles from './StaticData.css';
import resume from '../../documents/ErikGraciosaResume.pdf';
import GithubLogo from '../../images/iconmonstr-github-1.svg';
import LinkedInLogo from '../../images/iconmonstr-linkedin-3.svg';
import TwitterLogo from '../../images/iconmonstr-twitter-3.svg';

const StaticData = () => { 
  return (
    <div id="headerData" className={styles.StaticData}>
      <p className={styles.whoami}>Erik Graciosa</p>
      <p className={styles.title}>Full Stack Software Engineer</p>
      <div className={styles.socialsBox}>
        <a 
          href="https://github.com/ErikGraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
            className={`${styles.socialSVGS} ${styles.hover}`}
            src={GithubLogo}
            alt="Github Link" />
        </a>
        <a 
          href="https://www.linkedin.com/in/erikgraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
            className={`${styles.socialSVGS} ${styles.hover}`}
            src={LinkedInLogo}
            alt="LinkedIn Link" />
        </a>
        <a 
          href="https://twitter.com/ErikGraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
            className={`${styles.socialSVGS} ${styles.hover}`}
            src={TwitterLogo}
            alt="Twitter Link" />
        </a>
      </div>
      <a 
        href={resume} 
        target="_blank"
        rel="noreferrer noopener">View my Resume for contact information.</a>
    </div>
  );
  
};

export default StaticData;
