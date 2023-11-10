import React from 'react'
import { Lable, WrapperContainer, WrapperTextValue, WrapperItemOrder, WrapperItemOrderInfo } from './style';
import { convertPrice } from '../../ultils';

import Loading from '../../components/LoadingComponent/Loading';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { orderContant } from '../../contant';
import { WrapperInfo } from '../OrderPage/style';


const PaymentPage = () => {
  const order = useSelector((state) => state.order)
  const location = useLocation()
  const {state} =location

  return (
    <div style={{background: '#f5f5fa', with: '100%', height: '100vh'}}>
      <Loading isLoading={false}>
        <div style={{height: '100%', width: '1270px', margin: '0 auto'}}>
          <h3 style={{fontWeight: 'bold'}}>Đơn hàng đặt thành công</h3>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <WrapperContainer>
            <WrapperInfo>
                  <div>
                    <Lable>Phương thức giao hàng</Lable>
                      <WrapperTextValue>
                        <span style={{color: '#ea8500', fontWeight: 'bold'}}>{orderContant.delivery[state?.delivery]}</span>  Giao hàng tiết kiệm
                      </WrapperTextValue>
                  </div>
                </WrapperInfo>
                <WrapperInfo>
                  <div>
                    <Lable>Phương thức thanh toán</Lable>
                    <WrapperTextValue>
                      {orderContant.payment[state?.payment]}
                    </WrapperTextValue>
                  </div>
                </WrapperInfo>
                <WrapperItemOrderInfo>
                  {state?.orders.map((order) =>{
                    return (
                      <WrapperItemOrder key={order?.product}>
                      <div style={{width: '390px', display: 'flex', alignItems: 'center', gap: 4}}> 
                        <img src={order.image} style={{width: '77px', height: '79px', objectFit: 'cover'}}/>
                        <div style={{
                          width: 260,
                          overflow: 'hidden',
                          textOverflow:'ellipsis',
                          whiteSpace:'nowrap',
                          fontSize: '16px'
                        }}>{order?.name}</div>
                      </div>
                      <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between'}}>
                        <span>
                          <span style={{ fontSize: '16px', color: '#242424' }}>Giá tiền: {convertPrice(order?.price)}</span>
                        </span>

                        <span>
                          <span style={{ fontSize: '16px', color: '#242424' }}>Số lượng: {order?.amount}</span>
                        </span>


                      </div>
                      </WrapperItemOrder>
                    )
                  })}

                </WrapperItemOrderInfo>
                <div style={{textAlign: 'end', marginTop: '10px'}}>
                  <span style={{ fontSize: '19px', color: 'red' }}>Tổng tiền: {convertPrice(state?.totalPriceMemo)}</span>
                </div>
            </WrapperContainer>
          </div>
        </div>
      </Loading>
    </div>
  )
}

export default PaymentPage