import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span>Good Design</span>
        means
        <span>Good Business</span>
      </h2>
    </>
  );
}

export default About;