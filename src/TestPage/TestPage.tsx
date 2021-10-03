import React, { FC } from 'react';
import { Summary } from '../types';

interface Props {
  singleCardObject:Summary;
}
const TestPage:FC<Props> = ({ singleCardObject }:Props) => {
  console.log('page');
  return (<div>{singleCardObject.name}</div>);
};

export default TestPage;
