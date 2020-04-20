import React from 'react';
import styles from './styles.module.css';
import PageHeader from '../PageHeader';
import Footer from '../Footer';
import LinkButton from '../LinkButton';

const FetchErrorPage = () => (
  <>
    <div className={styles.pageWrapper}>
      <PageHeader
        subtitle="MY PORTFOLIO"
      />

      <div className={styles.textContentContainer}>
        <p className={styles.text}>
          An error occurred while fetching the data on this site.
        </p>

        <LinkButton
          anchorText="Try Again"
          href="/"
          isAnchor
        />
      </div>
    </div>

    <Footer />
  </>
);

export default FetchErrorPage;
