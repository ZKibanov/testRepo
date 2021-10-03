import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  quantity:number;
  setSearchQuery:React.Dispatch<React.SetStateAction<string>>;
}
const Input:FC<Props> = ({ quantity, setSearchQuery }:Props) => (
  <div className={styles['input_search--wrapper']} data-custom={`${quantity} tests`}>
    <input
      className={styles.input_search}
      type="text"
      placeholder="What test are you looking for?"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  </div>
);

export default Input;
