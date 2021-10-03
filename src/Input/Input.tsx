import React, { FC } from 'react';

interface Props {
  quantity:number;
  setSearchQuery:React.Dispatch<React.SetStateAction<string>>;
}
const Input:FC<Props> = ({ quantity, setSearchQuery }:Props) => (
  <div className="input_search--wrapper" data-custom={`${quantity} tests`}>
    <input
      id="input_search"
      type="text"
      placeholder="What test are you looking for?"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  </div>
);

export default Input;
