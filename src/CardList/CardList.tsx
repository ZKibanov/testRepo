import React, { FC, useState, useEffect } from 'react';
import { Status, Summary } from '../types';
import ErrorBoundery from '../ErrorBoundary';
import styles from './styles.module.scss';

interface Props {
  cardItems: Summary[];
}

const CardList:FC<Props> = ({ cardItems }:Props) => {
  const [sortField, setSortField] = useState('id');
  useEffect(() => {
    console.log(sortField);
  }, [sortField]);

  const getTextColor = (itemStatus:string) => {
    switch (itemStatus) {
      case Status.DRAFT:
        return '#5C5C5C';
      case Status.ONLINE:
        return '#1BDA9D';
      case Status.PAUSED:
        return '#FF8346';
      default:
        return '#5C5C5C';
    }
  };

  const TableHeader = () => (
    <div className={styles.card_headers}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setSortField('name')}
        onKeyUp={() => setSortField('name')}
      >
        name
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setSortField('type')}
        onKeyUp={() => setSortField('type')}
      >
        type
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setSortField('status')}
        onKeyUp={() => setSortField('status')}
      >
        status
      </div>
      <div>site</div>
      <div />
    </div>
  );

  const cardArray = cardItems.map((item) => {
    const isDraft = item.status === Status.DRAFT;
    return (
      <ErrorBoundery key={item.id}>
        {/* TODO обернуть в ссылку */}
        <li className={styles.card}>
          <div className={styles.card_info}>{item.name}</div>
          <div className={styles.card_info}>{item.type}</div>
          <div
            className={styles.card_info}
            style={{ color: getTextColor(item.status) }}
          >
            {item.status.toLowerCase()}
          </div>
          <div className={styles.card_info}>{item.url}</div>
          <div className={styles.card_btn} style={{ background: isDraft ? '#7D7D7D' : '#2EE5AC' }}>{isDraft ? 'Finalize' : 'Results'}</div>
        </li>
      </ErrorBoundery>
    );
  });
  return (
    <>
      <TableHeader />
      <ul className={styles.list}>{cardArray}</ul>
    </>
  );
};

export default CardList;
