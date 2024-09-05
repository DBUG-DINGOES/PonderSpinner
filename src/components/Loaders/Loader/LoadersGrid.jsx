import React from 'react';
import Loader from './Loader';
import styles from './LoadersGrid.module.scss';

const SpinnersGrid = ({ spinners }) => {
  return (
    <div className={styles.grid}>
      {spinners.map((spinner, index) => (
        <Loader
          key={index}
          imageSrc={spinner.imageSrc}
          altText={spinner.altText}
          text={spinner.text}
          cloudImageSrc={spinner.cloudImageSrc}
        />
      ))}
    </div>
  );
};

export default SpinnersGrid;