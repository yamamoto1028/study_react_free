import React from 'react';
import './Service.css';
import { Dango } from './Dango';
import { Onitaiji } from './Onitaiji';

export const Service = () => {
  return (
    <div className="servicePage">
      <Dango />
      <Onitaiji />
    </div>
  )
}
export default Service;
