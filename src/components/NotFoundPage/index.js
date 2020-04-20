import React, { useState } from 'react';
import styles from './styles.module.css';
import LinkButton from '../LinkButton';

const NotFoundPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const image = new Image();
  const onLoad = () => setIsLoaded(true);
  image.addEventListener('load', onLoad);
  image.src = '/images/wallpapers/empty.jpg';

  return (
    <div className={isLoaded ? styles.visibleWrapper : styles.pageWrapper}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Page Not Found</h1>
        <LinkButton
          anchorText="Return Home"
          href="/"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
