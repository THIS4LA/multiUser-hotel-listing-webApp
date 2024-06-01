// components/ScrollDownArrow.jsx

import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

const ScrollDownArrow = () => {
  return (
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <FaAngleDoubleDown className="text-4xl text-blueColor" />
    </div>
  );
};

export default ScrollDownArrow;
