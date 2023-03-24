import { Link } from 'react-router-dom';
import React from 'react';
import styles from './BreadCrumbs.module.scss';

function BreadCrumbs({ items = [] }) {
  return (
    <div className={styles.root}>
      {items.map((item, ind) => {
        let pathLink = '/' + item.linkName;
        return (
          <React.Fragment key={ind}>
            <Link to={`/quiz${pathLink}`} className={styles.subtitle} key={item.link}>
              {item.name}
            </Link>
            {ind < items.length - 1 && <span key={item.link + '_slash'}>{' / '}</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;
