// Flex.js 
import React from 'react';

// Stateless component  

const Flex = (props) => {
  const { col, align, justify, style: otherStyle, ...otherProps } = props // Destructure 
  const style = {
    display: "flex",
    flexDirection: col ? "column" : "row", 
    alignItems: (align || "flex-start") ,
    justifyContent: (justify || "flex-start"),
    ...otherStyle
  } 
  return (
    <div style={style} {...otherProps} />
  )
}

export default Flex;