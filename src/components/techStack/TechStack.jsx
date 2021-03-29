import React from 'react';
import { stack } from '../../fixtures/stack';
import styles from './TechStack.css';

function TechStack() {
  const { languages, frameworks, databases, testing, other } = stack;
  
  const addPipes = (arr) => {
    const str = arr.map((el, i) => {
      if(i === arr.length - 1) {
        return ` ${el} `;
      } else {
        return ` ${el} |`; 
      }}
    );    
    return str;
  };

  const pipedLanguages = addPipes(languages);
  const pipedFrameworks = addPipes(frameworks);
  const pipedDatabases = addPipes(databases);
  const pipedTesting = addPipes(testing);
  const pipedOther = addPipes(other);
  
  return (
    <div className={styles.TechStack}>
      <h1>Tech Stack</h1>
      <hr/>
      <p><span className={styles.bigger}>Languages: </span>
        {pipedLanguages}</p>
      <p><span className={styles.bigger}>Frameworks: </span>
        {pipedFrameworks}</p>
      <p><span className={styles.bigger}>Databases: </span>
        {pipedDatabases}</p>
      <p><span className={styles.bigger}>Testing: </span>
        {pipedTesting}</p>
      <p><span className={styles.bigger}>Other: </span>
        {pipedOther}</p>
    </div>
  );
}

export default TechStack;
