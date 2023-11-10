import { Col, Image, Rate, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import imageProduct from '../../assets/images/nhanda.png'
import { WrapperAddressProduct, WrapperInputNumber, WrapperQualityProduct, WrapperStyleCol, WrapperStyleNameproduct, WrapperStylePriceproduct, WrapperStyleTextProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query';
import Loading from '../LoadingComponent/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addOrderProduct, resetOrder } from '../../redux/slide/orderSlide';
import { convertPrice, initFacebookSDK } from '../../ultils';
import * as message from '../Message/Message'

const ProductDetailComponents = ({idProduct}) => {
  const [numProduct, setNumProduct] = useState() 
  const user = useSelector((state) => state.user)
  const order = useSelector((state) => state.order)
  const [errorLimitOrder,setErrorLimitOrder] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()


  const onChange = (value) => { 
    setNumProduct(Number(value))
}
  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1]
    if(id) {
      const res = await ProductService.getDetailsProduct(id)
      return res.data
    }
  }
  
  useEffect(() => {
    initFacebookSDK()
}, [])

useEffect(() => {
    const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id) 
    if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
        setErrorLimitOrder(false)
    } else if(productDetails?.countInStock === 0){
        setErrorLimitOrder(true)
    }
},[numProduct])

useEffect(() => {
    if(order.isSucessOrder) {
        message.success('Đã thêm vào giỏ hàng')
    }
    return () => {
        dispatch(resetOrder())
    }
}, [order.isSucessOrder])

  const handleChangeCount = (type, limited) => {
    if(type === 'increase') {
        if(!limited) {
            setNumProduct(numProduct + 1)
        }
    }else {
        if(!limited) {
            setNumProduct(numProduct - 1)
        }
    }
}

  const {isLoading, data: productDetails, isPreviousData} = useQuery(['product-details', idProduct], fetchGetDetailsProduct, {  enabled : !!idProduct })

  const handleAddOrderProduct = () => {
    if(!user?.id) {
        navigate('/sign-in', {state: location?.pathname})
    }else {
        // {
        //     name: { type: String, required: true },
        //     amount: { type: Number, required: true },
        //     image: { type: String, required: true },
        //     price: { type: Number, required: true },
        //     product: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'Product',
        //         required: true,
        //     },
        // },
        const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id)
        if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
            dispatch(addOrderProduct({
                orderItem: {
                    name: productDetails?.name,
                    amount: numProduct,
                    image: productDetails?.image,
                    price: productDetails?.price,
                    product: productDetails?._id,
                    discount: productDetails?.discount,
                    countInstock: productDetails?.countInStock
                }
            }))
        } else {
            setErrorLimitOrder(true)
        }
    }
}


  return (
    <Loading isLoading={isLoading}>
        <Row style={{ padding: '16px', border: '1px solid #e5e5e5', borderRadius: '4px'}}>
          <Col span={10}>
            <Image src={productDetails?.image} alt="nhanda" preview="false"/>
          </Col>

          <WrapperStyleCol span={14}>
            <WrapperStyleNameproduct>{productDetails?.name}</WrapperStyleNameproduct>
            <div>
              <Rate allowHalf defaultValue={productDetails?.rating} value={productDetails?.rating} />
              <WrapperStyleTextSell> | 1000+ Đã bán</WrapperStyleTextSell>
            </div>
            <WrapperStylePriceproduct>
              <WrapperStyleTextProduct>{convertPrice(productDetails?.price)}</WrapperStyleTextProduct>
            </WrapperStylePriceproduct>



            <div style={{ margin:'10px 0 20px'}}>
              <div>Số lượng</div>

              <WrapperQualityProduct>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease',numProduct === 1)}>
                  <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                </button>
                  <WrapperInputNumber onChange={onChange} defaultValue={1} max={productDetails?.countInStock} min={1} value={numProduct} size="small" />
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase',  numProduct === productDetails?.countInStock)}>
                  <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                </button>
              </WrapperQualityProduct>
            </div>

            <WrapperAddressProduct>
              <span>Giao đến </span>
              <span className='address'>{user?.address}</span> -
              <span className='change-address'>Đổi địa chỉ</span>
            </WrapperAddressProduct>

            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '50px'}}>
              <button
                style={{ 
                  wight: '40px',
                  background: 'rgba(254, 242, 244, 1)', 
                  height: '48px', 
                  width: '220px',
                  border: '1px solid rgb(255, 57, 69)',
                  borderRadius: '4px',
                  color: 'rgb(255, 57, 69)', 
                  fontSize: '15px',
                  cursor: 'pointer'

                }}
                onClick={handleAddOrderProduct}
              > 
                Thêm vào giỏ hàng
              </button>

              <button
                style={{ 
                  wight: '40px',
                  background: 'rgb(255, 57, 69)', 
                  height: '48px', 
                  width: '180px',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#fff', 
                  fontSize: '15px',
                  cursor: 'pointer'

                }}
                onClick={handleAddOrderProduct}
              > 
                Mua ngay
              </button>

            </div>

          </WrapperStyleCol>
        </Row>
        </Loading>
  )
}

export default ProductDetailComponents