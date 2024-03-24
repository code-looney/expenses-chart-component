import React from 'react';

const ChartTitle = (props) => {
    const { className, children } = props;
    
  return (
    <h2 className={className}>{children}</h2>
  )
}

export default ChartTitle