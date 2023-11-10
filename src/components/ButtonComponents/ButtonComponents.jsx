import React from 'react'
import{ Button } from 'antd'

const ButtonComponents = ({ size, styleButton, styleTextButton, TextButton, ...rests}) => {
  return (
    <Button
        size={size}
        style={styleButton}
        {...rests}
    >        
        <span style={styleTextButton}>{TextButton}</span>
    </Button>
  )
}

export default ButtonComponents