import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  {title: 'Web Development', description: ''}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That 
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">

      </div>
    </>
  );
}

export default About;