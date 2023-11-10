import React from 'react'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import  slide1  from '../../assets/images/slide1.png'
import  slide2  from '../../assets/images/slide2.png'
import  slide3  from '../../assets/images/slide3.png'
import  slide4  from '../../assets/images/slide4.png'
import  slide5  from '../../assets/images/slide5.png'
import { Menu } from 'antd'
import  { useState } from 'react'
import { getItem } from '../../ultils';
import { AliyunOutlined, DingdingOutlined, CodepenOutlined } from '@ant-design/icons';
import Huongdan from '../../components/InfoComponent/Huongdan'
import Baohanh from '../../components/InfoComponent/Baohanh'
import Giaohang from '../../components/InfoComponent/Giaohang'


const Info = () => {
  const items = [
    getItem('Hướng dẫn đo size', 'Huongdan', <AliyunOutlined />),
    getItem('Bảo hành bảo quản', 'Baohanh', <DingdingOutlined />),
    getItem('Gaio hàng & đổi trả', 'Giaohang', <CodepenOutlined />)
  ];

  const [keySelected, setKeySelected] = useState('')

  const renderPage = (key) => {
    switch (key) {
      case 'Huongdan':
        return (
          <Huongdan/>
        )
      case 'Baohanh':
        return (
          <Baohanh/>
        )
      case 'Giaohang':
        return (
          <Giaohang />
        )
      default:
        return <></>
    }
  }

  const handleOnclick = ({ key }) => {
    setKeySelected(key)
  }

  return (
    <>
      <div className='body' style={{ width: '100%'}}>
        <div id='container' style={{ height: 'auto', width:'1270px', margin: '20px auto'}}>
          <SlideComponent arrImages={[slide1, slide2, slide3, slide4, slide5]}/>
        </div>
      </div>
      
      <div style={{display: 'flex', marginTop: '10px'}}>
        <Menu
          mode="inline"
          style={{
            width: 320,
            boxShadow: '0 0px 2px #fff',
            height: '50vh'
          }}
          items={items}
          onClick={handleOnclick}
        />
        <div style={{flex: '1', padding: '10px 0 0 100px',}}>
          {renderPage(keySelected)}
        </div>

      </div>
    </>

      
  )
}

export default Info