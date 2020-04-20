import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import PortfolioAlbum from '../PortfolioAlbum';
import FetchErrorPage from '../FetchErrorPage';
import StopMusic from '../StopMusic';
import Footer from '../Footer';
import PageHeader from '../PageHeader';

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((response) => response.json())
      .then((json) => {
        setPortfolio(json);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoaded(true));
  }, []);

  return isError ? <FetchErrorPage /> : (
    <div
      className={isLoaded ? styles.visibleWrapper : styles.wrapper}
    >
      <PageHeader
        subtitle="MY PORTFOLIO"
        className={isError ? '' : styles.coloredHeader}
      />

      <StopMusic />

      {portfolio.map((album) => (
        <PortfolioAlbum
          key={album.name}
          name={album.name}
          slug={album.slug}
          tracksColor={album.tracksColor}
          tracks={album.tracks}
          backColor={album.backColor}
          downloadLink={album.downloadLink}
        />
      ))}

      <Footer />
    </div>
  );
};

export default PortfolioPage;
