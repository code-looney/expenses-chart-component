import React from 'react'

const TotalSub = (props) => {
    const {className, children} = props;

  return (
    <p className={className}>{children}</p>
  )
}

export default TotalSub