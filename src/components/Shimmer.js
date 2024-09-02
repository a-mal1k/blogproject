import React from 'react';

const Shimmer = ({ width, height }) => {
  return (
    <div
      className="shimer-wrapper"
      style={{ width: '100%', height: '150px' }}
    >
      <div className="shimmer"></div>
    </div>
  );
};

export default Shimmer;
