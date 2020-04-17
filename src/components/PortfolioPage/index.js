import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import PortfolioAlbum from '../PortfolioAlbum';
import FetchErrorPage from '../FetchErrorPage';

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((response) => response.json())
      .then((json) => setPortfolio(json))
      .catch(() => setIsError(true))
      .finally(() => setIsLoaded(true));
  }, []);

  return isError
    ? <FetchErrorPage />
    : (
      <div
        className={isLoaded ? styles.visibleWrapper : styles.wrapper}
      >
        <header className={styles.pageHeader}>
          <h4 className={styles.logoText}>ÓLAFUR ANDRI</h4>
          <h5 className={styles.subtitle}>
            MY PORTFOLI
            <span className={styles.lastLetter}>O</span>
          </h5>
        </header>

        {portfolio.map((album) => (
          <PortfolioAlbum
            key={album.name}
            name={album.name}
            slug={album.slug}
            tracksColor={album.tracksColor}
            tracks={album.tracks}
            backColor={album.backColor}
          />
        ))}
      </div>
    );
};

export default PortfolioPage;
