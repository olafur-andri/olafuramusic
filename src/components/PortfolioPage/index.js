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

  let counter = portfolio.length + 1;

  return isError
    ? <FetchErrorPage />
    : (
      <div
        className={isLoaded ? styles.visibleWrapper : styles.wrapper}
      >
        {portfolio.map((album) => {
          counter -= 1;
          return (
            <PortfolioAlbum
              key={album.name}
              name={album.name}
              slug={album.slug}
              tracks={album.tracks}
              number={counter}
            />
          );
        })}
      </div>
    );
};

export default PortfolioPage;
