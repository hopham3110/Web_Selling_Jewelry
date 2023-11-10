import React, { useEffect, useState } from 'react'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import  slide1  from '../../assets/images/slide1.png'
import  slide2  from '../../assets/images/slide2.png'
import  slide3  from '../../assets/images/slide3.png'
import  slide4  from '../../assets/images/slide4.png'
import  slide5  from '../../assets/images/slide5.png'
import  kat  from '../../assets/images/kat.png'
import  mau1  from '../../assets/images/mau1.png'
import  mau2  from '../../assets/images/mau2.png'
import  mau3  from '../../assets/images/mau3.png'
import  mau4  from '../../assets/images/mau4.png'
import CardComponents from '../../components/CardComponents/CardComponents'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import Loading from '../../components/LoadingComponent/Loading'
import TypeProduct from '../../components/TypeProduct/Typeproduct'
import { Col } from 'antd'

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6)
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

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])

  return (
    <Loading isLoading={isLoading || loading}>
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%'}}>
        <div id='container' style={{ height: 'auto', width:'1270px', margin: '20px auto'}}>
          <SlideComponent arrImages={[slide1, slide2, slide3, slide4, slide5]}/>  
          <div style={{marginTop:'40px'}}>
            <span style={{margin: '0 0 0 540px', fontSize: '20px', fontFamily: 'Poppins-sans-serif'}}>Sản phẩm mới nhất</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
            <img style={{width: '80px'}} src={kat} alt="" />
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
          </div>

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
          <div style={{marginTop:'40px'}}>
            <span style={{margin: '0 0 0 560px', fontSize: '20px', fontFamily: 'Poppins-sans-serif'}}>Về Kat jewelry</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
            <img style={{width: '80px'}} src={kat} alt="" />
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
          </div>

          <div style={{display: 'flex'}}>
            <Col span={8} style={{marginRight: '80px'}}>
              <div><img  src={mau1} alt="" /><span >Kat jewelry luôn cố 
                  gắng xây dựng chuỗi cửa hàng để các bạn nhận được sự trải nghiệm tốt nhất.</span></div>
            </Col>
            <Col span={12}>
              <div style={{alignItems: 'center'}}><img style={{width: '770px'}} src={mau2} alt="" /><span style={{marginLeft: '320px'}}>15.000 ++ khách hàng</span></div>
            </Col>
          </div>

          <div style={{marginTop:'40px'}}>
            <span style={{margin: '0 0 0 550px', fontSize: '20px', fontFamily: 'Poppins-sans-serif'}}>Các mẫu hot nhất</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
              <img style={{width: '80px'}} src={kat} alt="" />
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
          </div>

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
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <WrapperButtonMore TextButton="Xem thêm" type="outline"  styleButton={{
            border: '1px solid rgba(178, 178, 178, 1)', color: 'black',with: '217px', height: '38px'
            }}
              onClick={() => setLimit((prev) => prev + 6)}
            />
          </div>

          <div style={{marginTop:'40px'}}>
            <span style={{margin: '0 0 0 570px', fontSize: '20px', fontFamily: 'Poppins-sans-serif'}}>Làm quà tặng</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
            <img style={{width: '80px'}} src={kat} alt="" />
            <div style={{width: '580px', height:'2px', backgroundColor: 'black'}}></div>
          </div>

          <div style={{display: 'flex'}}>
          <Col span={12} style={{marginRight: '130px'}}>
              <div style={{alignItems: 'center'}}><img style={{width: '740px'}} src={mau4} alt="" /><span style={{marginLeft: '320px'}}>Lễ tình nhân</span></div>
            </Col>
            <Col span={8} >
              <div><img  src={mau3} alt="" /><span >Trang sức vẫn luôn chứng tỏ là quà tặng đẳng cấp bởi sự sang trọng và luôn giữ được giá trị với thời gian.</span></div>
            </Col>

          </div>
        </div>
      </div>
    </Loading>

  )
}

export default HomePage