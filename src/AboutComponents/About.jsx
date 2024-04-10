import React from 'react';
import './About.css';
import { Infomation } from './Infomation';
import { Access } from './Access';

export const About = () => {
  return (
    <div className="aboutPage">
      <Infomation />
      <Access />
    </div>
  )
}
