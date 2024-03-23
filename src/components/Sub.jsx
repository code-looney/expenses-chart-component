import React from 'react';

const Sub = (props) => {
    const { className, children } = props;

  return (
    <p className={className}>{children}</p>
  )
}

export default Sub