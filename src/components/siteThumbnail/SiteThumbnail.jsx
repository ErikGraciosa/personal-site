import React from 'react';
import thumbnail from '../../images/SiteThumbnail.jpg';
import styles from './SiteThumbnail.css';

function SiteThumbnail() {
  return (
    <>
      
      <div className={styles.SiteThumbnail}>
        <img src={thumbnail} />
      </div>
    </>
  );
}

export default SiteThumbnail;
