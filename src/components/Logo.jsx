import React from 'react'

const Logo = (props) => {
  const {src, alt, classNAme} = props;

  return (
    <img className={classNAme} src={src} alt={alt} />
  )
}

export default Logo