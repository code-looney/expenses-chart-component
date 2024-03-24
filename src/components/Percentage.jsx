import React from 'react'

const Percentage = (props) => {
    const {className, children} = props;

  return (
    <h4 className={className}>{children}</h4>
  )
}

export default Percentage