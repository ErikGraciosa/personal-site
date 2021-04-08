/* eslint-disable max-len */
import React from 'react';
import styles from './AboutMe.css';

function AboutMe() {
  return (
    <div className={styles.AboutMe}>
      <h1>About Me</h1>
      <hr/>
      <p>Full Stack Javascript Engineer that works in React, NodeJS/Express, PostgreSQL and currently looking for new software engineer roles. A dependable engineer with a passion for implementing elegant displays of data in user interactive formats. Project work that includes implementing StripeAPI credit card payments, Google React Map elements displaying transportation options, and a webscraper pointed to real estate websites to detect filtered newest listings and send SMS notification.</p>
      <br/>
      <p>Formerly a team leader in projects at HP, Microsoft, and Element Six that designed, planned, and directed engineers and technicians to install and refine factory automation equipment across printing, touchscreen, and lab-grown diamond industries. As a mechanical engineer, I worked on large capital automation equipment writing scripts, analyzing data, and finding bugs in PLC code, HP flexscript and (CNC) G-code, further description of achievements in previous roles can be read in my work history.</p>
      <br/>
      <p>View my github for code samples during training in full stack javascript. <a href="https://github.com/ErikGraciosa">https://github.com/ErikGraciosa</a></p>
      <br/>
      <p>Hobbiest fixer of pinball machines, aircooled Volkswagens, dirtbikes and bicycles.</p>
    </div>
  );
}

export default AboutMe;
