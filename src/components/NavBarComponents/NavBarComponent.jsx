import React from 'react'
import { WrapperContent, WrapperLableText } from './style'
import { Checkbox } from 'antd';

const NavBarComponent = () => {
    const onChange = () => {}
    const renderContent = (type, options) => {
        switch (type) {
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: '0'}} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>                   
                )
            default:
                return{}
        }
    }

  return (
    <div>
        <WrapperLableText>Danh mục</WrapperLableText>
        <WrapperContent>
            {renderContent('checkbox', [
                { value: 'Nhẫn', label: 'Nhẫn'},
                { value: 'Vòng tay', label: 'Vòng tay'},
                { value: 'Bông tai', label: 'Bông tai'},
                { value: 'Dây Chuyền', label: 'Dây Chuyền'}
            ])}
        </WrapperContent>

        <WrapperLableText>Mức giá</WrapperLableText>
        <WrapperContent>
            {renderContent('checkbox', [
                { value: 'a', label: 'Dưới 200.000'},
                { value: 'b', label: '200.000-300.000'},
                { value: 'c', label: '300.000-400.000'},
                { value: 'd', label: 'Trên 400.000'}
            ])}
        </WrapperContent>

        <WrapperLableText>Chất liệu</WrapperLableText>
        <WrapperContent>
            {renderContent('checkbox', [
                { value: 'Bạc', label: 'Bạc'},
                { value: 'Titani', label: 'Titani'},
                { value: 'Đá', label: 'Đá'},
            ])}
        </WrapperContent>
    </div>
  )
}

export default NavBarComponent