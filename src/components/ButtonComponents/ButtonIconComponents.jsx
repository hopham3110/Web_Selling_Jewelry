import React from 'react'
import ButtonComponents from './ButtonComponents'
import { PlusOutlined } from '@ant-design/icons';

const ButtonIconComponents = (props) => {
    const {
        size , textButton,
        bordered,
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props
  return (
    <div>
        <ButtonComponents
            bordered={bordered}
            size={size}
            styleButton={{ background: backgroundColorButton, border: !bordered && 'none'}}
            icon={ <PlusOutlined color={colorButton} style={{ color: '#fff'}}/>}
            textButton={textButton}
            styleTextButton={{ color: colorButton}}

        />
    </div>
  )
}

export default ButtonIconComponents