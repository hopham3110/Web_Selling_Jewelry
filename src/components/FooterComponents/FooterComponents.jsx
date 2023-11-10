import React from 'react'
import logo from '../../assets/images/logoD.png'
import { WrapperStyleBar, WrapperStyleText1, WrapperStyleText2, WrapperStyleText3 } from './style'


const FooterComponents = () => {
  return (
    <div style={{ background: 'rgba(50, 30, 30, 1)', color: '#fff', padding: '70px 0 20px'}}>
      <div style={{display: 'flex' ,justifyContent: 'center'}} >
        <img src={logo} alt={logo}/>
      </div>

      <div style={{ display: 'flex', justifyItems:'center', justifyContent: 'center'}}>     
        <div>
          <WrapperStyleText2>
            <span>JEWELRY STORE IN SAIGON</span>
          </WrapperStyleText2>

          <div style={{ margin: '20px', paddingLeft: '25%'}}>
              <WrapperStyleBar></WrapperStyleBar>
          </div>

          <WrapperStyleText1>
           <span >DESIGN & MADE TO ORDER</span>
          </WrapperStyleText1>

          <WrapperStyleText2>
            <span >Since 2012</span>
          </WrapperStyleText2>

          <WrapperStyleText1>
            <span >TP Hồ Chí Minh</span>
          </WrapperStyleText1>

          <WrapperStyleText2>
            <span>450 Hai Bà Trưng, Quận 1</span>
          </WrapperStyleText2>

          <WrapperStyleText1>
            <span >Đà Nẵng</span>
          </WrapperStyleText1>

          <WrapperStyleText2>
            <span>230 Lê Duẩn, Thanh Khê, Đà Nẵng</span>
          </WrapperStyleText2>

          <WrapperStyleText1>
           <span >Hà Nội</span>
          </WrapperStyleText1>

          <WrapperStyleText2>
            <span>52 Tràng Thi, P.Hàng Bông, Q.Hoàn Kiếm</span>
          </WrapperStyleText2>

          <WrapperStyleText3>
            <span>© Bản quyền thuộc về KaT Jewelry | Cung cấp bởi KaT Jewelry</span>
          </WrapperStyleText3>

        </div>
      </div>

    </div>

  )
}

export default FooterComponents