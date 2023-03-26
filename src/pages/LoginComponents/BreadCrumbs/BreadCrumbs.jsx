import { Link } from 'react-router-dom';
import React from 'react';
import styles from './BreadCrumbs.module.scss';
import imageHomePage from '../../../images/home.svg';

function BreadCrumbs({ items = [] }) {
  return (
    <nav className={styles.root}>
      <Link to="/quiz/list" className={styles.subtitle}>
        <img src={imageHomePage} alt="home" />
      </Link>
      {items.map((item, ind) => {
        return (
          <React.Fragment key={ind}>
            <span key={item.link + '_slash'}>{' / '}</span>
            {ind < items.length - 1 ? (
              <Link to={`/quiz${item.linkName}`} className={styles.subtitle} key={item.link}>
                {item.title}
              </Link>
            ) : (
              <span className={styles.subtitle} key={item.link}>
                {item.title}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default BreadCrumbs;
