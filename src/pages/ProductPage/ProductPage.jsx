import React, { useEffect, useState } from 'react'
import {  Col, Pagination, Row } from 'antd';
import NavBarComponent from '../../components/NavBarComponents/NavBarComponent';
import CardComponents from './../../components/CardComponents/CardComponents';
import SlideComponent from '../../components/SlideComponent/SlideComponent';
import  slide1  from '../../assets/images/slide1.png'
import  slide2  from '../../assets/images/slide2.png'
import  slide3  from '../../assets/images/slide3.png'
import  slide4  from '../../assets/images/slide4.png'
import  slide5  from '../../assets/images/slide5.png'
import { WrapperNavbar, WrapperProducts } from './style';
import * as ProductService from '../../services/ProductService'
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import TypeProduct from '../../components/TypeProduct/Typeproduct';

const ProductPage = () => {
  const { state}  = useLocation()
    const [limit, setLimit] = useState()
  const [typeProducts, setTypeProducts] = useState([])
  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const res =await ProductService.getAllProduct(limit)
    return res
  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }


  const {isLoading, data: products, isPreviousData} = useQuery(['products', limit], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })


  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 12,
    total: 1,
})

const fetchProductType = async (type, page, limit) => {
  const res = await ProductService.getProductType(type, page, limit)
  if(res?.status == 'OK') {
      setPanigate({...panigate, total: res?.totalPage})
  }
}

  useEffect(() => {
    if(state){
        fetchProductType(state, panigate.page, panigate.limit)
    }
  }, [state,panigate.page, panigate.limit])


  const onChange = (current, pageSize) => {
      setPanigate({...panigate, page: current -1, limit: pageSize})    
  }


  return (
    <>
    <div className='body' style={{ width: '100%'}}>
      <div id='container' style={{ height: 'auto', width:'1270px', margin: '20px auto'}}>
        <SlideComponent arrImages={[slide1, slide2, slide3, slide4, slide5]}/>  
      </div>
    </div>

    <div style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
      <div style={{ width: '1820px', margin: '0 auto', height: '100%' }}>
        <Row style={{ flexWrap: 'nowrap', paddingTop: '10px',height: 'calc(100% - 20px)', marginBottom: '20px' }}>
            <WrapperNavbar span={3} >
                <NavBarComponent />
            </WrapperNavbar>
            {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
            <Col span={18 } style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <WrapperProducts>
                {products?.data?.map((product) =>{
              return (
                <CardComponents
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  id={product._id}
                />
              )
            })}

                </WrapperProducts>
                {/* <Pagination defaultCurrent={panigate.page + 1} total={panigate?.total} onChange={onChange} style={{ textAlign: 'center', margin: '0px 0' }} />   */}
            </Col>
        </Row>
      </div>
    </div>
</>



    
  )
}

export default ProductPage