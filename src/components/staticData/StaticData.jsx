import React from 'react';
import styles from './StaticData.css';
<<<<<<< HEAD
import resume from '../../documents/ErikGraciosaResume.pdf';
import GithubLogo from '../../images/iconmonstr-github-1.svg';
import LinkedInLogo from '../../images/iconmonstr-linkedin-3.svg';
import TwitterLogo from '../../images/iconmonstr-twitter-3.svg';
=======
import resume from '../documents/ErikGraciosaResume.pdf';
import GithubLogo from '../../images/iconmonstr-github-1.svg';
import LinkedInLogo from '../../images/iconmonstr-linkedin-3.svg';
import TwitterLogo from '../../images/iconmonstr-twitter-3.svg';
import { render } from 'react-dom';
>>>>>>> 4c728e511f4678b171ebd83dbfab1084b435f2cc

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
<<<<<<< HEAD
            className={`${styles.socialSVGS} ${styles.hover}`}
            src={GithubLogo}
            alt="Github Link" />
=======
            className={styles.socialSVGS}
            src={GithubLogo} />
>>>>>>> 4c728e511f4678b171ebd83dbfab1084b435f2cc
        </a>
        <a 
          href="https://www.linkedin.com/in/erikgraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
<<<<<<< HEAD
            className={`${styles.socialSVGS} ${styles.hover}`}
            src={LinkedInLogo}
            alt="LinkedIn Link" />
=======
            className={styles.socialSVGS}
            src={LinkedInLogo} />
>>>>>>> 4c728e511f4678b171ebd83dbfab1084b435f2cc
        </a>
        <a 
          href="https://twitter.com/ErikGraciosa" 
          target="_blank"
          rel="noreferrer noopener">
          <img 
<<<<<<< HEAD
            className={`${styles.socialSVGS} ${styles.hover}`}
            src={TwitterLogo}
            alt="Twitter Link" />
=======
            className={styles.socialSVGS}
            src={TwitterLogo} />
>>>>>>> 4c728e511f4678b171ebd83dbfab1084b435f2cc
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
