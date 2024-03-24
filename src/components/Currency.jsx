import React from 'react'

const Currency = (props) => {
    const {className, children} = props;

  return (
    <h3 className={className}>{children}</h3>
  )
}

export default Currency