import { Menu } from 'antd'
import React, { useState } from 'react'
import { getItem } from '../../ultils';
import { AppstoreOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import HeaderCompoent from '../../components/HeaderCompoent/HeaderCompoent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';
import OrderAdmin from '../../components/OrderAdmin/OrderAdmin';

const AdminPage = () => {
  const items = [
    getItem('Người dùng', 'user', <UserOutlined />),
    getItem('Sản phẩm ', 'product', <AppstoreOutlined />),
    getItem('Đơn hàng', 'orders', <ShoppingCartOutlined />),
  ];

  const [keySelected, setKeySelected] = useState('')

  const renderPage = (key) => {
    switch (key) {
      case 'user':
        return (
          <AdminUser />
        )
      case 'product':
        return (
          <AdminProduct />
        )
      case 'orders':
        return (
          <OrderAdmin />
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
      <HeaderCompoent/>
      <div style={{display: 'flex', overflowX: 'hidden'}}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: '1px 1px 2px #ccc',
            height: '87vh'
          }}
          items={items}
          onClick={handleOnclick}
        />
        <div style={{flex: '1', padding: '15px 0 15px 15px'}}>
          {renderPage(keySelected)}
        </div>

      </div>
    </>
  )
}

export default AdminPage