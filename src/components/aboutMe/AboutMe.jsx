/* eslint-disable max-len */
import React from 'react';
import styles from './AboutMe.css';

function AboutMe() {
  return (
    <div className={styles.AboutMe}>
      <h1>About Me</h1>
      <hr />
      <p>
        Full Stack Engineer working in React, Angular, Typescript, C#,
        NodeJS/Express, PostgreSQL. A dependable engineer with a passion for
        implementing elegant displays of data in user interactive formats.
        Working for health care industry companies in a consulting nature at
        Slalom Consulting to deploy features to current and future apps since
        2021.
      </p>
      <p>
        Formerly a mechanical engineer and team leader in projects at HP,
        Microsoft, and Element Six that designed, planned, and directed
        engineers and technicians to install and refine factory automation
        equipment across printing, touchscreen, and lab-grown diamond
        industries. As a mechanical engineer, I worked on large capital
        automation equipment writing scripts, analyzing data, and finding bugs
        in PLC code, HP flexscript and (CNC) G-code, further description of
        achievements in previous roles can be read in my work history.
      </p>
      <p>
        Hobbiest fixer of pinball machines, aircooled Volkswagens, and bicycles.
      </p>
    </div>
  );
}

export default AboutMe;
